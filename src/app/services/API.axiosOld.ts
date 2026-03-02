import axios from "axios";
import { Category, Product, FormDataProduct } from "../../types/types";

const API_PRODUCT = "https://api.escuelajs.co/api/v1/products";
const API_CATEGORY = "https://api.escuelajs.co/api/v1/categories";
// const API_URL = "https://api.escuelajs.co/api/v1/products?offset=0&limit=24";

const apiProduct = axios.create({
    baseURL: API_PRODUCT,
    headers: {
        'Content-Type' : 'application/json',
    },
});

const apiCategory = axios.create({
    baseURL: API_CATEGORY,
    headers: {
        'Content-Type' : 'application/json',
    },
});

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await apiProduct.get('');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Failed to fetch products');
    }
};

export const fetchProductById = async (id: string): Promise<Product> => {
    try {
        const response = await apiProduct.get(`/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching products ${id}:`, error);
        throw new Error('Failed to fetch products');
    }
};

export const fetchProductBySlug = async (slug: string): Promise<Product> => {
    try {
        const response = await apiProduct.get(`/slug/${slug}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching products ${slug}:`, error);
        throw new Error('Failed to fetch products');
    }
};

export const fetchCategories = async (): Promise<Category[]> => {
    try {
        const response = await apiCategory.get('');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Failed to fetch products');
    }
};

export async function updateProduct(data: FormDataProduct, id: number) {
    try {
        const response = await apiProduct.put(`/${id}`, data);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error('Error updating product:', error);
        throw new Error('Failed to fetch products');
    }
};

export async function addProduct(data: FormDataProduct) {
    try {
        const response = await apiProduct.post(`/`, data);
        if (response) {
            return response.data;
        }
    } catch (error) {
        console.error('Error updating product:', error);
        throw new Error('Failed to fetch products');
    }
};

export async function deleteProduct(id: number) {
    try {
        const response = await apiProduct.delete(`/${id}`);
        if (response) {
            return response.data;
        }
    } catch (error) {
        console.error('Error updating product:', error);
        throw new Error('Failed to fetch products');
    }
};

