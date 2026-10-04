import type { SlaverChitDefinition } from "./slaverChit.types";
import { DieColor } from "../../shared/dice";
import { BloodProduct } from "../../shared/bloodProducts";

export const SLAVER_CHIT_DEFINITIONS: SlaverChitDefinition[] = [
    {
        chitName: "Caribbean Sugar",
        bloodProduct: BloodProduct.Sugar,
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
        bloodProduct: BloodProduct.Cotton,
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
        bloodProduct: BloodProduct.Piracy,
        die1: {
            face: 1,
            color: DieColor.Black
        }
    },
    {
        chitName: "South Atlantic Coffee",
        bloodProduct: BloodProduct.Coffee,
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
        bloodProduct: BloodProduct.Harems,
        die1: {
            face: 1,
            color: DieColor.Black
        }
    },
    {
        chitName: "Zanzibar Ivory",
        bloodProduct: BloodProduct.Ivory,
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
        bloodProduct: BloodProduct.Opium,
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
        bloodProduct: BloodProduct.Tea,
        die1: {
            face: 1,
            color: DieColor.Black
        }
    },
    {
        chitName: "VOC Rubber",
        bloodProduct: BloodProduct.Rubber,
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