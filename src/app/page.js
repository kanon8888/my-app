import Banner from "@/components/Home/Banner";
import FeaturesSection from "@/components/Home/FeaturesSection";
import Products from "@/components/Home/Products";
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
    </div>
  );
}
