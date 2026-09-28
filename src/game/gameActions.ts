import { Faction } from "../shared/factions";
import type { RevolutionCardSide } from "../features/RevolutionCard/revolutionCard.types";
import type { FinanceSpace } from "../features/FinanceBoard/financeBoard.types";
import type { PortSlot } from "../features/MapCard/mapCard.types";

export type GameAction =
    | { type: "FLIP_CARD"; cardNumber: number }
    | { type: "KILL_ADMIN"; cardNumber: number; port: PortSlot }
    | { type: "PLACE_ADMIN"; cardNumber: number; port: PortSlot; faction: Faction } // was: number
    | { type: "SET_ANARCHY"; cardNumber: number; value: number }
    | { type: "SET_DISEASE"; cardNumber: number; present: boolean }
    | { type: "ADD_REVOLUTIONARY"; cardNumber: number; side: RevolutionCardSide; faction: Faction }
    | { type: "REMOVE_REVOLUTIONARY"; cardNumber: number; side: RevolutionCardSide; index: number }
    | { type: "MOVE_AGENT"; faction: Faction; from: FinanceSpace; to: FinanceSpace }
    | { type: "ADD_AGENT"; faction: Faction; space: FinanceSpace }
    | { type: "REMOVE_AGENT"; faction: Faction; space: FinanceSpace }
    | { type: "SET_SLAVER_CHIT"; spaceNumber: number; present: boolean }
    | { type: "SET_SHIP"; spaceNumber: number; present: boolean }
    | { type: "SET_MARINE"; spaceNumber: number; present: boolean }
    | { type: "MOVE_MARINE"; from: number; to: number }
    | { type: "PLACE_FACTORY"; cardNumber: number; faction: Faction }
    | { type: "ADD_MEEPLE_TO_PORT"; cardNumber: number; port: PortSlot; faction: Faction }
    | { type: "REMOVE_MEEPLE_FROM_PORT"; cardNumber: number; port: PortSlot; index: number }
    | { type: "ADD_MEEPLE_TO_DISSIDENTS"; cardNumber: number; faction: Faction }
    | { type: "REMOVE_MEEPLE_FROM_DISSIDENTS"; cardNumber: number; index: number }
    | { type: "RESET_GAME" };