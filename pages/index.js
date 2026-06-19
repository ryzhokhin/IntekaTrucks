import About from "@/components/About";
import ServicesOverview from "@/components/ServicesOverview";
import Partners from "@/components/Partners";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import HeroSplit from "@/components/HeroSplit";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <HeroSplit />
            <About />
            <ServicesOverview />
            <Partners />
            <ContactForm />
            <Footer />
        </main>
    );
}