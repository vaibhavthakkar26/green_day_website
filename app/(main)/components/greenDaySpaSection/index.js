
import Button from "../commons/button";
import Image from "next/image";
import { motion } from "framer-motion";

const GreenDaySpaSection = ({ GreenDaySpaData, animate }) => {
    const { title, description, button, varient, bgImage, image } = GreenDaySpaData || {};

    return (
        <div
            className="relative z-10 overflow-hidden h-full"
        >

            <div className="container flex sm:flex-row flex-col items-center justify-center gap-4 em:gap-6 lg:gap-8 pt-24 esm:pt-32 px-4 sm:px-8 pb-8 h-full md:h-auto max-h-full">

                <motion.div
                    className="w-full max-w-[635px]"
                    initial={{ opacity: 0, y: 100 }}
                    animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <h4 className="font-Dosis font-bold">{title}</h4>
                    <p className="SecondaryDescription font-OpenSans my-5 em:mt-[26px] em:mb-[30px]">
                        {description}
                    </p>
                    <Button label={button} href="#" variant={varient} />
                </motion.div>

                <motion.div
                    className="border-[1px] w-full max-w-[550px] lg:max-w-[648px] h-[320px] em:h-[380px] sm:h-[500px] md:h-[650px] 1xl:h-[756px] border-white relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                >
                    <Image
                        src={image}
                        alt="image"
                        loading="eager"
                        width={400}
                        height={400}
                        className="absolute top-2 right-2 w-full max-w-[550px] lg:max-w-[648px] h-[320px] em:h-[380px] sm:h-[500px] md:h-[650px] 1xl:h-[756px] object-cover"
                    />
                </motion.div>
            </div>
            <Image
                src={bgImage}
                alt="image"
                loading="eager"
                width={1920}
                height={1200}
                className="absolute inset-0 w-full min-h-screen -z-10 object-cover "
            />
            {bgImage && <div className="bg-black/30 px-8 w-full min-h-screen absolute inset-0 -z-10" />}
        </div>
    );
};

export default GreenDaySpaSection;
