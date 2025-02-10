"use client";

import React, { useEffect, useState } from "react";
import Carousel from "../commons/carousel";
import clsx from "clsx";
import Button from "../commons/button";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";
import Image from "next/image";

const PriceRateSection = ({ PriceRateSectiondata, animate }) => {
  const { priceRates, image } = PriceRateSectiondata || {};
  const [hydratedPriceRates, setHydratedPriceRates] = useState([]);

  useEffect(() => {
    // Ensure descriptions are properly hydrated on the client
    setHydratedPriceRates(
      priceRates.map((item) => ({
        ...item,
        description: DOMPurify.sanitize(item.description || ""),
      }))
    );
  }, [priceRates]);

  return (
    <div
      className={clsx("overflow-hidden", image ? "py-28 em:py-40 px-4 sm:px-8 min-h-screen flex flex-col items-center justify-center relative z-10" : "")}    >

      <div>
        <Image src={image} alt='' width={1920} height={1100} loading='eager' className='object-cover absolute inset-0 w-full min-h-screen -z-10 ' />
        {image && <div className='bg-black/30 px-8 w-full absolute inset-0 -z-10'></div>}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full max-w-[1560px] ml-auto">
        <Carousel
          slidesPerView={1}
          spaceBetween={16}
          data={hydratedPriceRates}
          dots={true}
          dotVariant="priceRate"
          loop={true}
          swiperWrapperClass="!overflow-visible"
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2.5, spaceBetween: 10 },
            1024: { slidesPerView: 3.5, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
            1440: { slidesPerView: 5, spaceBetween: 24 },
          }}
          renderSlide={(item, index) => {
            const { price, description, author, color, button, variant } = item || {};
            return (
              <div key={index} className="border-[1px] border-white relative w-full h-[517px] pl-2.5">
                <div className="bg-black/50 p-3 1xl:p-2.5 absolute top-2 -right-3 left-2 flex flex-col items-center w-full max-w-full lg:max-w-[312px] h-full">
                  <h5 className="text-[34px] font-semibold font-Dosis text-center">{price}</h5>
                  <span className="PrimarySubtitle font-Dosis font-semibold mt-[15px]">{color}</span>
                  {description && (
                    <p
                      className="SecondaryDescription font-OpenSans tracking-[0.65px] [&>p]:flex [&>p]:flex-col [&>p]:gap-2.5 text-center mt-5"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  )}
                  {author && (
                    <p className="SecondaryDescription font-OpenSans italic tracking-[0.65px]">{author}</p>
                  )}
                  {button && <Button label={button} variant={variant} href={"#"} className="mt-5 lg:mt-2.5 whitespace-nowrap" />}
                </div>
              </div>
            );
          }}
        />
      </motion.div>
    </div>
  );
};

export default PriceRateSection;
