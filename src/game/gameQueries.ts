import type { GameState } from "../shared/types";
import type { Faction } from "../shared/factions";

export function hasPlacedFactory(state: GameState, faction: Faction): boolean {
    return Object.values(state.mapCards).some(cardState => cardState.factories.includes(faction));
}

export function factoryCardNumber(state: GameState, faction: Faction): number | undefined {
    const entry = Object.entries(state.mapCards).find(([, cardState]) => cardState.factories.includes(faction));
    return entry ? Number(entry[0]) : undefined;
}

export const MEEPLE_SUPPLY_LIMIT = 16;

function countOccurrences(faction: Faction, factions: Faction[]): number {
    return factions.filter(f => f === faction).length;
}

export function meeplesPlaced(state: GameState, faction: Faction): number {
    return Object.values(state.mapCards).reduce((total, cardState) => {
        return total
            + countOccurrences(faction, cardState.portOneFreedmen)
            + countOccurrences(faction, cardState.portTwoFreedmen ?? [])
            + countOccurrences(faction, cardState.dissidents);
    }, 0);
}

export function meepleSupply(state: GameState, faction: Faction): number {
    return MEEPLE_SUPPLY_LIMIT - meeplesPlaced(state, faction);
}
