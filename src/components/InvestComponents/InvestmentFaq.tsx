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
                        <AccordionTrigger className="text-dark text-lg sm:text-xl text-green-600">Lorem ipsum dolor sit amet consterqeur?</AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                Web hosting is a data storage service so that a website can be accessed online.
                                This website data is stored in a storage space called a web hosting server which is always active 24 hours a day.
                                The quality of web hosting services can determine the success of your business as well as all your website activities.
                                Without a quality web hosting service, a website may not be accessed properly.
                                Therefore, always use the best web hosting service for your website
                            </p>
                        </AccordionContent>

                    </AccordionItem>
                    <AccordionItem value="faq-2" className="border-gray-200 border-b-2 rounded-none p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-dark text-lg sm:text-xl text-green-600">Lorem ipsum dolor sit amet consterqeur?</AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                Web hosting is a data storage service so that a website can be accessed online.
                                This website data is stored in a storage space called a web hosting server which is always active 24 hours a day.
                                The quality of web hosting services can determine the success of your business as well as all your website activities.
                                Without a quality web hosting service, a website may not be accessed properly.
                                Therefore, always use the best web hosting service for your website
                            </p>
                        </AccordionContent>

                    </AccordionItem>
                    <AccordionItem value="faq-3" className="border-gray-200 border-b-2 rounded-none p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-dark text-lg sm:text-xl text-green-600">
                            Lorem ipsum dolor sit amet consterqeur?
                        </AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                Web hosting is a data storage service so that a website can be accessed online.
                                This website data is stored in a storage space called a web hosting server which is always active 24 hours a day.
                                The quality of web hosting services can determine the success of your business as well as all your website activities.
                                Without a quality web hosting service, a website may not be accessed properly.
                                Therefore, always use the best web hosting service for your website
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-4" className="border-gray-200 border-b-2 rounded-none p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-dark text-lg sm:text-xl text-green-600">
                            Lorem ipsum dolor sit amet consterqeur?
                        </AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                MegaCoop is a trusted multipurpose app that helps
                                members save money, access affordable loans, shop on
                                credit, and even apply for housing support all through
                                a simple, secure mobile app.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-5" className="border-gray-200 border-b-2 rounded-none p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-dark text-lg sm:text-xl text-green-600">
                            How can I contact Megacoop customer support if I encounter issues?
                        </AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                MegaCoop is a trusted multipurpose app that helps
                                members save money, access affordable loans, shop on
                                credit, and even apply for housing support all through
                                a simple, secure mobile app.
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
