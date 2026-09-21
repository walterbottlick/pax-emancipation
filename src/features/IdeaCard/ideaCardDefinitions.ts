import type { IdeaCardDefinition } from "./ideaCard.types";
import { Sphere } from "../../shared/spheres";
import { Freedom } from "../../shared/freedoms";
import { Ops } from "../../shared/ops";
import { Impacts, BarrierColor } from "../../shared/impacts";
import { mapCardHasPort } from "../MapCard/mapCardDefinitions";

export const IDEA_CARD_DEFINITIONS: IdeaCardDefinition[] = [
    {
        firebrandRating: 7,
        cardName: "Anti-West Donghak Democracy",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.Post, targetPort: { cardNumber: 5, port: "portOne" } },
        ops1: Ops.Plebiscite
    },
    {
        firebrandRating: 44,
        cardName: "Barbary Wars",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Lock,
        impact1: Impacts.Ship,
        impact2: { impact: Impacts.Post, targetPort: { cardNumber: 3, port: "portTwo" } },
        ops1: Ops.Maritime,
        ops2: Ops.Westernize
    },
    {
        firebrandRating: 60,
        cardName: "White Rajahs",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: Impacts.Ship,
        impact2: { impact: Impacts.Post, targetPort: { cardNumber: 10, port: "portOne" } },
        ops1: Ops.Maritime,
        ops2: Ops.Westernize
    },
    {
        firebrandRating: 83,
        cardName: "Emancipation Edicts",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Manumission,
        ops2: Ops.Literacy,
        ops3: Ops.Westernize
    },
];


// Validate that all Post impacts target a valid port on a valid map card
// Can potentially be removed once the game is fully implemented and all cards are known to be valid, but a nice safety check to have
function validateIdeaCardDefinitions(definitions: IdeaCardDefinition[]): void {
    for (const def of definitions) {
        for (const impact of [def.impact1, def.impact2]) {
            if (impact !== undefined && typeof impact === "object" && impact.impact === Impacts.Post && !mapCardHasPort(impact.targetPort)) {
                throw new Error(
                    `Idea card "${def.cardName}" has a Post impact targeting card #${impact.targetPort.cardNumber} ${impact.targetPort.port}, which does not exist.`
                );
            }
        }
    }
}

validateIdeaCardDefinitions(IDEA_CARD_DEFINITIONS);