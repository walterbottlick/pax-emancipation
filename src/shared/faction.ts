export const Faction = {
    None: 0,
    Parliament: 1,
    Evangelicals: 2,
    Philanthropists: 3,
} as const;

export type Faction = (typeof Faction)[keyof typeof Faction];

export const ALL_FACTIONS = [
    Faction.Parliament,
    Faction.Evangelicals,
    Faction.Philanthropists,
] as const;

export function factionName(faction: Faction): string {
    switch (faction) {
        case Faction.None:
            return "None";
        case Faction.Parliament:
            return "Parliament";
        case Faction.Evangelicals:
            return "Evangelicals";
        case Faction.Philanthropists:
            return "Philanthropists";
    }
}

export function factionColor(faction: Faction): string {
    switch (faction) {
        case Faction.None:
            return "transparent";
        case Faction.Parliament:
            return "var(--faction-parliament)";
        case Faction.Evangelicals:
            return "var(--faction-evangelicals)";
        case Faction.Philanthropists:
            return "var(--faction-philanthropists)";
    }
}