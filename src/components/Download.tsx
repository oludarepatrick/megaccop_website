import elipsis1 from "../assets/elips-1.png"
import elipsis2 from "../assets/elips-2.png"
import elipsis3 from "../assets/elips-grey-1.png"

const Download = () => {
    return (
        <section className="container mx-auto relative -bottom-30 ">

            <div className="max-w-[1280px] mx-auto bg-megagreen rounded-xl z-[10] p-10 relative">
                <div className="max-w-[671px] h-[300px] font-poppins text-white ">
                    <h2 className="text-2xl md:text-4xl md:leading-12 font-medium" > 
                        Sign Up Now & Start Enjoying Full Benefits of Secure, 
                        Convenient, and Smarter Financial Living!
                    </h2>
                    <p className="pt-4 pb-10 text-whitebg/80">
                        Register today and access a wide range of fantastic 
                        features, including easy transactions, quick payments, 
                        and efficient financial management.
                    </p>
                </div>

                <div className="absolute bottom-0 right-0 max-w-[540px] -z-[5]">
                    <img src={elipsis1} className="object-contain" alt="" aria-hidden="true"  />
                </div> 
                <div className="absolute top-0 left-0 max-w-[540px] -z-[5]">
                    <img src={elipsis2} className="object-contain" alt="" aria-hidden="true"  />
                </div> 
            </div>
            <div className="absolute -bottom-10 right-0 max-w-[540px] ">
                <img src={elipsis3} className="object-contain" alt="" aria-hidden="true"  />
            </div> 
            <div className="hidden md:block absolute -top-30 left-40 max-w-[540px]">
                <img src={elipsis3} className="object-contain" alt="" aria-hidden="true"  />
            </div> 

        </section>
    )
};

export default Download;