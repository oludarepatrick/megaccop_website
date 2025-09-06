import { useHead } from "@unhead/react";
import FeatureCards from "@/components/ServiceComponents/FeaturesCard";
import ServiceGrid from "@/components/ServiceComponents/ServiceGrids";
import AppDownload from "@/components/ServiceComponents/AppDownload";
import { motion } from "framer-motion";

const Services = () => {
    useHead({title: "Services"});

    return(
        
      <div className="min-h-screen bg-background flex flex-col mx-auto lg:pl-8 md:pl-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold pt-8 text-balance w-full md:w-[65%] p-2 text-center md:text-left"
        >
          Smart, Simple Services to Power Your Financial Journey
        </motion.h2>
      <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-muted-foreground w-full md:w-[57%]  text-center pl-2 md:text-left text-balance"
        >
          From saving and borrowing to shopping and housing support MegaCoop gives you tools to take control of your money.
        </motion.p>
      <FeatureCards />
      <ServiceGrid />
      <AppDownload />
    </div>
    )
}
export default Services;