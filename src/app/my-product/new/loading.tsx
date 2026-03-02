import { LoadingFormProduct } from "@/app/components/ProductForm"

export default function LoadingNewProduct() {
    return (
        <div className="flex flex-col w-screen bg-slate-100 items-center animate-pulse">
            <div className="flex flex-col w-21/32">
                <div className="text-3xl font-bold p-2 my-1">
                <div className="bg-slate-300 rounded w-40 h-10" />
                </div>
                <div className="flex gap-4 p-4 w-full">
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-col bg-white text-black gap-2 w-full p-4 justify-center items-center select-none rounded-b-xl">
                    <LoadingFormProduct />
                    <div className="w-full h-[300px] bg-slate-200 rounded" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}