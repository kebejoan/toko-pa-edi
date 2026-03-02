"use client";

import { useState, useEffect } from "react";
import { CardProps } from "../../types/types";
import { ConvertPrice, truncate } from "./Utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
import useCheckAuth from "../hooks/useCheckAuth";


export function PictureCarousel({product}: CardProps) {

    const [imgError, setImgError] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setImgIndex(index);  // Update the main image to the clicked image
    };

    return (
        <div className="w-7/20 flex flex-col p-4">
            <div className="flex w-full h-[375px] bg-zinc-300 rounded-md overflow-hidden justify-center">
                { imgError ? (
                        <div className="bg-white h-full w-full flex flex-col justify-center items-center text-sm text-black px-2 font-bold">
                            <img 
                            src="../../no-image.jpg"
                            alt="no-image"
                            className="h-full w-full object-cover"
                            />
                            <p className="text-neutral-400">    
                                No Image Available
                            </p>
                        </div>
                    ) : (
                        <>
                            <img 
                            src={product.images[imgIndex]}
                            alt="product-pic"
                            onError={() => setImgError(true)}
                            className="h-full w-full object-cover"
                            />
                        </>
                    )
                }
            </div>
            <div className="w-full py-4 flex gap-4 justify-start">
                { product.images.map((image, index) => (
                            <div key={index} className={`w-1/5 h-[80px] bg-neutral-200 transition-all rounded-md
                            ${imgIndex === index ? "outline-2 outline-green-600" : "outline-2 outline-white hover:outline-2 hover:outline-green-600"
                            }`}
                            > 
                                <img 
                                src={image} 
                                alt="product-pic"
                                className="h-full w-full object-cover cursor-pointer"
                                onClick={() => handleImageClick(index)}
                                />
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export function ProductTree () {
    return (
        <div className="flex gap-2 p-2 text-green-600 text-sm select-none">
            <div>Home</div>
            <div className="font-bold text-neutral-700">
                &gt;
            </div>
            <div>RevoShop</div>
            <div className="font-bold text-neutral-700">
                &gt;
            </div>
            <div>Category</div>
            <div className="font-bold text-neutral-700">
                &gt;
            </div>
            <div className=" text-black">Title</div>
            
        </div>
    );
}

export function CheckoutFloat ({product}: CardProps) {

    const { addToCart } = useCart();
    // const { status } = useSession( {required : false} );
    const Convert = new ConvertPrice();
    const discountState = product.title.length % 2 === 0 ? true : false;
    const [subtractDisabled, setSubtractDisabled] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const router = useRouter();
    const { isAuthenticated } = useCheckAuth();
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // useEffect(() => {
    //     if (status === "authenticated")
    //         setIsAuthenticated(true);
    //     else setIsAuthenticated(false);
    // }, [status]);

    useEffect(() => {
        if (quantity === 1) {
            setSubtractDisabled(true);
        } else {
            setSubtractDisabled(false);
        }
    }, [quantity]);

    const handleKeranjang = () => {
        if (isAuthenticated) {
            for (let i = 0; i < quantity; i++)
                addToCart(product);
        }
        else router.push("/login");
    };

    const handleBeliLangsung= () => {
        if (isAuthenticated){
        for (let i = 0; i < quantity; i++)
            addToCart(product);
            router.push("../my-cart");
        }
        else router.push("/login");
    };

    const handleSub = () => {
        if (isAuthenticated){
            if (quantity > 1)
                setQuantity(quantity - 1);
        }
        else router.push("/login");
    };

    const handleAdd = () => {
        if (isAuthenticated){
            setQuantity(quantity + 1);
        }
        else router.push("/login");
    };

    return (
        <div className="w-5/20 my-4">
            <div className="flex flex-col gap-6 rounded-md w-full p-2 outline-1 outline-slate-400">
                <div className="font-bold">
                    <p>Atur Jumlah dan Catatan</p>
                </div>
                <div className="flex gap-2 justify-start items-center">
                    <div className="flex justify-between gap-4 p-1 rounded-md outline-1 outline-slate-400 font-bold text-xl">
                        <button 
                        className={subtractDisabled? "text-gray-600 px-2 cursor-not-allowed" : "text-green-600 px-2 cursor-pointer"}
                        onClick={handleSub}>
                            -
                        </button>
                        <input 
                            type="number" 
                            min="1" 
                            max="999" 
                            onChange={(e) => setQuantity(parseInt(e.target.value) ?? 1)} 
                            value={quantity} 
                            className="px-2 no-spinner w-[50px] text-center focus:outline-0"
                        />
                        <button 
                        className="text-green-600 px-2 cursor-pointer"
                        onClick={handleAdd}>
                            +
                        </button>
                    </div>
                    <div>
                        <p className="text-neutral-400">
                        Stok Total: <span className="text-black font-bold">999</span>
                    </p>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div className="text-md text-neutral-500">
                        <p>Subtotal</p>
                    </div>
                    <div className="flex flex-col gap-1 justify-end items-end">
                        <div className={discountState ? "line-through text-neutral-200 text-sm" : "pointer-none text-white text-sm"}>
                            <p>{Convert.MarkedUpPrice(product.price)}</p>
                        </div>
                        <div className="text-2xl font-bold">
                            <p>{Convert.FormattedPrice(product.price)}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <button
                    onClick = {handleKeranjang}
                    >
                        <div className="bg-emerald-600 p-2.5 rounded-md text-white font-bold text-center cursor-pointer">
                            + Keranjang
                        </div>
                    </button>
                    <button
                    onClick = {handleBeliLangsung}
                    >
                        <div className="bg-white p-2.5 rounded-md text-emerald-600 font-bold text-center outline-1 outline-emerald-600 cursor-pointer">
                            Beli Langsung
                        </div>
                    </button>
                </div>
                <div className="flex justify-around text-center">
                    <div className="font-bold text-sm">
                        Chat
                    </div>
                    <div className="font-bold text-sm">
                        |
                    </div>
                    <div className="font-bold text-sm">
                        Whishlist
                    </div>
                    <div className="font-bold text-sm">
                        |
                    </div>
                    <div className="font-bold text-sm">
                        Share
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ProductContent({product}: CardProps) {
    const Convert = new ConvertPrice();
    const discountState = product.title.length % 2 === 0 ? true : false;
    const [ isTruncate, setTruncate ] = useState(false);

    return (
        <div className=" w-8/20 p-2">
            <div className="flex flex-col gap-2">
                <div className="text-xl font-bold pt-2">
                    <h1>{product.title}</h1>
                </div>
                <div className="flex gap-2 text-neutral-300 items-center">
                    <h2 className="text-black">Terjual</h2>
                    <p>100</p>
                    <FontAwesomeIcon icon={faCircle} className="text-black text-[5px] px-2 h-[10px]" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-[12px] px-2 h-[10px]" />
                    <h2 className="text-black">Rating</h2>
                    <p>4.5</p>
                </div>
                <div className="text-4xl font-bold ">
                    <h2>{Convert.FormattedPrice(product.price)}</h2> 
                </div>
                <div>
                    <h2 className={discountState ? "border-b-1 border-neutral-200 w-9/10 line-through" : "border-b-1 border-neutral-200 text-white w-9/10"}>
                        {Convert.MarkedUpPrice(product.price)}
                    </h2>
                </div>
                <div className="border-b-1 border-neutral-200 w-9/10 flex gap-2">
                    <div className="border-b-2 border-green-600 w-1/5 text-center h-[40px] flex items-center justify-center text-green-600 font-bold">
                        <h2>Detail</h2>
                    </div>
                </div>
                <div>
                    <p className="text-neutral-400">
                        Kondisi: <span className="text-black">Baru</span>
                    </p>
                    <p className="text-neutral-400">
                        Min. Pemesanan: <span className="text-black">1 buah</span>
                    </p>
                    <p className="text-neutral-400">
                        Etalase: <span className="text-black">
                            {product.category.name}
                        </span>
                    </p>
                </div>
                <div>
                    <p className="">
                        {isTruncate ? product.description : truncate(product.description, 200)}
                    </p>
                    <button 
                    onClick={() => setTruncate(!isTruncate)} 
                    className="text-emerald-600 font-bold cursor-pointer">
                        {isTruncate ? "Lihat lebih sedikit" : "Lihat selengkapnya"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function ProductPageWrapper ({product}: CardProps) {
    return (
        <>
            <PictureCarousel product={product} />
            <ProductContent product={product} />
            <CheckoutFloat product={product} />
        </>
    );
}