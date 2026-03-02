'use client';

import { Product } from "../../types/types";
import { deleteProduct, fetchProducts } from "../services/API";
import { useEffect, useState } from "react";
import { truncate, ConvertPrice } from "../components/Utils";
import { useRouter } from "next/navigation";

function LoadingRow(){
    return(
        <div className="flex flex-col bg-white w-full h-[176px] gap-2">
            <div className="font-bold px-8 py-2.5">
                Revo Shop
            </div>
            <div className="flex bg-white w-full justify-center items-center">
                <div className="flex flex-col w-full">
                    <div className="flex justify-between w-full px-8">
                        <div className="flex justify-start gap-4">
                            <div className="bg-gray-500 w-[72px] h-[72px] rounded-md text-center">
                            image
                            </div>
                            <div>
                                <div className="">Title</div>
                                <div className="text-slate-400">Category</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="text-lg font-bold">
                                Rp 200.000
                            </div>
                            <div className="text-red-500 line-through">
                                Rp 200.000
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end px-8">
                        <div className="outline-1 outline-slate-300 rounded-full w-[100px] h-[32px]">
                            <div className="flex justify-between items-center">
                                <div className="px-2.5 text-xl">
                                    - 
                                </div>
                                <div className="px-2.5">
                                    1
                                </div>
                                <div className="px-2.5 text-xl">
                                    + 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProductRow( { product, isLoading } : { product: Product; isLoading: boolean }){
    const Convert = new ConvertPrice();
    const discountState = product.title.length % 2 === 0 ? true : false;
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);
        const response = await deleteProduct(product.id);
        if (response) {
            setIsDeleting(false);
            window.location.reload();
        } else {
            setIsDeleting(false);
        }
    };

    if (isLoading){
        return(
            <LoadingRow/>
        )
    }
    else return(
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

export default function MyProduct() {

    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        loadProducts();
    }, []);
    
    const loadProducts = async () => {
        try {
        setIsLoading(true);
        setError(null);
        const data = await fetchProducts();
        setProducts(data);
        } catch (error) {
        setError("An error occurred while fetching products.");
        console.error(error);
        }
        finally{
        setIsLoading(false);
        }
    };

    return(
        <div className="flex flex-col w-screen bg-slate-100 items-center">
            <div className="flex flex-col w-21/32">
                <div className="flex justify-between items-center">
                    <div className="text-3xl font-bold p-2 my-1">
                        <h1>Produk Revo Shop</h1>
                    </div>
                    <button className="cursor-pointer flex flex-col justify-center items-center" onClick={() => router.push("/my-product/new")} type="button">
                        <div className="bg-emerald-600 text-md rounded-md text-white font-bold flex justify-center items-center p-2">
                            <div className="text-xl">
                                Tambah Produk
                            </div>
                        </div>
                    </button>
                </div>
                <div className="flex gap-4 p-4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex bg-white text-slate-100 w-full h-[48px] rounded-t-xl justify-center items-center select-none">
                            TOP
                        </div>
                        {error ? (
                            <div>
                                <div className="flex flex-col bg-white w-full h-[176px] gap-2 text-center items-center">
                                    Something Went Wrong
                                </div>
                                <div>{error}</div>
                            </div>
                        ) : ( products.map(product => (
                                        <ProductRow 
                                        key={product.id}
                                        product={product}
                                        isLoading={isLoading}
                                    />
                                    )))}
                        <div className="flex bg-white text-slate-100 w-full h-[48px] rounded-b-xl justify-center items-center select-none">
                            BOTTOM
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}