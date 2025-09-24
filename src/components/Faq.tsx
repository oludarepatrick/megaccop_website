import Highlight from "./Highlight"
import elipsis1 from "../assets/elips-grey-2.png"
import elipsis2 from "../assets/elips-grey-3.png"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

const Faq = () => {
    return (
        <section className="container mx-auto relative">
            <div className="max-w-[559px] mx-auto text-center flex flex-col justify-center items-center relative z-[5]">
                <Highlight text="Questions" />
                <h2 className="font-poppins text-3xl md:text-[40px] font-medium">
                   Frequently Asked Questions
                </h2>
            </div>

            <div className=" max-w-[1280px] mx-auto py-20 px-8">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full max-w-[750px] mx-auto relative z-[5]"
                    defaultValue="faq-1"
                >
                    <AccordionItem value="faq-1" className="border-megagreen border-2 rounded-lg p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-dark text-lg sm:text-xl">What is Megacoop?</AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                MegaCoop is a trusted multipurpose app that helps 
                                members save money, access affordable loans, shop on 
                                credit, and even apply for housing support all through 
                                a simple, secure mobile app.
                            </p>
                        </AccordionContent>

                    </AccordionItem>
                    <AccordionItem value="faq-2" className="border-megagreen border-2 rounded-lg p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-dark text-lg sm:text-xl">How do I download and install the Megacoop app?</AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                MegaCoop is a trusted multipurpose app that helps 
                                members save money, access affordable loans, shop on 
                                credit, and even apply for housing support all through 
                                a simple, secure mobile app.
                            </p>
                        </AccordionContent>

                    </AccordionItem>
                    <AccordionItem value="faq-3" className="border-megagreen border-2 rounded-lg p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-dark text-lg sm:text-xl">
                            Can I transfer money from Megacoop to my bank account?
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
                    <AccordionItem value="faq-4" className="border-megagreen border-2 rounded-lg p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-dark text-lg sm:text-xl">
                            Is Megacoop compatible with all types of devices?
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
                    <AccordionItem value="faq-5" className="border-megagreen border-2 rounded-lg p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-dark text-lg sm:text-xl">
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
            <div className="absolute top-0 right-0">
                <img src={elipsis2} alt="" aria-hidden="true" className="object-contain" loading="lazy" />
            </div> 

        </section>
    )
}

export default Faq;
