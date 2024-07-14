import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import '@/components/ClickableSilder/ClickableSlider.css';
import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";
 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waa Tech Ltd.",
  description: "Waa Tech Ltd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
