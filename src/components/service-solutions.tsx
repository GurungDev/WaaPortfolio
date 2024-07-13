"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HashNavigation, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useEffect, useState } from "react";

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

export default function ServiceSolutions({ slides, title }: Props) {
  const [loop, setLoop] = useState(false);
  useEffect(() => {
    slides.length <= 6 ? setLoop(false) : setLoop(true);
  }, [slides.length]);
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
          id="slider1"
          className="slider6"
          loop={loop}
          preventClicks={false}
          centeredSlides
          preventClicksPropagation={false}
          navigation={{
            prevEl: `#prev_slide5`,
            nextEl: `#next_slide5`,
          }}
          modules={[Navigation, HashNavigation]}
          speed={200}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            380: {
              slidesPerView: 1.2,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 1.3,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 8,
            },
            750: {
              slidesPerView: 2.2,
              spaceBetween: 16,
            },
            976: {
              slidesPerView: 2.3,
              spaceBetween: 16,
            },
            1050: {
              slidesPerView: 2.8,
              spaceBetween: 20,
            },
            1080: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            1130: {
              slidesPerView: 3.4,
              spaceBetween: 8,
              loop: loop,
            },
            1800: {
              slidesPerView: 4,
              spaceBetween: 16,
              loop: false,
            },
          }}
        >
          {slides.map((data, i) => (
            <SwiperSlide key={i} className="z-[49]">
              <div className="!flex !flex-col group !items-center !justify-center max-w-[400px] bg-red-200 relative min-h-[550px] rounded-md overflow-hidden ">
                <Image
                  src={data.image}
                  alt="Server"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full absolute group-hover:scale-110 duration-300 group-hover:brightness-[70%] "
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
