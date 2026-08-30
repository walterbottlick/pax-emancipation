import type { MapCardDefinition } from "./mapCard.types";
import { Faction } from "../../shared/faction";

export const MAP_CARD_DEFINITIONS: MapCardDefinition[] = [
    {
        cardNumber: 1,
        serfdomTitle: "13 Colonies",
        modernTitle: "United States of America",
        sphere: "West",
        portOne: "Virginia",
        portOneDefaultAdmin: Faction.Philanthropists,
        portOneSlaveSpaces: 2,
        portTwo: "Caribbean",
        portTwoDefaultAdmin: Faction.Parliament,
        portTwoSlaveSpaces: 1,
        dissentSpaces: 2,
        coastalNorth: false,
        coastalSouth: true,
        coastalEast: true,
        coastalWest: false,
    },
    // ...9 more definitions
];