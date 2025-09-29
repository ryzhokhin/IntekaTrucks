import Link from "next/link";
import { FaTruckMoving, FaRoute, FaTools } from "react-icons/fa";

export default function ServicesOverview() {
    return (
        <section className="bg-background py-16 scroll-mt-24" id="servicesoverview">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Nasza oferta</h2>
                <p className="text-lg text-muted mb-12 max-w-3xl mx-auto">
                    Oferujemy kompleksowe rozwiązania transportowe, logistyczne i serwisowe — od przewozów międzynarodowych i przeładunków po pełną obsługę techniczną pojazdów. Działamy szybko, skutecznie i z indywidualnym podejściem do każdego zlecenia.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                    {[
                        {
                            icon: <FaTruckMoving className="text-background text-4xl" />,
                            title: "Usługi Transportowe",
                            desc: "Realizujemy przewozy na terenie Polski i całej Unii Europejskiej, oferując sprawdzone i elastyczne rozwiązania.",
                        },
                        {
                            icon: <FaRoute className="text-background text-4xl" />,
                            title: "Przeładunki i Magazynowanie",
                            desc: "Oferujemy szybki i bezpieczny przeładunek towarów na terenie naszej bazy w Bolesławcu. Sprawna obsługa i stała koordynacja z kierowcami gwarantują minimalne przestoje i pełną kontrolę nad ładunkiem.",
                        },
                        {
                            icon: <FaTools className="text-background text-4xl" />,
                            title: "Serwis i Obsługa Techniczna",
                            desc: "Wykonujemy kompleksową obsługę pojazdów ciężarowych oraz osobowych  — od diagnostyki i napraw bieżących, po konserwację kluczowych systemów",
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
                    Dowiedz Się Więcej
                </Link>
            </div>
        </section>
    );
}