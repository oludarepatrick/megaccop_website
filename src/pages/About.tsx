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
    
    const aboutVariants: Variants = {
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
            variants={aboutVariants}
            >
                <AboutIntro/>
            </motion.div>
            
            <WhoWeAre/>
            <Mission/>
            <Offer/>
            <OurTeams/>
            <Testimonials/>
            <Download/>
        </>
        
    )
}
export default About;
