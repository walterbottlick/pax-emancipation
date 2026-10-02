import type { SplayCardEntry, SplayId, SplaysState } from "./splay.types";
import type { Freedom } from "../../shared/freedoms";
import { STARTING_SPLAY_CARD_DEFINITIONS } from "../StartingSplayCard/startingSplayCardDefinitions";
import { IDEA_CARD_DEFINITIONS } from "../IdeaCard/ideaCardDefinitions";
import { REVOLUTION_CARD_DEFINITIONS } from "../RevolutionCard/revolutionCardDefinitions";

const SPLAY_STARTING_CARD_NAMES: Record<SplayId, string> = {
    billOfRights: "Bill of Rights",
    generalWill: "General Will",
};

for (const cardName of Object.values(SPLAY_STARTING_CARD_NAMES)) {
    if (!STARTING_SPLAY_CARD_DEFINITIONS.some(def => def.cardName === cardName)) {
        throw new Error(`Splay starting card "${cardName}" does not exist in STARTING_SPLAY_CARD_DEFINITIONS.`);
    }
}

export function buildInitialSplays(): SplaysState {
    return {
        billOfRights: [{ kind: "starting", cardName: SPLAY_STARTING_CARD_NAMES.billOfRights, freedomEnd: 1 }],
        generalWill: [{ kind: "starting", cardName: SPLAY_STARTING_CARD_NAMES.generalWill, freedomEnd: 1 }],
    };
}

export interface SplayCardInfo {
    name: string;
    visibleFreedom: Freedom;
}

function pickEnd(entry: SplayCardEntry, freedom1: Freedom, freedom2: Freedom): Freedom {
    return entry.freedomEnd === 1 ? freedom1 : freedom2;
}

export function splayCardInfo(entry: SplayCardEntry): SplayCardInfo {
    switch (entry.kind) {
        case "starting": {
            const def = STARTING_SPLAY_CARD_DEFINITIONS.find(d => d.cardName === entry.cardName);
            if (!def) throw new Error(`Splay entry references unknown starting card "${entry.cardName}".`);
            return { name: def.cardName, visibleFreedom: pickEnd(entry, def.freedom1, def.freedom2) };
        }
        case "idea": {
            const def = IDEA_CARD_DEFINITIONS.find(d => d.firebrandRating === entry.firebrandRating);
            if (!def) throw new Error(`Splay entry references unknown idea card #${entry.firebrandRating}.`);
            return { name: def.cardName, visibleFreedom: pickEnd(entry, def.freedom1, def.freedom2) };
        }
        case "revolution": {
            const def = REVOLUTION_CARD_DEFINITIONS.find(d => d.cardNumber === entry.cardNumber);
            if (!def) throw new Error(`Splay entry references unknown revolution card #${entry.cardNumber}.`);
            const side = def[entry.side];
            return { name: side.cardName, visibleFreedom: pickEnd(entry, side.freedom1, side.freedom2) };
        }
    }
}
