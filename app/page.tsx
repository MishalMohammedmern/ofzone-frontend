import Image from "next/image";
import Hero from "./home/components/Hero";
import OfferList from "@/components/OfferList";
import ImageSlider from "@/components/Slider";
import RunningOffers from "@/components/PercentageCard";
import ShopByBrands from "./home/components/Brands";
import CTABanner from "./home/components/CtaBanner";

export default function Home() {
  return (
    <div className=" container mx-auto flex flex-col gap-6 px-3 ">
      <Hero />
      <OfferList heading="Near By Running Offers" />
      <ImageSlider />
      <OfferList heading="Offers Starting From Tommorow " />
      <OfferList heading="Upcoming Offers " />
      <ImageSlider />
      <RunningOffers />
      <ImageSlider />
      <OfferList heading="Card Offers " />
      <ImageSlider />
      <ShopByBrands/>
      <CTABanner/>

    </div>
  );
}
