import type { Faction } from "../../shared/factions";
import type { Sphere } from "../../shared/spheres";

export type PortSlot = "portOne" | "portTwo";

export interface MapCardPortReference {
    cardNumber: number;
    port: PortSlot;
}

export type CardinalDirection = "North" | "South" | "East" | "West";

export interface MapCardDefinition {
    cardNumber: number;
    serfdomTitle: string;
    modernTitle: string;
    sphere: Sphere;
    portOne: string;
    portOneDefaultAdmin: Faction;
    portOneSlaveSpaces: number;
    portTwo?: string;
    portTwoDefaultAdmin?: Faction;
    portTwoSlaveSpaces?: number;
    dissentSpaces: number;
}

export interface MapCardState {
    modernized: boolean;
    portOneAdmin: Faction;
    portTwoAdmin?: Faction;
    anarchy: number;
    disease: boolean;
}