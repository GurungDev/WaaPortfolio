import Image from "next/image";
import React from "react";
import BigGirdComponent from "./BigGirdCom";

const BigGrid = () => {
  return (
    <div className="py-40 app-layout">
      <h2 className=" md:w-full text-white md:flex md:justify-center md:items-center font-black">
        How can we help you?
      </h2>
      <div className="tagline pt-7 pb-20 md:text-center md:w-full md:flex md:justify-center md:items-center md:px-48">
        From product vision discussion to software development, our seasoned
        team assists businesses worldwide on their way to digital transformation
        and helps companies take full advantage of IT advancements.
      </div>
      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
           <BigGirdComponent
            imageSrc="/p1.jpg"  
            imageAlt="ai"
            heading="Generative AI Integrations"
            description="Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences."
          />
          <BigGirdComponent
            imageSrc="/p1.jpg"
            imageAlt="ai"
            heading="Generative AI Integrations"
            description="Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences."
          />
          <BigGirdComponent
            imageSrc="/p1.jpg"
            imageAlt="ai"
            heading="Generative AI Integrations"
            description="Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences."
          />
           <BigGirdComponent
            imageSrc="/p1.jpg"
            imageAlt="ai"
            heading="Generative AI Integrations"
            description="Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences."
          />
          <BigGirdComponent
            imageSrc="/p1.jpg"
            imageAlt="ai"
            heading="Generative AI Integrations"
            description="Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences."
          />
          <BigGirdComponent
            imageSrc="/p1.jpg"
            imageAlt="ai"
            heading="Generative AI Integrations"
            description="Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences."
          />
       </div>
    </div>
  );
};

export default BigGrid;
