import { Faction } from "../shared/factions";
import type { RevolutionCardSide } from "../features/RevolutionCard/revolutionCard.types";
import type { FinanceSpace } from "../features/FinanceBoard/financeBoard.types";

export type GameAction =
    | { type: "FLIP_CARD"; cardNumber: number }
    | { type: "KILL_ADMIN"; cardNumber: number; port: "portOne" | "portTwo" }
    | { type: "PLACE_ADMIN"; cardNumber: number; port: "portOne" | "portTwo"; faction: Faction } // was: number
    | { type: "SET_ANARCHY"; cardNumber: number; value: number }
    | { type: "SET_DISEASE"; cardNumber: number; present: boolean }
    | { type: "ADD_REVOLUTIONARY"; cardNumber: number; side: RevolutionCardSide; faction: Faction }
    | { type: "REMOVE_REVOLUTIONARY"; cardNumber: number; side: RevolutionCardSide; index: number }
    | { type: "MOVE_AGENT"; faction: Faction; from: FinanceSpace; to: FinanceSpace }
    | { type: "ADD_AGENT"; faction: Faction; space: FinanceSpace }
    | { type: "REMOVE_AGENT"; faction: Faction; space: FinanceSpace }
    | { type: "RESET_GAME" };