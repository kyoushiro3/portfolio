import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";
import { GeistSans } from 'geist/font/sans';
import { Raleway } from "next/font/google";

const inter = Inter({ subsets: ["latin"]});
const raleway = Raleway({ subsets: ["latin"], variable: '--font-raleway'});

export const metadata: Metadata = {
  title: "Kim Darren",
  description: "my personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={`${raleway.className}`}>
      <Header />
        {children}
      <Footer/>
      </body>
    </html>
  );
}
