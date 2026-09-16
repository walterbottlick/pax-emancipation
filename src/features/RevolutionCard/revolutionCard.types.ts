import type { Freedom } from "../../shared/freedoms";
import type { Ops } from "../../shared/ops";
import { Faction } from "../../shared/factions";
import { BarrierColor } from "../../shared/impacts";

export interface RevolutionCardSideDefinition {
    cardName: string;
    freedom1: Freedom;
    freedom2: Freedom;
    culturalDiffusion: boolean;
    ops1: Ops;
    ops2?: Ops;
    ops3?: Ops;
    victoryPoints1: number;
    victoryPoints1Faction: Faction;
    victoryPoints2: number;
    victoryPoints2Faction: Faction;
    minEngagementSpots: number;
}

export interface RevolutionCardDefinition {
    cardNumber: number;
    slaveRevolt: RevolutionCardSideDefinition;
    civilRights: RevolutionCardSideDefinition;
}

export type RevolutionCardSide = "slaveRevolt" | "civilRights";

export function revolutionCardSideColor(side: RevolutionCardSide): BarrierColor {
    return side === "slaveRevolt" ? BarrierColor.White : BarrierColor.Red;
}

export interface RevolutionCardSideState {
    revolutionaries: Faction[];
}

export interface RevolutionCardState {
    slaveRevolt: RevolutionCardSideState;
    civilRights: RevolutionCardSideState;
}

export function buildInitialRevolutionCardState(): RevolutionCardState {
    return {
        slaveRevolt: { revolutionaries: [] },
        civilRights: { revolutionaries: [] },
    };
}

export function occupiedEngagementSpots(side: RevolutionCardSideState): number {
    return side.revolutionaries.length;
}
