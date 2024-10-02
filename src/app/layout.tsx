"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <body>
        <Navbar isHomePage={isHomePage} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
