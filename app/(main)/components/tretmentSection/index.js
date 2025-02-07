import Image from 'next/image'
import React from 'react'
import Button from '../commons/button'

const TretmentSection = ({ treatmentData }) => {
  const { title, images1, images2, priceeList ,button, variant} = treatmentData || {}
  return (
    <div className='py-[60px] md:py-[80px] lg:py-[100px]'>
      <div className='container'>
        <h4 className='text-center font-Dosis font-bold mb-[50px]'>{title}</h4>
        <div className='flex md:flex-row flex-col w-full justify-between gap-6'>
          <div className="w-full max-w-full md:max-w-[648px] flex flex-col gap-4 sm:gap-6">
            <div className="flex sm:flex-row flex-col gap-4 sm:gap-6  ">
              {/* Map Images */}
              {images1.map((item, index) => (
                <div key={index} className="w-full sm:w-fit">
                  <Image
                    src={item.item}
                    alt=""
                    width={500}
                    height={400}
                    className="w-full md:w-auto h-[320px] sm:h-full sm:max-h-[380px] object-cover sm:object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex sm:flex-row flex-col gap-4 sm:gap-6   ">
              {/* Map Images */}
              {images2.map((item, index) => (
                <div key={index} className="w-full sm:w-fit">
                  <Image
                    src={item.item}
                    alt=""
                    width={500}
                    height={400}
                    className="w-full md:w-auto h-[320px] sm:h-full sm:max-h-[380px] object-cover sm:object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            {
              priceeList &&
              priceeList.map((item, index) => {
                const { title, price, description } = item || {}
                return (
                  <div key={index} className='bg-white/10 p-2.5'>
                    <div className='flex items-end justify-between gap-4'>
                      <h6 className='font-Dosis font-semibold PrimarySubtitle !leading-[100%]  whitespace-nowrap'>
                        {title}
                      </h6>
                      <div className='w-full h-[2px] border-[1px] border-white border-dashed mb-1 em:block hidden'>
                        </div>
                     <span className='font-Dosis font-semibold PrimarySubtitle !leading-[100%]  whitespace-nowrap'>{price}</span>
                    </div>
                    <p className='SecondaryDescription font-OpenSans tracking-[0.65px] mt-2.5'>{description}</p>
                  </div>
                )
              })
            }
            <Button label={button} variant={variant} href={"#"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TretmentSection
