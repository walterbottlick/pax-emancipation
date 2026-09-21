import type { Sphere } from "../../shared/spheres";
import type { Freedom } from "../../shared/freedoms";
import type { Ops } from "../../shared/ops";
import { Impacts, type BarrierColor } from "../../shared/impacts";
import type { MapCardPortReference } from "../MapCard/mapCard.types";

export type IdeaCardImpact =
    | Exclude<Impacts, typeof Impacts.Post | typeof Impacts.ClaimBarrier>
    | { impact: typeof Impacts.Post; targetPort: MapCardPortReference }
    | { impact: typeof Impacts.ClaimBarrier; barrierColor: BarrierColor };

export function ideaCardImpactValue(impact: IdeaCardImpact): Impacts {
    return typeof impact === "object" ? impact.impact : impact;
}

export interface IdeaCardDefinition {
    firebrandRating: number;
    cardName: string;
    sphere: Sphere;
    culturalDiffusion: boolean;
    freedom1: Freedom;
    freedom2: Freedom;
    impact1?: IdeaCardImpact;
    impact2?: IdeaCardImpact;
    ops1?: Ops;
    ops2?: Ops;
    ops3?: Ops;
    ops4?: Ops;
}