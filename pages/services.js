import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FaClipboardCheck, FaOilCan, FaRoad, FaTools, FaWrench, FaSnowflake, FaTire } from "react-icons/fa";
import Footer from "@/components/Footer";
import NavbarServices from "@/components/NavbarServices";
import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function ServicesPage() {
    const [theme, setTheme] = useState("first-choice");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <main className="bg-background text-foreground">
            <NavbarServices />

            {/* HERO SECTION */}
            <section className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    {/* Text Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                            Co oferujemy?
                        </h1>
                        <p className="text-lg sm:text-xl text-muted leading-relaxed">
                            Od transportu ładunków, przez inteligentne planowanie logistyki, aż po kompleksowy serwis ciężarówek — działamy, aby Twoja firma mogła się poruszać szybko, bezpiecznie i precyzyjnie.
                        </p>
                    </motion.div>

                    {/* Image Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full max-w-md mx-auto md:mx-0">
                            <Image
                                src="/images/services-hero.jpg"
                                alt="INTEKA logistics truck"
                                width={0}
                                height={0}
                                sizes="(max-width: 768px) 100vw, 500px"
                                className="w-full h-auto rounded-xl shadow-lg object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-section py-24 px-6" id="logistics">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
                        Freight & Logistics Services
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Freight Delivery */}
                        <div className="group relative overflow-hidden bg-background rounded-2xl shadow-lg p-8 transition hover:shadow-xl hover:-translate-y-1">
                            <div className="mb-4">
                                <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                                    National & International
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Freight Delivery</h3>
                            <p className="text-base sm:text-lg text-muted mb-4 leading-relaxed">
                                {/*We handle transportation across the U.S. and to Eastern Europe — Ukraine, Belarus, and Russia — with a tailored approach to every cargo type and route.*/}
                            </p>
                            <ul className="list-disc list-inside text-base text-muted space-y-1">
                                {/*<li>Dry van, flatbed, reefer available</li>*/}
                                {/*<li>Local and long-haul delivery</li>*/}
                                {/*<li>Live GPS tracking & dispatch coordination</li>*/}
                            </ul>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition" />
                        </div>

                        {/* Logistics Planning */}
                        <div className="group relative overflow-hidden bg-background rounded-2xl shadow-lg p-8 transition hover:shadow-xl hover:-translate-y-1">
                            <div className="mb-4">
                                <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full">
                                    Smart Coordination
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Logistics Planning</h3>
                            <p className="text-base sm:text-lg text-muted mb-4 leading-relaxed">
                                We help businesses reduce costs and improve delivery timing with intelligent routing and real-time optimization.
                            </p>
                            <ul className="list-disc list-inside text-base text-muted space-y-1">
                                <li>Route optimization tools</li>
                                <li>Multi-drop delivery coordination</li>
                                <li>Freight consolidation support</li>
                            </ul>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-background" id="CTO">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Left image column that perfectly stretches */}
                    <div className="relative">
                        <div className="absolute inset-0">
                            <img
                                src="/images/truck-service.jpg"
                                alt="Truck diagnostics"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-w-16 aspect-h-9 md:aspect-auto invisible md:visible" />
                    </div>

                    {/* Right content column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center px-6 md:px-12 py-10 md:py-16 max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                            Serwis i Obsługa
                        </h2>

                        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                            In-House Diagnostics & Repair Services
                        </h3>

                        <p className="text-muted mb-5 leading-relaxed text-base sm:text-lg">
                            Nasi <span className="font-medium text-accent">certyfikowani mechanicy</span> wykonują diagnostykę i naprawy pojazdów ciężarowych, <span className="text-accent font-medium">naczep oraz samochodów osobowych.</span>.
                        </p>

                        <ul className="space-y-3 text-base text-muted mb-6">
                            <li className="flex items-start gap-3">
                                <FaOilCan className="text-accent mt-1" />
                                <span><strong>Wymiana oleju i płynów eksploatacyjnych</strong> dla wszystkich układów pojazdu</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaTools className="text-accent mt-1" />
                                <span><strong>Naprawy hamulców, zawieszenia i skrzyni biegów</strong> — na miejscu</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaWrench className="text-accent mt-1" />
                                <span><strong>Komputerowa diagnostyka</strong> wszystkich układów</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaSnowflake className="text-accent mt-1" />
                                <span><strong>Serwis i naprawa</strong> układów klimatyzacji oraz Webasto</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaTire className="text-accent mt-1" />
                                <span><strong>Wulkanizacja</strong> oraz serwis opon</span>
                            </li>
                        </ul>

                        <p className="text-muted leading-relaxed text-base">
                            <span className="font-medium text-accent">Szybko</span>, <span className="font-medium text-accent">fachowo</span> i <span className="font-medium text-accent">kompleksowo</span> — wszystko w jednym miejscu.
                            {' '}Zadbaj o niezawodność swojej floty z pomocą naszego serwisu.
                        </p>
                    </motion.div>
                </div>
            </section>
            <ContactForm />
            <Footer />
        </main>
    );
}