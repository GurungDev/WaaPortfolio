import BigGrid from "@/components/BigGrid";
import ClickablePaginationSlider from "@/components/ClickableSilder/ClickableSlider";
import HeroSectionComponent from "@/components/HeroSection";
import ServiceSolutions from "@/components/service-solutions";
import SlideTwo from "@/components/SliderTwo/SliderTwo";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { LiaGlobeEuropeSolid } from "react-icons/lia";
import { MdSell } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

export default function Home() {
  const slides = [
    {
      icon: <MdSell className="text-3xl text-green-400" />,
      label: "Sales",
      text_color: "text-green-400",
      image: "/p1.jpg",
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
      image: "/p1.jpg",
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
      image: "/p1.jpg",
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
      image: "/p1.jpg",
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
      image: "/p1.jpg",
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

  return (
    <main className="flex flex-col w-full h-full">
      <div>
        <HeroSectionComponent />
      </div>
      <div>
        <ServiceSolutions
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
      <div className="w-full h-full">
            <BigGrid/>
      </div>
      <div className="h-full w-full bg-white">
      {/* <ClickablePaginationSlider
      title={"Our Web Technologies Services"}
      slides={slides}
    /> */}
      </div>
    </main>
  );
}
