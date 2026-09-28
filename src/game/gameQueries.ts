import type { GameState } from "../shared/types";
import type { Faction } from "../shared/factions";

export function hasPlacedFactory(state: GameState, faction: Faction): boolean {
    return Object.values(state.mapCards).some(cardState => cardState.factories.includes(faction));
}

export function factoryCardNumber(state: GameState, faction: Faction): number | undefined {
    const entry = Object.entries(state.mapCards).find(([, cardState]) => cardState.factories.includes(faction));
    return entry ? Number(entry[0]) : undefined;
}
