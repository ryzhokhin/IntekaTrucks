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
        <section ref={ref} className="relative h-screen overflow-hidden bg-white ">
            {/* Картинка справа — фиксированная */}
            <div
                className="absolute top-0 right-0 h-screen w-full md:w-1/2 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('/images/hero-truck-opt-1.jpg')",
                }}
            ></div>

            {/* Двигающаяся белая панель */}
            <motion.div
                className="absolute top-0 left-0 h-screen w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 bg-white z-10"
                style={{ x: slideX }}
            >
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Freight & Logistics Solutions That Deliver
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Since 2011 — Fast. Reliable. Customized to your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="tel:+13101234567"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition"
                    >
                        📞 Call
                    </a>
                    <a
                        href="#contact"
                        className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg text-center transition"
                    >
                        📝 Get a quote
                    </a>
                </div>
            </motion.div>
        </section>
    );
}