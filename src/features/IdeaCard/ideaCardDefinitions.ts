import type { IdeaCardDefinition } from "./ideaCard.types";
import { Sphere } from "../../shared/spheres";
import { Freedom } from "../../shared/freedoms";
import { Ops } from "../../shared/ops";
import { Impacts } from "../../shared/impacts";
import { mapCardHasPort } from "../MapCard/mapCardDefinitions";

export const IDEA_CARD_DEFINITIONS: IdeaCardDefinition[] = [
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
];


// Validate that all Post impacts target a valid port on a valid map card
// Can potentially be removed once the game is fully implemented and all cards are known to be valid, but a nice safety check to have
function validateIdeaCardDefinitions(definitions: IdeaCardDefinition[]): void {
    for (const def of definitions) {
        for (const impact of [def.impact1, def.impact2]) {
            if (impact !== undefined && typeof impact === "object" && !mapCardHasPort(impact.targetPort)) {
                throw new Error(
                    `Idea card "${def.cardName}" has a Post impact targeting card #${impact.targetPort.cardNumber} ${impact.targetPort.port}, which does not exist.`
                );
            }
        }
    }
}

validateIdeaCardDefinitions(IDEA_CARD_DEFINITIONS);