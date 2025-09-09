import AboutIntro from "@/components/AboutIntro";
import Download from "@/components/Download";
import Mission from "@/components/Mission";
import Offer from "@/components/Offer";
import OurTeams from "@/components/OurTeams";
import Testimonials from "@/components/Testimonial";
import WhoWeAre from "@/components/WhoWeAre";
import { useHead } from "@unhead/react";

const About = () => {
    useHead({title: "About"});
    
    return(
        <>
            <AboutIntro/>
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