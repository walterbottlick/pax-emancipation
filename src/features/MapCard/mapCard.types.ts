import type { Faction } from "../../shared/faction";

export interface MapCardDefinition {
    cardNumber: number;
    serfdomTitle: string;
    modernTitle: string;
    sphere: string;
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