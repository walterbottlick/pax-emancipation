import type { Faction } from "../../shared/factions";
import type { Sphere } from "../../shared/spheres";

export type PortSlot = "portOne" | "portTwo";

export interface MapCardPortReference {
    cardNumber: number;
    port: PortSlot;
}

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
    coastalNorth: boolean;
    coastalSouth: boolean;
    coastalEast: boolean;
    coastalWest: boolean;
}

export interface MapCardState {
    modernized: boolean;
    portOneAdmin: Faction;
    portTwoAdmin?: Faction;
    anarchy: number;
    disease: boolean;
}