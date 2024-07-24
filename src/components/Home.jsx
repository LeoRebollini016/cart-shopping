import React, { useState, useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
const Home = () => {
  const { getRandomProducts } = useContext(ProductContext);
  const [featuredProducts, setfeaturedProducts] = useState([]);
  useEffect(() => {
    const randomProducts = getRandomProducts(3);
    setfeaturedProducts(randomProducts);
  }, [getRandomProducts]);
  console.log(featuredProducts);
  return (
    <div>
      <h1 className="p-4 text-2xl font-bold mb-10">Productos destacados</h1>
      
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex flex-col items-center">
              <img
                src={product.image}
                className="h-48 w-full object-contain"
              ></img>
              <h1 className="font-bold text-xl">{product.title}</h1>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next custom-swiper-button"></div>
        <div className="swiper-button-prev custom-swiper-button"></div>
      </Swiper>
    </div>
  );
};
export default Home;
