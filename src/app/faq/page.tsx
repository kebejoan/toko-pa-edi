import Link from "next/link";

function FaqSideBar(){
    return (
        <div className="flex flex-col items-end">
            <div className="outline-1 outline-neutral-300 hover:bg-neutral-200 px-4 py-1 w-full">
                <Link href="./future">
                    <h2>Tentang Kami</h2>
                </Link>
            </div>
            <div className="outline-1 outline-neutral-300 hover:bg-neutral-200 px-4 py-1 w-full">
                <Link href="./future">
                    <h2>Pemberitahuan Privasi</h2>
                </Link>
            </div>
            <div className="outline-1 outline-neutral-300 hover:bg-neutral-200 px-4 py-1 w-full">
                <Link href="./future">
                    <h2>Syarat & Ketentuan</h2>
                </Link>
            </div>
            <div className="outline-1 outline-neutral-300 hover:bg-neutral-200 px-4 py-1 w-full">
                <Link href="./future">
                    <h2>FAQ</h2>
                </Link>
            </div>
            <div className="outline-1 outline-neutral-300 hover:bg-neutral-200 px-4 py-1 w-full">
                <Link href="./future">
                    <h2>Kebijakan Kukis</h2>
                </Link>
            </div>
        </div>
    );
}

function FaqContent(){
    return (
        <div className="flex flex-col items-start gap-4 list-decimal list-inside">
            <div className="flex justify-center text-4xl font-bold py-4">
                <h2>Frequently Asked Questions</h2>
            </div>
            <div>
                Time : <p>{new Date().toLocaleString()}</p>
            </div>
            <h2 className="text-2xl font-bold py-2">
                Pertanyaan Seputar Data Pribadi di Toko Pak Edi
            </h2>
            <p >
                <b>1. Dimana saya bisa membaca dan memahami ketentuan perlindungan data pribadi saya di Tokopaedi?</b>
            </p>
            <p >Ketentuan perlindungan data pribadi anda di Tokopaedi dapat diakses melalui laman <a  href="https://www.tokopedia.com/privacy?lang=id"><u>Pemberitahuan Privasi</u></a>.</p>
            <p >Melalui Pemberitahuan Privasi, Tokopaedi telah mencantumkan informasi mengenai perlindungan data pribadi, termasuk informasi cara Tokopaedi memperoleh data pribadi anda, tujuan penggunaan data pribadi anda, tujuan pengungkapan data pribadi anda kepada pihak ketiga, hak anda sebagai pemilik data pribadi dan informasi lainnya yang anda butuhkan untuk memahami pemrosesan data pribadi anda di Tokopaedi.</p>
            <p >Anda dapat membaca bagian Ringkasan pada <a  href="https://www.tokopedia.com/privacy?lang=id"><u>Pemberitahuan Privasi</u></a> Tokopaedi untuk dapat memahami ketentuan perlindungan data pribadi Tokopaedi dengan lebih mudah dan cepat.</p>
            <p ></p>
            <p><b>2. Bagaimana Tokopaedi melindungi data pribadi saya untuk memastikan privasi saya tetap terjaga?</b></p>
            <p >Tokopaedi berkomitmen penuh dan akan melakukan upaya terbaiknya untuk melindungi data pribadi anda, seperti:</p>
            <ol className="list-decimal list-inside">
                <li >Memberikan transparansi terhadap pemrosesan data pribadi anda;</li>
                <li >Melakukan pengumpulan data pribadi anda yang hanya sesuai untuk pemenuhan layanan yang kami sediakan dan kami detilkan pada Pemberitahuan Privasi;</li>
                <li >Melakukan pemrosesan data pribadi anda hanya untuk tujuan yang telah kami sampaikan melalui <a  href="https://www.tokopedia.com/privacy?lang=id"><u>Pemberitahuan Privasi</u></a>; dan</li>
                <li >Melakukan pemrosesan data pribadi anda sesuai dengan persetujuan yang anda berikan kepada kami dan sesuai dengan batas-batas kewajaran</li>
            </ol>
            <p >Untuk memaksimalkan perlindungan data pribadi, anda juga dapat melakukan tindakan - tindakan pencegahan untuk melindungi akun pribadi dan membaca <a  href="https://www.tokopedia.com/help/browse/t-0054-akun-saya-st-1030-seputar-keamanan-akun"><u>cara mengamankan akun</u></a>.</p>
            <p ></p>
            <p><b>3. Apakah data pribadi saya akan diproses oleh Pihak Ketiga selain Tokopaedi?</b></p>
            <p >Kami selalu berupaya untuk menyediakan layanan terbaik kami kepada anda dan mungkin akan melibatkan Pihak Ketiga jika memang diperlukan. Oleh karena itu, sejauh mana relevan dengan layanan yang disediakan kepada anda, maka kami mungkin bekerja sama dengan pihak ketiga dan melakukan pengungkapan data pribadi anda untuk diproses oleh pihak ketiga dengan tujuan terbatas untuk penyediaan layanan sebagaimana kami detilkan dalam <a  href="https://www.tokopedia.com/privacy?lang=id"><u>Pemberitahuan Privasi</u></a></p>
            <p ></p>
            <p><b>4. Apa saja hak-hak saya terkait perlindungan data pribadi sebagai pengguna Tokopaedi?</b></p>
            <p >Sebagai pemilik data pribadi, anda berhak untuk:</p>
            <ol className="list-decimal list-inside">
            <li >Melakukan pengkinian data pribadi anda yang berada pada Tokopaedi.</li>
            <li >Meminta akses untuk memperoleh salinan data pribadi anda.</li>
            <li >Memohonkan penghapusan data pribadi anda.</li>
            <li >Menarik persetujuan anda terhadap pemrosesan data pribadi yang dilakukan oleh Tokopaedi.</li>
            <li >Mengajukan penghapusan akun anda di Tokopaedi</li>
            </ol>
            <p >Anda dapat mengajukan hak-hak anda diatas dengan cara menghubungi kami melalui <a  href="https://www.tokopedia.com/help"><u>Tokopaedi Care</u></a>.</p>
            <p ></p>
            <p><b>5. Apa saja perubahan yang terdapat pada Pemberitahuan Privasi ini dan Kapan perubahan ini mulai berlaku?</b></p>
            <p >Pada <a  href="https://www.tokopedia.com/privacy?lang=id"><u>Pemberitahuan Privasi</u></a> ini, Kami melakukan beberapa perubahan, yaitu:</p>
            <ol className="list-decimal list-inside">
            <li >Perubahan Judul  Istilah dari yang sebelumnya “Kebijakan Privasi” menjadi “Pemberitahuan Privasi” dilakukan sebagai bentuk harmonisasi pada platform Grup GoTo, sehingga seluruh platform pada Grup GoTo menggunakan istilah yang sama</li>
            <li >Perubahan tampilan  Kami mengubah tampilan yang semula statis menjadi format berlapis serta menambahkan bagian Ringkasan, agar pembaca lebih mudah untuk memahami Pemberitahuan Privasi ini dalam waktu singkat.</li>
            <li >Perubahan istilah-istilah  Perubahan istilah-istilah dalam Pemberitahuan Privasi ini, termasuk perubahan istilah Kebijakan Privasi menjadi Pemberitahuan Privasi, dilakukan dalam upaya melakukan penyelarasan dengan kebijakan privasi atau pemberitahuan privasi lainnya di Grup GoTo.</li>
            </ol>
            <p ><a  href="https://www.tokopedia.com/privacy?lang=id"><u>Pemberitahuan Privasi</u></a> Tokopaedi mulai berlaku sejak 2 Desember 2023.</p>
            <p ></p>
            <p><b>6. Apa hal yang baru muncul pada Pemberitahuan Privasi yang sebelumnya tidak ada pada versi sebelumnya?</b></p>
            <p >Hal yang baru diperkenalkan pada Pemberitahuan Privasi ini adalah bagian Ringkasan yang mempermudah anda untuk memahami Pemberitahuan Privasi ini dengan lebih mudah dan penyampaian informasi terkait pemrosesan Data Pribadi Anda yang mungkin Anda gunakan pada aplikasi GoTo lainnya.</p>
        </div>
    );
}
export const revalidate = 15;
export default function Faq() {
    
    return (
        <div className="flex flex-col py-4 my-4">
            {/* <div className="flex justify-center w-screen text-4xl font-bold m-4 p-4">
                <h2>Frequently Asked Questions</h2>
            </div> */}
            <div className="flex justify-center w-screen gap-8">
                <div className="w-1/5">
                    <FaqSideBar />
                </div>
                <div className="w-4/10">
                    <FaqContent />
                </div>
            </div>
        </div>
    );
}