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
          <Link href="/">Waa Tech Ltd.</Link>
          
        </h4>

        <div
          className={`hidden min-[1100px]:flex gap-5 ${
            scroll > 0 || isNotHomePage ? "text-neutral-800 " : "text-white "
          }`}
        >
          {[
            { href: "#home", label: "Home", color: "red-400" },
            { href: "#services", label: "Services", color: "green-400" },
            { href: "#helps", label: "Technologies", color: "pink-400" },
            { href: "#benefits", label: "Packages", color: "purple-400" },
            { href: "#contact", label: "Contact Us", color: "yellow-400" },
          ].map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={` ${isNotHomePage ? "hidden" : "caption font-[200] tracking-loose leading-[1.2rem]" } `}
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
          <Link href="#">
            <FaWhatsapp size={24} />
          </Link>
          <Link href="mailto:gurungngr@gmail.com">
            <IoMailOpenOutline size={24} />
          </Link>

          <Link href="#">
            <FaInstagram size={24} />
          </Link>
          <Link href="#">
            <FaTiktok size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
