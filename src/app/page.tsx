"use client";

import CardComponent from "./components/Card";
import {LoadingCardComponent} from "./components/Card";
import SubTitle from "./components/Utils";
import { Product, ArrayProduct } from "../types/types";
import { fetchProducts } from "./services/API";
import { useEffect, useState } from "react";

//swiper for hero section banner
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const banners = [
  "/hero-1.jpg",
  "/hero-2.jpg",
  "/hero-3.jpg",
];

function HeroSection(){
  return (
    <>
      <div className="w-full flex justify-center my-4">
        <div className="w-14/20 h-[325px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full h-full rounded-2xl"
          >
            {banners.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[325px]">
                  <Image
                    src={src}
                    alt={`banner-${index}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

function ProductSection({products, isLoading}: ArrayProduct){
  return (
    <section className="bg-white">
      <div className="flex justify-start text-md my-4 gap-8">
          <SubTitle title="All Product" isActive={true} />
          <SubTitle title="For Me" isActive={false} />
          <SubTitle title="Trending Stuff" isActive={false} />
          <SubTitle title="I'm Feeling Lucky" isActive={false} />
      </div>
      <div className="grid grid-cols-6 gap-4">
      {isLoading ? (
          <>
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
            <LoadingCardComponent />
          </>
        ) : (
          <>
              {products.map(product => (
                <CardComponent 
                  key={product.id}
                  product={product}
                />
              ))}
          </>
        )
      }
      </div>
    </section>
  );
}

export default function Home() {

  
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      setError("An error occurred while fetching products.");
      console.error(error);
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      {error? (
        <>
          <h1>Something went wrong</h1>
          <p>
            {error}
          </p>
        </>
      ) : (
        <ProductSection 
          products={products} 
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
