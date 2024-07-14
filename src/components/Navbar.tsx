"use client";

import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const NavbarComponent = () => {
  const [scroll, setScroll] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();

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

  const isNotHomePage = pathname !== "/";

  return (
    <nav
      className={`fixed top-0 w-full left-0 right-0 transition-all duration-500 z-50 ${
        scroll > 0 || isNotHomePage ? "bg-zinc-200 shadow-xl" : "bg-transparent"
      } backdrop-blur-sm`}
    >
      <div className="app-layout flex items-center justify-between py-3 px-4">
        <h4
          className={` ${
            scroll > 0 || isNotHomePage ? "text-neutral-700" : "text-white"
          }`}
        >
          Waa Tech Ltd.
        </h4>
        <div
          className={`hidden min-[1100px]:flex gap-5 ${
            scroll > 0 || isNotHomePage ? "text-neutral-800" : "text-white"
          }`}
        >
          {[
            { href: "#home", label: "Home", color: "red-400" },
            { href: "#services", label: "Services", color: "green-400" },
            { href: "#package", label: "Packages", color: "purple-400" },
            { href: "#team", label: "Our Team", color: "blue-400" },
            { href: "#contact_us", label: "Contact Us", color: "yellow-400" },
          ].map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="caption font-[200] tracking-loose leading-[1.2rem]"
              onClick={() => setActiveLink(link.href)}
            >
              <p>{link.label}</p>
              <div
                className={`linkProgressBar h-1 transition-all duration-500 ease-in ${
                  activeLink === link.href ? `w-full bg-${link.color}` : "w-0"
                }`}
              />
            </Link>
          ))}
        </div>
        <div
          className={`flex gap-3 ${
            scroll > 0 || isNotHomePage ? "text-neutral-700" : "text-white"
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
