import elipsis1 from "@/assets/elips-grey-2.png"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion"
import horizontalline from "@/assets/investment-second-section-image.svg";
import { motion } from "framer-motion";

const InvestmentFaq = () => {
    return (
        <section className="container overflow-hidden w-full mx-auto relative top-[-25px] py-20 px-4 ">
            <div className="max-w-[559px] mx-auto text-center flex flex-col justify-center items-center relative z-[5]">
                <h2 className="font-poppins text-green-600 text-3xl md:text-[40px] font-medium mb-8 max-w-[359px]">
                    Frequently Asked Questions
                </h2>
                <img
                    src={horizontalline}
                    alt="Decorative Line"
                    className="w-3/4 md:w-full max-w-sm md:max-w-sm z-10"
                />
            </div>

            <div className=" mx-auto py-5 px-8">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full  mx-auto relative z-[5]"
                    defaultValue="faq-1"
                >
                    <AccordionItem value="faq-1" className="border-gray-200 border-b-2 rounded-none p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-lg sm:text-xl text-green-600">What investment options does MegaCoop offer?</AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                MegaCoop offers two main investment categories: Pooled 
                                Investment Products and Housing Project Investments. 
                                Pooled investments start from ₦100,000 with a return of 
                                16–20% per annum and a 6–24 month lock-up period. Housing 
                                Project Investments start from ₦500,000 with 15–18% returns 
                                over 18–36 months. We also offer Housing Fund Programs 
                                starting from ₦50,000 for home loan access.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-2" className="border-gray-200 border-b-2 rounded-none p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-lg sm:text-xl text-green-600">What is the minimum amount required to start investing?</AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                The minimum investment depends on the product you choose. 
                                For Pooled Investment Products, the minimum is ₦100,000. 
                                For Housing Project Investments, it starts at ₦500,000. 
                                If you're interested in the Housing Fund Programs, you 
                                can start contributing with as little as ₦50,000. The NHF 
                                program has a minimum contribution of ₦5,000, while the 
                                MoFi Housing Fund requires a minimum of ₦10,000 per month.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-3" className="border-gray-200 border-b-2 rounded-none p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-lg sm:text-xl text-green-600">
                            What is the difference between NHF and MoFi Housing Fund?
                        </AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                The NHF (National Housing Fund) is a government-backed 
                                program offering 6% interest per annum with tenure up to 
                                30 years and a maximum loan of ₦50 million. It requires a 
                                contribution rate of 2.5% of your basic salary with a minimum 
                                of 6 months. The MoFi Housing Fund is a Real Estate Investment 
                                Fund with a competitive 9.75% interest rate, flexible contributions 
                                starting at ₦10,000/month, a 6–12 month period, and loan coverage 
                                of up to 80% of the property value.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-4" className="border-gray-200 border-b-2 rounded-none p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-lg sm:text-xl text-green-600">
                            What are the active housing projects I can invest in?
                        </AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                MegaCoop currently has several active housing projects 
                                including Igando Estate in Lekki (80 units), Adonai 
                                Estate in Ketu (50 units), and Adewale Estate which 
                                is currently in the finishing stage. These projects 
                                offer medium-risk investment opportunities with returns 
                                of 15–18% per annum over an 18–36 month period. <br/>
                                Active Investment Projects are always uploaded on the platform, 
                                so you can check the Investment section on your dashboard for the 
                                latest opportunities.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-5" className="border-gray-200 border-b-2 rounded-none p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-lg sm:text-xl text-green-600">
                            How does the Housing Contribution Calculator work?
                        </AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                The Housing Contribution Calculator helps you plan your 
                                path to homeownership. Simply enter your monthly income, 
                                target property value, choose a program (NHS or SHS), 
                                and select a savings period. The calculator will show you 
                                your initial deposit (30% of property value), monthly 
                                payment amount, payment duration, and total payable 
                                amount — so you can make informed decisions about your 
                                housing investment.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="absolute left-0 bottom-10">
                <img src={elipsis1} alt="" aria-hidden="true" className="object-contain" loading="lazy" />
            </div>
            <motion.div
                // animate={{ scale: [1, 1.1, 1] }}
                // transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute top-[-130px] right-[-200px] xl:right-[0px] h-[600px] w-[600px] rounded-full bg-transparent border-[100px] border-[#0F7033] opacity-30 z-[0]"
            />

        </section>
    )
}

export default InvestmentFaq;
