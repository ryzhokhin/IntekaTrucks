import { useState, useEffect } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setShowSuccess(false);
        setShowError(false);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setShowSuccess(true);
                setFormData({ name: "", phone: "", email: "", message: "" });
            } else {
                setShowError(true);
            }
        } catch (err) {
            console.error(err);
            setShowError(true);
        } finally {
            setIsLoading(false);
        }
    };

    // Hide success message after 4 seconds
    useEffect(() => {
        if (showSuccess || showError) {
            const timer = setTimeout(() => {
                setShowSuccess(false);
                setShowError(false);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [showSuccess, showError]);

    return (
        <section className="bg-background py-20 scroll-mt-24" id="contact">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left: Visual */}
                <div className="hidden md:block">
                    <img
                        src="/images/contact-agent.jpg"
                        alt="Customer support representative"
                        className="rounded-xl shadow-lg object-cover w-full h-full"
                    />
                </div>

                {/* Right: Form */}
                <div className="bg-background rounded-xl shadow-lg p-8 relative">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Request a Quote</h2>
                    <p className="text-muted mb-6">
                        Our team responds fast. Let us know your needs — we’ll handle the rest.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5 relative">

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
                            disabled={isLoading}
                            className="w-full bg-accent hover:opacity-90 text-background font-semibold py-3 px-6 rounded-lg transition"
                        >
                            {isLoading ? "Sending..." : "Send Message"}
                        </button>

                        {/* Loading Spinner */}
                        {isLoading && (
                            <div className="absolute right-5 bottom-6 animate-spin h-5 w-5 border-2 border-t-transparent border-accent rounded-full" />
                        )}
                    </form>

                    {/* Success Toast */}
                    {showSuccess && (
                        <div className="absolute bottom-[-100px] left-0 right-0 flex justify-center animate-fade-in-up">
                            <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
                                ✅ Thank you! Your message has been sent. We’ll be in touch soon.
                            </div>
                        </div>
                    )}

                    {/* Error Toast */}
                    {showError && (
                        <div className="absolute bottom-[-100px] left-0 right-0 flex justify-center animate-fade-in-up">
                            <div className="bg-red-100 text-red-800 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
                                ❌ Something went wrong. Please try again later.
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}