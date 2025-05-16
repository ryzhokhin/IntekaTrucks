import { FaShieldAlt, FaUsers, FaAward } from "react-icons/fa";

export default function About() {
    return (
        <section className="bg-gray-100 py-16 scroll-mt-24" id="about">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About INTEKA</h2>

                {/* Карточки — увеличены, с анимацией и адаптивностью */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
                    {[
                        { icon: <FaAward className="text-blue-600 text-4xl mb-3" />, label: "10+ Years Experience" },
                        { icon: <FaShieldAlt className="text-blue-600 text-4xl mb-3" />, label: "Certified & Insured" },
                        { icon: <FaUsers className="text-blue-600 text-4xl mb-3" />, label: "Family-Owned Business" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 sm:p-8 rounded-xl transition duration-300 hover:bg-white hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto text-center"
                        >
                            {item.icon}
                            <p className="text-gray-800 font-semibold text-base sm:text-lg mt-2">{item.label}</p>
                        </div>
                    ))}
                </div>

                {/* Текстовый блок с уменьшенным межстрочным интервалом */}
                <div className="max-w-2xl mx-auto mb-12 space-y-2 text-gray-700 text-lg leading-snug">
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