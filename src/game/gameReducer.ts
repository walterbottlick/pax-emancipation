import { MAP_CARD_DEFINITIONS } from "../features/MapCard/mapCardDefinitions";
import type { GameState } from "../shared/types";
import type { GameAction } from "./gameActions";
import { Faction } from "../shared/factions";
import { buildInitialRevolutionCardState } from "../features/RevolutionCard/revolutionCard.types";
import { FINANCE_BOARD_DEFINITIONS } from "../features/FinanceBoard/financeBoardDefinitions";
import { buildInitialFinanceBoardState } from "../features/FinanceBoard/financeBoard.types";
import { COASTAL_SPACE_DEFINITIONS } from "../features/CoastalSpace/coastalSpaceDefinitions";
import { buildInitialCoastalSpaceState } from "../features/CoastalSpace/coastalSpace.types";

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
            return {
                ...state,
                mapCards: {
                    ...state.mapCards,
                    [action.cardNumber]: {
                        ...state.mapCards[action.cardNumber],
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

        case "MOVE_AGENT": {
            const board = state.financeBoards[action.faction];
            if (board.agents[action.from] === 0) return state;
            return {
                ...state,
                financeBoards: {
                    ...state.financeBoards,
                    [action.faction]: {
                        agents: {
                            ...board.agents,
                            [action.from]: board.agents[action.from] - 1,
                            [action.to]: board.agents[action.to] + 1,
                        },
                    },
                },
            };
        }

        case "ADD_AGENT": {
            const board = state.financeBoards[action.faction];
            return {
                ...state,
                financeBoards: {
                    ...state.financeBoards,
                    [action.faction]: {
                        agents: {
                            ...board.agents,
                            [action.space]: board.agents[action.space] + 1,
                        },
                    },
                },
            };
        }

        case "REMOVE_AGENT": {
            const board = state.financeBoards[action.faction];
            if (board.agents[action.space] === 0) return state;
            return {
                ...state,
                financeBoards: {
                    ...state.financeBoards,
                    [action.faction]: {
                        agents: {
                            ...board.agents,
                            [action.space]: board.agents[action.space] - 1,
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
                    portOneAdmin: Faction.None,
                    portTwoAdmin: def.portTwo ? Faction.None : undefined,
                    anarchy: 0,
                    diseasePresent: def.disease ? true : undefined,
                    factories: [],
                },
            ])
        ),
        revolutionCards: Object.fromEntries(
            MAP_CARD_DEFINITIONS.map(def => [def.cardNumber, buildInitialRevolutionCardState()])
        ),
        financeBoards: Object.fromEntries(
            FINANCE_BOARD_DEFINITIONS.map(def => [def.faction, buildInitialFinanceBoardState()])
        ),
        coastalSpaces: Object.fromEntries(
            COASTAL_SPACE_DEFINITIONS.map(def => [def.spaceNumber, buildInitialCoastalSpaceState()])
        ),
    };
}