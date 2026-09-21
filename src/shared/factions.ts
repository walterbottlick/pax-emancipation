export const Faction = {
    None: "None",
    Parliament: "Parliament",
    Evangelicals: "Evangelicals",
    Philanthropists: "Philanthropists"
} as const;

export type Faction = (typeof Faction)[keyof typeof Faction];

export const ALL_FACTIONS = [
    Faction.Parliament,
    Faction.Evangelicals,
    Faction.Philanthropists
] as const;

const FACTION_COLORS: Record<Faction, string> = {
    [Faction.None]: "transparent",
    [Faction.Parliament]: "var(--faction-parliament)",
    [Faction.Evangelicals]: "var(--faction-evangelicals)",
    [Faction.Philanthropists]: "var(--faction-philanthropists)"
};

export function factionColor(faction: Faction): string {
    return FACTION_COLORS[faction];
}