'use client';
import { signIn } from "next-auth/react";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login(){

    // const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);


    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false
            });
            
            if (res?.ok){
                setLoading(false);
                // router.push("/");
                window.location.href = "/";
            }
        } catch (error) {
            setError("An unexpected error occurred");
            setLoading(false);
            console.error("Login error:", error);
        }
    }

    return(
        <div className="flex flex-col justify-center">
            <div className="my-4 h-[36px]">
                <Link href="../../">
                    <img src="../tokopaedi-full.png" alt="tokopaedi" className="h-full w-full object-contain"/>
                </Link>
            </div>
            <main className="my-12 flex gap-12 justify-center items-center">
                <div className="flex justify-center items-center inset-0 z-50 gap-4 w-[800px] text-center outline-black p-4">
                    <div>
                        <img src="../login.png" alt="login-mascot" />
                    </div>
                </div>
                <div className="fixed left-1/2 bottom-2/7 transform -translate-x-1/2 z-50">
                    <div className="inset-0 z-51 flex flex-col gap-4 w-[372px] justify-center items-center text-center outline-black">
                        <form onSubmit={handleSubmit} action="">
                            <div className="flex flex-col gap-2 justify-center m-2 shadow-[-0px_-0px_10px_#62748e] outline-1 outline-slate-100 w-full py-2 bg-white rounded-md">
                                <div className="flex flex-col gap-1 py-8">
                                    <div className="text-2xl font-bold">
                                        Masuk ke Tokopaedi
                                    </div>
                                    <div className="text-md">
                                        Belum punya akun Tokopaedi? <Link href="./future" className="text-emerald-600">Daftar Sekarang</Link>
                                    </div>
                                </div>
                                <div className="py-6">
                                    <div className="w-full p-4">
                                        <input 
                                        type="email" 
                                        placeholder="Email" 
                                        value = {email}
                                        onChange= {(e) => setEmail(e.target.value)}
                                        className="text-center outline-2 outline-slate-100 p-2 rounded-md w-full"
                                        />
                                    </div>
                                    <div className="w-full p-4">
                                        <input 
                                        type="password" 
                                        placeholder="Password" 
                                        value = {password}
                                        onChange = {(e) => setPassword(e.target.value)}
                                        className="text-center outline-2 outline-slate-100 p-2 rounded-md w-full"/>
                                    </div>
                                </div>
                                <div className="w-full p-4">
                                    {isLoading? (
                                        <div className="bg-slate-300 text-xl rounded-md text-white font-bold text-center p-4 cursor-not-allowed">
                                            <button>Masuk</button>
                                        </div>
                                    ) : (
                                        <div className="bg-emerald-600 text-xl rounded-md text-white font-bold text-center p-4 cursor-pointer">
                                            <button>Masuk</button>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <div className="flex flex-col gap-2text-sm">
                                        <p className="">
                                            To login, please use credentials from Platzi {' '}
                                            <a href="https://api.escuelajs.co/api/v1/users" className="text-emerald-600 font-bold underline" target="_blank">
                                                linked here
                                            </a>
                                        </p>
                                        <p>
                                            To access product edit, please login as admin.
                                        </p>
                                    </div>
                                {error && <div className="text-md text-red-500 p-2">
                                    Authentication Error : {error}. Please check again.
                                </div>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}