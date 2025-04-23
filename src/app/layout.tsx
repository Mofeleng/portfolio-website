import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { body } from "@/lib/constants/fonts";
import Footer from "@/components/footer";
export const metadata: Metadata = {
  title: "Mofeleng Mokgope",
  description: "Personal website of Mofeleng Mokgope",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${body.className} font-normal antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
