"use client";
import { motion } from "framer-motion";
import React from "react";
import BigGirdComponent from "./BigGirdCom";

const BigGrid = () => {
  return (
    <div className="py-40 app-layout">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <h2 className="full text-white flex justify-center items-center font-black">
          How can we help you?
        </h2>
        <div className="tagline pt-7 pb-20 md:text-center md:w-full md:flex md:justify-center md:items-center md:px-48">
          From product vision discussion to software development, our seasoned
          team assists businesses worldwide on their way to digital
          transformation and helps companies take full advantage of IT
          advancements.
        </div>
      </motion.div>{" "}
      <div className="overflow-hidden w-[100%]">
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="grid gird-cols-1 p-9 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8"
        >
          <BigGirdComponent
            imageSrc="/assets/img/ai.png"
            imageAlt="ai"
            heading="Generative AI Integrations"
            description="Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences."
          />
          <BigGirdComponent
            imageSrc="/assets/img/ai.png"
            imageAlt="ai"
            heading="Generative AI Integrations"
            description="Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences."
          />
          <BigGirdComponent
            imageSrc="/assets/img/ai.png"
            imageAlt="ai"
            heading="Generative AI Integrations"
            description="Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences."
          />
          <BigGirdComponent
            imageSrc="/assets/img/ai.png"
            imageAlt="ai"
            heading="Generative AI Integrations"
            description="Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences."
          />
          <BigGirdComponent
            imageSrc="/assets/img/ai.png"
            imageAlt="ai"
            heading="Generative AI Integrations"
            description="Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences."
          />
          <BigGirdComponent
            imageSrc="/assets/img/ai.png"
            imageAlt="ai"
            heading="Generative AI Integrations"
            description="Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BigGrid;
