import React from "react";
import { motion, type Transition } from "framer-motion";
import BackgroundImage from "@/assets/investment-second-section-background-image.png";
import horizontalline from "@/assets/investment-second-section-image.svg";
// import BackgroundImage2 from "@/assets/investment-background-image2.png";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as Transition["ease"] },
    },
  };

export default function InvestServices() {
  return (
      <section
          className="relative flex flex-col items-center justify-center text-center px-4 py-20 md:py-28  bg-cover bg-center object-cover overflow-hidden "
            style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
          <motion.div
                // animate={{ scale: [1, 1.1, 1] }}
                // transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute -bottom-50 left-[-150px] h-[350px] w-[350px] rounded-full bg-transparent border-[190px] border-[#0F7033] opacity-30 z-0"
            />

          {/* Headline */}
                <motion.h3
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                  className="text-2xl md:text-6xl  leading-tight text-center mb-6 z-10"
                >
                  <span className="text-green-600">Our Best Services</span>{" "}
                  <br className="hidden md:block" />
                  <span className="text-green-600">For Your Convenience</span>{" "}
                </motion.h3>
                {/* Description */}
                      <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                        className="w-1/2 max-w-lg text-gray-600 text-xs md:text-base mb-6 z-10"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </motion.p>
                      
          <img
            src={horizontalline}
            alt="Decorative Line"
            className="w-3/4 md:w-full max-w-lg md:max-w-screen-sm z-10"
          />
    </section>
  );
}