import Highlight from "./Highlight"
import elipsis1 from "../assets/elips-grey-2.png"
import elipsis2 from "../assets/elips-grey-3.png"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Link } from "react-router-dom"

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
                        <AccordionTrigger className="text-dark text-lg sm:text-xl">What is MegaCoop?</AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                MegaCoop is a trusted multipurpose cooperative platform 
                                that helps members save money, access affordable loans, 
                                shop on credit, and apply for housing support — all 
                                through a simple, secure web app. Our mission is to 
                                make financial tools accessible to every cooperative 
                                member, with a vision to become the leading digital 
                                cooperative platform in Africa.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-2" className="border-megagreen border-2 rounded-lg p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-dark text-lg sm:text-xl">What services does MegaCoop offer?</AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                MegaCoop offers a wide range of financial services including: 
                                flexible savings plans (save daily, weekly, or monthly), 
                                quick and fair cooperative loans, a Shop Now Pay Later 
                                feature for everyday essentials, and access to the National 
                                Housing Fund (NHF) for government-backed housing loans. 
                                You can also automate your savings and loan repayments, 
                                get smart reminders for payment deadlines, and connect 
                                with guarantors for bigger loans — all from one app.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-3" className="border-megagreen border-2 rounded-lg p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-dark text-lg sm:text-xl">
                            How do I apply for a loan on MegaCoop?
                        </AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                Applying for a loan is simple and convenient. Log in to 
                                the MegaCoop app, navigate to the Loans section, and 
                                submit your application. Members may borrow up to 500% 
                                of their account balance, subject to eligibility and 
                                approval terms.
                                All loans come with straightforward requirements, 
                                cooperative-backed support, and transparent repayment 
                                terms. For higher loan amounts, you may be required to 
                                add or verify a guarantor directly within the app to improve 
                                your chances of approval.
                                You can check your dashboard for more detail guidelines on loan 
                                eligibility and the application process.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-4" className="border-megagreen border-2 rounded-lg p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-dark text-lg sm:text-xl">
                            Is my money safe with MegaCoop?
                        </AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                Absolutely. MegaCoop uses bank-grade security to protect 
                                your data and transactions. All activity is safeguarded 
                                with encryption and secure login, so you can enjoy 
                                instant payments and manage your finances with complete 
                                peace of mind. Your trust and security are our top 
                                priorities.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-5" className="border-megagreen border-2 rounded-lg p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-dark text-lg sm:text-xl">
                            What is the Shop Now, Pay Later feature?
                        </AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                With MegaCoop's Shop Now, Pay Later service, you can 
                                buy essential items — from household goods to gadgets — 
                                instantly and spread your payments over time. There's no 
                                stress of upfront costs, making it easier to access what 
                                you need when you need it.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-6" className="border-megagreen border-2 rounded-lg p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-dark text-lg sm:text-xl">
                            How do I access the National Housing Fund (NHF) through MegaCoop?
                        </AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                MegaCoop allows you to apply for government-backed 
                                housing loans through the National Housing Fund (NHF) 
                                directly from the app. The NHF offers a 6% interest 
                                rate per annum with a tenure of up to 30 years. You 
                                need a minimum of 6 months of contributions to qualify, 
                                with a contribution rate of 2.5% of your basic salary. 
                                Maximum loan amount is up to ₦50 million.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-8" className="border-megagreen border-2 rounded-lg p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-dark text-lg sm:text-xl">
                            How to Signup with MegaCoop?
                        </AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                To register, click on the Sign Up link and complete the 
                                registration form. A valid access code is required to proceed. <br/>
                                Access codes are issued by the administrator upon request. 
                                Interested individuals must contact the organization to obtain 
                                an access code, which will be sent via email or SMS once approved.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-9" className="border-megagreen border-2 rounded-lg p-6 mb-6 font-poppins">
                        <AccordionTrigger className="text-dark text-lg sm:text-xl">
                            How can I contact MegaCoop customer support?
                        </AccordionTrigger>
                        <AccordionContent className="p-0 text-[#094D26]">
                            <p>
                                You can reach our support team through multiple channels. 
                                Use the in-app chat feature to connect with real people, 
                                call our support line, or visit the {' '}
                                <Link to="/contact" className="text-megagreen hover:underline">
                                    Contact page
                                </Link>  on our 
                                website to send us a message. You can also follow us on 
                                our social media channels — Facebook, Instagram, X (Twitter), 
                                and YouTube — for updates and assistance.
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
