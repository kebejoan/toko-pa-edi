export type Product = {
    "id": number;
    "title": string;
    "slug": string;
    "price": number;
    "description": string;
    "category": {
        "id": number;
        "name": string;
        "slug": string;
        "image": string;
        "creationAt": string;
        "updatedAt": string
    },
    "images": string[];
    "creationAt": string;
    "updatedAt": string;
};

export interface CardProps {
    product : Product,
};

export interface ArrayProduct {
    products : Product[],
    isLoading : boolean
};

export const productNull : Product = {
    "id": 0,
    "title": "",
    "slug": "",
    "price": 0,
    "description": "",
    "category": {
        "id": 0,
        "name": "",
        "slug": "",
        "image": "",
        "creationAt": "",
        "updatedAt": ""
    },
    "images": [],
    "creationAt": "",
    "updatedAt": ""
};

export interface User {
    "id": number,
    "email": string,
    "password": string,
    "name": string,
    "role": string,
    "avatar": string
}

export interface ArrayUser {
    users : User[],
    isLoading : boolean
}

export const userNull : User = {
    "id": 0,
    "email": "",
    "password": "",
    "name": "",
    "role": "",
    "avatar": ""
}

export type CartItem = {
    product: Product;
    quantity: number;
};

export type CartContextType = {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    clearCart: (product: Product) => void;
    totalPrice: number;
    totalItems: number;
};

export interface Category {
    "id": number,
    "name": string,
    "slug": string,
    "image": string
}

export interface ArrayCategory {
    categories : Category[],
    isLoading : boolean
}

export const categoryNull : Category = {
    "id": 0,
    "name": "",
    "slug": "",
    "image": ""
}

export interface FormDataProduct {
    images: string[];
    title: string;
    price: string | number;
    description: string;
    categoryId: number;
}

export const formDataProductNull : FormDataProduct = {
    images: [],
    title: "",
    price: 0,
    description: "",
    categoryId: 0
}