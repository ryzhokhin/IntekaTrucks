import Link from "next/link";
import Image from "next/image";
import LogoInteka from "../public/images/inteka-logo-1.svg"

export default function Navbar() {
    return (
        <nav className="bg-background shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 py-3 sm:py-4">

                {/* Logo Image */}
                <div className="relative h-16 w-[200px] sm:h-20 sm:w-[240px]">
                    <Image
                        src="/images/inteka-logo-2-without-left.svg"
                        alt="INTEKA Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    <a href="#about" className="text-foreground hover:text-accent font-medium text-sm sm:text-base">
                        About
                    </a>
                    <a href="#servicesoverview" className="text-foreground hover:text-accent font-medium text-sm sm:text-base">
                        What We Do
                    </a>
                    <a href="#testimonials" className="text-foreground hover:text-accent font-medium text-sm sm:text-base">
                        Testimonials
                    </a>
                    <a href="#contact" className="text-foreground hover:text-accent font-medium text-sm sm:text-base">
                        Contact
                    </a>
                    <Link href="/services/#CTO" className="text-primary hover:text-accent font-medium text-sm sm:text-base">
                        CTO
                    </Link>
                    <Link href="/services" className="text-primary hover:text-accent font-medium text-sm sm:text-base">
                        All Services
                    </Link>
                    <a
                        href="tel:+13101234567"
                        className="bg-accent text-background font-semibold text-sm sm:text-base py-2 px-4 rounded-md hover:opacity-90 transition"
                    >
                        📞 Call Now
                    </a>
                </div>
            </div>
        </nav>
    );
}