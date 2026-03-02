'use client';
import { usePathname } from "next/navigation";
import { HeaderToko, FooterSection } from ".";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {

    const pathname = usePathname();
    const hideComponent = ['/login', '/register', '/my-cart/checkout'].includes(pathname);


    return (
        <>
            {!hideComponent && <HeaderToko />}
                { children }
            {!hideComponent && <FooterSection />}
        </>
    );
}