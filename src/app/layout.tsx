import type { Metadata } from "next";

// Supports weights 100-900
import '@fontsource-variable/inter';
// Supports weights 100-900
import '@fontsource-variable/kumbh-sans';
//import "@fontsource-variable/material-symbols-rounded";
import "@fontsource/material-symbols-rounded";


import "./globals.css";
import Header from "./components/headers/header";
import Footer from "./components/footers/footer";
import AosComponent from "./components/pieces/aos";
import Head from "next/head";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Jumpstart Small Business",
  description: "Jumpstart your small business effortlessly with our affordable packages. Get a custom landing page, tailored marketing plan, professional branding, and more, all designed to help you launch successfully. Fast turnaround, high-quality design, and comprehensive support. Start your business journey today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://js.hs-scripts.com/40034998.js"
        strategy="afterInteractive"
      />
      <body>
        <Header />
        <AosComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
