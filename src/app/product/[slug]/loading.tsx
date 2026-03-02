function LoadingProductTree () {
    return (
        <div className="flex gap-2 p-2 w-ful">
            <div className="bg-slate-200 w-1/10 h-[20px] rounded-2xl shimmer"></div>
            <div className="bg-slate-200 w-1/10 h-[20px] rounded-2xl shimmer"></div>
            <div className="bg-slate-200 w-1/10 h-[20px] rounded-2xl shimmer"></div>
            <div className="bg-slate-200 w-1/10 h-[20px] rounded-2xl shimmer"></div>
        </div>
    );
}

function LoadingPictureCarousel () {
    return (
        <>
            <div className="w-7/20 flex flex-col p-4">
                <div className="flex w-full h-[375px] bg-slate-200 rounded-md overflow-hidden justify-center shimmer">

                </div>
                <div className="w-full py-4 flex gap-4 justify-start">
                    <div className="w-1/5 h-[80px] bg-slate-200 rounded-md outline-2 outline-white transition-all shimmer">
                        
                    </div>
                    <div className="w-1/5 h-[80px] bg-slate-200 rounded-md outline-2 outline-white transition-all shimmer">
                        
                    </div>
                    <div className="w-1/5 h-[80px] bg-slate-200 rounded-md outline-2 outline-white transition-all shimmer">
                        
                    </div>
                    <div className="w-1/5 h-[80px] bg-slate-200 rounded-md outline-2 outline-white transition-all shimmer">
                        
                    </div>
                    <div className="w-1/5 h-[80px] bg-slate-200 rounded-md outline-2 outline-white transition-all shimmer">
                        
                    </div>
                </div>
            </div>
        </>
    );
}

function LoadingProductContent () {
    return (
        <div className="w-8/20 p-2 m-2">
            <div className="flex flex-col gap-2">
                <div className="bg-slate-200 w-full h-[20px] rounded-2xl">

                </div>
                <div className="flex gap-2 text-neutral-300">
                    <div className="bg-slate-200 w-1/4 h-[20px] rounded-2xl "></div>
                    <div className="bg-slate-200 w-1/4 h-[20px] rounded-2xl "></div>
                    <div className="bg-slate-200 w-1/4 h-[20px] rounded-2xl "></div>
                </div>
                <div className="text-4xl font-bold ">
                    <div className="bg-slate-200 w-1/2 h-[20px] rounded-2xl "></div>
                </div>
                <div className="flex gap-2 text-neutral-300">
                    <div className="bg-slate-200 w-1/3 h-[20px] rounded-2xl "></div>
                    <div className="bg-slate-200 w-1/3 h-[20px] rounded-2xl "></div>
                </div>
                <div className="border-t-1 border-neutral-200 w-9/10 flex gap-2">
                    <div className="border-b-2 border-slate-200 w-full text-center h-[40px] flex items-center justify-start text-green-600 font-bold">
                        <div className="bg-slate-200 w-1/3 h-[20px] rounded-2xl "></div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="bg-slate-200 w-1/3 h-[20px] rounded-2xl "></div>
                    <div className="bg-slate-200 w-1/3 h-[20px] rounded-2xl "></div>
                    <div className="bg-slate-200 w-1/3 h-[20px] rounded-2xl "></div>
                </div>
                <div className="border-t-1 border-neutral-200 w-9/10 flex gap-2">
                    <div className="border-b-2 border-slate-200 w-full text-center h-[40px] flex items-center justify-start text-green-600 font-bold">
                        <div className="bg-slate-200 w-1/3 h-[20px] rounded-2xl "></div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="bg-slate-200 w-1/2 h-[20px] rounded-2xl "></div>
                    <div className="bg-slate-200 w-1/2 h-[20px] rounded-2xl "></div>
                    <div className="bg-slate-200 w-4/5 h-[20px] rounded-2xl "></div>
                    <div className="bg-slate-200 w-4/5 h-[20px] rounded-2xl "></div>
                    <div className="bg-slate-200 w-2/5 h-[20px] rounded-2xl "></div>
                </div>
            </div>
        </div>
    );
}

function LoadingCheckoutFloat () {
    return (
        <div className="w-5/20 my-4 shimmer">
            <div className="flex flex-col gap-6 rounded-md w-full p-2">
                <div className="bg-slate-200 w-2/3 h-[20px] rounded-2xl"></div>
                <div className="flex gap-2 items-center">
                    <div className="bg-slate-200 w-1/2 h-[40px] rounded-2xl"></div>
                    <div className="bg-slate-200 w-1/2 h-[20px] rounded-2xl"></div>
                </div>
                <div className="flex justify-between items-end w-full">
                    <div className="bg-slate-200 w-1/3 h-[20px] rounded-2xl"></div>
                    <div className="flex flex-col gap-1 justify-end items-end w-full">
                        <div className="bg-slate-200 w-1/3 h-[15px] rounded-2xl"></div>
                        <div className="bg-slate-200 w-1/2 h-[15px] rounded-2xl"></div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="bg-slate-200 w-full h-[40px] rounded-2xl"></div>
                    <div className="bg-slate-200 w-full h-[40px] rounded-2xl"></div>
                </div>
                <div className="flex justify-center">
                    <div className="bg-slate-200 w-full h-[20px] rounded-2xl"></div>
                </div>
            </div>
        </div>
    );
}

export default function LoadingProductPage() {
    return (
        <>
            <div className="w-screen flex flex-col justify-center items-center py-4 my-4 ">
                <div className="w-5/8">
                    <LoadingProductTree />
                </div>
                <div className="w-5/8 flex justify-between">
                    <LoadingPictureCarousel />
                    <LoadingProductContent/>
                    <LoadingCheckoutFloat />
                </div>
            </div>
        </>
    );
}