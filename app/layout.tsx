import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";
import { GeistSans } from 'geist/font/sans';
import { Onest } from "next/font/google";

const inter = Inter({ subsets: ["latin"]});
const onest = Onest({ subsets: ["latin"],weight:["100", "200","300","400","500","600", "700", "800", "900"], variable: '--font-onest'});

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
     
      <body className={`${onest.className}`}>
      <Header />
        {children}
      <Footer/>
      </body>
    </html>
  );
}
