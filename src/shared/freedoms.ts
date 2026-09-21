export const Freedom = {
    Candle: "Candle",
    Comet: "Comet",
    Feather: "Feather",
    Lock: "Lock"
} as const;

export type Freedom = (typeof Freedom)[keyof typeof Freedom];

export const ALL_FREEDOMS = [
    Freedom.Candle,
    Freedom.Comet,
    Freedom.Feather,
    Freedom.Lock
] as const;

export const FreedomColor = {
    Black: "black",
    Red: "red",
} as const;

export type FreedomColor = (typeof FreedomColor)[keyof typeof FreedomColor];

const FREEDOM_COLORS: Record<Freedom, FreedomColor> = {
    [Freedom.Candle]: FreedomColor.Black,
    [Freedom.Comet]: FreedomColor.Black,
    [Freedom.Feather]: FreedomColor.Red,
    [Freedom.Lock]: FreedomColor.Red
};

export function freedomColor(freedom: Freedom): FreedomColor {
    return FREEDOM_COLORS[freedom];
}