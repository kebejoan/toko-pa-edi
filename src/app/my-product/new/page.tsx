import { fetchCategories } from "@/app/services/API";
import { Category, productNull } from '@/types/types';
import ProductForm from "@/app/components/ProductForm";


export default async function EditProduct() {

    const categories: Category[] = await fetchCategories();

    return (
        <div className="flex flex-col w-screen bg-slate-100 items-center">
            <div className="flex flex-col w-21/32">
                <div className="text-3xl font-bold p-2 my-1">
                    <h1>Tambah Produk</h1>
                </div>
                <div className="flex gap-4 p-4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex flex-col bg-white text-black gap-2 w-full p-4 justify-center items-center select-none rounded-b-xl">
                            <ProductForm product={productNull} categories={categories} isEdit={false}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}