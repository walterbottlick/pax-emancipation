export const Freedom = {
    Candle: 1,
    Comet: 2,
    Feather: 3,
    Lock: 4
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

interface FreedomProperties {
    name: string;
    color: FreedomColor;
}

const FREEDOM_PROPERTIES: Record<Freedom, FreedomProperties> = {
    [Freedom.Candle]: { name: "Candle", color: FreedomColor.Black },
    [Freedom.Comet]: { name: "Comet", color: FreedomColor.Black },
    [Freedom.Feather]: { name: "Feather", color: FreedomColor.Red },
    [Freedom.Lock]: { name: "Lock", color: FreedomColor.Red }
};

export function freedomName(freedom: Freedom): string {
    return FREEDOM_PROPERTIES[freedom].name;
}

export function freedomColor(freedom: Freedom): FreedomColor {
    return FREEDOM_PROPERTIES[freedom].color;
}