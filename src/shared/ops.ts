export const Ops = {
    Maritime: 1,
    Manumission: 2,
    Westernize: 3,
    Suffrage: 4,
    Literacy: 5,
    Lawsuit: 6,
    Plebiscite: 7
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

interface OpsProperties {
    name: string;
    elephant: boolean;
}

const OPS_PROPERTIES: Record<Ops, OpsProperties> = {
    [Ops.Maritime]: { name: "Maritime", elephant: false },
    [Ops.Manumission]: { name: "Manumission", elephant: true },
    [Ops.Westernize]: { name: "Westernize", elephant: true },
    [Ops.Suffrage]: { name: "Suffrage", elephant: true },
    [Ops.Literacy]: { name: "Literacy", elephant: true },
    [Ops.Lawsuit]: { name: "Lawsuit", elephant: false },
    [Ops.Plebiscite]: { name: "Plebiscite", elephant: false }
};

export function opsName(ops: Ops): string {
    return OPS_PROPERTIES[ops].name;
}

export function opsElephant(ops: Ops): boolean {
    return OPS_PROPERTIES[ops].elephant;
}