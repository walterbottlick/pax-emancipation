import type { Die } from "../../shared/dice";
import type { BloodProduct } from "../../shared/bloodProducts";

export interface SlaverChitDefinition {
    chitName: string;
    bloodProduct: BloodProduct;
    die1: Die;
    die2?: Die;
    die3?: Die;
    die4?: Die;
}