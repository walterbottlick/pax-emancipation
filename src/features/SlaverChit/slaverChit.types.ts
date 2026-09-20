import type { Die } from "../../shared/dice";

export interface SlaverChitDefinition {
    chitName: string;
    bloodProduct: "Sugar" | "Cotton" | "Piracy" | "Harems" | "Opium" | "Tea" | "Coffee" | "Ivory" | "Rubber";
    die1: Die;
    die2?: Die;
    die3?: Die;
    die4?: Die;
}