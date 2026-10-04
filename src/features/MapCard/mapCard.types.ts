import { Faction } from "../../shared/factions";
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

/**
 * Who gets credit for a port. portOneAdmin/portTwoAdmin hold only real agent
 * pieces; the printed default admin applies only once the card is modernized
 * and no agent is on the port, and it is never a placed piece.
 */
export function portAdminCredit(definition: MapCardDefinition, state: MapCardState, port: PortSlot): Faction {
    const placed = port === "portOne" ? state.portOneAdmin : state.portTwoAdmin;
    if (placed === undefined) return Faction.None;
    if (placed !== Faction.None) return placed;
    if (!state.modernized) return Faction.None;
    const fallback = port === "portOne" ? definition.portOneDefaultAdmin : definition.portTwoDefaultAdmin;
    return fallback ?? Faction.None;
}