import Link from "next/link";
import { FaTruckMoving, FaRoute, FaTools } from "react-icons/fa";

export default function ServicesOverview() {
    return (
        <section className="bg-background py-16 scroll-mt-24" id="servicesoverview">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">What We Do</h2>
                <p className="text-lg text-muted mb-12 max-w-3xl mx-auto">
                    Our core services are designed to keep your cargo moving efficiently and safely — from international freight to real-time logistics and full truck diagnostics.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                    {[
                        {
                            icon: <FaTruckMoving className="text-background text-4xl" />,
                            title: "Freight Delivery",
                            desc: "Local and international cargo transport using flatbeds, reefers, and heavy-duty trucks. Fast and dependable.",
                        },
                        {
                            icon: <FaRoute className="text-background text-4xl" />,
                            title: "Logistics Planning",
                            desc: "Route optimization, GPS tracking, and delivery scheduling with 24/7 driver-dispatch coordination.",
                        },
                        {
                            icon: <FaTools className="text-background text-4xl" />,
                            title: "Truck Service (STO)",
                            desc: "Diagnostics, Webasto repair, oil changes, suspension, wheel balancing & A/C systems — all in-house.",
                        },
                    ].map((item, index) => (
                        <Link key={index} href="/services" className="group block cursor-pointer">
                            <div className="bg-section p-8 rounded-xl shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-accent">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                                <p className="text-muted text-sm">{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <Link
                    href="/services"
                    className="inline-block bg-accent hover:opacity-90 text-background font-semibold py-3 px-6 rounded-lg transition"
                >
                    Learn More About Our Services
                </Link>
            </div>
        </section>
    );
}