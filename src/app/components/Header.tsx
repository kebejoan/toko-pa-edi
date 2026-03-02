"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useCart } from "@/context/CartContext";


// function HeaderUnderside(){
//     return (
//         <div className="bg-white w-full">
//             Underside
//         </div>
//     );
// }

export function TopHeader(){
    return (
        <div data-testid="top-header" className="flex justify-between items-center bg-slate-100 w-full h-[32px] px-2">
            <div className="flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-[40px] w-[40px]">
                <path d="M304.576 119.703h-97.148c-18.358 0-33.247 11.434-33.247 25.54v221.509c0 14.106 14.89 25.545 33.247 25.545h97.148c18.359 0 33.243-11.44 33.243-25.545V145.243c0-14.111-14.884-25.54-33.243-25.54zm-73.68 13.752h50.213v14.115h-50.213zm42.132 242.629h-34.05v-14.116h34.05zm44.025-31.51H194.947V163.39h122.106z" data-name="Smart Phone 02"/>
                </svg>
                <b>
                    Gratis ongkir + banyak promo  
                </b>
                <p>    
                    belanja di Aplikasi!
                </p>
            </div>
            <div className="text-sm text-neutral-500 px-2">
                <ul className="flex gap-8">
                    <li className="hover:text-green-600 transition-all">
                        <Link href="../future">
                            Tentang Tokopaedi
                        </Link>
                    </li>
                    <li className="hover:text-green-600 transition-all">
                        <Link href="../faq">
                            FAQ
                        </Link>
                    </li>
                    <li className="hover:text-green-600 transition-all">
                        <Link href="../future">
                            Karir
                        </Link>
                    </li>
                    <li className="hover:text-green-600 transition-all">
                        <Link href="../future">
                            Masukan
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export function MainHeader(){

    const { data: session, status } = useSession({ required: false });
    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [searchFocus, setSearchFocus] = useState(false);
    const { totalItems } = useCart();

    useEffect( () => {
        if (status === "unauthenticated") {
            setIsAdmin(false);
            setIsAuth(false);
        } else if (status === "authenticated") {
            if (session.user.role === "admin") {
                setIsAdmin(true);
            }
            setIsAuth(true);
        }
        if (status === "loading") {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }

    }, [status]);

    const handleSignOut = () => {
        signOut({callbackUrl: "/"});
    }

    return(
        <div data-testid="main-header" className="flex justify-between items-center p-4 h-[80px] w-full">
            <div className="w-1/8 p-4">
                <div className="flex justify-center">
                    <Link href="../../">                    
                        <img src="../../tokopaedi-full.png" alt="tokopaedi" className="h-[34px]" />
                    </Link>
                </div>
            </div>
            <div className="w-3/4">
                <div>    
                    <div className="flex w-full items-center justify-start">
                        <div className="w-1/10 flex justify-end p-2">
                            <button>
                                Kategori
                            </button>
                        </div>
                        <div className={`flex items-center w-9/10 border border-neutral-300 rounded-md
                            ${searchFocus ? "outline-green-600 outline-1" : "hover:border-green-600"
                            }`}
                            >
                            <div className="px-2 flex justify-center">
                                <h2>
                                    <div className="h-[20px] w-[20px]">
                                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M6.57 1A5.57 5.57 0 1 1 1 6.57 5.57 5.57 0 0 1 6.57 1m0-1a6.57 6.57 0 1 0 6.57 6.57A6.57 6.57 0 0 0 6.57 0z"/>
                                        <path d="m10.031 11.447 1.415-1.414 4.193 4.193-1.415 1.414z"/>
                                        </svg>
                                    </div>
                                </h2>
                            </div>
                            <form action="" className="w-full">
                                <input 
                                type="text" 
                                placeholder="Cari di Toko Pak Edi" 
                                className="rounded-md px-2 py-1 w-full outline-0" 
                                onFocus= {() => setSearchFocus(true)} 
                                onBlur={() => setSearchFocus(false)}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            { isLoading ? (
                <div className="w-1/8 flex justify-end gap-4 items-center">
                <div className={isAuth ? "hidden" : ""}>
                    <div className="bg-gray-400 text-sm rounded-md text-white font-bold text-center p-2 shimmer">
                        Masuk
                    </div>
                </div>
                <div>
                    <div className=" shimmer">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-[25px] w-[25px]">
                                <path d="M8,3V7H21l-2,7H8v2H18a1,1,0,0,1,0,2H7a1,1,0,0,1-1-1V4H4A1,1,0,0,1,4,2H7A1,1,0,0,1,8,3ZM6,20.5A1.5,1.5,0,1,0,7.5,19,1.5,1.5,0,0,0,6,20.5Zm9,0A1.5,1.5,0,1,0,16.5,19,1.5,1.5,0,0,0,15,20.5Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-300 outline-1 outline-slate-400 h-[30px] w-[30px] rounded-full flex items-center justify-center select-none font-bold shimmer">

                </div>
            </div>
            ) : (
                <div className="w-1/8 flex justify-end gap-4 items-center">
                {isAuth ? (
                    <> 
                        {isAdmin ? (
                        <div data-testid="admin-button" className="">
                            <Link href="../../my-product">
                                <div 
                                className="bg-emerald-600 text-sm rounded-md text-white font-bold text-center p-2">
                                    Admin
                                </div>
                            </Link>
                        </div>
                        ) : (<> </>) }
                        <div data-testid="keluar-button" className="">
                            <button onClick={() => handleSignOut()} className="cursor-pointer">
                                <div className="bg-emerald-600 text-sm rounded-md text-white font-bold text-center p-2">
                                    Keluar
                                </div>
                            </button>
                        </div>
                    </>
                ):(
                    <div data-testid="masuk-button" className="">
                        <Link href="../../login">
                            <div 
                            className="bg-emerald-600 text-sm rounded-md text-white font-bold text-center p-2">
                                Masuk
                            </div>
                        </Link>
                    </div>
                )}
                    
                <div>
                    <Link href="../../my-cart">
                        <div className="flex flex-col items-center gap-y-0">
                            <div className = {isAuth ? "" : "hidden"}>
                                <div className="bg-red-500 text-[10px] rounded-full w-[16px] h-[16px] text-gray-300 font-bold text-center">
                                        {totalItems}
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-[25px] w-[25px]">
                                    <path d="M8,3V7H21l-2,7H8v2H18a1,1,0,0,1,0,2H7a1,1,0,0,1-1-1V4H4A1,1,0,0,1,4,2H7A1,1,0,0,1,8,3ZM6,20.5A1.5,1.5,0,1,0,7.5,19,1.5,1.5,0,0,0,6,20.5Zm9,0A1.5,1.5,0,1,0,16.5,19,1.5,1.5,0,0,0,15,20.5Z"/>
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
                <div>
                    <div className="bg-slate-300 outline-1 outline-slate-400 h-[30px] w-[30px] rounded-full flex items-center justify-center select-none font-bold overflow-hidden">
                        <img 
                        src={session?.user.avatar ?? "../../favicon.ico"}
                        className="w-full h-full object-cover"
                        alt="ava" />
                    </div>
                </div>
            </div>
            )}
            
        </div>
    );
}

export default function HeaderToko() {

    return (
        <>
            <header className="bg-white outline-1 outline-slate-100 sticky top-0 z-9999 mb-2">
                <TopHeader />
                <MainHeader />
            </header>
        </>
    );
}