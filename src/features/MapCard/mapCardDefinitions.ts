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
        portOneStartingAdmin: Faction.Parliament,
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
        portOneStartingAdmin: Faction.Parliament,
        portOneStartingFreedmen: [Faction.Parliament],
        portTwo: "Nantes",
        portTwoDefaultAdmin: Faction.Evangelicals,
        portTwoSlaveSpaces: 3,
        portTwoStartingFreedmen: [Faction.Philanthropists, Faction.Philanthropists, Faction.Evangelicals],
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
        portOneStartingAdmin: Faction.Evangelicals,
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
        portTwoStartingAdmin: Faction.Philanthropists,
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

function validateMapCardDefinitions(definitions: MapCardDefinition[]): void {
    for (const def of definitions) {
        if ((def.portOneStartingFreedmen?.length ?? 0) > def.portOneSlaveSpaces) {
            throw new Error(`Map card #${def.cardNumber} (${def.portOne}) has more starting freedmen than slave spaces.`);
        }
        if (def.portTwo === undefined) {
            if (def.portTwoStartingAdmin !== undefined || def.portTwoStartingFreedmen !== undefined) {
                throw new Error(`Map card #${def.cardNumber} has portTwo starting data but no portTwo.`);
            }
        } else if ((def.portTwoStartingFreedmen?.length ?? 0) > (def.portTwoSlaveSpaces ?? 0)) {
            throw new Error(`Map card #${def.cardNumber} (${def.portTwo}) has more starting freedmen than slave spaces.`);
        }
    }
}

validateMapCardDefinitions(MAP_CARD_DEFINITIONS);