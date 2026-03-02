import { fetchCategories, fetchProductBySlug } from "@/app/services/API";
import { Category, Product } from '@/types/types';
import { notFound } from 'next/navigation';
import { truncate, ConvertPrice } from "@/app/components/Utils";
import ProductForm from "@/app/components/ProductForm";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function EditProduct( {  params }: PageProps ) {

    const product: Product = await fetchProductBySlug((await params).slug); // this was so confusing. nextjs state that params should be a Promise
    const categories: Category[] = await fetchCategories();
    const Convert = new ConvertPrice();
    const discountState = product.title.length % 2 === 0 ? true : false;
    
    if (!product || !product.title) {
        return notFound();
    }

    return (
        <div className="flex flex-col w-screen bg-slate-100 items-center">
            <div className="flex flex-col w-21/32">
                <div className="text-3xl font-bold p-2 my-1">
                    <h1>Edit Produk</h1>
                </div>
                <div className="flex gap-4 p-4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex bg-white text-slate-100 w-full h-[48px] rounded-t-xl justify-center items-center select-none">
                            
                        </div>
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
                                                <div className="font-bold">{truncate(product.title, 100)}</div>
                                                <div className="">{truncate(product.description, 150)}</div>
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
                        </div>
                        <div className="flex flex-col bg-white text-black gap-2 w-full p-4 justify-center items-center select-none rounded-b-xl">
                            <ProductForm product={product} categories={categories} isEdit={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}