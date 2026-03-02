import { fetchProductBySlug } from "@/app/services/API";
import { Product } from '@/types/types';
import ProductPageWrapper from '@/app/components/ProductPageComponents';
import { ProductTree } from '@/app/components/ProductPageComponents';
import { notFound } from 'next/navigation';

export const revalidate = 15;

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps ) {

    const product: Product = await fetchProductBySlug((await params).slug); // this was so confusing. nextjs state that params should be a Promise

    if (!product || !product.title) {
        return notFound();
    } // for when the product is not found

    return (
        <div className="w-screen flex flex-col justify-center items-center py-4 my-4">
        <div className="w-5/8">
            <ProductTree />
        </div>
            <div className="w-5/8 flex justify-between">
                <ProductPageWrapper product={product} />
            </div>
        </div>
    );
}
