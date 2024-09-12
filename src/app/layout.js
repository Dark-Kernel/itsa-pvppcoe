import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer/page";
import NavBar from "../components/navbar/page";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/img/itsa2.ico" sizes="any" />
      <body className={inter.className}>
      <NavBar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
