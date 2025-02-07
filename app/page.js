"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { banner, homeMeassageSection, homeTestimonial, PriceRatedata, welcomDaySpa } from "../lib/json/pagesData/homePage/index";
import Banner from "./(main)/components/commons/banner";
import GreenDaySpaSection from "./(main)/components/greenDaySpaSection";
import MeassageSection from "./(main)/components/meassageSection";
import PriceRateSection from "./(main)/components/priceRateSection";
import TestimonialSection from "./(main)/components/testimonialSection";
import Footer from "./(main)/components/commons/footer";

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative">
      {/* Swiper Sections with smooth fade transition */}
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        effect="fade"
        autoplay={false}
        loop={true}
        mousewheel={true}
        modules={[EffectFade, Mousewheel,Autoplay]}
        className="h-screen"
        speed={500}
      >
        <SwiperSlide>
          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1 }}
          >
            <Banner bannerData={banner} />
          </motion.div>
        </SwiperSlide>

        <SwiperSlide>
          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1 }}
          >
            <GreenDaySpaSection GreenDaySpaData={welcomDaySpa} />
          </motion.div>
        </SwiperSlide>

        <SwiperSlide>
          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1 }}
          >
            <MeassageSection meassageSectionData={homeMeassageSection} />
          </motion.div>
        </SwiperSlide>

        <SwiperSlide>
          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1 }}
          >
            <TestimonialSection TestimonialData={homeTestimonial} />
          </motion.div>
        </SwiperSlide>

        <SwiperSlide>
          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1 }}
          >
            <PriceRateSection PriceRateSectiondata={PriceRatedata} />
          </motion.div>
        </SwiperSlide>

        <SwiperSlide>
          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1 }}
          >
            <Footer />
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
