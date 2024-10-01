import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "@/components/ClickableSilder/ClickableSlider.css";
import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../utils/i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waa Tech Ltd.",
  description: "Waa Tech Ltd. - Leading provider of web technologies, SEO, and digital marketing services.",
  keywords:
    "Waa Tech, web technologies, web development, SEO, digital marketing, website development, web design",
  openGraph: {
    locale: "en_US",
    siteName: "Waa Tech Ltd.", // Corrected from siteName to site_name
    description: "Waa Tech Ltd. - Web Technologies Services Provider",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description || undefined} />
        <meta
          name="keywords"
          content={
            typeof metadata.keywords === "string"
              ? metadata.keywords
              : metadata.keywords?.join(", ") || undefined
          }
        />
        {metadata.openGraph && (
          <>
            <meta
              property="og:locale"
              content={metadata.openGraph.locale || undefined}
            />
            <meta property="og:url" content={"https://www.waa-tech-ltd.com"} />
            <meta
              property="og:site_name"
              content={metadata.openGraph.siteName || undefined}
            />
            <meta property="og:title" content={"Waa Tech Ltd."} />
            <meta
              property="og:description"
              content={metadata.openGraph.description || undefined}
            />
          </>
        )}
        <meta name="google-site-verification" content="mlkvOHuVQMBkrgKkJWoUnLMcGhEhme1G2UC4blaFwXY" />
        <script src="https://cdn.tailwindcss.com" async></script>

        <title>Waa Tech Ltd.</title>
      </head>
      <body className={inter.className}>
        <NavbarComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}