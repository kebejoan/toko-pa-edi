import {
    fetchProducts,
    fetchProductById,
    fetchProductBySlug,
    fetchCategories,
    updateProduct,
    addProduct,
    deleteProduct,
  } from '@/app/services/API'; // adjust path as needed

import type { Product, Category, FormDataProduct } from '../../types/types';

const productsMock : Product[] = [
    {
    "id": 123,
    "title": "Product 1",
    "slug": "product-1",
    "price": 17,
    "description": "this is a desc",
    "category": {
        "id": 1234,
        "name": "Category 1",
        "slug": "category-1",
        "image": "img.jpg",
        "creationAt": "time",
        "updatedAt": "time"
    },
    "images": [],
    "creationAt": "time",
    "updatedAt": "time"
    },
    {
        "id": 123,
        "title": "Product 2",
        "slug": "product-2",
        "price": 17,
        "description": "this is a desc",
        "category": {
            "id": 1234,
            "name": "Category 2",
            "slug": "category-2",
            "image": "img.jpg",
            "creationAt": "time",
            "updatedAt": "time"
        },
        "images": [],
        "creationAt": "time",
        "updatedAt": "time"
    },
];

const productMock : Product = {
    "id": 123,
    "title": "Product 2",
    "slug": "product-2",
    "price": 17,
    "description": "this is a desc",
    "category": {
        "id": 1234,
        "name": "Category 2",
        "slug": "category-2",
        "image": "img.jpg",
        "creationAt": "time",
        "updatedAt": "time"
    },
    "images": [],
    "creationAt": "time",
    "updatedAt": "time"
}

const categoriesMock : Category [] = [
    {
        "id": 123,
    "name": "Category 1",
    "slug": "category-1",
    "image": "img1.jpg"
    },
    {
        "id": 456,
    "name": "Category 2",
    "slug": "category-2",
    "image": "img2.jpg"
    }
]

export const formDataProductMock : FormDataProduct = {
    images: [],
    title: "",
    price: 0,
    description: "",
    categoryId: 0
}

describe('API fetch functions', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('fetchProducts returns product list', async () => {
        const mockProducts: Product[] = productsMock;
        (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
        });

        const result = await fetchProducts();
        expect(global.fetch).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products');
        expect(result).toEqual(mockProducts);
    });

    it('fetchProductById returns product by id', async () => {
        const mockProduct: Product = productMock;
        (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProduct,
        });

        const result = await fetchProductById('1');
        expect(global.fetch).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products/1');
        expect(result).toEqual(mockProduct);
    });

    it('fetchProductBySlug returns product by slug', async () => {
        const mockProduct: Product = productMock;
        (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProduct,
        });

        const result = await fetchProductBySlug('slug-2');
        expect(global.fetch).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products/slug/slug-2');
        expect(result).toEqual(mockProduct);
    });

    it('fetchCategories returns categories list', async () => {
        const mockCategories: Category[] = categoriesMock;
        (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockCategories,
        });

        const result = await fetchCategories();
        expect(global.fetch).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/categories');
        expect(result).toEqual(mockCategories);
    });

    it('updateProduct sends PUT request and returns updated product', async () => {
        const updatedProduct: Product = productMock;
        const data: FormDataProduct = { title: 'Updated Product' } as any;

        (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => updatedProduct,
        });

        const result = await updateProduct(data, 1);
        expect(global.fetch).toHaveBeenCalledWith(
        'https://api.escuelajs.co/api/v1/products/1',
        expect.objectContaining({
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        );
        expect(result).toEqual(updatedProduct);
    });

    it('addProduct sends POST request and returns new product', async () => {
        const newProduct: Product = { id: 3, title: 'New Product' } as any;
        const data: FormDataProduct = formDataProductMock;

        (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => newProduct,
        });

        const result = await addProduct(data);
        expect(global.fetch).toHaveBeenCalledWith(
        'https://api.escuelajs.co/api/v1/products',
        expect.objectContaining({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        );
        expect(result).toEqual(newProduct);
    });

    it('deleteProduct sends DELETE request and returns response', async () => {
        const deleteResponse = { success: true };
        (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => deleteResponse,
        });

        const result = await deleteProduct(1);
        expect(global.fetch).toHaveBeenCalledWith(
        'https://api.escuelajs.co/api/v1/products/1',
        expect.objectContaining({ method: 'DELETE' })
        );
        expect(result).toEqual(deleteResponse);
    });

// Optionally, test error handling by mocking fetch failure or non-ok status
it('fetchProducts throws error on non-ok response', async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: async () => ({}),
        });

        await expect(fetchProducts()).rejects.toThrow('Failed to fetch products');
    });
});

//add FormDataMock
