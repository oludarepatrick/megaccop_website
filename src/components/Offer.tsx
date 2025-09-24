import mobileImg from "../assets/mobile-app-2.webp"
import Highlight from "./Highlight"
import icon1 from "../assets/bank-icon.svg";
import icon2 from "../assets/support-icon.svg";
import icon3 from "../assets/locate-icon.svg";

const memberBenefits = [
        {
            title: "Flexible Savings Plans",
            desc: "Choose a goal, set your schedule, and watch your money grow at your pace. Save daily, weekly, or monthly. No pressure.",
            image: icon1
        },
        {
            title: "Quick & Fair Loans",
            desc: "Get access to funds when you need them most, with simple requirements, cooperative support, and transparent repayment terms.",
            image: icon2,
        },
        {
            title: "Shop on Credit",
            desc: "Buy what you need now and pay later from household items to gadgets without the stress of upfront costs.", 
            image: icon3,
        },
        
        {
            title: "Access NHF Housing Support",
            desc: "Apply for government-backed housing loans through the National Housing Fund (NHF), directly from your app.", 
            image: icon2,
        }
        
    ]

 const Offer = () => {
    return (
        <section className="container mx-auto px-8 pb-16">
            <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-between gap-8 lg:flex-row ">
                <header className="w-full max-w-[620px] mx-auto text-poppins  flex flex-col items-center lg:items-start">
                    <Highlight text="Our Member Benefits" />
                    <h2 className="md:text-[40px] text-3xl leading-[1.2] font-medium lg:pr-16">
                        What We Offer
                    </h2>
                    <p className="my-6 font-inter text-center lg:text-left text-footertext">
                        MegaCoop gives you powerful yet simple tools to manage 
                        your money, meet your goals, and enjoy real financial 
                        freedom all from one trusted app. Whether you're saving, 
                        borrowing, or shopping, we’ve got you covered.
                    </p>
                    <ul className="space-y-6">
                        {memberBenefits.map((list, index) => (
                             <li key={index} className="flex gap-3">
                                <figure className="flex flex-none items-center justify-center mt-1 w-15 h-15 bg-[#F1F5F9] rounded-lg">
                                    <img loading="lazy" src={list.image} alt={list.title} className="object-contain " />
                                </figure>

                                <div className="flex-1 px-2 space-y-1">
                                        <h3 className="text-2xl font-manrope font-semibold">{list.title}</h3>
                                        <p className="text-footertext font-inter">{list.desc}</p>
                                </div>
                            </li>
                        ))}

                    </ul>
                </header>
                <div className="w-full flex item-center justify-center ">
                    <img src={mobileImg} alt="mobile-app" loading="lazy"  />
                </div>
            </div>

        </section>
  )
}
export default Offer;