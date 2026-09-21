export const Sphere = {
    West: "West",
    East: "East"
} as const;

export type Sphere = (typeof Sphere)[keyof typeof Sphere];

export const ALL_SPHERES = [
    Sphere.West,
    Sphere.East
] as const;