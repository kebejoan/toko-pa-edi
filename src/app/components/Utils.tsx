import Link from "next/link";

export default function SubTitle({
    title = "Title",
    isActive,
    }: {
        title?: string;
        isActive: boolean;
    }) {
        return (
        <>
            <Link href="./future">
            <div
                className={
                isActive
                    ? 'text-green-600 font-bold'
                    : 'text-black hover:text-green-600 transition-all'
                }
            >
                {title}
                {isActive && (
                <div
                    data-testid="underline-wrapper"
                    className="flex justify-center w-full p-1"
                >
                    <div
                    role="presentation"
                    className="border-t-2 border-green-600 w-1/2"
                    />
                </div>
                )}
            </div>
            </Link>
        </>
        );
}

export function truncate (text: string, max: number = 40): string  {
    return text.length > max ? text.slice(0, max) + '...' : text;
}

export class ConvertPrice {
    constructor(){
    }

    public USDtoIDR(price: number){
        const USDtoIDR = price * 17000;
        return USDtoIDR;
    }

    public MarkedUpIDR(price : number){
        const markedUpIDR = this.USDtoIDR(price) * 1.4;
        return markedUpIDR;
    }

    public FormattedPrice (price : number){
        const formattedPrice = this.USDtoIDR(price).toLocaleString('id-ID', 
            {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }
        );
        return formattedPrice;
    }

    public MarkedUpPrice (price : number){
        const markedUpPrice = this.MarkedUpIDR(price).toLocaleString('id-ID',
            {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }
        );
        return markedUpPrice;
    }

    public IDRtoUSD (price : number){
        const IDRtoUSD = Math.floor(price / 17000);
        return Number(IDRtoUSD);
    }
    
}