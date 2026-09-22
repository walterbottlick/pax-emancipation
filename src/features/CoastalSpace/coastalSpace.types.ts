import type { BloodProduct } from "../../shared/bloodProducts";
import type { CardinalDirection } from "../MapCard/mapCard.types";

export interface CoastalSpaceDefinition {
    spaceNumber: number;
    cardA: number;
    cardAEdge: CardinalDirection;
    cardB: number;
    cardBEdge: CardinalDirection;
    bloodProduct: BloodProduct;
}

export interface CoastalSpaceShipState {
    hasMarine: boolean;
}

export interface CoastalSpaceState {
    slaverChitPresent: boolean;
    ship?: CoastalSpaceShipState;
}

export function buildInitialCoastalSpaceState(): CoastalSpaceState {
    return {
        slaverChitPresent: true,
    };
}
