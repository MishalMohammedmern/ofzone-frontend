export interface Product {
    id: string;
    name: string;
    category: string;
    subcategory: string;
    variantCount: number;
    description: string;
}

export interface Variant {
    id: string;
    name: string;
    description: string;
    price: number;
    color: string;
    material: string;
}