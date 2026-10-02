import { MAP_CARD_DEFINITIONS } from "../features/MapCard/mapCardDefinitions";
import type { GameState } from "../shared/types";
import type { GameAction } from "./gameActions";
import { Faction } from "../shared/factions";
import { buildInitialRevolutionCardState } from "../features/RevolutionCard/revolutionCard.types";
import { FINANCE_BOARD_DEFINITIONS } from "../features/FinanceBoard/financeBoardDefinitions";
import { buildInitialFinanceBoardState } from "../features/FinanceBoard/financeBoard.types";
import { COASTAL_SPACE_DEFINITIONS } from "../features/CoastalSpace/coastalSpaceDefinitions";
import { buildInitialCoastalSpaceState } from "../features/CoastalSpace/coastalSpace.types";
import { meepleSupply, agentSupply } from "./gameQueries";
import { BARRIER_CHIT_DEFINITIONS } from "../features/BarrierChit/barrierChitDefinitions";
import { splayCardId } from "../features/Splay/splay.types";
import { buildInitialSplays } from "../features/Splay/splayDefinitions";

export function gameReducer(state: GameState, action: GameAction): GameState {
    switch (action.type) {
        case "FLIP_CARD": {
            const def = MAP_CARD_DEFINITIONS.find(d => d.cardNumber === action.cardNumber)!;
            const current = state.mapCards[action.cardNumber];
            return {
                ...state,
                mapCards: {
                    ...state.mapCards,
                    [action.cardNumber]: {
                        ...current,
                        modernized: true,
                        portOneAdmin: current.portOneAdmin === Faction.None ? def.portOneDefaultAdmin : current.portOneAdmin,
                        portTwoAdmin: current.portTwoAdmin === Faction.None ? def.portTwoDefaultAdmin : current.portTwoAdmin,
                    },
                },
            };
        }

        case "KILL_ADMIN": {
            const key = action.port === "portOne" ? "portOneAdmin" : "portTwoAdmin";
            return {
                ...state,
                mapCards: {
                    ...state.mapCards,
                    [action.cardNumber]: {
                        ...state.mapCards[action.cardNumber],
                        [key]: Faction.None,
                    },
                },
            };
        }

        case "PLACE_ADMIN": {
            const key = action.port === "portOne" ? "portOneAdmin" : "portTwoAdmin";
            const cardState = state.mapCards[action.cardNumber];
            if (cardState[key] !== Faction.None) return state;
            if (agentSupply(state, action.faction) <= 0) return state;
            return {
                ...state,
                mapCards: {
                    ...state.mapCards,
                    [action.cardNumber]: {
                        ...cardState,
                        [key]: action.faction,
                    },
                },
            };
        }

        case "SET_ANARCHY":
            return {
                ...state,
                mapCards: {
                    ...state.mapCards,
                    [action.cardNumber]: {
                        ...state.mapCards[action.cardNumber],
                        anarchy: action.value,
                    },
                },
            };

        case "SET_DISEASE": {
            const def = MAP_CARD_DEFINITIONS.find(d => d.cardNumber === action.cardNumber)!;
            if (!def.disease) return state;
            return {
                ...state,
                mapCards: {
                    ...state.mapCards,
                    [action.cardNumber]: {
                        ...state.mapCards[action.cardNumber],
                        diseasePresent: action.present,
                    },
                },
            };
        }

        case "ADD_REVOLUTIONARY": {
            const cardState = state.revolutionCards[action.cardNumber];
            const sideState = cardState[action.side];
            if (agentSupply(state, action.faction) <= 0) return state;
            return {
                ...state,
                revolutionCards: {
                    ...state.revolutionCards,
                    [action.cardNumber]: {
                        ...cardState,
                        [action.side]: {
                            revolutionaries: [...sideState.revolutionaries, action.faction],
                        },
                    },
                },
            };
        }

        case "REMOVE_REVOLUTIONARY": {
            const cardState = state.revolutionCards[action.cardNumber];
            const sideState = cardState[action.side];
            return {
                ...state,
                revolutionCards: {
                    ...state.revolutionCards,
                    [action.cardNumber]: {
                        ...cardState,
                        [action.side]: {
                            revolutionaries: sideState.revolutionaries.filter((_, index) => index !== action.index),
                        },
                    },
                },
            };
        }

        case "MOVE_FINANCIAL_AGENT": {
            const board = state.financeBoards[action.boardFaction];
            const fromAgents = board.agents[action.from];
            const fromIndex = fromAgents.indexOf(action.agentFaction);
            if (fromIndex === -1) return state;
            return {
                ...state,
                financeBoards: {
                    ...state.financeBoards,
                    [action.boardFaction]: {
                        agents: {
                            ...board.agents,
                            [action.from]: fromAgents.filter((_, index) => index !== fromIndex),
                            [action.to]: [...board.agents[action.to], action.agentFaction],
                        },
                    },
                },
            };
        }

        case "ADD_FINANCIAL_AGENT": {
            const board = state.financeBoards[action.boardFaction];
            if (action.boardFaction !== Faction.Parliament && action.agentFaction !== action.boardFaction) return state;
            if (agentSupply(state, action.agentFaction) <= 0) return state;
            return {
                ...state,
                financeBoards: {
                    ...state.financeBoards,
                    [action.boardFaction]: {
                        agents: {
                            ...board.agents,
                            [action.space]: [...board.agents[action.space], action.agentFaction],
                        },
                    },
                },
            };
        }

        case "REMOVE_FINANCIAL_AGENT": {
            const board = state.financeBoards[action.boardFaction];
            const agents = board.agents[action.space];
            const index = agents.indexOf(action.agentFaction);
            if (index === -1) return state;
            return {
                ...state,
                financeBoards: {
                    ...state.financeBoards,
                    [action.boardFaction]: {
                        agents: {
                            ...board.agents,
                            [action.space]: agents.filter((_, i) => i !== index),
                        },
                    },
                },
            };
        }

        case "SET_SLAVER_CHIT":
            return {
                ...state,
                coastalSpaces: {
                    ...state.coastalSpaces,
                    [action.spaceNumber]: {
                        ...state.coastalSpaces[action.spaceNumber],
                        slaverChitPresent: action.present,
                    },
                },
            };

        case "SET_SHIP": {
            const space = state.coastalSpaces[action.spaceNumber];
            if (action.present && space.ship) return state;
            if (!action.present && !space.ship) return state;
            return {
                ...state,
                coastalSpaces: {
                    ...state.coastalSpaces,
                    [action.spaceNumber]: {
                        ...space,
                        ship: action.present ? { hasMarine: false } : undefined,
                    },
                },
            };
        }

        case "SET_MARINE": {
            const space = state.coastalSpaces[action.spaceNumber];
            if (!space.ship) return state;
            if (action.present && agentSupply(state, Faction.Parliament) <= 0) return state;
            return {
                ...state,
                coastalSpaces: {
                    ...state.coastalSpaces,
                    [action.spaceNumber]: {
                        ...space,
                        ship: { hasMarine: action.present },
                    },
                },
            };
        }

        case "MOVE_MARINE": {
            const fromSpace = state.coastalSpaces[action.from];
            const toSpace = state.coastalSpaces[action.to];
            if (!fromSpace.ship?.hasMarine) return state;
            if (!toSpace.ship || toSpace.ship.hasMarine) return state;
            return {
                ...state,
                coastalSpaces: {
                    ...state.coastalSpaces,
                    [action.from]: { ...fromSpace, ship: { hasMarine: false } },
                    [action.to]: { ...toSpace, ship: { hasMarine: true } },
                },
            };
        }

        case "PLACE_FACTORY": {
            const alreadyPlaced = Object.values(state.mapCards).some(cardState => cardState.factories.includes(action.faction));
            if (alreadyPlaced) return state;
            const cardState = state.mapCards[action.cardNumber];
            return {
                ...state,
                mapCards: {
                    ...state.mapCards,
                    [action.cardNumber]: {
                        ...cardState,
                        factories: [...cardState.factories, action.faction],
                    },
                },
            };
        }

        case "ADD_MEEPLE_TO_PORT": {
            const def = MAP_CARD_DEFINITIONS.find(d => d.cardNumber === action.cardNumber)!;
            const cardState = state.mapCards[action.cardNumber];
            const key = action.port === "portOne" ? "portOneFreedmen" : "portTwoFreedmen";
            const capacity = action.port === "portOne" ? def.portOneSlaveSpaces : def.portTwoSlaveSpaces;
            const freedmen = cardState[key] ?? [];
            if (capacity === undefined || freedmen.length >= capacity) return state;
            if (meepleSupply(state, action.faction) <= 0) return state;
            return {
                ...state,
                mapCards: {
                    ...state.mapCards,
                    [action.cardNumber]: {
                        ...cardState,
                        [key]: [...freedmen, action.faction],
                    },
                },
            };
        }

        case "REMOVE_MEEPLE_FROM_PORT": {
            const cardState = state.mapCards[action.cardNumber];
            const key = action.port === "portOne" ? "portOneFreedmen" : "portTwoFreedmen";
            const freedmen = cardState[key] ?? [];
            return {
                ...state,
                mapCards: {
                    ...state.mapCards,
                    [action.cardNumber]: {
                        ...cardState,
                        [key]: freedmen.filter((_, index) => index !== action.index),
                    },
                },
            };
        }

        case "ADD_MEEPLE_TO_DISSIDENTS": {
            const def = MAP_CARD_DEFINITIONS.find(d => d.cardNumber === action.cardNumber)!;
            const cardState = state.mapCards[action.cardNumber];
            if (cardState.dissidents.length >= def.dissentSpaces) return state;
            if (meepleSupply(state, action.faction) <= 0) return state;
            return {
                ...state,
                mapCards: {
                    ...state.mapCards,
                    [action.cardNumber]: {
                        ...cardState,
                        dissidents: [...cardState.dissidents, action.faction],
                    },
                },
            };
        }

        case "REMOVE_MEEPLE_FROM_DISSIDENTS": {
            const cardState = state.mapCards[action.cardNumber];
            return {
                ...state,
                mapCards: {
                    ...state.mapCards,
                    [action.cardNumber]: {
                        ...cardState,
                        dissidents: cardState.dissidents.filter((_, index) => index !== action.index),
                    },
                },
            };
        }

        case "SET_BARRIER_CHIT": {
            const cardState = state.mapCards[action.cardNumber];
            return {
                ...state,
                mapCards: {
                    ...state.mapCards,
                    [action.cardNumber]: {
                        ...cardState,
                        barrierChits: {
                            ...cardState.barrierChits,
                            [action.chitNumber]: action.present,
                        },
                    },
                },
            };
        }

        case "ADD_CARD_TO_SPLAY": {
            const id = splayCardId(action.entry);
            const alreadySplayed = Object.values(state.splays).some(entries => entries.some(entry => splayCardId(entry) === id));
            if (alreadySplayed) return state;
            return {
                ...state,
                splays: {
                    ...state.splays,
                    [action.splay]: [...state.splays[action.splay], action.entry],
                },
            };
        }

        case "RESET_GAME":
            return buildInitialGameState();

        default:
            return state;
    }
}

