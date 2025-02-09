"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../(main)/components/commons/footer";
import Button from "../(main)/components/commons/button";
import { ourBranchbanner } from "../../lib/json/pagesData/ourBranchPage/index";
import { motion } from "framer-motion";

const animations = [
  {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  },
  {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },

  {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  {
    initial: { opacity: 0, rotateX: 90 },
    animate: { opacity: 1, rotateX: 0 },
  },

];

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
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

        {ourBranchbanner.map((item, index) => {
          const { title, description, Titletag, button, image, link, variant } = item;
          const TitleTagComponent = Titletag || "h2";
          const animate = activeIndex === index;
          const animationVariant = animations[index % animations.length]; 

          return (
            <SwiperSlide
              key={index}
              className=" w-full"
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="bg-black/30 min-h-screen flex flex-col items-center justify-center px-8 w-full">
                <motion.div
                  initial={animationVariant.initial}
                  animate={animate ? animationVariant.animate : animationVariant.initial}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full max-w-[983px] mx-auto flex flex-col items-center"
                >
                  {title && (
                    <TitleTagComponent className="text-center font-bold font-Dosis text-white">
                      {title}
                    </TitleTagComponent>
                  )}
                  {description && (
                    <p className="text-white text-center font-OpenSans SecondaryDescription pt-[30px] w-full max-w-[648px]">
                      {description}
                    </p>
                  )}
                  {button && (
                    <div className="pt-[40px]">
                      <Button label={button} href={link} variant={variant} />
                    </div>
                  )}
                </motion.div>
              </div>
            </SwiperSlide>
          );
        })}

      
        <SwiperSlide className="flex items-center justify-center h-screen bg-black">
          <Footer animate={activeIndex === ourBranchbanner.length} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Service;
