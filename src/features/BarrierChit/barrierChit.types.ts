import type { Die } from "../../shared/dice";

export interface BarrierChitDefinition {
    chitName: string;
    chitNumber: number;
    mapCardNumber: number;
    leaning: "left" | "right" | "embargo";
    die1: Die;
    die2?: Die;
    die3?: Die;
    die4?: Die;
}

export type BarrierChitRow = BarrierChitDefinition[];

function chunkIntoRows(chits: BarrierChitDefinition[]): BarrierChitRow[] {
    const sorted = [...chits].sort((a, b) => a.chitNumber - b.chitNumber);
    const rows: BarrierChitRow[] = [];
    for (let i = 0; i < sorted.length; i += 2) {
        rows.push(sorted.slice(i, i + 2));
    }
    return rows;
}

/**
 * Returns this card's barrier chits grouped into rows of at most 2, ordered
 * nearest-to-the-card first: all left rows, then all right rows, then the
 * (at most one) embargo row. Row/column assignment depends only on each
 * chit's own leaning and chitNumber, never on which chits are currently
 * present, so a removed chit's slot never causes its neighbors to shift.
 */
export function barrierChitRows(chits: BarrierChitDefinition[]): BarrierChitRow[] {
    const left = chits.filter(c => c.leaning === "left");
    const right = chits.filter(c => c.leaning === "right");
    const embargo = chits.filter(c => c.leaning === "embargo");

    return [...chunkIntoRows(left), ...chunkIntoRows(right), ...chunkIntoRows(embargo)];
}