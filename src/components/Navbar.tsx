"use client";

import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa6";

const NavbarComponent = () => {
  const [scroll, setScroll] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full left-0 right-0 transition-all duration-500 z-50 ${
        scroll > 0 ? "bg-zinc-200 shadow-xl" : "bg-transparent"
      } backdrop-blur-sm`}
    >
      <div className="app-layout flex items-center justify-between py-3 px-4">
        <h4 className={` ${scroll > 0 ? "text-neutral-700" : "text-white"}`}>
          Waa Tech
        </h4>
        <div
          className={`flex gap-5 ${
            scroll > 0 ? "text-neutral-800" : "text-white"
          }`}
        >
          <p className="caption font-[200] tracking-loose leading-[1.2rem]">Home</p>
          <p className="caption font-[200] tracking-loose leading-[1.2rem]">Services</p>
          <p className="caption font-[200] tracking-loose leading-[1.2rem]">Pricing</p>
          <p className="caption font-[200] tracking-loose leading-[1.2rem]">Our Team</p>
          <p className="caption font-[200] tracking-loose leading-[1.2rem]">Contact Us</p>
        </div>
        <div
          className={`flex gap-3 ${
            scroll > 0 ? "text-neutral-700" : "text-white"
          }`}
        >
          <Link href="https://wa.me/message/S4GEVFXDYT7UO1">
            <FaWhatsapp size={24} />
          </Link>
          <Link href="mailto:akrafczyk@outlook.com">
            <IoMailOpenOutline size={24} />
          </Link>

          <Link href="https://www.instagram.com/an_nett_i?igsh=MXBmdGQyMWU5M2MxZw%3D%3D&utm_source=qr">
            <FaInstagram size={24} />
          </Link>
          <Link href="https://www.tiktok.com/@annetti75?_t=8nsSBi5MrUe&_r=1">
            <FaTiktok size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
