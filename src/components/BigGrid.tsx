"use client";
import { motion } from "framer-motion";

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
          Technologies We Use
        </h2>
        <div className="tagline pt-7 pb-20 md:text-center md:w-full md:flex md:justify-center md:items-center md:px-48">
          We leverage a wide range of cutting-edge technologies to deliver
          high-quality, scalable, and efficient solutions for your business
          needs.
        </div>
      </motion.div>
      <div className="overflow-hidden w-[100%]">
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="grid gird-cols-1 p-9 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8"
        >
          <BigGirdComponent
            imageSrc="/assets/img/react.png"
            imageAlt="React"
            heading="React.js"
            description="Build dynamic user interfaces with the popular React library."
          />
          <BigGirdComponent
            imageSrc="/assets/img/nextjs-icon.png"
            imageAlt="Next.js"
            heading="Next.js"
            description="Develop server-rendered React applications with ease using Next.js."
          />
          <BigGirdComponent
            imageSrc="/assets/img/mongodb.png"
            imageAlt="MongoDB"
            heading="MongoDB"
            description="Utilize the flexibility of MongoDB for your NoSQL database needs."
          />
          <BigGirdComponent
            imageSrc="/assets/img/postgres.png"
            imageAlt="PostgreSQL"
            heading="PostgreSQL"
            description="Implement powerful and scalable SQL databases with PostgreSQL."
          />
          <BigGirdComponent
            imageSrc="/assets/img/mysql.png"
            imageAlt="MySQL"
            heading="MySQL"
            description="Leverage the reliability of MySQL for your relational database solutions."
          />
          <BigGirdComponent
            imageSrc="/assets/img/nodejs.png"
            imageAlt="Node.js"
            heading="Node.js"
            description="Create scalable backend services using the Node.js runtime."
          />
          <BigGirdComponent
            imageSrc="/assets/img/drf.png"
            imageAlt="Django Rest Framework"
            heading="Django Rest Framework"
            description="Build robust APIs with the Django Rest Framework."
          />
          <BigGirdComponent
            imageSrc="/assets/img/express.svg"
            imageAlt="Express"
            heading="Express.js"
            description="Develop fast and minimalistic web applications using Express.js."
          />

          <BigGirdComponent
            imageSrc="/assets/img/postman.png"
            imageAlt="Postman"
            heading="Postman"
            description="Streamline your API development and testing with Postman."
          />

          <BigGirdComponent
            imageSrc="/assets/img/js.png"
            imageAlt="JavaScript"
            heading="JavaScript"
            description="Add interactivity to your web pages with JavaScript."
          />

          <BigGirdComponent
            imageSrc="/assets/img/ts.png"
            imageAlt="TypeScript"
            heading="TypeScript"
            description="Enhance your JavaScript with static typing using TypeScript."
          />
          <BigGirdComponent
            imageSrc="/assets/img/figma.png"
            imageAlt="Figma"
            heading="Figma"
            description="Design and prototype your web applications with Figma."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BigGrid;
