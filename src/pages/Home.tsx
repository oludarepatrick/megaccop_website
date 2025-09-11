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
    
    // Animation variants
    const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

    
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
                ease
            }
        }
    };
    
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease
            }
        }
    };
    
    return(
        <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
        >
            <motion.div variants={itemVariants}>
                <HeroSection/>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Benefits/>
            </motion.div>
            <motion.div variants={itemVariants}>
                <MobileLook/>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Faq/>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Testimonials/>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Download/>
            </motion.div>        
        
        </motion.div>
    )
}
export default Home;
