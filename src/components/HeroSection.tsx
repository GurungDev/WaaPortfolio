"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Typewriter from "typewriter-effect";

const HeroSectionComponent = () => {
  return (
    <div className="relative h-[100vh] flex flex-col items-center justify-center text-center bg-cover bg-center">
      <div className="absolute z-[-2] inset-0 bg-black opacity-50"></div>{" "}
      <div className="absolute w-full h-full z-[-3]">
        {" "}
        <Image
          src="/landing.jpg"
          alt="landing Page"
          width={1200}
          height={800}
          className="inset-0 object-cover w-full h-full"
        />
      </div>
      {/* Dark overlay */}
      <div className="w-[70%] text-white">
        <h1 className="text-9xl bg-gradient-to-r from-blue-500 via-blue-100 to-neutral-100 bg-clip-text text-transparent font-[800] mb-10  ">
          YOUR BEST IT PARTNERS
        </h1>

        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "We are dedicated to providing top-notch IT solutions tailored to meet your business needs. Our team of experts is committed to delivering innovative and reliable services that drive success."
              )
              .pauseFor(2500)
              .deleteAll()
              .start()
              .callFunction(() => {
                typewriter.start(); // Restart the typing effect
              });
          }}
          options={{
            loop: true, // Make the typewriter effect loop indefinitely
          }}
        />
        <p className=""></p>
        {/* <button classNameName="px-5 py-2 group  text-black w-auto bg-white duration-300  hover:bg-transparent hover:text-white hover:px-6 transform-all  text-text border-[1px] mt-10   rounded-md  ">
         
        </button> */}
        <button className="button duration-300 group hover:bg-transparent relative my-7">
          <div className="flex items-center justify-between">
            <span className="group small">Why Chose us?</span>
            <BsArrowRightShort className="text-[1.5em]  group-hover:translate-x-[10px]  duration-300 " />
          </div>
          <div className="absolute inset-0 star-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 784.11 815.53"
            >
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="absolute inset-0 star-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 784.11 815.53"
            >
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="absolute inset-0 star-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 784.11 815.53"
            >
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="absolute inset-0 star-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 784.11 815.53"
            >
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="absolute inset-0 star-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 784.11 815.53"
            >
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="absolute inset-0 star-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 784.11 815.53"
            >
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </g>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroSectionComponent;
