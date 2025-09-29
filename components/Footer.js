import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-foreground text-background py-12 ">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                {/* Column 1: Logo & Tagline */}
                <div>
                    <h3 className="text-2xl font-bold text-background mb-2">INTEKA</h3>
                    <p className="text-sm leading-relaxed text-muted">
                        Łączymy wieloletnie doświadczenie z elastycznym podejściem, oferując logistyke dopasowaną do Twoich potrzeb.
                    </p>
                    <p className="text-xs mt-6 text-muted">
                        &copy; {new Date().getFullYear()} INTEKA. All rights reserved.
                    </p>
                </div>

                {/* Column 2: Navigation */}
                <div>
                    <h4 className="text-background font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-muted">
                        <li><Link href="/" className="hover:text-background transition">Home</Link></li>
                        <li><Link href="/services" className="hover:text-background transition">Services</Link></li>
                        <li><a href="#about" className="hover:text-background transition">About Us</a></li>
                        <li><a href="#contact" className="hover:text-background transition">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div>
                    <h4 className="text-background font-semibold mb-3">Contact</h4>
                    <ul className="text-sm space-y-2 text-muted">
                        <li>📍 Ul. Herberta 3A,
                            59-700 Boleslawiec</li>
                        {/*<li>📞 +1 (310) 123-4567</li>*/}
                        <li>✉️ biuro@inteka.pl</li>
                    </ul>
                </div>

                {/* Column 4: Social or CTA */}
                <div>
                    <h4 className="text-background font-semibold mb-3">Connect with Us</h4>
                    <div className="flex space-x-4 text-muted">
                        <a href="#" className="hover:text-background transition"><FaFacebookF /></a>
                        <a href="#" className="hover:text-background transition"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-background transition"><FaInstagram /></a>
                    </div>
                    <Link
                        href="#contact"
                        className="inline-block mt-6 bg-accent hover:opacity-90 text-background text-sm font-semibold py-2 px-4 rounded transition"
                    >
                        Request a Quote
                    </Link>
                </div>
            </div>
        </footer>
    );
}