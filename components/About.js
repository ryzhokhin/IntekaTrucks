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
                <h2 className="text-3xl font-bold text-foreground mb-6">O Naszej Firmie</h2>

                {/* Иконки карточек */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-10">
                    {[
                        { icon: <FaAward className="text-primary text-4xl mb-3" />, label: "Ponad 10 lat doświadczenia" },
                        { icon: <FaShieldAlt className="text-primary text-4xl mb-3" />, label: "Zaufany partner biznesowy" },
                        { icon: <FaUsers className="text-primary text-4xl mb-3" />, label: "Rodzinne przedsiębiorstwo" },
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
                        Nasza firma transportowa istnieje na rynku od 2011 roku.
                    </p>
                    <p>
                        Przez ten czas zdobyliśmy już doświadczenie i zaufanie naszych klientów.
                    </p>
                    <p>
                        Dostarczamy Państwu usługi w zakresie transportu krajowego oraz międzynarodowego.
                    </p>
                    <p>
                        Gwarantujemy indywidualne podejście do każdego klienta, profesjonalną, niezawodną i terminową realizację zleceń transportowych.
                    </p>
                </div>
            </div>
        </section>
    );
}