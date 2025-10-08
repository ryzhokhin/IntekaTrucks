import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const partners = [
    {
        name: "BADER POLSKA",
        description: "Leading automotive supplier",
        category: "Automotive Industry",
        logo: "/images/partners/bader-polska.svg",
        color: "#1e3a8a"
    },
    {
        name: "Volkswagen",
        description: "Global automotive manufacturer",
        category: "Automotive Industry", 
        logo: "/images/partners/volkswagen.svg",
        color: "#1f2937"
    },
    {
        name: "LG",
        description: "Technology and electronics leader",
        category: "Electronics & Technology",
        logo: "/images/partners/lg.svg",
        color: "#dc2626"
    }
];

export default function Partners() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const logoVariants = {
        hidden: { 
            opacity: 0,
            rotateY: -90,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            rotateY: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 12
            }
        }
    };

    return (
        <section
            className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 scroll-mt-24"
            id="partners"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Who We Work With
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Trusted by industry leaders across automotive, technology, and manufacturing sectors
                    </motion.p>
                </motion.div>

                {/* Partners Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            variants={itemVariants}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                                {/* Gradient Overlay */}
                                <div 
                                    className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ backgroundColor: partner.color }}
                                />
                                
                                {/* Company Logo */}
                                <motion.div
                                    variants={logoVariants}
                                    className="mb-6 flex justify-center"
                                >
                                    <div className="w-24 h-24 rounded-xl flex items-center justify-center bg-white shadow-lg group-hover:scale-110 transition-transform duration-300 p-4">
                                        <Image 
                                            src={partner.logo} 
                                            alt={`${partner.name} logo`}
                                            width={80}
                                            height={80}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                                        {partner.name}
                                    </h3>
                                    <p className="text-gray-600 mb-3">
                                        {partner.description}
                                    </p>
                                    <span 
                                        className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white"
                                        style={{ backgroundColor: partner.color }}
                                    >
                                        {partner.category}
                                    </span>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Join Our Network of Trusted Partners
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Ready to experience the same level of service and reliability that industry leaders trust?
                        </p>
                        <motion.a
                            href="#contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Partner With Us
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
