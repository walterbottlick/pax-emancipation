import { Faction } from "../shared/factions";
import type { RevolutionCardSide } from "../features/RevolutionCard/revolutionCard.types";

export type GameAction =
    | { type: "FLIP_CARD"; cardNumber: number }
    | { type: "KILL_ADMIN"; cardNumber: number; port: "portOne" | "portTwo" }
    | { type: "PLACE_ADMIN"; cardNumber: number; port: "portOne" | "portTwo"; faction: Faction } // was: number
    | { type: "SET_ANARCHY"; cardNumber: number; value: number }
    | { type: "SET_DISEASE"; cardNumber: number; present: boolean }
    | { type: "ADD_REVOLUTIONARY"; cardNumber: number; side: RevolutionCardSide; faction: Faction }
    | { type: "REMOVE_REVOLUTIONARY"; cardNumber: number; side: RevolutionCardSide; index: number }
    | { type: "RESET_GAME" };