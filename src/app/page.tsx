"use client"
import BigGrid from "@/components/BigGrid";
import ClickablePaginationSlider from "@/components/ClickableSilder/ClickableSlider";
import HeroSectionComponent from "@/components/HeroSection";
// import ServiceSolutions from "@/components/service-solutions";
import SlideTwo from "@/components/SliderTwo/SliderTwo";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

import { FaCartShopping } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { LiaGlobeEuropeSolid } from "react-icons/lia";
import { MdPeopleAlt, MdSell } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";


import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { FaGifts, FaHandHoldingHeart } from "react-icons/fa";

export default function Home() {


  const [isScrolled, setIsScrolled] = useState(false);

  const [heroSectionRef, setheroSectionRef] = useState<HTMLElement | null>(null);
  const [serviceSliderRef, setserviceSliderRef] = useState<HTMLElement | null>(null);
  const [bigGridRef, setbigGridRef] = useState<HTMLElement | null>(null);
  const [clickableSliderRef, setclickableSliderRef] = useState<HTMLElement | null>(null);

  const { ref: refHeroSection, inView: inViewHeroSection } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setheroSectionRef(entry.target);
      }
    }
  });

  const { ref: refserviceSliderRef, inView: inViewServiceSlider} = useInView({
    threshold: 0.75,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setserviceSliderRef(entry.target);
      }
      if (inView && entry.target) {
        entry.target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  const { ref: refBigGrid, inView: inViewBigGrid } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setbigGridRef(entry.target);
      }
    }
  });



  const { ref: refClickableSliderRef, inView: inViewClickableSlider } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setclickableSliderRef(entry.target);
      }
    }
  });
  
  const scrollToSection = (ref: HTMLElement | null) => {
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  

  const slides = [
    {
      icon: <MdSell className="text-3xl text-green-400" />,
      label: "Sales",
      text_color: "text-green-400",
      bg_color: "bg-green-400",
      image: "/assets/img/sales.jpg",
      subpoints: [
        "Drive more revenue",
        "Quickly book time to solve customers’ needs and help them self-serve to support their goals.",
        "Speed up your sales cycle",
        "Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle.",
        "Close more deals",
        "Change the way you schedule meetings to increase customer satisfaction and keep engagement high with reminder and follow-up workflows."
      ],
    },
    {
      icon: <FaCartShopping className="text-3xl text-blue-400" />,
      label: "Marketing",
      text_color: "text-blue-400",
      bg_color: "bg-blue-400",
      image: "/assets/img/marketing.avif",
      subpoints: [
        "Drive more revenue",
        "Quickly book time to solve customers’ needs and help them self-serve to support their goals.",
        "Speed up your sales cycle",
        "Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle.",
        "Close more deals",
        "Change the way you schedule meetings to increase customer satisfaction and keep engagement high with reminder and follow-up workflows."
      ],
    },
    {
      icon: <IoIosPeople className="text-3xl text-red-500" />,
      label: "Customer Hope",
      text_color: "text-red-400",
      bg_color: "bg-red-400",
      image: "/assets/img/hope.jpg",
      subpoints: [
        "Drive more revenue",
        "Quickly book time to solve customers’ needs and help them self-serve to support their goals.",
        "Speed up your sales cycle",
        "Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle.",
        "Close more deals",
        "Change the way you schedule meetings to increase customer satisfaction and keep engagement high with reminder and follow-up workflows."
      ],
    },
    {
      icon: <LiaGlobeEuropeSolid className="text-3xl text-green-900" />,
      label: "Networks",
      text_color: "text-green-800",
      bg_color: "bg-green-800",
      image: "/assets/img/network.webp",
      subpoints: [
        "Drive more revenue",
        "Quickly book time to solve customers’ needs and help them self-serve to support their goals.",
        "Speed up your sales cycle",
        "Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle.",
        "Close more deals",
        "Change the way you schedule meetings to increase customer satisfaction and keep engagement high with reminder and follow-up workflows."
      ],
    },
    {
      icon: <RiTeamFill className="text-3xl text-black" />,
      label: "Teams",
      text_color: "text-black",
      bg_color: "bg-black",
      image: "/assets/img/teams.jpg",
      subpoints: [
        "Drive more revenue",
        "Speed up your sales cycle",
        "Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle.",
        "Quickly book time to solve customers’ needs and help them self-serve to support their goals.",
        "Close more deals",
        "Change the way you schedule meetings to increase customer satisfaction and keep engagement high with reminder and follow-up workflows."
      ],
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="flex flex-col w-full h-full">
      <div ref={refHeroSection}>
        <HeroSectionComponent />
      </div>
      <div ref={refserviceSliderRef}>
        <SlideTwo
          title={"Our Web Technologies Services"}
          slides={[
            {
              image: "/p1.jpg",
              title: "Custom Web Development",
              bg: "bg-blue-400",
              description:
                "Create bespoke web solutions tailored to your business needs, from simple websites to complex web applications.",
            },
            {
              image: "/p1.jpg",
              title: "UX/UI Design",
              bg: "bg-green-400",
              description:
                "Design user-centric interfaces and experiences that enhance usability and engagement, ensuring a seamless user journey.",
            },
            {
              image: "/p1.jpg",
              title: "SEO Optimization",
              bg: "bg-orange-400",
              description:
                "Improve your website’s visibility on search engines with comprehensive SEO strategies that drive organic traffic and increase rankings.",
            },
            {
              image: "/p1.jpg",
              title: "E-commerce Solutions",
              bg: "bg-purple-400",
              description:
                "Develop and optimize e-commerce platforms that provide smooth shopping experiences, integrate payment gateways, and manage inventory efficiently.",
            },
            {
              image: "/p1.jpg",
              title: "Web Maintenance",
              bg: "bg-red-400",
              description:
                "Ensure your website runs smoothly with ongoing maintenance services that address bugs, update content, and enhance performance.",
            },
            {
              image: "/p1.jpg",
              title: "Web Analytics",
              bg: "bg-teal-400",
              description:
                "Leverage data insights to track user behavior, measure website performance, and make data-driven decisions for continuous improvement.",
            },
          ]}
        />
      </div>
      <div ref={refBigGrid} className="w-full h-full">
            <BigGrid/>
      </div>
      <div ref={refClickableSliderRef} className="h-full w-full bg-white">
      <ClickablePaginationSlider
      title={"Our Web Technologies Services"}
      slides={slides}
    />
      </div>
      <div className="flex fixed bottom-0 right-0 mb-16 mr-5 z-[8888] onScreenPageNav">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : -100 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          className={`fixed space-y-3 text-left flex items-center justify-center flex-col bottom-0 right-0 mb-16 px-3 py-4 text-white text-lg bg-black bg-opacity-40 mr-5 rounded-lg transition-opacity duration-300 ${isScrolled ? 'opacity-100 text-lg' : 'opacity-0'}`}
        >
          <button className={`md:text-lg ${inViewHeroSection ? 'scale-125 text-red-400 font-semibold' : ''}`} onClick={() => scrollToSection(heroSectionRef)}>
          <HoverCard>
              <HoverCardTrigger className='cursor-pointer hover:scale-105'><MdPeopleAlt size={24}/></HoverCardTrigger>
              {/* <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center bg-black bg-opacity-75 cursor-pointer md:rounded-md md:left-8 md:mr-1'>
                  Hero Section
              </HoverCardContent> */}
            </HoverCard>
          </button>
          <button className={`md:text-lg ${inViewServiceSlider ? 'scale-125 text-green-400 font-semibold' : ''}`} onClick={() => scrollToSection(serviceSliderRef)}>
            <HoverCard>
              <HoverCardTrigger className='cursor-pointer hover:scale-105'><FaGifts size={24}/></HoverCardTrigger>
              {/* <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center bg-black bg-opacity-75 cursor-pointer md:rounded-md md:left-8 md:mr-1'>
                  Benefits
              </HoverCardContent> */}
            </HoverCard>
          </button>
          <button className={`md:text-lg ${inViewBigGrid ? 'scale-125 text-teal-400  font-semibold' : ''}`} onClick={() => scrollToSection(bigGridRef)}>
          <HoverCard>
              <HoverCardTrigger className='cursor-pointer hover:scale-105'><MdPeopleAlt size={24}/></HoverCardTrigger>
              {/* <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center bg-black bg-opacity-75 cursor-pointer md:rounded-md md:left-8 md:mr-1'>
                  Customers
              </HoverCardContent> */}
            </HoverCard>
          </button>
          <button className={`md:text-lg ${inViewClickableSlider ? 'scale-125 text-sky-400 font-semibold' : ''}`} onClick={() => scrollToSection(clickableSliderRef)}>
          <HoverCard>
              <HoverCardTrigger className='cursor-pointer hover:scale-105'><FaHandHoldingHeart size={24}/></HoverCardTrigger>
              {/* <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center bg-black bg-opacity-75 cursor-pointer md:rounded-md md:left-8 md:mr-1'>
                  Trust
              </HoverCardContent> */}
          </HoverCard>
            
          </button>

        </motion.div>
      </div>
    </main>
  );
}