export function buildInitialGameState(): GameState {
    return {
        mapCards: Object.fromEntries(
            MAP_CARD_DEFINITIONS.map(def => [
                def.cardNumber,
                {
                    modernized: false,
                    portOneAdmin: def.portOneStartingAdmin ?? Faction.None,
                    portTwoAdmin: def.portTwo ? (def.portTwoStartingAdmin ?? Faction.None) : undefined,
                    anarchy: 0,
                    diseasePresent: def.disease ? true : undefined,
                    factories: [],
                    portOneFreedmen: def.portOneStartingFreedmen ?? [],
                    portTwoFreedmen: def.portTwo ? (def.portTwoStartingFreedmen ?? []) : undefined,
                    dissidents: [],
                    barrierChits: Object.fromEntries(
                        BARRIER_CHIT_DEFINITIONS
                            .filter(chit => chit.mapCardNumber === def.cardNumber)
                            .map(chit => [chit.chitNumber, true])
                    ),
                },
            ])
        ),
        revolutionCards: Object.fromEntries(
            MAP_CARD_DEFINITIONS.map(def => [def.cardNumber, buildInitialRevolutionCardState()])
        ),
        financeBoards: Object.fromEntries(
            FINANCE_BOARD_DEFINITIONS.map(def => [def.faction, buildInitialFinanceBoardState(def.faction)])
        ),
        coastalSpaces: Object.fromEntries(
            COASTAL_SPACE_DEFINITIONS.map(def => [def.spaceNumber, buildInitialCoastalSpaceState()])
        ),
        splays: buildInitialSplays(),
    };
}