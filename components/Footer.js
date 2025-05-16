import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-24">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                {/* Column 1: Logo & Tagline */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">INTEKA</h3>
                    <p className="text-sm leading-relaxed">
                        A trusted transport and logistics partner delivering fast, secure, and personalized freight solutions.
                    </p>
                    <p className="text-xs mt-6 text-gray-500">&copy; {new Date().getFullYear()} INTEKA. All rights reserved.</p>
                </div>

                {/* Column 2: Navigation */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                        <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                        <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                        <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Contact</h4>
                    <ul className="text-sm space-y-2">
                        <li>📍 Los Angeles, CA</li>
                        <li>📞 +1 (310) 123-4567</li>
                        <li>✉️ info@inteka.com</li>
                    </ul>
                </div>

                {/* Column 4: Social or CTA */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Connect with Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
                        <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-white transition"><FaInstagram /></a>
                    </div>
                    <Link
                        href="#contact"
                        className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded transition"
                    >
                        Request a Quote
                    </Link>
                </div>
            </div>
        </footer>
    );
}