export type DieFace = 1 | 2 | 3 | 4 | 5 | 6;

export const ALL_DIE_FACES = [1, 2, 3, 4, 5, 6] as const;

export const DieColor = {
    White: "white",
    Red: "red",
    Green: "green",
    Purple: "purple",
    Yellow: "yellow",
    Black: "black"
} as const;

export type DieColor = (typeof DieColor)[keyof typeof DieColor];

export const ALL_DIE_COLORS = [
    DieColor.White,
    DieColor.Red,
    DieColor.Green,
    DieColor.Purple,
    DieColor.Yellow,
    DieColor.Black
] as const;

export interface Die {
    face: DieFace;
    color: DieColor;
    frustratedHate: boolean;
}
