import { Category, Product, FormDataProduct } from "../../types/types";

const API_PRODUCT = "https://api.escuelajs.co/api/v1/products";
const API_CATEGORY = "https://api.escuelajs.co/api/v1/categories";

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response: Response = await fetch(API_PRODUCT);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Failed to fetch products');
    }
};

// GET product by ID
export const fetchProductById = async (id: string): Promise<Product> => {
    try {
        const response : Response = await fetch(`${API_PRODUCT}/${id}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching product by ID (${id}):`, error);
        throw new Error('Failed to fetch product');
    }
};

// GET product by slug
export const fetchProductBySlug = async (slug: string): Promise<Product> => {
    try {
        const response = await fetch(`${API_PRODUCT}/slug/${slug}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching product by slug (${slug}):`, error);
        throw new Error('Failed to fetch product');
    }
};

// GET all categories
export const fetchCategories = async (): Promise<Category[]> => {
    try {
        const response = await fetch(API_CATEGORY);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw new Error('Failed to fetch categories');
    }
};

// PUT update product
export async function updateProduct(data: FormDataProduct, id: number) {
    try {
        const response = await fetch(`${API_PRODUCT}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Error updating product (${id}):`, error);
        throw new Error('Failed to update product');
    }
}

// POST add product
export async function addProduct(data: FormDataProduct) {
    try {
        const response = await fetch(`${API_PRODUCT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error adding product:', error);
        throw new Error('Failed to add product');
    }
}

// DELETE product
export async function deleteProduct(id: number) {
    try {
        const response = await fetch(`${API_PRODUCT}/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Error deleting product (${id}):`, error);
        throw new Error('Failed to delete product');
    }
}