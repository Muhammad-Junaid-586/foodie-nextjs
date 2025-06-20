import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/app/components/home/Navbar/ResponsiveNav";
import Provider from "./components/HOC/Provider";
import Footer from "./components/home/Footer/Footer";
import ScrolltoTop from "./components/Helper/ScrolltoTop";

const font = Manrope({
  weight : ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Food Landing page",
  description: "its simple food landing page built with nextjs and tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
      >
        <Provider>

        <ResponsiveNav/>
        {children}
        <Footer />
        <ScrolltoTop />
        </Provider>
      </body>
    </html>
  );
}
