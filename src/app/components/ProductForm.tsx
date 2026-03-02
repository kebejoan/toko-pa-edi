'use client';

import { useEffect, useState } from "react";
import { Category, FormDataProduct, formDataProductNull, Product } from "../../types/types";
import { ConvertPrice } from "./Utils";
import { addProduct, updateProduct } from "../services/API";
import { useRouter } from "next/navigation";


interface ProductFormProps {
    product: Product,
    categories : Category[]
    isEdit : boolean
}

export function LoadingFormProduct(){

    return (
        <div className="w-full flex flex-col gap-6 items-center animate-pulse">
            {/* Images row (2 fixed skeletons) */}
            <div className="flex gap-4 w-full justify-center">
                <div className="bg-gray-300 w-[144px] h-[144px] rounded-md text-center overflow-hidden" />
                <div className="bg-gray-300 w-[144px] h-[144px] rounded-md text-center overflow-hidden" />
            </div>

            {/* Nama Barang */}
            <div className="flex flex-col gap-2 w-full h-[72px]">
                <div className="bg-slate-300 w-full h-5 rounded" />
                <div className="w-full h-[32px] bg-slate-200 rounded-md" />
            </div>

            {/* Harga */}
            <div className="flex flex-col gap-2 w-full h-[72px]">
                <div className="bg-slate-300 w-full h-5 rounded" />
                <div className="w-full h-[32px] bg-slate-200 rounded-md" />
            </div>

            {/* Link Gambar list (2 fixed skeleton rows) */}
            <div className="flex flex-col gap-2 w-full">
                <div className="bg-slate-300 w-full h-5 rounded" />
                <div className="flex flex-col gap-4 w-full">
                {/* Two fixed input skeleton rows */}
                <div className="flex gap-2 items-center w-full">
                    <div className="bg-slate-300 font-bold rounded w-6 h-6 flex justify-center items-center select-none">&nbsp;</div>
                    <div className="w-full h-[32px] bg-slate-200 rounded-md" />
                    <div className="bg-red-300 rounded-md h-[32px] w-10" />
                </div>
                <div className="flex gap-2 items-center w-full">
                    <div className="bg-slate-300 font-bold rounded w-6 h-6 flex justify-center items-center select-none">&nbsp;</div>
                    <div className="w-full h-[32px] bg-slate-200 rounded-md" />
                    <div className="bg-red-300 rounded-md h-[32px] w-10" />
                </div>

                {/* Add new image input */}
                <div className="flex gap-2 items-center w-full">
                    <div className="bg-slate-300 font-bold rounded w-6 h-6 flex justify-center items-center select-none">&nbsp;</div>
                    <div className="w-full h-[32px] bg-slate-200 rounded-md" />
                    <div className="bg-emerald-300 rounded-md h-[32px] w-10" />
                </div>
                </div>
            </div>

            {/* Deskripsi */}
            <div className="flex flex-col gap-2 w-full">
                <div className="bg-slate-300 w-full h-5 rounded" />
                <div className="w-full h-[144px] bg-slate-200 rounded-md" />
            </div>

            {/* Kategori */}
            <div className="flex flex-col gap-2 w-full h-[72px]">
                <div className="bg-slate-300 w-full h-5 rounded" />
                <div className="w-full h-[32px] bg-slate-200 rounded-md" />
            </div>

            {/* Submit button */}
            <div className="flex justify-end w-full">
                <div className="bg-slate-400 rounded-md w-[96px] h-[32px]" />
            </div>
        </div>

    )
    
}

