import type { CoastalSpaceDefinition } from "./coastalSpace.types";
import type { CardinalDirection } from "../MapCard/mapCard.types";
import type { SlaverChitDefinition } from "../SlaverChit/slaverChit.types";
import { MAP_CARD_DEFINITIONS } from "../MapCard/mapCardDefinitions";
import { SLAVER_CHIT_DEFINITIONS } from "../SlaverChit/slaverChitDefinitions";
import { BloodProduct } from "../../shared/bloodProducts";

export const COASTAL_SPACE_DEFINITIONS: CoastalSpaceDefinition[] = [
    {
        spaceNumber: 1,
        cardA: 1,
        cardAEdge: "South",
        cardB: 6,
        cardBEdge: "North",
        bloodProduct: BloodProduct.Sugar
    },
    {
        spaceNumber: 2,
        cardA: 1,
        cardAEdge: "East",
        cardB: 2,
        cardBEdge: "West",
        bloodProduct: BloodProduct.Cotton
    },
    {
        spaceNumber: 3,
        cardA: 6,
        cardAEdge: "East",
        cardB: 7,
        cardBEdge: "West",
        bloodProduct: BloodProduct.Coffee
    },
    {
        spaceNumber: 4,
        cardA: 2,
        cardAEdge: "South",
        cardB: 7,
        cardBEdge: "North",
        bloodProduct: BloodProduct.Piracy
    },
    {
        spaceNumber: 5,
        cardA: 3,
        cardAEdge: "South",
        cardB: 8,
        cardBEdge: "North",
        bloodProduct: BloodProduct.Harems
    },
    {
        spaceNumber: 6,
        cardA: 8,
        cardAEdge: "East",
        cardB: 9,
        cardBEdge: "West",
        bloodProduct: BloodProduct.Ivory
    },
    {
        spaceNumber: 7,
        cardA: 4,
        cardAEdge: "East",
        cardB: 5,
        cardBEdge: "West",
        bloodProduct: BloodProduct.Opium
    },
    {
        spaceNumber: 8,
        cardA: 9,
        cardAEdge: "East",
        cardB: 10,
        cardBEdge: "West",
        bloodProduct: BloodProduct.Rubber
    },
    {
        spaceNumber: 9,
        cardA: 5,
        cardAEdge: "South",
        cardB: 10,
        cardBEdge: "North",
        bloodProduct: BloodProduct.Tea
    }
    
];

export function mapCardCoastalSpace(cardNumber: number, direction: CardinalDirection): CoastalSpaceDefinition | undefined {
    return COASTAL_SPACE_DEFINITIONS.find(space =>
        (space.cardA === cardNumber && space.cardAEdge === direction) ||
        (space.cardB === cardNumber && space.cardBEdge === direction)
    );
}

export function coastalSpaceSlaverChit(space: CoastalSpaceDefinition): SlaverChitDefinition {
    return SLAVER_CHIT_DEFINITIONS.find(chit => chit.bloodProduct === space.bloodProduct)!;
}

// Validate that coastal spaces do not reference map cards or slaver chits that don't exist
// Can potentially be removed once the game is fully implemented and all coastal spaces are known to be valid, but a nice safety check to have
function validateCoastalSpaceDefinitions(definitions: CoastalSpaceDefinition[]): void {
    for (const space of definitions) {
        if (!MAP_CARD_DEFINITIONS.some(c => c.cardNumber === space.cardA)) {
            throw new Error(`Coastal space #${space.spaceNumber} references card #${space.cardA} (cardA), which does not exist.`);
        }
        if (!MAP_CARD_DEFINITIONS.some(c => c.cardNumber === space.cardB)) {
            throw new Error(`Coastal space #${space.spaceNumber} references card #${space.cardB} (cardB), which does not exist.`);
        }
        if (!SLAVER_CHIT_DEFINITIONS.some(chit => chit.bloodProduct === space.bloodProduct)) {
            throw new Error(`Coastal space #${space.spaceNumber} has blood product "${space.bloodProduct}", which has no matching slaver chit.`);
        }
    }
}

validateCoastalSpaceDefinitions(COASTAL_SPACE_DEFINITIONS);
