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
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    // Check if the URL contains a hash and navigate to the appropriate section
    const navigateToHashSection = () => {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1); // Get hash without '#'
        const sectionIndexes = {
          pricing: 4, // Change this index based on your Swiper order
        };

        if (sectionIndexes[hash] !== undefined && swiperRef.current) {
          swiperRef.current.slideTo(sectionIndexes[hash]); // Navigate to the correct slide
        }
      }
    };


    setTimeout(navigateToHashSection, 500); 


    window.addEventListener("hashchange", navigateToHashSection);

    return () => {
     
      window.removeEventListener("hashchange", navigateToHashSection);
    };
  }, []);

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
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
          <HomeHeroSection bannerData={banner} animate={activeIndex === 0} />
        </SwiperSlide>

        <SwiperSlide>
          <GreenDaySpaSection GreenDaySpaData={welcomDaySpa} animate={activeIndex === 1} />
        </SwiperSlide>

        <SwiperSlide>
          <MeassageSection meassageSectionData={homeMeassageSection} animate={activeIndex === 2} />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonialSection TestimonialData={homeTestimonial} animate={activeIndex === 3} />
        </SwiperSlide>

        <SwiperSlide id="pricing">
          <PriceRateSection PriceRateSectiondata={PriceRatedata} animate={activeIndex === 4} />
        </SwiperSlide>

        <SwiperSlide>
          <Footer animate={activeIndex === 5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
