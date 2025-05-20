import { FaShieldAlt, FaUsers, FaAward } from "react-icons/fa";

export default function About() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-16 scroll-mt-24"
            style={{ backgroundImage: "url('/images/about-bg-2.jpg')" }} // 🔁 Подставь свой путь
            id="about"
        >
            {/* Полупрозрачный оверлей */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">About INTEKA</h2>

                {/* Иконки карточек */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-10">
                    {[
                        { icon: <FaAward className="text-primary text-4xl mb-3" />, label: "10+ Years Experience" },
                        { icon: <FaShieldAlt className="text-primary text-4xl mb-3" />, label: "Certified & Insured" },
                        { icon: <FaUsers className="text-primary text-4xl mb-3" />, label: "Family-Owned Business" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 sm:p-8 rounded-xl bg-background transition duration-300 hover:shadow-md transform hover:-translate-y-1 w-full sm:w-auto text-center"
                        >
                            {item.icon}
                            <p className="text-muted font-semibold text-base sm:text-lg mt-2">{item.label}</p>
                        </div>
                    ))}
                </div>

                {/* Описание */}
                <div className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed space-y-3">
                    <p>
                        Over the years, we’ve gained valuable experience and earned the trust of our clients.
                    </p>
                    <p>
                        We provide both domestic and international transport services.
                    </p>
                    <p>
                        Our team ensures every order is handled with professionalism, precision, and personal care.
                    </p>
                </div>
            </div>
        </section>
    );
}