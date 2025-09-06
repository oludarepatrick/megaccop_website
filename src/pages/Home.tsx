import Benefits from "@/components/Benefits";
import Download from "@/components/Download";
import HeroSection from "@/components/HeroSection";
import { useHead } from "@unhead/react";

const Home = () => {
    useHead({title: "Home"});
    
    return(
        <>
            <HeroSection/>
            <Benefits/>
            <Download/>
        
        
        </>
    )
}
export default Home;