import { fetchProducts } from "../services/API";
import { ProductRow } from "../components/ProductDashWrapper";
import Link from "next/link";

export const revalidate = 30;

export default async function MyProductWraper() {

    const products = await fetchProducts();

    return(
        <div className="flex flex-col w-screen bg-slate-100 items-center">
            <div className="flex flex-col w-21/32">
                <div className="flex justify-between items-center">
                    <div className="text-3xl font-bold p-2 my-1">
                        <h1>Produk Revo Shop</h1>
                    </div>
                    <Link href="../my-product/new">
                        <button className="cursor-pointer flex flex-col justify-center items-center" type="button">
                            <div className="bg-emerald-600 text-md rounded-md text-white font-bold flex justify-center items-center p-2">
                                <div className="text-xl">
                                    Tambah Produk
                                </div>
                            </div>
                        </button>
                    </Link>
                </div>
                <div className="flex gap-4 p-4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex bg-white text-slate-300 w-full h-[48px] rounded-t-xl justify-center items-center select-none">
                            This is ISR Page and revalidate in 30 s. If you don not see changes, wait 30s and then refresh the page (twice or thrice). ps: idk why this should be ISR in the requirement
                        </div>
                        {(products.map(product => (
                            <ProductRow 
                            key={product.id}
                            product={product}
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
