import Highlight from "./Highlight";
import icon1 from "../assets/safe-shield-icon.svg";
import icon2 from "../assets/benefit-icon-2.svg";
import icon3 from "../assets/benefit-icon-3.svg";


const values = [
        {
            title: "Mission",
            desc: "Make financial tools accessible to every cooperative member",
            image: icon1
        },
        {
            title: "Vision",
            desc: "Be the leading digital cooperative platform in Africa",
            image: icon2,
        },
        {
            title: "Core Values",
            desc: "Trust, Simplicity, Transparency, Empowerment", 
            image: icon3,
        }
        
    ]

const Mission = () => {
    return (
        <section className="container mx-auto px-8 pt-10">
            <div className=" mx-auto text-center flex flex-col justify-center items-center">
                <Highlight text="What we believe in" />
                <h2 className="font-poppins text-3xl md:text-[40px] font-medium">
                    Our Mission, Vision & Values
                </h2>
            </div>
            <ul className=" max-w-[1280px] mx-auto py-20 flex gap-10 justify-center items-center flex-wrap">
                {values.map((list, index) => (
                    <li key={index} className="lg:max-w-[290px] w-full flex flex-col gap-2 items-center lg:items-start lg:text-left text-center border-2 border-megagrey rounded-xl p-6">
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

export default Mission;