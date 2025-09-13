import Benefits from "@/components/Benefits";
import Download from "@/components/Download";
import Faq from "@/components/Faq";
import HeroSection from "@/components/HeroSection";
import MobileLook from "@/components/MobileLook";
import Testimonials from "@/components/Testimonial";
import { useHead } from "@unhead/react";
import { motion, type Variants } from "framer-motion";
import { useEffect } from "react";



const Home = () => {
    useHead({title: "Home"});

        useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    // // Animation variants
    // const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

    
    // const containerVariants: Variants = {
    //     hidden: { opacity: 0 },
    //     show: {
    //         opacity: 1,
    //         transition: {
    //             duration: 0.5,
    //             staggerChildren: 0.1,
    //             ease
    //         }
    //     }
    // };

    const heroVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };
    
    return(
        <>
            <motion.div
                initial="hidden"
                animate="show"
                variants={heroVariants}
            >
                <HeroSection/>
            </motion.div>
            <Benefits/>
            <MobileLook/>
            <Faq/>
            <Testimonials/>
            <Download/>   
        
        </>
    )
}
export default Home;
