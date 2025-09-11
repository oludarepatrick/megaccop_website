import AboutIntro from "@/components/AboutIntro";
import Download from "@/components/Download";
import Mission from "@/components/Mission";
import Offer from "@/components/Offer";
import OurTeams from "@/components/OurTeams";
import Testimonials from "@/components/Testimonial";
import WhoWeAre from "@/components/WhoWeAre";
import { useHead } from "@unhead/react";
import { motion, type Variants } from "framer-motion";
import { useEffect } from "react";

const About = () => {
    useHead({title: "About"});
    
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
                <AboutIntro/>
            </motion.div>
            <motion.div variants={itemVariants}>
                <WhoWeAre/>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Mission/>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Offer/>
            </motion.div>
            <motion.div variants={itemVariants}>
                <OurTeams/>
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
export default About;
