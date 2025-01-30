// "use client";
// import React from "react";
// import Carousel from "../commons/carousel";
// import clsx from "clsx";
// import Button from "../commons/button";

// const PriceRateSection = ({ PriceRateSectiondata }) => {
//   const { priceRates, image } = PriceRateSectiondata || {};
//   console.log(PriceRateSectiondata, "sss")
//   return (
//     <div className={clsx("overflow-hidden", image ? "py-[228px] relative z-10" : "")} style={{ backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
//       {image && <div className='bg-black/30 px-8 w-full h-full absolute inset-0 -z-10'></div>}
//       <div className="w-full max-w-[1560px] ml-auto">
//         <Carousel
//           slidesPerView={1}
//           spaceBetween={16}
//           data={priceRates}
//           dots={true}
//           loop={false}
//           swiperWrapperClass = "!overflow-visible"
//           breakpoints={{
//             640: {
//               slidesPerView: 5,
//               spaceBetween: 24,
//             },
//           }}
//           renderSlide={(item, index) => {
//             const { price, description, author, color,button,variant } = item || {}
//             return (
//               <div key={index} className="border-[1px] border-white relative w-full h-[517px] pl-2.5">
//                <div className="bg-black/50 p-5 absolute top-2 -right-3 left-2 flex flex-col items-center w-full max-w-[312px]">
//                <h5 className="text-[34px] font-semibold font-Dosis text-cneter">
//                   {price}
//                 </h5>
//                 <span className="PrimarySubtitle font-Dosis font-semibold mt-[15px]">{color}</span>
//                 {item.description && (
//                   <p
//                     className="SecondaryDescription font-OpenSans tracking-[0.65px] [&>p]:flex [&>p]:flex-col [&>p]:gap-2.5 text-center mt-5"
//                     dangerouslySetInnerHTML={{ __html: description }}
//                   />
//                 )}
//                 {author && (
//                   <p className="SecondaryDescription font-OpenSans italic tracking-[0.65px]">
//                     {author}
//                   </p>
//                 )}
//                 {button&&
//                 <Button label={button} variant={variant} href={"#"} className="mt-2.5"   />
//                 }
//                 </div>
//               </div>
//             )
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default PriceRateSection;




"use client";

import React from "react";
import Carousel from "../commons/carousel";
import clsx from "clsx";
import Button from "../commons/button";

const PriceRateSection = ({ PriceRateSectiondata }) => {
  const { priceRates, image } = PriceRateSectiondata || {};

  return (
    <div
      className={clsx("overflow-hidden", image ? "py-[228px] relative z-10" : "")}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {image && <div className="bg-black/30 px-8 w-full h-full absolute inset-0 -z-10"></div>}

      <div className="w-full max-w-[1560px] ml-auto">
        <Carousel
          slidesPerView={1}
          spaceBetween={16}
          data={priceRates}
          dots={true}
          dotVariant="priceRate"
          loop={true}
          swiperWrapperClass="!overflow-visible"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
          renderSlide={(item, index) => {
            const { price, description, author, color, button, variant } = item || {};
            return (
              <div key={index} className="border-[1px] border-white relative w-full h-[450px] md:h-[517px] pl-2.5 ">
                <div className="bg-black/50 p-5 absolute top-2 -right-3 left-2 flex flex-col items-center w-full max-w-full md:max-w-[312px]">
                  <h5 className="text-[34px] font-semibold font-Dosis text-center">
                    {price}
                  </h5>
                  <span className="PrimarySubtitle font-Dosis font-semibold mt-[15px]">
                    {color}
                  </span>
                  {item.description && (
                    <p
                      className="SecondaryDescription font-OpenSans tracking-[0.65px] [&>p]:flex [&>p]:flex-col [&>p]:gap-2.5 text-center mt-5"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  )}
                  {author && (
                    <p className="SecondaryDescription font-OpenSans italic tracking-[0.65px]">
                      {author}
                    </p>
                  )}
                  {button && (
                    <Button label={button} variant={variant} href={"#"} className="mt-2.5 whitespace-nowrap" />
                  )}
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default PriceRateSection;
