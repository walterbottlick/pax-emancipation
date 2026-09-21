export const Ops = {
    Maritime: "Maritime",
    Manumission: "Manumission",
    Westernize: "Westernize",
    Suffrage: "Suffrage",
    Literacy: "Literacy",
    Lawsuit: "Lawsuit",
    Plebiscite: "Plebiscite"
} as const;

export type Ops = (typeof Ops)[keyof typeof Ops];

export const ALL_OPS = [
    Ops.Maritime,
    Ops.Manumission,
    Ops.Westernize,
    Ops.Suffrage,
    Ops.Literacy,
    Ops.Lawsuit,
    Ops.Plebiscite
] as const;

const OPS_ELEPHANT: Record<Ops, boolean> = {
    [Ops.Maritime]: false,
    [Ops.Manumission]: true,
    [Ops.Westernize]: true,
    [Ops.Suffrage]: true,
    [Ops.Literacy]: true,
    [Ops.Lawsuit]: false,
    [Ops.Plebiscite]: false
};

export function opsElephant(ops: Ops): boolean {
    return OPS_ELEPHANT[ops];
}