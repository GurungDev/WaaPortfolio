import Link from "next/link";
import React from "react";

import { IoLocationSharp } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="bg-zinc-200  pt-14 pb-5">
    <div className="app-layout bg-zinc-200 text-black ">
    {" "}
        <div className="flex gap-10 flex-col  justify-between py-5">
          <div className="flex flex-col space-y-3 md:w-[600px]">
            <h2 className=" font-semibold">Waa Tech</h2>
            <p className=" tagline font-semibold">
              Blending your Vision with our Expertise.
            </p>
            <p className="caption">
              We assist businesses from all over the world in creating digital
              products with no expiration date. We streamline your vision with
              our expertise to bring life to your fantastic ideas!
            </p>
          </div>
          <div className="flex gap-y-10 gap-5 flex-col md:flex-row justify-between ">
            {" "}
            <div className="flex flex-col space-y-2">
              <h5 className="font-bold ">About Company</h5>
              <Link className="" href="">
                Home
              </Link>
              <Link className="" href="">
                Process
              </Link>
              <Link className="" href="">
                Tools
              </Link>
              <Link className="" href="">
                Support
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <h5 className="font-bold">Servives</h5>
              <Link className="" href="">
                Generative AI Web Apps
              </Link>
              <Link className="" href="">
                Custom Software Development
              </Link>
              <Link className="" href="">
                MVP
              </Link>
              <Link className="" href="">
                Blockchain Development
              </Link>
            </div>
            <div className="flex flex-col space-y-2 w-[200px]">
              <h5 className="font-bold ">Contact</h5>
              <div className="flex justify-start items-center space-x-1 ">
                <p className="mb-5">
                  <IoLocationSharp />{" "}
                </p>
                <p>2023 xyz street, PKR, Nepal</p>
              </div>
              <div className="flex justify-start items-center space-x-1 ">
                <p className="">
                  <TfiEmail />
                </p>
                <p>waatech@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center mt-7">
          <p>© Copyright 2023, All Rights Reserved by Waa Tech.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
