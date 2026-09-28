import type { GameState } from "../shared/types";
import { Faction } from "../shared/factions";

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

export const AGENT_SUPPLY_LIMIT = 15;

export function agentsPlaced(state: GameState, faction: Faction): number {
    let count = 0;

    for (const cardState of Object.values(state.mapCards)) {
        if (cardState.portOneAdmin === faction) count++;
        if (cardState.portTwoAdmin === faction) count++;
    }

    if (faction === Faction.Parliament) {
        for (const spaceState of Object.values(state.coastalSpaces)) {
            if (spaceState.ship?.hasMarine) count++;
        }
    }

    for (const cardState of Object.values(state.revolutionCards)) {
        count += countOccurrences(faction, cardState.slaveRevolt.revolutionaries);
        count += countOccurrences(faction, cardState.civilRights.revolutionaries);
    }

    for (const board of Object.values(state.financeBoards)) {
        for (const agents of Object.values(board.agents)) {
            count += countOccurrences(faction, agents);
        }
    }

    return count;
}

export function agentSupply(state: GameState, faction: Faction): number {
    return AGENT_SUPPLY_LIMIT - agentsPlaced(state, faction);
}
