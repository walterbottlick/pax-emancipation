import { Faction } from "../shared/faction";

export type GameAction =
    | { type: "FLIP_CARD"; cardNumber: number }
    | { type: "KILL_ADMIN"; cardNumber: number; port: "portOne" | "portTwo" }
    | { type: "PLACE_ADMIN"; cardNumber: number; port: "portOne" | "portTwo"; faction: Faction } // was: number
    | { type: "SET_ANARCHY"; cardNumber: number; value: number }
    | { type: "SET_DISEASE"; cardNumber: number; present: boolean }
    | { type: "RESET_GAME" };