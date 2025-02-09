import React from 'react'
import Button from '../commons/button'
import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion';

const MeassageSection = ({ meassageSectionData , animate}) => {
    const { image, meassageSectionMeassage } = meassageSectionData || {}
    return (
        <div>
            {image ? <div className={clsx("relative z-10 min-h-screen")} style={{ backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: 'fixed' }}>
                {image && <div className='bg-black/30 px-8 w-full absolute inset-0 -z-10'></div>}
                <div className='container py-28 em:py-32 px-4 sm:px-8 min-h-screen flex flex-col items-center justify-center'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-4'  >
                        {meassageSectionMeassage &&
                            meassageSectionMeassage.map((item, index) => {
                                const { title, description, button, varient, bgImage } = item || {}
                                return (
                                    <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                    transition={{ duration: 1, ease: "easeInOut", delay: index * 0.4 }}
                                    className='relative flex flex-col items-center justify-center  z-10'>
                                        <div className='absolute inset-0 -z-10 flex items-center justify-center'>
                                            <Image src={bgImage} alt='' width={400} height={400} className='object-contain h-[180px] md:h-[230px] lg:h-auto ' />
                                        </div>
                                        <div className='h-full flex flex-col items-center justify-center gap-5'>
                                            <h5 className=' text-[26px] md:text-[30px] lg:text-[35px] font-semibold font-Dosis text-center'>
                                                {title}
                                            </h5>
                                            <p className='text-sm md:text-base text-center font-OpenSans tracking-[0.65px]'>{description}</p>
                                            <Button label={button} variant={varient} href={"#"} />
                                        </div>


                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>
                :
                <div className={clsx("relative z-10")} >
                    <div className='container'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-4'  >
                            {meassageSectionMeassage &&
                                meassageSectionMeassage.map((item, index) => {
                                    const { title, description, button, varient, bgImage } = item || {}
                                    return (
                                        <div key={index} className='relative flex flex-col items-center justify-center  z-10'>
                                            <div className='absolute inset-0 -z-10 flex items-center justify-center'>
                                                <Image src={bgImage} alt='' width={400} height={400} className='object-contain' />
                                            </div>
                                            <div className='h-full flex flex-col items-center justify-center gap-5'>
                                                <h5 className=' text-[26px] md:text-[30px] lg:text-[35px] font-semibold font-Dosis text-center'>
                                                    {title}
                                                </h5>
                                                <p className='text-sm md:text-base text-center font-OpenSans tracking-[0.65px]'>{description}</p>
                                                <Button label={button} variant={varient} href={"#"} />
                                            </div>


                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>


                </div>

            }
        </div>
    )
}

export default MeassageSection
