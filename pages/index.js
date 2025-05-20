import { useState, useEffect } from "react";
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

const themes = [
    "first-choice",
    "navy-sand",
    "cool-gray-sky",
    "cargo-olive-asphalt",
    "sunset-freight",
    "midnight-emerald",
    "premium-blue",
    "eco-green"
];

export default function Home() {
    const [theme, setTheme] = useState("first-choice");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <>
            <main className="min-h-screen bg-muted transition-colors duration-300">
                {/* Theme Switcher */}
                <div className="sticky top-0 z-50 bg-section text-foreground shadow-md p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">Theme:</span>
                        <select
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                            className="bg-background border border-muted rounded px-3 py-1 text-sm text-foreground"
                        >
                            {themes.map((t) => (
                                <option key={t} value={t}>
                                    {t.replace("-", " ").toUpperCase()}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Show all theme colors */}
                    <div className="flex flex-wrap gap-2">
                        {[
                            'primary',
                            'secondary',
                            'accent',
                            'muted',
                            'background',
                            'section',
                            'foreground',
                        ].map((color) => (
                            <div
                                key={color}
                                className={`w-8 h-8 rounded border border-muted bg-${color}`}
                                title={color}
                            ></div>
                        ))}
                    </div>
                </div>

                <Navbar />
                {/* <Hero /> */}
                <HeroSplit />
                <About />
                <ServicesOverview />
                <Testimonials />
                <ContactForm />
                <Footer />
            </main>
        </>
    );
}