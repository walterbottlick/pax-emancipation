export const Sphere = {
    West: 1,
    East: 2
} as const;

export type Sphere = (typeof Sphere)[keyof typeof Sphere];

export const ALL_SPHERES = [
    Sphere.West,
    Sphere.East
] as const;

export function sphereName(sphere: Sphere): string {
    switch (sphere) {
        case Sphere.West:
            return "West";
        case Sphere.East:
            return "East";
    }
}