export default function ProductForm({ product, categories, isEdit}: ProductFormProps) {
    const Convert = new ConvertPrice();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [priceIDR, setPriceIDR] = useState<number>(0);
    const [newImage, setNewImage] = useState<string>("");
    const [formData, setFormData] = useState<FormDataProduct>(formDataProductNull);

    useEffect(() => {
        setFormData({
            title: product?.title || "Title",
            price: product?.price || "12",
            description: product?.description || "Description",
            images: product?.images || [],
            categoryId: product?.category.id || 1,
        });
        setPriceIDR(Convert.USDtoIDR(Number(product?.price)));
    }, [product]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const index = e.target.dataset.index;

        switch(name){
            case "title":
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    title: value
                }));
                break;
            case "description":
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    description: value
                }));
                break;
            case "price":
                setPriceIDR(Number(value));
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    price: Convert.IDRtoUSD(Number(value))
                }));
                break;
            case "category":
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    categoryId: Number(value)
                }));
                break;
            case "image-link":
                const updateImages = [...formData.images];
                updateImages[Number(index)] = value
                setFormData(prev => ({...prev, images: updateImages}))
                break;
            default:
                break;
            }
        }

    const handleAddImage = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            images: [...prevFormData.images, newImage]
        }));
    }

    const handleDeleteImage = (index: number) => {
        const keepedImages = formData.images.filter((_,i) => i !== index) //snippet from Mr. Himself's
        setFormData(prev => ({...prev, images: keepedImages}))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        if(isEdit){
            const response = await updateProduct(formData, product.id);
            if (response) {
                setIsSubmitting(false);
                router.push("/my-product");
            }
        } else {
            const response = await addProduct(formData);
            if (response) {
                setIsSubmitting(false);
                router.push("/my-product");
            }
        }
    };

    return (
        <>
            <form className="w-full flex flex-col gap-6 items-center" onSubmit={handleSubmit}>
                <div className="flex gap-4">
                    {formData.images.map((image, index) => {
                        return (
                            <div className="bg-gray-500 w-[144px] h-[144px] rounded-md text-center overflow-hidden" key={index}>
                                <img 
                                src={image? image === "" ? undefined : image : undefined} 
                                alt="product" 
                                className="h-full w-full object-cover"
                                />
                            </div>
                        )
                    })}
                </div>
                <div className="flex flex-col gap-2 w-full h-[72px]">
                    <label htmlFor="title"
                    className="text-md text-black w-full font-bold"
                    >Nama Barang</label>
                    <input 
                    name="title" 
                    type="text" 
                    className="w-full h-[32px] bg-slate-100 rounded-md focus:outline-emerald-600 px-2"
                    value={formData.title}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    />
                </div>
                <div className="flex flex-col gap-2 w-full h-[72px]">
                    <label htmlFor="price"
                    className="text-md text-black w-full font-bold"
                    >Harga (Rp)</label>
                    <input 
                    name="price" 
                    type="number" 
                    className="w-full h-[32px] bg-slate-100 rounded-md focus:outline-emerald-600 px-2"
                    value={priceIDR}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="image-link"
                    className="text-md text-black w-full font-bold"
                    >Link Gambar</label>
                    <div className="flex flex-col gap-4 w-full">
                        {formData.images.map((image, index) => {
                            return (
                                <div className="flex gap-2 items-center w-full" key={index}>
                                    <div className="font-bold">[{1 + index}]</div>
                                    <input 
                                    name="image-link" 
                                    type="text"
                                    data-index={index}
                                    className="w-full h-[32px] bg-slate-100 rounded-md focus:outline-emerald-600 px-2"
                                    value={image}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    />
                                    <button className="cursor-pointer flex flex-col justify-center items-center" onClick={() => handleDeleteImage(index)} type="button">
                                        <div className="bg-red-600 text-md rounded-md text-white font-bold h-[32px] flex justify-center items-center">
                                            <div className="px-4">
                                                x
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            )
                        })}
                        <div className="flex gap-2 items-center w-full" >
                            <div className="font-bold">[..]</div>
                            <input 
                            name="image-link" 
                            type="text"
                            data-index="0"
                            className="w-full h-[32px] bg-slate-100 rounded-md focus:outline-emerald-600 px-2"
                            value={newImage}
                            onChange={(e) => setNewImage(e.target.value)}
                            disabled={isSubmitting}
                            />
                            <button className="cursor-pointer flex flex-col justify-center items-center" disabled={formData.images.length >= 5} onClick={handleAddImage} type="button">
                                <div className={`text-md rounded-md text-white font-bold h-[32px] flex justify-center items-center ${formData.images.length >= 5 ? "cursor-not-allowed bg-slate-200" : "bg-emerald-600 cursor-pointer"}`}>
                                    <div className="px-4">
                                        +
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label 
                    htmlFor="description"
                    className="text-md text-black w-full font-bold"
                    >
                        Deskripsi
                    </label>
                    <textarea 
                    name="description"  
                    className="w-full h-[144px] bg-slate-100 rounded-md focus:outline-emerald-600 p-2"
                    value={formData.description}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    />
                </div>
                <div className="flex flex-col gap-2 w-full h-[72px]">
                    <label htmlFor="category"
                    className="text-md text-black w-full font-bold"
                    >Kategori</label>
                    <select 
                    name="category"  
                    className="w-full h-[32px] bg-slate-100 rounded-md hover:outline-emerald-600 hover:outline-2 px-2"
                    onChange={handleChange}
                    disabled={isSubmitting}
                    value={String(formData.categoryId)}
                    >
                        {/* <option defaultValue={"Pilih kategori"} value="" disabled>
                            {formData.category.name}
                        </option> */}
                        {categories.map((category) => (
                            <option key={category.id} value={String(category.id)}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-end w-full">
                    <button 
                    className={isSubmitting? "cursor-not-allowed bg-slate-400 rounded-md" : "cursor-pointer bg-emerald-600 rounded-md" }
                    type="submit">
                        <div className="text-md rounded-md text-white font-bold text-center h-[32px] px-2 flex justify-center items-center">
                            <div>
                                Submit
                            </div>
                        </div>
                    </button>
                </div>
            </form>
        </>
    );
};