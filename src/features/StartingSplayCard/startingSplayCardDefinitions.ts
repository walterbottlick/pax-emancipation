import type { StartingSplayCardDefinition } from "./startingSplayCard.types";
import { Freedom } from "../../shared/freedoms";

export const STARTING_SPLAY_CARD_DEFINITIONS: StartingSplayCardDefinition[] = [
    {
        cardName: "General Will",
        freedom1: Freedom.Feather,
        freedom2: Freedom.Lock
    },
    {
        cardName: "Bill of Rights",
        freedom1: Freedom.Comet,
        freedom2: Freedom.Candle
    }
]