import { Faction } from "../shared/factions";
import type { RevolutionCardSide } from "../features/RevolutionCard/revolutionCard.types";
import type { FinanceSpace } from "../features/FinanceBoard/financeBoard.types";
import type { PortSlot } from "../features/MapCard/mapCard.types";
import type { SplayId, SplayCardEntry } from "../features/Splay/splay.types";

export type GameAction =
    | { type: "FLIP_CARD"; cardNumber: number }
    | { type: "KILL_ADMIN"; cardNumber: number; port: PortSlot }
    | { type: "PLACE_ADMIN"; cardNumber: number; port: PortSlot; faction: Faction } // was: number
    | { type: "SET_ANARCHY"; cardNumber: number; value: number }
    | { type: "SET_DISEASE"; cardNumber: number; present: boolean }
    | { type: "ADD_REVOLUTIONARY"; cardNumber: number; side: RevolutionCardSide; faction: Faction }
    | { type: "REMOVE_REVOLUTIONARY"; cardNumber: number; side: RevolutionCardSide; index: number }
    | { type: "MOVE_FINANCIAL_AGENT"; boardFaction: Faction; agentFaction: Faction; from: FinanceSpace; to: FinanceSpace }
    | { type: "ADD_FINANCIAL_AGENT"; boardFaction: Faction; agentFaction: Faction; space: FinanceSpace }
    | { type: "REMOVE_FINANCIAL_AGENT"; boardFaction: Faction; agentFaction: Faction; space: FinanceSpace }
    | { type: "SET_SLAVER_CHIT"; spaceNumber: number; present: boolean }
    | { type: "SET_SHIP"; spaceNumber: number; present: boolean }
    | { type: "SET_MARINE"; spaceNumber: number; present: boolean }
    | { type: "MOVE_MARINE"; from: number; to: number }
    | { type: "PLACE_FACTORY"; cardNumber: number; faction: Faction }
    | { type: "ADD_MEEPLE_TO_PORT"; cardNumber: number; port: PortSlot; faction: Faction }
    | { type: "REMOVE_MEEPLE_FROM_PORT"; cardNumber: number; port: PortSlot; index: number }
    | { type: "ADD_MEEPLE_TO_DISSIDENTS"; cardNumber: number; faction: Faction }
    | { type: "REMOVE_MEEPLE_FROM_DISSIDENTS"; cardNumber: number; index: number }
    | { type: "SET_BARRIER_CHIT"; cardNumber: number; chitNumber: number; present: boolean }
    | { type: "ADD_CARD_TO_SPLAY"; splay: SplayId; entry: SplayCardEntry }
    | { type: "RESET_GAME" };