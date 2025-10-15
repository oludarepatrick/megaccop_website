import React from "react";
import { Button } from "@/components/ui/button";
import { motion, type Transition } from "framer-motion";
import heroimage from "@/assets/investment-hero-image.png";
import icon1 from "@/assets/investment-icon1.png";
import shapecircle from "@/assets/invest-shape-circle.png";
import shapehorizontal from "@/assets/invest-shape-horizontal-line.png";
import shapevertical from "@/assets/invest-shape-vertical-line.png";
import shapezigzag from "@/assets/invest-shape-zigzag.png";
import shaperectangle from "@/assets/invest-shape-rectangle.png";

const InvestmentHeroSection: React.FC = () => {
  // Floating animation (type-safe)
  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: ["easeInOut"] as Transition["ease"], // ✅ fixed type
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as Transition["ease"] },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 py-20 md:py-28 bg-white ">
      {/* Floating background shapes */}
      <motion.img
        src={shapevertical}
        alt="shape-left"
        className="absolute left-2 top-10 "
        animate={floatAnimation.animate}
      />
      
      <motion.img
        src={shapecircle}
        alt="shape-left-middle"
        className="absolute left-10 top-1/3 w-4"
        animate={floatAnimation.animate}
      />
      
      <motion.img
        src={shapehorizontal}
        alt="shape-left-middle"
        className="absolute left-50 top-1/2 w-4"
        animate={floatAnimation.animate}
      />
      <motion.img
        src={shapezigzag}
        alt="shape-right"
        className="absolute right-2 bottom-[-30px] w-32 md:w-56"
        animate={floatAnimation.animate}
      />
      <motion.img
        src={shapehorizontal}
        alt="shape-top"
        className="absolute top-0 right-5"
        animate={floatAnimation.animate}
      />
      <motion.img
        src={shapecircle}
        alt="shape-top"
        className="absolute top-1/2 right-15 w-4"
        animate={floatAnimation.animate}
      />
      <motion.img
        src={shaperectangle}
        alt="shape-bottom"
        className="absolute bottom-[-30px] left-20 "
        animate={floatAnimation.animate}
      />

      {/* Badge */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full shadow-sm mb-6 text-sm md:text-base z-10"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full">
            <img src={icon1} alt="Investment Icon" className="w-8 h-8" />
        </span>
        Smart Finance, Smart Living
      </motion.div>

      {/* Headline */}
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-5xl font-extrabold leading-tight text-center mb-4 z-10"
      >
        <span className="text-green-600">We make it easy for</span>{" "}
        <br className="hidden md:block" />
        <span className="text-green-600">everyone to</span>{" "}
        <span className="text-orange-500">invest</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
        className="max-w-2xl text-gray-600 text-sm md:text-base mb-10 z-10"
      >
        Investment is a term with several meanings related to finance and
        economics. The term relates to the accumulation of an asset in the forms
        of an expectation of future profits.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-base md:text-lg font-medium shadow-lg transition-all">
          Invest with us today
        </Button>
      </motion.div>

      {/* Floating illustration */}
      {/* <motion.img
        src={heroimage}
        alt="investment illustration"
        className="absolute right-6 md:right-20 top-10 md:top-25 w-44 md:w-72 z-0"
        animate={floatAnimation.animate}
      /> */}
          {/* Floating illustration */}
<motion.img
  src={heroimage}
  alt="investment illustration"
  className="
    absolute 
    md:right-20 md:top-2 md:w-82 
    right-0 top-0 w-full h-full 
    object-cover md:object-contain 
    opacity-30 md:opacity-100 
    z-0
  "
  animate={floatAnimation.animate}
/>

    </section>
  );
};

export default InvestmentHeroSection;
