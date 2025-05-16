export default function Hero() {
    return (
        // <section className="bg-white py-20">
        //     <div className="max-w-6xl mx-auto px-6 text-center">
        //         <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
        //             Reliable Freight Services Across the Globe.
        //         </h1>
        //         <p className="text-lg text-gray-600 mb-8">
        //             Serving since 2010 — Fast. Honest. On Time.
        //         </p>
        //         <div className="flex justify-center space-x-4 flex-wrap">
        //             <a
        //                 href="tel:+13101234567"
        //                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        //             >
        //                 📞 Call
        //             </a>
        //             <a
        //                 href="#contact"
        //                 className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition"
        //             >
        //                 📝 Get a quote
        //             </a>
        //         </div>
        //     </div>
        // </section>

        /*OPT 1*/
        <section className="relative h-[120vh] sm:h-screen overflow-hidden">
            {/* Right BG Image (Fixed-ish) */}
            <div
                className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-cover bg-center z-0 transition-all duration-1000"
                style={{backgroundImage: "url('/images/hero-truck-opt-1.jpg')"}}
            ></div>

            {/* Left Panel Content */}
            <div
                className="relative z-10 h-full w-full md:w-1/2 bg-white flex flex-col justify-center px-6 sm:px-12 py-24">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Freight & Logistics Solutions That Deliver
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Since 2010 — Fast. Reliable. Customized to your business needs.
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
            </div>
        </section>

        /*OPT 2*/
        // <section
        //     className="relative bg-cover bg-center text-white"
        //     style={{backgroundImage: "url('/images/hero-bg-opt-1.jpg')"}}
        // >
        //     {/* Overlay */}
        //     <div className="absolute inset-0 bg-black/50"></div>
        //
        //     {/* Content */}
        //     <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-24">
        //         <h1 className="text-4xl sm:text-5xl font-bold mb-6">
        //             Freight & Logistics Done Right
        //         </h1>
        //         <p className="text-lg sm:text-xl mb-8">
        //             Delivering across the U.S. and Eastern Europe with speed, safety, and trust.
        //         </p>
        //         <div className="flex flex-col sm:flex-row justify-center gap-4">
        //             <a
        //                 href="tel:+13101234567"
        //                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        //             >
        //                 📞 Call
        //             </a>
        //             <a
        //                 href="#contact"
        //                 className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition"
        //             >
        //                 📝 Get a quote
        //             </a>
        //         </div>
        //     </div>
        // </section>
    );
}