"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import Image from 'next/image';

import './ClickableSlider.css';

type SlideData = {
  icon: JSX.Element;
  label: string;
  text_color: string;
  bg_color:string;
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
      progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const progressBarLine = (_: unknown, progress: number) => {
    if (progressLine.current) {
      progressLine.current.style.setProperty('--progressline', `${1 - progress}`);
    }
  };

  return (
    <div className=''>
      <div className="w-full h-full flex items-center justify-center md:text-3xl p-9 text-black">
        {title}
      </div>
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={0}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper cursor-pointer bg-transparent"
        style={{
          height: '15vh',
          width: '65vw',
          paddingLeft: '100px',
          paddingRight: '100px',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
        autoplay={{
          delay: 5000, // 5 seconds
          disableOnInteraction: false,
        }}
        loop={true}
        onAutoplayTimeLeft={progressBarLine}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex flex-col justify-center items-center relative">
            <div className="h-full flex-col w-full justify-center items-center text-center">
              <p className="text-center flex justify-center items-center">{slide.icon}</p>
              <p className="font-semibold text-black">{slide.label}</p>
              <div className={`progressBar w-0 ${slide.bg_color}`}>
                <div className='' />
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
        className="mySwiper2"
        style={{ height: '80vh', paddingLeft: '100px', paddingRight: '100px', paddingTop: "50px" }}
        autoplay={{
          delay: 5000, // 5 seconds
          disableOnInteraction: false,
        }}
        loop={true}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
          <div className="flex w-full h-full px-6 justify-center items-center space-x-2">
            <div className="flex flex-col space-y-6 w-1/2 text-left p-8">
              <div className=''>
                {slide.subpoints.map((subpoint, subIndex) => (
                  <div className='p-2' key={subIndex}>
                    <p className={`${subIndex % 2 === 0 ? `text-2xl font-semibold anton-sc-regular ${slide.text_color}` : ` text-xl mb-3`} text-black`}>{subpoint}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-2 py-4 h-[500px] w-1/2">
              <Image className="size-80" src={slide.image} alt={slide.label} height={1920} width={1080} />
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClickablePaginationSlider;
