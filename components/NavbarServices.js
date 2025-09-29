import Link from "next/link";
import Image from "next/image";

export default function NavbarServices() {
    return (
        <nav className="bg-background shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 py-3 sm:py-4">

                {/* Logo Image */}
                <div className="relative h-16 w-[200px] sm:h-20 sm:w-[240px]">
                    <Link href="/">
                    <Image
                        src="/images/inteka-logo-2-ugol.svg"
                        alt="INTEKA Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                    </Link>
                </div>

                {/* Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    <Link href="/" className="text-foreground hover:text-accent font-medium text-sm sm:text-base">
                        Kim jesteśmy?
                    </Link>
                    <a href="#logistics" className="text-foreground hover:text-accent font-medium text-sm sm:text-base">
                        Transport&Spedycja
                    </a>
                    <a href="#CTO" className="text-foreground hover:text-accent font-medium text-sm sm:text-base">
                        Serwis
                    </a>
                    <a
                        href="#contact"
                        className="bg-accent text-background font-semibold text-sm sm:text-base py-2 px-4 rounded-md hover:opacity-90 transition"
                    >
                        📞 Skontaktuj Sie Z Nami
                    </a>
                </div>
            </div>
        </nav>
    );
}