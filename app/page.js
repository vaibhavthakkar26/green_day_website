"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  banner,
  homeMeassageSection,
  homeTestimonial,
  PriceRatedata,
  welcomDaySpa,
} from "../lib/json/pagesData/homePage/index";
import GreenDaySpaSection from "./(main)/components/greenDaySpaSection";
import MeassageSection from "./(main)/components/meassageSection";
import PriceRateSection from "./(main)/components/priceRateSection";
import TestimonialSection from "./(main)/components/testimonialSection";
import Footer from "./(main)/components/commons/footer";
import HomeHeroSection from "../app/components/homeheroSection/index";
import { useState } from "react";


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        effect="fade"
        autoplay={false}
        loop={false}
        mousewheel={true}
        modules={[EffectFade, Mousewheel, Autoplay]}
        className="h-screen"
        speed={500}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} 
      >
        <SwiperSlide>
          <HomeHeroSection bannerData={banner}       animate={activeIndex === 0}  />
        </SwiperSlide>

        <SwiperSlide>
          <GreenDaySpaSection
            GreenDaySpaData={welcomDaySpa}
            animate={activeIndex === 1} // Only animate when this slide is active
          />
        </SwiperSlide>

        <SwiperSlide>
          <MeassageSection meassageSectionData={homeMeassageSection} animate={activeIndex === 2} />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonialSection TestimonialData={homeTestimonial} animate={activeIndex === 3} />
        </SwiperSlide>

        <SwiperSlide>
          <PriceRateSection PriceRateSectiondata={PriceRatedata} animate={activeIndex === 4} />
        </SwiperSlide>

        <SwiperSlide>
          <Footer  animate={activeIndex === 5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
