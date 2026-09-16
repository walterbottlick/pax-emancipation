export const Impacts = {
    Syndication: 1,
    Post: 2,
    Wealth: 3,
    Revolutionary: 4,
    Ship: 5,
    ClaimBarrier: 6
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

interface ImpactsProperties {
    name: string;
    elephant: boolean;
}

const IMPACTS_PROPERTIES: Record<Impacts, ImpactsProperties> = {
    [Impacts.Syndication]: { name: "Syndication", elephant: false },
    [Impacts.Post]: { name: "Post", elephant: false },
    [Impacts.Wealth]: { name: "Wealth", elephant: false },
    [Impacts.Revolutionary]: { name: "Revolutionary", elephant: false },
    [Impacts.Ship]: { name: "Ship", elephant: false },
    [Impacts.ClaimBarrier]: { name: "ClaimBarrier", elephant: true }
};

export function impactsName(impacts: Impacts): string {
    return IMPACTS_PROPERTIES[impacts].name;
}

export function impactsElephant(impacts: Impacts): boolean {
    return IMPACTS_PROPERTIES[impacts].elephant;
}