"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Product, CartContextType, CartItem } from "../types/types";
import { useSession } from "next-auth/react";


const CartContext = createContext<CartContextType>({
    items: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
    totalPrice: 0,
    totalItems: 0,
});

export const useCart = () => useContext(CartContext);

// Provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const totalItems = items.reduce((total, item) => total + item.quantity, 0);

    const { data: session, status } = useSession({required: false});
    const userId = session?.user?.email; // || "guest";
    const storageKey = `cart_${userId}`;

    const totalPrice = items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
    );

    // Load Cart from localStorage
    useEffect( () => {
        const storedCart = localStorage.getItem(storageKey);
        if (storedCart) {
            try {
                setItems(JSON.parse(storedCart));
            } catch (err) {
                console.error("Failed to parse from localStorage", err);
            }
        }
    }, [storageKey])

    //Sync cart to localStorage
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(items));
    }, [items, storageKey]);

    // Add product to cart
    const addToCart = (product: Product) => {
        setItems((currentItems) => {
            // Check if product already exists in cart
            const existingItem = currentItems.find(
            (item) => item.product.id === product.id
            );

            if (existingItem) {
            // If it exists, increase quantity
            return currentItems.map((item) =>
                item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            } else {
            // If it doesn't exist, add new item
            return [...currentItems, { product, quantity: 1 }];
            }
        });
    };

    // Remove product from cart
    const removeFromCart = (productId: number) => {
        setItems((currentItems) => {
        // Find the item
        const existingItem = currentItems.find(
            (item) => item.product.id === productId
        );

        if (existingItem && existingItem.quantity > 1) {
            // If quantity > 1, decrease quantity
            return currentItems.map((item) =>
            item.product.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
        } else {
            // If quantity is 1, remove item completely
            return currentItems.filter((item) => item.product.id !== productId);
        }
        });
    };

    // clear cart when user logout or session expired
    useEffect( () => {
        if (status === "unauthenticated") {
            setItems([]);
        }
    }, [status])

    const clearCart = () => {
        setItems([]);
        if (userId) {
            localStorage.removeItem(`cart_${userId}`);
        }
    };

    return (
            <CartContext.Provider
            value={{ items, addToCart, removeFromCart, clearCart, totalPrice, totalItems }}
            >
                {children}
            </CartContext.Provider>
    );
};
