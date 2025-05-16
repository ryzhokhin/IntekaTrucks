import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 py-3 sm:py-4">

                {/* Logo Image */}
                <div className="relative h-12 w-[160px]">
                    <Image
                        src="/images/logo-inteka.png"
                        alt="INTEKA Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium text-sm sm:text-base">
                        About
                    </a>
                    <a href="#servicesoverview"
                       className="text-gray-700 hover:text-blue-600 font-medium text-sm sm:text-base">
                        What We Do
                    </a>
                    <a href="#testimonials"
                       className="text-gray-700 hover:text-blue-600 font-medium text-sm sm:text-base">
                        Testimonials
                    </a>
                    <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium text-sm sm:text-base">
                        Contact
                    </a>
                    <Link href="/services"
                          className="text-blue-900 hover:text-blue-600 font-medium text-sm sm:text-base">
                        All Services
                    </Link>
                    <a
                        href="tel:+13101234567"
                        className="bg-blue-600 text-white font-semibold text-sm sm:text-base py-2 px-4 rounded-md hover:bg-blue-700 transition"
                    >
                        📞 Call Now
                    </a>
                </div>
            </div>
        </nav>
    );
}