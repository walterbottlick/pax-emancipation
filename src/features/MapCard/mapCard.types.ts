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
    portOneStartingAdmin?: Faction;
    portOneStartingFreedmen?: Faction[];
    portTwo?: string;
    portTwoDefaultAdmin?: Faction;
    portTwoSlaveSpaces?: number;
    portTwoStartingAdmin?: Faction;
    portTwoStartingFreedmen?: Faction[];
    dissentSpaces: number;
    disease: boolean;
}

export interface MapCardState {
    modernized: boolean;
    portOneAdmin: Faction;
    portTwoAdmin?: Faction;
    anarchy: number;
    diseasePresent?: boolean;
    factories: Faction[];
    portOneFreedmen: Faction[];
    portTwoFreedmen?: Faction[];
    dissidents: Faction[];
    barrierChits: Record<number, boolean>;
}