import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function HeroSplit() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const slideX = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    return (
        <section ref={ref} className="relative h-screen overflow-hidden bg-background">
            {/* Right background image */}
            <div
                className="absolute top-0 right-0 h-screen w-full md:w-1/2 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('/images/hero-truck-opt-1.jpg')",
                }}
            ></div>

            {/* Sliding left content panel */}
            <motion.div
                className="absolute top-0 left-0 h-screen w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 bg-background z-10"
                style={{ x: slideX }}
            >
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Kompleksowe Rozwiązania Logistyczne dla Firm
                </h1>
                <p className="text-lg text-muted mb-8">
                    Dostarczamy niezawodne usługi od 2011 roku – szybko, precyzyjnie i zgodnie z Twoimi potrzebami.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    {/*<a*/}
                    {/*    href="tel:+13101234567"*/}
                    {/*    className="bg-accent hover:opacity-90 text-background font-semibold py-3 px-6 rounded-lg text-center transition"*/}
                    {/*>*/}
                    {/*    📞 Zadzwoń*/}
                    {/*</a>*/}
                    <a
                        href="#contact"
                        className="border border-accent text-accent hover:bg-section font-semibold py-3 px-6 rounded-lg text-center transition"
                    >
                        📞 Skontaktuj Się Z Nami
                    </a>
                </div>
            </motion.div>
        </section>
    );
}