import Image from "next/image";
import Link from "next/link";


import { IoLocationSharp } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="bg-zinc-200  pt-14 pb-5">
      <div className="app-layout bg-zinc-200 text-black ">
        {" "}
        <div className="flex gap-10 flex-col  justify-between py-5">
          <div className="flex items-start justify-between">
            <div className="flex flex-col space-y-3 md:w-[600px]">
              {" "}
              <h2 className=" font-semibold">WAA Tech Ltd.</h2>
              <p className=" tagline font-semibold">
                Blending your Vision with our Expertise.
              </p>
              <p className="caption">
                We assist businesses from all over the world in creating digital
                products with no expiration date. We streamline your vision with
                our expertise to bring life to your fantastic ideas.
              </p>
            </div>

            <div className="relative  w-[200px] h-[200px] overflow-hidden">
              <Image
                src={"/logo.png"}
                layout="fill"
                objectFit="cover"
                alt="Logo"
              />
            </div>
          </div>
          <div className="flex gap-y-10 gap-5 flex-col md:flex-row justify-between ">
            {" "}
            <div className="flex flex-col space-y-2">
              <h5 className="font-bold ">About Company</h5>
              <Link className="/#home" href="/#home">
                Home
              </Link>
              <Link className="/#services" href="/#services">
                Services
              </Link>
              <Link className="/#helps" href="/#helps">
                Technologies
              </Link>
              <Link className="#benefits" href="/#benefits">
                Packages
              </Link>
              <Link className="#contact" href="/#contact">
                Contact Us
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <h5 className="font-bold">Services</h5>
              <p className="">Custom Web Development</p>
              <p className="">Custom Software Development</p>
              <p className="">UX/UI Design</p>
              <p className="">SEO Optimization</p>
              <p className="">E-commerce Solutions</p>
              <p className="">Web Maintenance</p>
              <p className="">Web Analytics</p>
            </div>
            <div className="flex flex-col space-y-2 w-[300px]">
              <h5 className="font-bold ">Contact</h5>
              <div className="flex justify-start items-center space-x-1 ">
                <p className=" ">
                  <IoLocationSharp />{" "}
                </p>
                <p>Nile Street 64, London, UK</p>
              </div>
              <div className="flex justify-start items-center space-x-1 ">
                <p className="">
                  <TfiEmail />
                </p>
                <p>contact@waa-tech-ltd.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center mt-7">
          <p>© Copyright 2024, All Rights Reserved by WAA Tech Ltd.</p>
        </div>
      </div>
      <div className="flex gap-3 text-black justify-center  py-5">
        <Link href="/privacy">Privacy</Link>|
        <Link href="/imprint">Imprint</Link>
      </div>
    </div>
  );
};

export default Footer;
