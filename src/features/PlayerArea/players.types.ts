import { ALL_FACTIONS, Faction } from "../../shared/factions";

export type GameMode = "solo" | "twoPlayer" | "threePlayer";

export interface PlayersState {
    mode: GameMode;
    factions: Faction[];
    currentFaction: Faction;
}

export interface PlayerBoardLayout {
    left: Faction;
    right: Faction[];
    rightIsSmall: boolean;
}

export function buildInitialPlayers(): PlayersState {
    return {
        mode: "threePlayer",
        factions: [...ALL_FACTIONS],
        currentFaction: Faction.Parliament,
    };
}

export function isValidPlayers(players: PlayersState): boolean {
    const { mode, factions, currentFaction } = players;
    const realFactions: readonly Faction[] = ALL_FACTIONS;
    if (!factions.every(faction => realFactions.includes(faction))) return false;
    if (new Set(factions).size !== factions.length) return false;
    if (!factions.includes(currentFaction)) return false;
    if (mode === "threePlayer") return factions.length === ALL_FACTIONS.length;
    return factions.length === 2 && factions.includes(Faction.Parliament);
}

export function playerBoardLayout(players: PlayersState): PlayerBoardLayout {
    const { mode, factions, currentFaction } = players;
    switch (mode) {
        case "threePlayer":
            return {
                left: currentFaction,
                right: ALL_FACTIONS.filter(faction => faction !== currentFaction),
                rightIsSmall: true,
            };
        case "twoPlayer":
            return {
                left: currentFaction,
                right: factions.filter(faction => faction !== currentFaction),
                rightIsSmall: false,
            };
        case "solo":
            return {
                left: Faction.Parliament,
                right: factions.filter(faction => faction !== Faction.Parliament),
                rightIsSmall: false,
            };
    }
}
