import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FooterToko } from "./components";
import LayoutWrapper from "./components/LayoutWrapper";
import ClientProvider from "@/context/ClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Situs Jual Beli Online Terlengkap, Mudah, dan Aman | Toko Pak Edi",
  description: "For learning purposes only. Please don't sue",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
          <ClientProvider>
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </ClientProvider>
          <FooterToko />
      </body>
    </html>
  );
}
