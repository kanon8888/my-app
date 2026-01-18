import Banner from "@/components/Home/Banner";
import FeaturesSection from "@/components/Home/FeaturesSection";
import Newsletter from "@/components/Home/Newsletter";
import OfferSection from "@/components/Home/OfferSection";
import Products from "@/components/Home/Products";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className='space-y-20'>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Products></Products>
      </section>
      <section>
        <FeaturesSection></FeaturesSection>
      </section>
      <section>
        <OfferSection></OfferSection>
      </section>
      <section>
        <TestimonialsSection></TestimonialsSection>
      </section>
      <section>
        <Newsletter></Newsletter>
      </section>
    </div>
  );
}
