"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  image_url: string | null;
};


type Props = {
  products: Product[];
};


export default function FeaturesBottomSlider({ products }: Props) {

  return (

    <div className="relative">


      {/* Prev Button */}

      <button
        className="
        product-prev
        absolute
        left-0
        top-1/2
        z-20
        flex
        h-8
        w-8
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        bg-white
        text-xl
        text-[#0A2D24]
        shadow-md
        transition
        hover:bg-[#0A2D24]
        hover:text-white
        sm:h-10
        sm:w-10
        "
      >
        ‹
      </button>


      {/* Next Button */}

      <button
        className="
        product-next
        absolute
        right-0
        top-1/2
        z-20
        flex
        h-8
        w-8
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        bg-white
        text-xl
        text-[#0A2D24]
        shadow-md
        transition
        hover:bg-[#0A2D24]
        hover:text-white
        sm:h-10
        sm:w-10
        "
      >
        ›
      </button>



      <Swiper

        modules={[
          Navigation,
          Pagination
        ]}

        navigation={{
          prevEl:".product-prev",
          nextEl:".product-next"
        }}

        pagination={{
          clickable:true
        }}

        spaceBetween={14}

        className="productSwiper"

        breakpoints={{

          0:{
            slidesPerView:1.15,
            spaceBetween:12
          },

          390:{
            slidesPerView:1.35,
            spaceBetween:14
          },

          480:{
            slidesPerView:1.6,
            spaceBetween:16
          },

          640:{
            slidesPerView:2.2,
            spaceBetween:18
          },

          768:{
            slidesPerView:3,
            spaceBetween:20
          },

          1024:{
            slidesPerView:4,
            spaceBetween:22
          },

          1280:{
            slidesPerView:5,
            spaceBetween:24
          }

        }}

      >


        {
          products.map((product)=>(

            <SwiperSlide key={product.id}>


              <Link
                href={`/products/${product.slug}`}
                className="block"
              >


                <article
                  className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-green-700
                  hover:shadow-xl
                  "
                >


                  {/* Image */}

                  <div
                    className="
                    relative
                    h-40
                    overflow-hidden
                    bg-[#f7f5ef]
                    sm:h-48
                    "
                  >

                    <Image

                      src={
                        product.image_url ??
                        "/images/images1.jpg"
                      }

                      alt={product.name}

                      fill

                      sizes="(max-width:640px) 80vw,25vw"

                      className="
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-110
                      "

                    />


                    <span
                      className="
                      absolute
                      right-2
                      top-2
                      rounded-full
                      bg-white
                      px-2
                      py-1
                      text-[10px]
                      font-bold
                      text-[#0A2D24]
                      shadow
                      "
                    >
                      ⭐ 4.9
                    </span>


                  </div>



                  {/* Content */}

                  <div className="p-3 sm:p-4">


                    <h3
                      className="
                      line-clamp-2
                      min-h-[42px]
                      text-sm
                      font-black
                      text-[#0A2D24]
                      sm:text-base
                      "
                    >

                      {product.name}

                    </h3>



                    <div
                      className="
                      mt-4
                      flex
                      items-center
                      justify-between
                      "
                    >

                      <span
                        className="
                        text-sm
                        font-black
                        text-[#2f7d4a]
                        sm:text-lg
                        "
                      >
                        {product.price.toLocaleString()}
                      </span>


                      <span className="text-[10px] text-gray-500">
                        تومان
                      </span>


                    </div>



                    <div
                      className="
                      mt-3
                      rounded-lg
                      bg-[#0A2D24]
                      py-2
                      text-center
                      text-xs
                      font-bold
                      text-white
                      transition
                      hover:bg-[#2f7d4a]
                      sm:text-sm
                      "
                    >

                      مشاهده محصول

                    </div>


                  </div>


                </article>


              </Link>


            </SwiperSlide>

          ))
        }


      </Swiper>


    </div>

  );
}