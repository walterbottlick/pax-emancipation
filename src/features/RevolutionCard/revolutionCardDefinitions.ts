import type { RevolutionCardDefinition } from "./revolutionCard.types";
import { Freedom } from "../../shared/freedoms";
import { Ops } from "../../shared/ops";
import { Faction } from "../../shared/factions";

export const REVOLUTION_CARD_DEFINITIONS: RevolutionCardDefinition[] = [
    {
        cardNumber: 1,
        minEngagementSpots: 3,
        slaveRevolt: {
            cardName: "U.S. Civil War",
            freedom1: Freedom.Lock,
            freedom2: Freedom.Candle,
            culturalDiffusion: true,
            ops1: Ops.Maritime,
            ops2: Ops.Westernize,
            victoryPoints1: 3,
            victoryPoints1Faction: Faction.Evangelicals,
            victoryPoints2: 3,
            victoryPoints2Faction: Faction.Philanthropists
        },
        civilRights: {
            cardName: "American Revolution",
            freedom1: Freedom.Feather,
            freedom2: Freedom.Candle,
            culturalDiffusion: true,
            ops1: Ops.Manumission,
            ops2: Ops.Suffrage,
            victoryPoints1: 3,
            victoryPoints1Faction: Faction.Parliament,
            victoryPoints2: 2,
            victoryPoints2Faction: Faction.Philanthropists
        }
    },
    {
        cardNumber: 2,
        minEngagementSpots: 2,
        slaveRevolt: {
            cardName: "French Revolution",
            freedom1: Freedom.Lock,
            freedom2: Freedom.Candle,
            culturalDiffusion: true,
            ops1: Ops.Maritime,
            ops2: Ops.Westernize,
            ops3: Ops.Suffrage,
            victoryPoints1: 2,
            victoryPoints1Faction: Faction.Evangelicals,
            victoryPoints2: 2,
            victoryPoints2Faction: Faction.Philanthropists
        },
        civilRights: {
            cardName: "Napoleonic Code",
            freedom1: Freedom.Feather,
            freedom2: Freedom.Candle,
            culturalDiffusion: true,
            ops1: Ops.Manumission,
            ops2: Ops.Maritime,
            victoryPoints1: 2,
            victoryPoints1Faction: Faction.Parliament,
            victoryPoints2: 1,
            victoryPoints2Faction: Faction.Philanthropists
        }
    },
    {
        cardNumber: 3,
        minEngagementSpots: 3,
        slaveRevolt: {
            cardName: "Emancipation Manifesto",
            freedom1: Freedom.Lock,
            freedom2: Freedom.Lock,
            culturalDiffusion: false,
            ops1: Ops.Westernize,
            victoryPoints1: 3,
            victoryPoints1Faction: Faction.Evangelicals,
            victoryPoints2: 3,
            victoryPoints2Faction: Faction.Philanthropists
        },
        civilRights: {
            cardName: "Russian Revolution",
            freedom1: Freedom.Feather,
            freedom2: Freedom.Feather,
            culturalDiffusion: false,
            ops1: Ops.Manumission,
            ops2: Ops.Suffrage,
            victoryPoints1: 3,
            victoryPoints1Faction: Faction.Parliament,
            victoryPoints2: 1,
            victoryPoints2Faction: Faction.Philanthropists
        }
    },
    {
        cardNumber: 4,
        minEngagementSpots: 4,
        slaveRevolt: {
            cardName: "Taiping Rebellion",
            freedom1: Freedom.Comet,
            freedom2: Freedom.Comet,
            culturalDiffusion: false,
            ops1: Ops.Westernize,
            victoryPoints1: 4,
            victoryPoints1Faction: Faction.Evangelicals,
            victoryPoints2: 4,
            victoryPoints2Faction: Faction.Philanthropists
        },
        civilRights: {
            cardName: "Xinhai Revolution",
            freedom1: Freedom.Feather,
            freedom2: Freedom.Comet,
            culturalDiffusion: false,
            ops1: Ops.Manumission,
            ops2: Ops.Maritime,
            victoryPoints1: 4,
            victoryPoints1Faction: Faction.Parliament,
            victoryPoints2: 1,
            victoryPoints2Faction: Faction.Philanthropists
        }
    },
    {
        cardNumber: 5,
        minEngagementSpots: 3,
        slaveRevolt: {
            cardName: "Senmin Haishirei Edict",
            freedom1: Freedom.Lock,
            freedom2: Freedom.Candle,
            culturalDiffusion: false,
            ops1: Ops.Maritime,
            ops2: Ops.Westernize,
            victoryPoints1: 3,
            victoryPoints1Faction: Faction.Evangelicals,
            victoryPoints2: 3,
            victoryPoints2Faction: Faction.Philanthropists
        },
        civilRights: {
            cardName: "Satsuma Rebellion",
            freedom1: Freedom.Feather,
            freedom2: Freedom.Candle,
            culturalDiffusion: false,
            ops1: Ops.Manumission,
            ops2: Ops.Suffrage,
            victoryPoints1: 3,
            victoryPoints1Faction: Faction.Parliament,
            victoryPoints2: 1,
            victoryPoints2Faction: Faction.Philanthropists
        }
    },
    {
        cardNumber: 6,
        minEngagementSpots: 2,
        slaveRevolt: {
            cardName: "Latin American Independence",
            freedom1: Freedom.Lock,
            freedom2: Freedom.Candle,
            culturalDiffusion: true,
            ops1: Ops.Maritime,
            ops2: Ops.Westernize,
            victoryPoints1: 2,
            victoryPoints1Faction: Faction.Evangelicals,
            victoryPoints2: 2,
            victoryPoints2Faction: Faction.Philanthropists
        },
        civilRights: {
            cardName: "Pernambucan Revolts",
            freedom1: Freedom.Feather,
            freedom2: Freedom.Candle,
            culturalDiffusion: true,
            ops1: Ops.Manumission,
            ops2: Ops.Suffrage,
            victoryPoints1: 2,
            victoryPoints1Faction: Faction.Parliament,
            victoryPoints2: 1,
            victoryPoints2Faction: Faction.Philanthropists
        }
    },
    {
        cardNumber: 7,
        minEngagementSpots: 2,
        slaveRevolt: {
            cardName: "Liberian Independence",
            freedom1: Freedom.Lock,
            freedom2: Freedom.Comet,
            culturalDiffusion: true,
            ops1: Ops.Maritime,
            ops2: Ops.Westernize,
            victoryPoints1: 2,
            victoryPoints1Faction: Faction.Evangelicals,
            victoryPoints2: 2,
            victoryPoints2Faction: Faction.Philanthropists
        },
        civilRights: {
            cardName: "Kongo Civil War",
            freedom1: Freedom.Feather,
            freedom2: Freedom.Comet,
            culturalDiffusion: true,
            ops1: Ops.Manumission,
            ops2: Ops.Suffrage,
            victoryPoints1: 2,
            victoryPoints1Faction: Faction.Parliament,
            victoryPoints2: 1,
            victoryPoints2Faction: Faction.Philanthropists
        }
    },
    {
        cardNumber: 8,
        minEngagementSpots: 2,
        slaveRevolt: {
            cardName: "Egyptian Veiled Protectorate",
            freedom1: Freedom.Lock,
            freedom2: Freedom.Comet,
            culturalDiffusion: false,
            ops1: Ops.Maritime,
            ops2: Ops.Westernize,
            victoryPoints1: 2,
            victoryPoints1Faction: Faction.Evangelicals,
            victoryPoints2: 2,
            victoryPoints2Faction: Faction.Philanthropists
        },
        civilRights: {
            cardName: "Anglo-Zulu Wars",
            freedom1: Freedom.Feather,
            freedom2: Freedom.Feather,
            culturalDiffusion: false,
            ops1: Ops.Manumission,
            ops2: Ops.Suffrage,
            victoryPoints1: 2,
            victoryPoints1Faction: Faction.Parliament,
            victoryPoints2: 1,
            victoryPoints2Faction: Faction.Philanthropists
        }
    },
    {
        cardNumber: 9,
        minEngagementSpots: 3,
        slaveRevolt: {
            cardName: "Carnatic Wars",
            freedom1: Freedom.Lock,
            freedom2: Freedom.Lock,
            culturalDiffusion: false,
            ops1: Ops.Maritime,
            ops2: Ops.Westernize,
            victoryPoints1: 3,
            victoryPoints1Faction: Faction.Evangelicals,
            victoryPoints2: 3,
            victoryPoints2Faction: Faction.Philanthropists
        },
        civilRights: {
            cardName: "Bengal & Mysore Wars",
            freedom1: Freedom.Feather,
            freedom2: Freedom.Candle,
            culturalDiffusion: false,
            ops1: Ops.Manumission,
            ops2: Ops.Maritime,
            ops3: Ops.Suffrage,
            victoryPoints1: 3,
            victoryPoints1Faction: Faction.Parliament,
            victoryPoints2: 1,
            victoryPoints2Faction: Faction.Philanthropists
        }
    },
    {
        cardNumber: 10,
        minEngagementSpots: 1,
        slaveRevolt: {
            cardName: "Musket Wars",
            freedom1: Freedom.Comet,
            freedom2: Freedom.Comet,
            culturalDiffusion: true,
            ops1: Ops.Westernize,
            victoryPoints1: 1,
            victoryPoints1Faction: Faction.Evangelicals,
            victoryPoints2: 1,
            victoryPoints2Faction: Faction.Philanthropists
        },
        civilRights: {
            cardName: "Philippine Revolution",
            freedom1: Freedom.Feather,
            freedom2: Freedom.Feather,
            culturalDiffusion: true,
            ops1: Ops.Manumission,
            ops2: Ops.Suffrage,
            victoryPoints1: 1,
            victoryPoints1Faction: Faction.Parliament,
            victoryPoints2: 0,
            victoryPoints2Faction: Faction.Philanthropists
        }
    }
];