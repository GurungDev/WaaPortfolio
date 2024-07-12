import HeroSectionComponent from "@/components/HeroSection";
import ServiceSolutions from "@/components/service-solutions";

export default function Home() {
  return (
    <div>
      <HeroSectionComponent />
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
  );
}
