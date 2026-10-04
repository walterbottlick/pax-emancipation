import type { RevolutionCardSide } from "../RevolutionCard/revolutionCard.types";

export type SplayId = "billOfRights" | "generalWill";

export type CardEnd = 1 | 2;

export type SplayCardEntry =
    | { kind: "starting"; cardName: string; freedomEnd: CardEnd }
    | { kind: "idea"; firebrandRating: number; freedomEnd: CardEnd }
    | { kind: "revolution"; cardNumber: number; side: RevolutionCardSide; freedomEnd: CardEnd; victoryPointsVisible: boolean };

export type SplaysState = Record<SplayId, SplayCardEntry[]>;

export function splayCardId(entry: SplayCardEntry): string {
    switch (entry.kind) {
        case "starting":
            return `starting-${entry.cardName}`;
        case "idea":
            return `idea-${entry.firebrandRating}`;
        case "revolution":
            return `revolution-${entry.cardNumber}`;
    }
}
