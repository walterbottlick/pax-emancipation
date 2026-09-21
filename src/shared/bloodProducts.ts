export const BloodProduct = {
    Sugar: "Sugar",
    Cotton: "Cotton",
    Piracy: "Piracy",
    Harems: "Harems",
    Opium: "Opium",
    Tea: "Tea",
    Coffee: "Coffee",
    Ivory: "Ivory",
    Rubber: "Rubber"
} as const;

export type BloodProduct = (typeof BloodProduct)[keyof typeof BloodProduct];

export const ALL_BLOOD_PRODUCTS = [
    BloodProduct.Sugar,
    BloodProduct.Cotton,
    BloodProduct.Piracy,
    BloodProduct.Harems,
    BloodProduct.Opium,
    BloodProduct.Tea,
    BloodProduct.Coffee,
    BloodProduct.Ivory,
    BloodProduct.Rubber
] as const;
