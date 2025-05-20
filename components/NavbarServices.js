import Link from "next/link";
import Image from "next/image";

export default function NavbarServices() {
    return (
        <nav className="bg-background shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 py-3 sm:py-4">

                {/* Logo Image */}
                <div className="relative h-12 w-[160px]">
                    <Link href="/">
                    <Image
                        src="/images/logo-inteka.png"
                        alt="INTEKA Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                    </Link>
                </div>

                {/* Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    <a href="/" className="text-foreground hover:text-accent font-medium text-sm sm:text-base">
                        Who we are
                    </a>
                    <a href="#logistics" className="text-foreground hover:text-accent font-medium text-sm sm:text-base">
                        Freight & Logistics Services
                    </a>
                    <a href="#CTO" className="text-foreground hover:text-accent font-medium text-sm sm:text-base">
                        CTO
                    </a>
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