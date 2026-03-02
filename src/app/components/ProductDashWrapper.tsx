'use client';
import { ConvertPrice, truncate } from "./Utils";
import { Product } from "../../types/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ProductRow( { product } : { product: Product; }){
    const Convert = new ConvertPrice();
    const discountState = product.title.length % 2 === 0 ? true : false;
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);

        const res = await fetch("/api/delete-product", {
            method: "DELETE",
            body: JSON.stringify({ id: product.id }),
        });

        if (res.ok) {
            setIsDeleting(false);
            window.location.reload();
        } else {
            console.error("Failed to delete product");
            setIsDeleting(false);
        }
    };

    return(
        <>
            <div className="flex flex-col bg-white w-full h-[176px] gap-2">
                <div className="font-bold px-8 py-2.5">
                    Revo Shop
                </div>
                <div className="flex bg-white w-full justify-center items-center">
                    <div className="flex flex-col w-full">
                        <div className="flex justify-between w-full px-8">
                            <div className="flex justify-start gap-4">
                                <div className="bg-gray-500 w-[72px] h-[72px] rounded-md text-center overflow-hidden">
                                    <img 
                                    src={product.images[0]} 
                                    alt="product" 
                                    className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="">{truncate(product.title, 40)}</div>
                                    <div className="text-slate-400">{product.category.name}</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="text-lg font-bold">
                                    {Convert.FormattedPrice(product.price)}
                                </div>
                                <div className={discountState ? "text-red-500 line-through" : "text-white text-sm pointer-none"}>
                                    {Convert.MarkedUpPrice(product.price)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end px-8">
                    <div className="flex justify-between items-center gap-4">
                        <button className={`flex flex-col justify-center items-center ${isDeleting ? "cursor-not-allowed" : "cursor-pointer"}`} type="button" onClick={handleDelete} disabled={isDeleting}>
                            <div>
                                <div className={`text-md rounded-md text-white font-bold flex justify-center items-center py-1 px-4 ${isDeleting ? "bg-slate-200" : "bg-red-600"}`}>
                                    Hapus
                                </div>
                            </div>
                        </button>
                        <button className={`flex flex-col justify-center items-center ${isDeleting ? "cursor-not-allowed" : "cursor-pointer"}`} type="button" onClick={() => router.push(`/my-product/edit/${product.slug}`)} disabled={isDeleting}>
                            <div>
                                <div className="bg-emerald-600 text-md rounded-md text-white font-bold flex justify-center items-center py-1 px-4">
                                    Edit
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}