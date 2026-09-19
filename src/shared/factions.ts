export const Faction = {
    None: 0,
    Parliament: 1,
    Evangelicals: 2,
    Philanthropists: 3
} as const;

export type Faction = (typeof Faction)[keyof typeof Faction];

export const ALL_FACTIONS = [
    Faction.Parliament,
    Faction.Evangelicals,
    Faction.Philanthropists
] as const;

interface FactionProperties {
    name: string;
    color: string;
}

const FACTION_PROPERTIES: Record<Faction, FactionProperties> = {
    [Faction.None]: { name: "None", color: "transparent" },
    [Faction.Parliament]: { name: "Parliament", color: "var(--faction-parliament)" },
    [Faction.Evangelicals]: { name: "Evangelicals", color: "var(--faction-evangelicals)" },
    [Faction.Philanthropists]: { name: "Philanthropists", color: "var(--faction-philanthropists)" }
};

export function factionName(faction: Faction): string {
    return FACTION_PROPERTIES[faction].name;
}

export function factionColor(faction: Faction): string {
    return FACTION_PROPERTIES[faction].color;
}