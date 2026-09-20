import type { Die } from "../../shared/dice";

export interface BarrierChitDefinition {
    chitName: string;
    chitNumber: number;
    mapCardNumber: number;
    leaning: "left" | "right" | "embargo";
    die1: Die;
    die2?: Die;
    die3?: Die;
    die4?: Die;
}