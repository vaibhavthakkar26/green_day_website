import { banner, homeMeassageSection, homeTestimonial, welcomDaySpa } from "../lib/json/pagesData/homePage/index";
import Banner from "./components/commons/banner";
import GreenDaySpaSection from "./components/greenDaySpaSection";
import MeassageSection from "./components/meassageSection";
import PriceRateSection from "./components/priceRateSection";
import TestimonialSection from "./components/testimonialSection";


export default function Home() {
  const bannerData = banner
  const GreenDaySpaData= welcomDaySpa
  const meassageSectionData = homeMeassageSection
  const TestimonialData = homeTestimonial
  const PriceRateSectiondata=PriceRatedata
  return (
    <div>
      <Banner bannerData={bannerData} />
      <GreenDaySpaSection GreenDaySpaData={GreenDaySpaData} />
      <MeassageSection meassageSectionData={meassageSectionData} />
      <TestimonialSection TestimonialData={TestimonialData} />
      <PriceRateSection PriceRateSectiondata={PriceRateSectiondata} />
    </div>
  );
}
