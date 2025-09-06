import Highlight from "./Highlight";
import icon1 from "../assets/benefit-icon-1.svg";
import icon2 from "../assets/safe-shield-icon.svg";
import icon3 from "../assets/benefit-icon-2.svg";
import icon4 from "../assets/benefit-icon-3.svg";



const benefitLists = [
        {
            title: "Built for Everyday member like You",
            desc: "MegaCoop is designed to help you save better, borrow smarter, and access everyday essentials without stress.",
            image: icon1
        },
        {
            title: "Safe, Secure, and Trusted",
            desc: "Enjoy secure and instant payments anywhere, anytime. Megacoop gives you peace of mind.",
            image: icon2,
        },
        {
            title: "Seamless Savings with Real Progress",
            desc: "Set your goals, save at your pace, and track your growth. No pressure, no hidden fees", 
            image: icon3,
        },
        {
            title: "Exclusive Promos and Discounts",
            desc: "Exclusive app promos, discounts, cashback; save, feel benefits in your wallet.",
            image: icon4,
        },
        
    ]

const Benefits = () => {
    return (
        <section className="container mx-auto px-8">
            <div className="max-w-[549px] mx-auto text-center flex flex-col justify-center items-center">
                <Highlight text="Awesome Benefit From Us" />
                <h2 className="font-poppins text-3xl md:text-[40px] font-medium">
                    Simple, Swift, and Secure, Why You Should Choose Us
                </h2>
            </div>
            <ul className=" max-w-[1280px] mx-auto py-20 flex gap-10 justify-between items-center flex-wrap">
                {benefitLists.map((list, index) => (
                    <li key={index} className="lg:max-w-[242px] w-full flex flex-col gap-2 items-center lg:items-start lg:text-left text-center">
                        <figure className="flex flex-none items-center justify-center mt-1 w-15 h-15 bg-[#F6F2FD] rounded-full">
                            <img loading="lazy" src={list.image} alt={list.title} className="object-contain " />
                        </figure>
                        <h3 className="text-2xl font-poppins font-medium">{list.title}</h3>
                        <p className="text-sm font-poppins text-[#042612]">{list.desc}</p>
                    </li>
                ))}
            </ul>
            
        </section>
    )
}

export default Benefits;