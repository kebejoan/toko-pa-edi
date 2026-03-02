import Link from "next/link";

export default function CheckoutPage() {
    return (
            <main className="my-12 flex flex-col gap-4 justify-center items-center">
                <div className=" h-[48px]">
                    <Link href="../../">
                        <img src="../tokopaedi-full.png" alt="tokopaedi" className="h-full w-full object-contain"/>
                    </Link>
                </div>
                <div className="flex flex-col gap-4 w-[640px] text-center outline-black p-4">
                    <div>
                        <img src="../checkout.png" alt="login-mascot" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-screen justify-center text-center outline-black">
                    <h1 className="text-5xl font-bold">
                        Yeay! Terimakasih sudah belanja di Tokopaedi!
                    </h1>
                    <div className="flex gap-4 justify-center items-center w-screen">
                        <div className="text-3xl">
                            Segera lakukan pembayaran untuk melanjutkan transaksimu
                        </div>
                        <div className="text-4xl font-bold">
                            atau
                        </div>
                        <div className="text-3xl">
                            cari barang lagi di 
                        </div>
                        <Link href="../../">
                            <img src="../tokopaedi-full.png" alt="tokopaedi" className=" h-full w-[160px] object-contain"/>
                        </Link>
                        <div className="text-3xl">
                            yuk!
                        </div>
                    </div>
                    
                </div>
            </main>
    );
}