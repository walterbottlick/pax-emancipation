import { Faction } from "../../shared/factions";

export interface FinanceBoardDefinition {
    faction: Faction;
}

export const FinanceSpace = {
    Capital: 1,
    Wealth: 2,
    Debt: 3
} as const;

export type FinanceSpace = (typeof FinanceSpace)[keyof typeof FinanceSpace];

export const ALL_FINANCE_SPACES = [
    FinanceSpace.Capital,
    FinanceSpace.Wealth,
    FinanceSpace.Debt
] as const;

export function financeSpaceName(space: FinanceSpace): string {
    switch (space) {
        case FinanceSpace.Capital:
            return "Capital";
        case FinanceSpace.Wealth:
            return "Wealth";
        case FinanceSpace.Debt:
            return "Debt";
    }
}

export interface FinanceBoardState {
    agents: Record<FinanceSpace, number>;
}

export function buildInitialFinanceBoardState(): FinanceBoardState {
    return {
        agents: {
            [FinanceSpace.Capital]: 3,
            [FinanceSpace.Wealth]: 3,
            [FinanceSpace.Debt]: 0
        }
    };
}