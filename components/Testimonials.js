import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
    {
        quote: "INTEKA has been our go-to trucking company for years. They're always on time and easy to work with.",
        author: "Sarah B.",
        title: "Supply Chain Manager",
        rating: 5,
    },
    {
        quote: "Reliable, professional, and affordable. Their logistics planning has helped us cut costs and reduce delays.",
        author: "Carlos M.",
        title: "Warehouse Director",
        rating: 4,
    },
    {
        quote: "They saved us during a major supply chain delay. Highly recommend their freight team.",
        author: "Amanda T.",
        title: "Logistics Lead",
        rating: 5,
    },
    {
        quote: "Efficient service with great communication. Very easy to coordinate with.",
        author: "James L.",
        title: "Fleet Manager",
        rating: 4,
    },
];

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section
            className="relative bg-section bg-cover bg-center bg-no-repeat py-16 scroll-mt-24"
            style={{ backgroundImage: "url('/images/testimonial-bg-1.jpg')" }} // replace with your image
            id="testimonials"
        >
            {/* Semi-transparent white overlay */}
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm z-0" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-foreground mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-muted mb-10">
                        Trusted by small businesses and enterprise clients alike.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Slider {...settings}>
                        {reviews.map((review, index) => (
                            <div key={index} className="px-3">
                                <div className="bg-background max-w-sm mx-auto p-8 rounded-xl shadow-md text-center transition transform hover:scale-[1.02]">
                                    <div className="flex justify-center mb-4">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-accent" />
                                        ))}
                                    </div>
                                    <p className="text-foreground italic mb-6">“{review.quote}”</p>
                                    <p className="text-foreground font-semibold">
                                        — {review.author}, {review.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </section>
    );
}