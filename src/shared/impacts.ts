export const Impacts = {
    Syndication: "Syndication",
    Post: "Post",
    Wealth: "Wealth",
    Revolutionary: "Revolutionary",
    Ship: "Ship",
    ClaimBarrier: "ClaimBarrier"
} as const;

export const BarrierColor = {
    Red: "red",
    White: "white",
    Both: "both",
} as const;

export type BarrierColor = (typeof BarrierColor)[keyof typeof BarrierColor];

export type Impacts = (typeof Impacts)[keyof typeof Impacts];

export const ALL_IMPACTS = [
    Impacts.Syndication,
    Impacts.Post,
    Impacts.Wealth,
    Impacts.Revolutionary,
    Impacts.Ship,
    Impacts.ClaimBarrier
] as const;

const IMPACTS_DISPLAY_OVERRIDES: Partial<Record<Impacts, string>> = {
    [Impacts.ClaimBarrier]: "Claim Barrier"
};

export function impactsName(impacts: Impacts): string {
    return IMPACTS_DISPLAY_OVERRIDES[impacts] ?? impacts;
}

const IMPACTS_ELEPHANT: Record<Impacts, boolean> = {
    [Impacts.Syndication]: false,
    [Impacts.Post]: false,
    [Impacts.Wealth]: false,
    [Impacts.Revolutionary]: false,
    [Impacts.Ship]: false,
    [Impacts.ClaimBarrier]: true
};

export function impactsElephant(impacts: Impacts): boolean {
    return IMPACTS_ELEPHANT[impacts];
}