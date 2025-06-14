"use client";
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer/page";
import NavBar from "../components/navbar/page";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const hideHeaderFooter = pathname === "/techgyanathon";
  return (
    <html lang="en">
      <link rel="icon" href="/img/itsa2.ico" sizes="any" />
      <body className={inter.className}>
      {!hideHeaderFooter && <NavBar />}
      {children}
       <Analytics />
      {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
