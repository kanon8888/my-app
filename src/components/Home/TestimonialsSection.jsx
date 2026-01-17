"use client";

import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Rakib Hasan",
        review: "Amazing quality! Fast delivery and great support.",
        rating: 5,
    },
    {
        name: "Ayesha Rahman",
        review: "Loved the product. Highly recommended!",
        rating: 4,
    },
    {
        name: "Mahmudul Islam",
        review: "Best smart shop experience I’ve had so far.",
        rating: 5,
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-base-100">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <div className="text-center mb-12 animate-text">
                    <h2 className="text-4xl font-bold">What Our Customers Say</h2>
                    <p className="text-gray-500 mt-2">
                        Real reviews from our happy customers
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="card bg-base-200 shadow-lg p-6 hover:shadow-xl transition"
                        >
                            <h3 className="font-semibold text-lg mb-2">{item.name}</h3>

                            {/* Rating */}
                            <div className="flex gap-1 text-yellow-400 mb-3">
                                {[...Array(item.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            <p className="text-gray-600 italic">
                                “{item.review}”
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
