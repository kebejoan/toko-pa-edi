'use client';

import { useCart } from "@/context/CartContext";
import { CartItem, Product } from "../../types/types";
import { ConvertPrice } from "../components/Utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface CartRowProps {
    item: CartItem;
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
}

function CartRow({item, addToCart, removeFromCart}: CartRowProps) {

    const Convert = new ConvertPrice();
    const discountState = item.product.title.length % 2 === 0 ? true : false;

    return(
        
            <div className="flex flex-col bg-white w-full h-[176px] gap-2">
                <div className="font-bold px-8 py-2.5 pointer-none">
                    Revo Shop
                </div>
                <div className="flex bg-white w-full justify-center items-center">
                    <div className="flex flex-col w-full">
                        <Link href={`../product/${item.product.slug}`}>
                            <div className="flex justify-between w-full px-8">
                                <div className="flex justify-start gap-4">
                                    <div className="bg-gray-500 w-[72px] h-[72px] rounded-md text-center overflow-hidden">
                                        <img 
                                        className="h-full w-full object-cover" 
                                        src={item.product.images[0]} 
                                        alt="image" />
                                    </div>
                                    <div>
                                        <div className="">{item.product.title}</div>
                                        <div className="text-slate-400">{item.product.category.name}</div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="text-lg font-bold">
                                        {Convert.FormattedPrice(item.product.price)}
                                    </div>
                                    <div className={discountState? "text-red-500 line-through pointer-none" : "text-white pointer-none"}>
                                        {Convert.MarkedUpPrice(item.product.price)}
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="flex justify-end px-8">
                            <div className="outline-1 outline-slate-300 rounded-full w-[100px] h-[32px]">
                                <div className="flex justify-between items-center">
                                    <button 
                                    className="px-2.5 text-xl cursor-pointer"
                                    onClick={() => removeFromCart(item.product.id)}>
                                        {item.quantity === 1 ? "x" : "-"} 
                                    </button>
                                    <div className="px-2.5">
                                        {item.quantity}
                                    </div>
                                    <button 
                                    className="px-2.5 text-xl cursor-pointer"
                                    onClick={() => addToCart(item.product)}>
                                        + 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default function MyCart() {

    const { items, totalPrice, totalItems, addToCart, removeFromCart, clearCart } = useCart();
    const [isCartEmpty, setCartEmpty] = useState(false);
    const Convert = new ConvertPrice();
    const router = useRouter();

    useEffect(() => {
        if(items.length === 0){
            setCartEmpty(true);
        } else {
            setCartEmpty(false);
        }
    }, [items])

    const handleBeli = () => {
        if(!isCartEmpty){
            clearCart(items[0].product);
            router.push("../my-cart/checkout");
        }
    }
    
    return(
        <div className="flex flex-col w-screen bg-slate-100 items-center">
            <div className="flex flex-col w-21/32">
                <div className="text-3xl font-bold p-2 my-1">
                    <h1>Keranjang</h1>
                </div>
                <div className="flex gap-4 p-4 w-full">
                    <div className="flex flex-col gap-2 w-2/3">
                        <div className="flex bg-white text-slate-100 w-full h-[48px] rounded-t-xl justify-center items-center select-none">
                            TOP
                        </div>
                            {items.map(item => (
                                <CartRow key={item.product.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart}
                                />
                            ))}
                        <div className="flex bg-white text-slate-100 w-full h-[48px] rounded-b-xl justify-center items-center select-none">
                            BOTTOM
                        </div>
                    </div>
                    <div className="flex bg-white w-1/3 h-[250px] rounded-xl">
                        <div className="flex flex-col gap-2 w-full p-4 justify-between">
                            <div className="py-2 font-bold">
                                Ringkasan Belanja
                            </div>
                            <div className="flex justify-between border-b-1 border-slate-200 py-4">
                                <div>
                                    Total
                                </div>
                                <div>
                                    {Convert.FormattedPrice(totalPrice)}
                                </div>
                            </div>
                            <button 
                            className="w-full p-4"
                            onClick={handleBeli}>
                                <div 
                                className={isCartEmpty? "bg-slate-200 text-xl rounded-md text-white font-bold text-center p-2 cursor-not-allowed" 
                                    : "bg-emerald-600 text-xl rounded-md text-white font-bold text-center p-2 cursor-pointer"}
                                >
                                    Beli ({totalItems})
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}