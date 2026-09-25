import type { MapCardDefinition, MapCardPortReference } from "./mapCard.types";
import { Faction } from "../../shared/factions";
import { Sphere } from "../../shared/spheres";

export const MAP_CARD_DEFINITIONS: MapCardDefinition[] = [
    {
        cardNumber: 1,
        serfdomTitle: "13 Colonies",
        modernTitle: "United States of America",
        sphere: Sphere.West,
        portOne: "Virginia",
        portOneDefaultAdmin: Faction.Philanthropists,
        portOneSlaveSpaces: 2,
        portTwo: "Caribbean",
        portTwoDefaultAdmin: Faction.Parliament,
        portTwoSlaveSpaces: 1,
        dissentSpaces: 2,
        disease: false
    },
    {
        cardNumber: 2,
        serfdomTitle: "Europe",
        modernTitle: "First French Empire",
        sphere: Sphere.West,
        portOne: "London",
        portOneDefaultAdmin: Faction.Parliament,
        portOneSlaveSpaces: 1,
        portTwo: "Nantes",
        portTwoDefaultAdmin: Faction.Evangelicals,
        portTwoSlaveSpaces: 3,
        dissentSpaces: 2,
        disease: false
    },
    {
        cardNumber: 3,
        serfdomTitle: "Ottoman",
        modernTitle: "Soviet Union",
        sphere: Sphere.East,
        portOne: "Saint Petersburg",
        portOneDefaultAdmin: Faction.Philanthropists,
        portOneSlaveSpaces: 2,
        portTwo: "Istanbul",
        portTwoDefaultAdmin: Faction.Philanthropists,
        portTwoSlaveSpaces: 3,
        dissentSpaces: 3,
        disease: false
    },
    {
        cardNumber: 4,
        serfdomTitle: "Qing China",
        modernTitle: "Republic of China",
        sphere: Sphere.East,
        portOne: "Beijing",
        portOneDefaultAdmin: Faction.Evangelicals,
        portOneSlaveSpaces: 10,
        portTwo: "Hong Kong",
        portTwoDefaultAdmin: Faction.Parliament,
        portTwoSlaveSpaces: 1,
        dissentSpaces: 3,
        disease: false
    },
    {
        cardNumber: 5,
        serfdomTitle: "Tokugawa Japan",
        modernTitle: "Meiji Japan",
        sphere: Sphere.East,
        portOne: "Korea",
        portOneDefaultAdmin: Faction.Evangelicals,
        portOneSlaveSpaces: 1,
        portTwo: "Edo",
        portTwoDefaultAdmin: Faction.Evangelicals,
        portTwoSlaveSpaces: 3,
        dissentSpaces: 3,
        disease: false
    },
    {
        cardNumber: 6,
        serfdomTitle: "Brazil",
        modernTitle: "Empire of Brazil",
        sphere: Sphere.West,
        portOne: "Bahia",
        portOneDefaultAdmin: Faction.Philanthropists,
        portOneSlaveSpaces: 1,
        dissentSpaces: 2,
        disease: false
    },
    {
        cardNumber: 7,
        serfdomTitle: "Kongo",
        modernTitle: "Congo Free State",
        sphere: Sphere.West,
        portOne: "Luanda",
        portOneDefaultAdmin: Faction.Evangelicals,
        portOneSlaveSpaces: 1,
        dissentSpaces: 1,
        disease: true
    },
    {
        cardNumber: 8,
        serfdomTitle: "Zululand",
        modernTitle: "Veiled Protectorate",
        sphere: Sphere.East,
        portOne: "Cairo",
        portOneDefaultAdmin: Faction.Parliament,
        portOneSlaveSpaces: 1,
        portTwo: "Natal",
        portTwoDefaultAdmin: Faction.Parliament,
        portTwoSlaveSpaces: 1,
        dissentSpaces: 1,
        disease: true
    },
    {
        cardNumber: 9,
        serfdomTitle: "India",
        modernTitle: "John Company",
        sphere: Sphere.East,
        portOne: "Maratha",
        portOneDefaultAdmin: Faction.Parliament,
        portOneSlaveSpaces: 2,
        portTwo: "Mughal",
        portTwoDefaultAdmin: Faction.Parliament,
        portTwoSlaveSpaces: 5,
        dissentSpaces: 2,
        disease: false
    },
    {
        cardNumber: 10,
        serfdomTitle: "East Indies",
        modernTitle: "Dutch East Indies",
        sphere: Sphere.West,
        portOne: "Batavia",
        portOneDefaultAdmin: Faction.Parliament,
        portOneSlaveSpaces: 1,
        dissentSpaces: 1,
        disease: true
    }
];

export function mapCardHasPort(reference: MapCardPortReference): boolean {
    const def = MAP_CARD_DEFINITIONS.find(d => d.cardNumber === reference.cardNumber);
    if (!def) return false;
    return reference.port === "portOne" ? true : def.portTwo !== undefined;
}