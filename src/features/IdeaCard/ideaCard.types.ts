import type { Sphere } from "../../shared/sphere";

export interface IdeaCardDefinition {
    firebrandRating: number;
    cardName: string;
    sphere: Sphere;
    culturalDiffusion: boolean;
    freedom1: Freedom; // needs definition
    freedom2: Freedom; // needs definition
    impact: Impact; // needs definition
    ops1?: Ops; // needs definition
    ops2?: Ops; // needs definition
    ops3?: Ops; // needs definition
    ops4?: Ops; // needs definition
}