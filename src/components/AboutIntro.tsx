import { motion } from "framer-motion";
import IntroBcg from "../assets/about-bcg.webp";

const AboutIntro = () => {
    return (
        <section className="container mx-auto bg pt-40 relative -top-27 px-8 py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${IntroBcg})`}}>
            <div className="max-w-4xl mx-auto text-center py-20">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-poppins text-3xl md:text-[54px] font-medium text-whitebg"
                >
                    About Us
                </motion.h1>
            </div>
        </section>
    )
}
export default AboutIntro;