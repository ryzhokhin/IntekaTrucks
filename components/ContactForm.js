import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact Form Submitted:", formData);
        alert("Thank you! We'll be in touch soon.");
    };

    return (
        <section className="bg-background py-20 scroll-mt-24" id="contact">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left: Visual Block */}
                <div className="hidden md:block">
                    <img
                        src="/images/contact-agent.jpg"
                        alt="Customer support representative"
                        className="rounded-xl shadow-lg object-cover w-full h-full"
                    />
                </div>

                {/* Right: Form */}
                <div className="bg-background rounded-xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Request a Quote</h2>
                    <p className="text-muted mb-6">
                        Our team responds fast. Let us know your needs — we’ll handle the rest.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-muted bg-background text-foreground placeholder:text-muted rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full border border-muted bg-background text-foreground placeholder:text-muted rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-muted bg-background text-foreground placeholder:text-muted rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full border border-muted bg-background text-foreground placeholder:text-muted rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                        />

                        <button
                            type="submit"
                            className="w-full bg-accent hover:opacity-90 text-background font-semibold py-3 px-6 rounded-lg transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}