import type { SlaverChitDefinition } from "./slaverChit.types";
import { DieColor } from "../../shared/dice";

export const SLAVER_CHIT_DEFINITIONS: SlaverChitDefinition[] = [
    {
        chitName: "Caribbean Sugar",
        bloodProduct: "Sugar",
        die1: {
            face: 1,
            color: DieColor.Black
        },
        die2: {
            face: 2,
            color: DieColor.Black
        },
        die3: {
            face: 3,
            color: DieColor.Black
        },
        die4: {
            face: 4,
            color: DieColor.Black
        }
    },
    {
        chitName: "North Atlantic Cotton",
        bloodProduct: "Cotton",
        die1: {
            face: 1,
            color: DieColor.Black
        },
        die2: {
            face: 2,
            color: DieColor.Black
        },
        die3: {
            face: 3,
            color: DieColor.Black
        },
        die4: {
            face: 4,
            color: DieColor.Black
        }
    },
    {
        chitName: "Barbary Pirates",
        bloodProduct: "Piracy",
        die1: {
            face: 1,
            color: DieColor.Black
        }
    },
    {
        chitName: "South Atlantic Coffee",
        bloodProduct: "Coffee",
        die1: {
            face: 1,
            color: DieColor.Black
        },
        die2: {
            face: 2,
            color: DieColor.Black
        }
    },
    {
        chitName: "Trans-Saharan Harems",
        bloodProduct: "Harems",
        die1: {
            face: 1,
            color: DieColor.Black
        }
    },
    {
        chitName: "Zanzibar Ivory",
        bloodProduct: "Ivory",
        die1: {
            face: 1,
            color: DieColor.Black
        },
        die2: {
            face: 2,
            color: DieColor.Black
        }
    },
    {
        chitName: "Canton Opium",
        bloodProduct: "Opium",
        die1: {
            face: 1,
            color: DieColor.Black
        },
        die2: {
            face: 2,
            color: DieColor.Black
        }
    },
    {
        chitName: "Pacific Tea",
        bloodProduct: "Tea",
        die1: {
            face: 1,
            color: DieColor.Black
        }
    },
    {
        chitName: "VOC Rubber",
        bloodProduct: "Rubber",
        die1: {
            face: 1,
            color: DieColor.Black
        },
        die2: {
            face: 2,
            color: DieColor.Black
        }
    },
]