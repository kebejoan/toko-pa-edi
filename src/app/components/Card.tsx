import Link from "next/link";
import { CardProps } from "../../types/types";
import { truncate, ConvertPrice } from "../components/Utils";
import { useState } from "react";

export function LoadingCardComponent () {
    return (
        <div className="flex flex-col justify-start bg-neutral-50 w-[200px] h-[325px] gap-1 outline-1 rounded-xl animate-pulse [animation-duration:'1500ms'] outline-neutral-200 shimmer">
            <div className="flex w-full h-[200px] overflow-hidden justify-center bg-neutral-100">
                
            </div>
            <div className="bg-emerald-200 rounded-2xl h-[14px] text-sm text-black px-2 text-left font-bold mx-2 my-1">
                
            </div>
            <div className="bg-red-200 w-1/2 rounded-2xl h-[14px] text-sm text-black px-2 text-left font-bold mx-2 my-1">
                
            </div>
            <div className="bg-gradient-to-r from-slate-50 to-slate-300 w-2/3 rounded-2xl h-[14px] text-sm text-black px-2 text-left font-bold mx-2 my-1">
                
            </div>
        </div>
    );
};

export default function CardComponent({product} : CardProps){

    const [imgError, setImgError] = useState(false);
    // const [randomNumber, setRandomNumber] = useState(false);
    const Convert = new ConvertPrice();
    const discountState = product.title.length % 2 === 0 ? true : false;

    return (
        <> 
            <Link href={`/product/${product.slug}`}>
                <div className="flex flex-col justify-start bg-white w-[200px] h-[325px] gap-1 outline-1 outline-neutral-100 hover:outline-neutral-300 hover:shadow-sm transition-all">
                    <div className="flex w-full h-[200px] overflow-hidden justify-center">
                        { imgError ? (
                                <div className="bg-white h-full w-full flex flex-col justify-center items-center text-sm text-black px-2 font-bold">
                                    <img 
                                    src="../no-image.jpg" 
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
                                    src={product.images[0]} 
                                    alt="product-pic"
                                    onError={() => setImgError(true)}
                                    className="h-full w-full object-cover"
                                    />
                                </>
                            )
                        }
                    </div>
                    <div className="text-sm text-black px-2 text-left font-bold">
                        <h3>{truncate(product.title, 40)}</h3>
                    </div>
                    <div className="flex px-2 text-md items-center font-bold">
                        <h1 className="text-green-700">{Convert.FormattedPrice(product.price)}</h1>
                    </div>
                    <div className="flex px-2 text-md items-center">
                        <h2 className={discountState ? "text-red-400 line-through text-sm" : "text-white text-sm"}>
                            {Convert.MarkedUpPrice(product.price)}
                        </h2>
                    </div>
                    <div className="text-sm text-neutral-400 px-2 text-left">
                        <h3>{product.category.name}</h3>
                    </div>
                </div>
            </Link>
        </>
    );
}