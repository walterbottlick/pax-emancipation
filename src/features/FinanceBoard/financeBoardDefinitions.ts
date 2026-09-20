import type { FinanceBoardDefinition } from "./financeBoard.types";
import { ALL_FACTIONS } from "../../shared/factions";

export const FINANCE_BOARD_DEFINITIONS: FinanceBoardDefinition[] = ALL_FACTIONS.map(faction => ({
    faction
}));
