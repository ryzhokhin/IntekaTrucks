import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import HeroSplit from "@/components/HeroSplit";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
        <main className="min-h-screen bg-gray-100">
            <Navbar/>
            {/*<Hero />*/}
            <HeroSplit/>
            <About/>
            <ServicesOverview/>
            <Testimonials/>
            <ContactForm/>
            <Footer/>
        </main>
    </>
  );
}
