"use client"
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';



import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { motion } from "framer-motion";
import Image from 'next/image';

type SwiperSlide = {
    image: string;
    title: string;
    description: string;
    bg: string;
  };
  
  type Props = {
    slides: SwiperSlide[];
    title: string;
  };


export default function SlideTwo({ slides, title }: Props) {

  return (
    <motion.div
    initial={{ opacity: 0, y: 400 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: false }}
     className="pt-14 ">
      <div className="app-layout">
        <div className="p-4  ">
          <h1 className="secondary-title font-medium py-2 pb-5 text-center text-white">
            {title}
          </h1>
        </div>
      </div>
      <div className="relative py-8   mx-2">
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        speed={200}
        modules={[Navigation,HashNavigation]}
        className="mySwiper3"
        navigation={{
          prevEl: `#prev_slide5`,
          nextEl: `#next_slide5`,
        }}
      >
          {slides.map((data, i) => (
            <SwiperSlide key={i} className="">
              <div className="!flex !flex-col group w-full bg-red-200 relative min-h-[550px] rounded-md">
                <Image
                  src="/p1.jpg"
                  alt="Server"
                  width={900}
                  height={900}
                  className="object-cover w-full h-full  group-hover:scale-110 duration-300 group-hover:brightness-[70%] "
                />
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4))",
                  }}
                  className="absolute inset-0 o"
                ></div>
                <div className="absolute w-full group h-full flex flex-col justify-end   p-8   ">
                  <div className={`w-[30px] h-[5px] ${data.bg}  `}></div>
                  <h4 className=" font-[400] text-white">
                    {data.title}
                  </h4>
                  <p className=" h-[0%] opacity-[0%] group-hover:mt-7 group-hover:mb-3 group-hover:h-[25%] group-hover:opacity-[100%] duration-300 text-white  ">
                    {data.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        <button
            id={`next_slide5`}
            className="p-2 absolute text-black right-[25px] z-50 top-1/2 group rounded-full bg-white  backdrop-blur-sm"
          >
            <RxCaretRight size={32} className="transform group-hover:translate-x-[3px] duration-300" />
          </button>
          <button
            id={`prev_slide5`}
            className="p-2 absolute text-black left-[25px] z-50 top-1/2 group rounded-full bg-white  backdrop-blur-sm"
          >
            <RxCaretLeft size={32} className="transform group-hover:translate-x-[-3px] duration-300" />
          </button>
      </Swiper>

      </div>
      </motion.div>
  );
}
