"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const OfferSection = () => {
    const router = useRouter();

    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

                
                <div className="flex-1 space-y-5 animate-text">
                    <h4 className="text-sm uppercase tracking-widest text-yellow-300">
                        Special Offer
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Up to <span className="text-yellow-300">30% OFF</span>
                    </h2>
                    <p className="text-gray-200 max-w-md">
                        Grab your favorite smart gadgets at unbeatable prices.
                        Limited time offer – don’t miss out!
                    </p>

                    <button
                        onClick={() => router.push("/products")}
                        className="btn btn-warning text-black font-semibold"
                    >
                        Shop Now
                    </button>
                </div>

                
                <div className="flex-1 flex justify-center animate-image floating-img">
                    <Image
                        src="/image-off-1.webp"
                        alt="Special Offer"
                        width={420}
                        height={350}
                        className="rounded-xl shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default OfferSection;


