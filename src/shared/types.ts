import type { MapCardState } from "../features/MapCard/mapCard.types";
import type { RevolutionCardState } from "../features/RevolutionCard/revolutionCard.types";

export interface GameState {
    mapCards: Record<number, MapCardState>;
    revolutionCards: Record<number, RevolutionCardState>;
}