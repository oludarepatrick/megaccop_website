import Benefits from "@/components/Benefits";
import Download from "@/components/Download";
import Faq from "@/components/Faq";
import HeroSection from "@/components/HeroSection";
import MobileLook from "@/components/MobileLook";
import Testimonials from "@/components/Testimonial";
import { useHead } from "@unhead/react";

const Home = () => {
    useHead({title: "Home"});
    
    return(
        <>
            <HeroSection/>
            <Benefits/>
            <MobileLook/>
            <Faq/>
            <Testimonials/>
            <Download/>
        
        
        </>
    )
}
export default Home;