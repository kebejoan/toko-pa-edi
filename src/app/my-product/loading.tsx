function LoadingRow(){
    return(
        <div className="flex flex-col bg-white w-full h-[176px] gap-2">
            <div className="font-bold px-8 py-2.5 w-1/5 ">
                <div>
                    <div className="bg-slate-200 w-1/2 h-[20px] rounded-2xl"></div>
                </div>
            </div>
            <div className="flex bg-white w-full justify-center items-center">
                <div className="flex flex-col w-full">
                    <div className="flex justify-between w-full px-8">
                        <div className="flex justify-start gap-4 w-full">
                            <div className="bg-slate-400 w-[72px] h-[72px] rounded-md text-center">
                            
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="bg-slate-400 w-[144px] h-[20px] rounded-2xl"></div>
                                <div className="bg-slate-200 w-[120px] h-[20px] rounded-2xl"></div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <div className="text-lg font-bold">
                                <div className="bg-slate-200 w-[144px] h-[20px] rounded-2xl"></div>
                            </div>
                            <div className="text-red-500 line-through">
                                <div className="bg-red-200 w-[120px] h-[20px] rounded-2xl"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end px-8 gap-2">
                        <div className={`flex flex-col justify-center items-center cursor-none`}>
                            <div>
                                <div className="bg-red-200 w-[80px] h-[32px] rounded-2xl">
                                    
                                </div>
                            </div>
                        </div>
                        <div className={`flex flex-col justify-center items-center cursor-none`}>
                            <div>
                                <div className="bg-emerald-200 w-[80px] h-[32px] rounded-2xl">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function LoadingMyProductPage() {
    return (
        <div className="flex flex-col w-screen bg-slate-100 items-center">
            <div className="flex flex-col w-21/32">
                <div className="flex justify-between items-center w-full">
                    <div className="text-3xl font-bold p-2 my-1 w-1/3 h-[50px] bg-slate-300 rounded-md">
                        
                    </div>
                    <div className="bg-emerald-200 text-md rounded-md text-white font-bold flex justify-center items-center p-2 w-1/7 h-[44px]">
                    
                    </div>
                </div>
                <div className="flex gap-4 p-4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex bg-white text-slate-300 w-full h-[48px] rounded-t-xl justify-center items-center select-none">
                            <div className="bg-slate-200 w-9/10 h-[20px] rounded-2xl">
                                    
                            </div>
                        </div>
                        <LoadingRow />
                        <LoadingRow />
                        <LoadingRow />
                        <div className="flex bg-white text-slate-100 w-full h-[48px] rounded-b-xl justify-center items-center select-none">
                            BOTTOM
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}