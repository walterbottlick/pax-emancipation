import type { Sphere } from "../../shared/spheres";
import type { Freedom } from "../../shared/freedoms";
import type { Ops } from "../../shared/ops";
import type { Impacts } from "../../shared/impacts";

export interface IdeaCardDefinition {
    firebrandRating: number;
    cardName: string;
    sphere: Sphere;
    culturalDiffusion: boolean;
    freedom1: Freedom;
    freedom2: Freedom;
    impact: Impacts;
    ops1?: Ops;
    ops2?: Ops;
    ops3?: Ops;
    ops4?: Ops;
}