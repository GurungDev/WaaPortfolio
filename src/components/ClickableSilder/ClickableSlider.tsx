"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Lottie from "lottie-react";
import a4 from "@/animation/a4.json"
import Image from "next/image";

type SlideData = {
  icon: JSX.Element;
  label: string;
  text_color: string;
  bg_color: string;
  image: string;
  subpoints: string[];
};

type Props = {
  title: string;
  slides: SlideData[];
};

const ClickablePaginationSlider = ({ title, slides }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const progressCircle = useRef<SVGSVGElement>(null);
  const progressLine = useRef<HTMLDivElement>(null);

  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (_: unknown, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const progressBarLine = (_: unknown, progress: number) => {
    if (progressLine.current) {
      progressLine.current.style.setProperty(
        "--progressline",
        `${1 - progress}`
      );
    }
  };

  return (
    <div className=" py-20">
      <h2 className="w-full h-full font-[700] flex items-center justify-center  p-9 text-black">
        {title}
      </h2>
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={0}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="swiper1 mySwiper1 cursor-pointer bg-transparent app-layout "
        style={{
          height: "15vh",
        }}
        autoplay={{
          delay: 5000, // 5 seconds
          disableOnInteraction: false,
        }}
        
        onAutoplayTimeLeft={progressBarLine}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className=" flex flex-col justify-center items-center relative"
          >
            <div className="h-full flex-col w-full justify-center items-center text-center">
              <p className="text-center flex justify-center items-center">
                {slide.icon}
              </p>
              <p className="font-semibold text-black">{slide.label}</p>
              <div className={`progressBar w-0 ${slide.bg_color}`}>
                <div className="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Thumbs]}
        className="swiper1 mySwiper2 "
        autoplay={{
          delay: 5000, // 5 seconds
          disableOnInteraction: false,
        }}
        loop={true}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex w-full flex-col min-[1100px]:flex-row px-6 justify-center items-center space-x-2">
              <div className="flex order-2 min-[1100px]:order-1 flex-col space-y-6 min-[1100px]:w-[40%] text-left p-8">
                <div className="">
                  {slide.subpoints.map((subpoint, subIndex) => (
                    <div className="p-2" key={subIndex}>
                      {subIndex == 0 || subIndex == 2 ? (
                        <h3
                          className={`${
                            subIndex == 0 || subIndex == 2
                              ? ` font-semibold ${slide.text_color}`
                              : `   mb-3`
                          } text-black`}
                        >
                          {subpoint}
                        </h3>
                      ) : (
                        <p className="text-black">{subpoint}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-2 order-1 min-[1100px]:order-2 py-4 md:w-[60%] min-[1100px]:w-[30%]">
                <Lottie animationData={a4} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClickablePaginationSlider;
