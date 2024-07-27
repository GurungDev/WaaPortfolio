"use client";
import BigGrid from "@/components/BigGrid";
import ClickablePaginationSlider from "@/components/ClickableSilder/ClickableSlider";
import HeroSectionComponent from "@/components/HeroSection";
import SlideTwo from "@/components/SliderTwo/SliderTwo";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { BiSolidPackage } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { LiaGlobeEuropeSolid } from "react-icons/lia";
import { MdPeopleAlt, MdSell } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { PiStarThin } from "react-icons/pi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdDesignServices } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import i18next from '@/utils/i18n';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { FaGifts, FaHandHoldingHeart } from "react-icons/fa";
import ServiceSolutions from "@/components/service-solutions";
import TwoColumnParallax from "@/components/parallaxScroll/Parallaxscroll";
import Image from "next/image";
import Contact_us from "@/components/contact_us/Contact_us";
  
export default function Home() {

 

  const [isScrolled, setIsScrolled] = useState(false);

  const [heroSectionRef, setHeroSectionRef] = useState<HTMLElement | null>(
    null
  );
  const [serviceSliderRef, setServiceSliderRef] = useState<HTMLElement | null>(
    null
  );
  const [bigGridRef, setBigGriddyRef] = useState<HTMLElement | null>(null);
  const [contactRef, setContactRef] = useState<HTMLElement | null>(null);
  const [clickableSliderRef, setClickableSliderRef] =
    useState<HTMLElement | null>(null);

  const { ref: refHeroSection, inView: inViewHeroSection } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setHeroSectionRef(entry.target);
      }
    },
  });

  const { ref: refServiceSliderRef, inView: inViewServiceSlider } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setServiceSliderRef(entry.target);
      }
    },
  });

  const { ref: refBigGriddy, inView: inViewBigGrid } = useInView({
    threshold: 0.1,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setBigGriddyRef(entry.target);
      }
    },
  });

  const { ref: refClickableSliderRef, inView: inViewClickableSlider } =
    useInView({
      threshold: 0.5,
      onChange: (inView, entry) => {
        if (entry && entry.target instanceof HTMLElement) {
          setClickableSliderRef(entry.target);
        }
      },
    });

  const { ref: refContactSection, inView: inViewTeamSection } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (entry && entry.target instanceof HTMLElement) {
        setContactRef(entry.target);
      }
    },
  });

  const scrollToSection = (ref: HTMLElement | null) => {
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth" });
    }
  };




  const slides = [
    {
      icon: <BiSolidPackage size={25} className="text-3xl text-green-400" />,
      label: "Basic",
      text_color: "text-green-400",
      bg_color: "bg-green-400",
      image: "/assets/img/sales.jpg",
      subpoints: [
        "Description: ",
        "A static website suitable for showcasing information.",
        "Features:",
        "- 3-5 pages or a single landing page.",
        "- Responsive design ensuring the website looks good on all devices.",
        "- Basic SEO optimization.",
      ],
    },
    {
      icon: <BiSolidPackage size={33} className="text-3xl text-blue-400" />,
      label: "Medium",
      text_color: "text-blue-400",
      bg_color: "bg-blue-400",
      image: "/assets/img/marketing.avif",
      subpoints: [
        "Description: ",
        "A static website suitable for showcasing information.",
        "Features:",
        "- 4-7 pages or a single landing page.",
        "- Responsive design.",
        "- Enhanced SEO optimization.",
        "- Visually appealing UI design with animations.",
      ],
    },
    {
      icon: <BiSolidPackage size={38} className="text-3xl text-red-500" />,
      label: "Large",
      text_color: "text-red-400",
      bg_color: "bg-red-400",
      image: "/assets/img/hope.jpg",
      subpoints: [
        "Description: ",
        "A dynamic website with basic CRUD functionality.",
        "Features:",
        "- 5-7 pages including a landing page.",
        "- Responsive design and enhanced SEO optimization.",
        "- Basic CRUD operations (Create, Read, Update, Delete).",
        "- Backend support with a simple database (e.g., MongoDb, MySQL).",
        "- User authentication and login functionality.",
        "- Basic admin panel to manage content.",
        "- Contact form with email notifications.",
      ],
    },
    {
      icon: <BiSolidPackage size={43} className="text-3xl text-green-900" />,
      label: "Complex",
      text_color: "text-green-800",
      bg_color: "bg-green-800",
      image: "/assets/img/network.webp",
      subpoints: [
        "Description: ",
        "A website with advanced functionalities.",
        "Features:",
        "- 8-10 pages, including a landing page.",
        "- Responsive fast-loading design and advanced CRUD operations.",
        "- User authentication and roles management.",
        "- Advanced admin panel with analytics, reporting and integration with third-party services.",
        "- Enhanced UI/UX design,Advanced SEO.",
        "- Contact forms with database storage and email notifications.",
        "- Performance optimization and security measures.",
      ],
    },
    {
      icon: <BiSolidPackage size={48} className="text-3xl text-black" />,
      label: "Premium",
      text_color: "text-black",
      bg_color: "bg-black",
      image: "/assets/img/teams.jpg",
      subpoints: [
        "Description: ",
        "A highly customized website with complex functionalities.",
        "Features:",
        "- More than 10 pages including a landing page.",
        "- Highly responsive and fast-loading design.",
        "- Advanced CRUD operations with relational and/or NoSQL databases.",
        "- Scalable backend support and custom functionalities (e.g., e-commerce.) ",
        "- Advanced user authentication & roles and admin panel with analytics, reporting.",
        "- Third-party service integration and high quality UI/UX.",
        "- SEO & performance optimization and advanced contact forms security & compliance.",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col w-full h-full">
      <div id="home" ref={refHeroSection}>
        <HeroSectionComponent />
      </div>
      <div className="w-full h-full" id="services" ref={refServiceSliderRef}>
        <ServiceSolutions
          title={"Our Web Technologies Services"}
          slides={[
            {
              image: "/web.jpg",
              title: "Custom Web Development",
              bg: "bg-blue-400",
              description:
                "Create bespoke web solutions tailored to your business needs, from simple websites to complex web applications.",
            },
            {
              image: "/soft.jpg",
              title: "Custom Software Development",
              bg: "bg-blue-400",
              description:
                "We provide custom software development, integration, and support, ensuring secure and scalable solutions tailored to your needs.",
            },
            {
              image: "/ui.jpg",
              title: "UX/UI Design",
              bg: "bg-green-400",
              description:
                "Design user-centric interfaces and experiences that enhance usability and engagement, ensuring a seamless user journey.",
            },
            {
              image: "/seo.jpg",
              title: "SEO Optimization",
              bg: "bg-orange-400",
              description:
                "Improve your website’s visibility on search engines with comprehensive SEO strategies that drive organic traffic and increase rankings.",
            },
            {
              image: "/ecommerce.jpg",
              title: "E-commerce Solutions",
              bg: "bg-purple-400",
              description:
                "Develop and optimize e-commerce platforms that provide smooth shopping experiences, integrate payment gateways, and manage inventory efficiently.",
            },
            {
              image: "/maintain.jpg",
              title: "Web Maintenance",
              bg: "bg-red-400",
              description:
                "Ensure your website runs smoothly with ongoing maintenance services that address bugs, update content, and enhance performance.",
            },
            {
              image: "/analytics.jpg",
              title: "Web Analytics",
              bg: "bg-teal-400",
              description:
                "Leverage data insights to track user behavior, measure website performance, and make data-driven decisions for continuous improvement.",
            },
          ]}
        />
      </div>
      <div className="w-full h-full" id="helps" ref={refBigGriddy}>
        <BigGrid />
      </div>
      <div
        className="h-full w-full bg-white"
        id="benefits"
        ref={refClickableSliderRef}
      >
        <ClickablePaginationSlider title={"Our Web Packages"} slides={slides} />
      </div>
      <div className="" id="team">
        <div className="app-layout flex flex-col min-[1100px]:flex-row items-center justify-between py-20 gap-10">
          <div className="  w-[40%] flex item-center flex-col">
            <Image
              className="w-[250px] m-auto h-auto rounded-md my-5" // Ensure the image takes full width and adjusts height automatically
              src="/ane.jpeg"
              alt="CEO"
              height={900}
              width={800}
              priority
            />
            <p className="text-center font-bold">Marketing Manager</p>
            <p className="text-center">Annette Krafczyk</p>
            
          </div>
          <div className="  w-[60%]  bg-black bg-opacity-30 px-4 space-y-2 py-14 rounded-lg">
            <p className="text-center w-full h-full ">
              {i18next.t('ns1:aboutMarketingManager')}
            </p>
          </div>
        </div>
      </div>
      <div id="contact" ref={refContactSection} className="w-full h-full">
        <Contact_us />
      </div>
      <div className="flex fixed bottom-0 right-0 mb-16 mr-5 z-[8888] onScreenPageNav">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : -100 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className={`fixed space-y-3 text-left flex items-center justify-center flex-col bottom-0 right-0 mb-16 px-3 py-4 text-white text-lg bg-black bg-opacity-40 mr-5 rounded-lg transition-opacity duration-300 ${
            isScrolled ? "opacity-100 text-lg" : "opacity-0"
          }`}
        >
          <button
            className={`md:text-lg ${
              inViewHeroSection ? "scale-125 text-red-400 font-semibold" : ""
            }`}
            onClick={() => scrollToSection(heroSectionRef)}
          >
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer hover:scale-105">
                <PiStarThin size={24} />
              </HoverCardTrigger>
              {/* <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center bg-black bg-opacity-75 cursor-pointer md:rounded-md md:left-8 md:mr-1'>
                  Hero Section
              </HoverCardContent> */}
            </HoverCard>
          </button>
          <div
            className={`md:text-lg ${
              inViewServiceSlider
                ? "scale-125 text-yellow-400 font-semibold"
                : ""
            }`}
            onClick={() => scrollToSection(serviceSliderRef)}
          >
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer hover:scale-105">
                <MdDesignServices size={24} />
              </HoverCardTrigger>
              {/* <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center bg-black bg-opacity-75 cursor-pointer md:rounded-md md:left-8 md:mr-1'>
                  Hero Section
              </HoverCardContent> */}
            </HoverCard>
          </div>

          <button
            className={`md:text-lg ${
              inViewBigGrid ? "scale-125 text-rose-400 font-semibold" : ""
            }`}
            onClick={() => scrollToSection(bigGridRef)}
          >
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer hover:scale-105">
                <LiaHandsHelpingSolid size={24} />
              </HoverCardTrigger>
              {/* <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center bg-black bg-opacity-75 cursor-pointer md:rounded-md md:left-8 md:mr-1'>
                  Hero Section
              </HoverCardContent> */}
            </HoverCard>
          </button>

          <button
            className={`md:text-lg ${
              inViewClickableSlider
                ? "scale-125 text-sky-400 font-semibold"
                : ""
            }`}
            onClick={() => scrollToSection(clickableSliderRef)}
          >
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer hover:scale-105">
                <FaHandHoldingHeart size={24} />
              </HoverCardTrigger>
              {/* <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center bg-black bg-opacity-75 cursor-pointer md:rounded-md md:left-8 md:mr-1'>
                  Trust
              </HoverCardContent> */}
            </HoverCard>
          </button>
          <button
            className={`md:text-lg ${
              inViewTeamSection ? "scale-125 text-green-400 font-semibold" : ""
            }`}
            onClick={() => scrollToSection(contactRef)}
          >
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer hover:scale-105">
                <FaPhoneAlt size={24} />
              </HoverCardTrigger>
              {/* <HoverCardContent className='md:h-7 md:w-40 flex justify-center items-center bg-black bg-opacity-75 cursor-pointer md:rounded-md md:left-8 md:mr-1'>
                  Benefits
              </HoverCardContent> */}
            </HoverCard>
          </button>

          {/* <button
            className={`md:text-lg ${
              bottomReached ? "scale-125 text-teal-400 font-semibold" : ""
            }`}
            onClick={scrollToBottom}
          >
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer hover:scale-105">
                <FaGifts size={24} />
              </HoverCardTrigger>
            </HoverCard>
          </button> */}
        </motion.div>
      </div>
    </main>
  );
}
