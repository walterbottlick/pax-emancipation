import { MAP_CARD_DEFINITIONS } from "../features/MapCard/mapCardDefinitions";
import type { GameState } from "../shared/types";
import type { GameAction } from "./gameActions";
import { Faction } from "../shared/factions";
import { buildInitialRevolutionCardState } from "../features/RevolutionCard/revolutionCard.types";

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

        case "SET_DISEASE":
            return {
                ...state,
                mapCards: {
                    ...state.mapCards,
                    [action.cardNumber]: {
                        ...state.mapCards[action.cardNumber],
                        disease: action.present,
                    },
                },
            };

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
                    disease: false,
                },
            ])
        ),
        revolutionCards: Object.fromEntries(
            MAP_CARD_DEFINITIONS.map(def => [def.cardNumber, buildInitialRevolutionCardState()])
        ),
    };
}