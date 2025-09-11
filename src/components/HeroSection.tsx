import { ShieldCheck } from "lucide-react";
import iPhone from "../assets/iPhone-15.png";
import heroReceipt1 from "../assets/hero-receipt-1.png";
import heroReceipt2 from "../assets/hero-receipt-2.png";
import heroReceipt3 from "../assets/hero-receipt-3.png";
import heroReceipt4 from "../assets/hero-receipt-4.png";
// import GooglePlay from "../assets/Google Play Black.png";
// import AppleStore from "../assets/App Store Black.png";


const HeroSection = () => {
    return (
        <section className="container mx-auto bg-greybg pt-40 relative -top-25 px-8">
            <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
                <div className="flex items-center">
                    <div className="bg-whitebg rounded-full p-2">
                        <ShieldCheck />
                    </div>
                    <h4 className="text-dark font-manrope">Smart Finance, Smart Living</h4>
                </div>
                <h1 className="font-poppins text-3xl md:text-[54px] font-medium">
                    Save, Borrow, and Shop Smarter All in One App
                </h1>
                <p className="max-w-[486px] px-8 py-2">
                    Secure your future with fast loans, easy savings, and 
                    exclusive deals right from your phone
                </p>

                {/* <div className="flex gap-6 flex-col sm:items-center sm:flex-row items-start pt-4 pb-8">
                    <img src={GooglePlay} alt="google-play-image" />
                    <img src={AppleStore} alt="apple-store-image" />
                </div> */}

                <div className="pt-8 relative max-w-4xl w-full flex items-center justify-center">
                    <img src={iPhone} alt="megacoop-mobile-app" />
                    <img src={heroReceipt1} alt="megacoop-mobile-app" className="absolute -bottom-2 left-12 hidden sm:block" />
                    <img src={heroReceipt2} alt="megacoop-mobile-app" className="absolute top-10 left-10 " />
                    <img src={heroReceipt3} alt="megacoop-mobile-app" className="absolute top-0 right-0 hidden sm:block" />
                    <img src={heroReceipt4} alt="megacoop-mobile-app" className="absolute bottom-10 right-20 md:right-50" />


                </div>

            </div>
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/80 to-transparent backdrop-blur-[1px]" />

        </section>
    )
}

export default HeroSection;