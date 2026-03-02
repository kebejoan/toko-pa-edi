import { LoadingFormProduct } from "@/app/components/ProductForm";

export default function LoadingEditProduct() {

    return (
        <div className="flex flex-col w-screen bg-slate-100 items-center animate-pulse">
            <div className="flex flex-col w-21/32">
                {/* Header */}
                <div className="text-3xl font-bold p-2 my-1">
                <div className="bg-slate-300 h-8 w-40 rounded" />
                </div>

                <div className="flex gap-4 p-4 w-full">
                <div className="flex flex-col gap-2 w-full">
                    {/* Top bar (h-[48px]) */}
                    <div className="flex bg-white text-slate-100 w-full h-[48px] rounded-t-xl justify-center items-center">
                    <div className="bg-slate-200 h-4 w-24 rounded" />
                    </div>

                    {/* Product Card (h-[176px]) */}
                    <div className="flex flex-col bg-white w-full h-[176px] gap-2">
                    <div className="font-bold px-8 py-2.5">
                        <div className="bg-slate-200 h-4 w-24 rounded" />
                    </div>

                    <div className="flex bg-white w-full justify-center items-center">
                        <div className="flex flex-col w-full">
                        <div className="flex justify-between w-full px-8">
                            {/* Left side: image + text */}
                            <div className="flex justify-start gap-4">
                            {/* Image box: w-[72px] h-[72px] */}
                            <div className="bg-gray-300 w-[72px] h-[72px] rounded-md" />
                            {/* Text info */}
                            <div className="flex flex-col gap-1">
                                <div className="bg-slate-300 h-4 w-48 rounded" />
                                <div className="bg-slate-200 h-3 w-64 rounded" />
                                <div className="bg-slate-100 h-3 w-32 rounded" />
                            </div>
                            </div>

                            {/* Right side: price info */}
                            <div className="flex flex-col items-end">
                            <div className="bg-slate-300 h-4 w-20 rounded" />
                            <div className="bg-slate-200 h-3 w-16 rounded mt-1" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Bottom action bar */}
                    <div className="flex flex-col bg-white text-black gap-2 w-full p-4 justify-center items-center select-none rounded-b-xl">
                    <div className="bg-slate-200 h-4 w-24 rounded" />
                        <LoadingFormProduct />
                    </div>
                </div>
                </div>
            </div>
            </div>

    );

};