import Highlight from "./Highlight";
import { teamMembers } from "../data/teamData";
import { useNavigate } from "react-router-dom";

 const OurTeams = () => {
    const navigate = useNavigate();
    return (
         <section className="container mx-auto px-8 pt-10">
            <div className=" mx-auto text-center flex flex-col justify-center items-center">
                <Highlight text="Our Team" /> 
                <h2 className="md:text-[40px] text-3xl leading-[1.2] font-medium">
                    Meet Our Dedicated Team
                </h2>
            </div>
            <ul className=" max-w-[1280px] mx-auto py-20 flex gap-10 justify-center flex-wrap">
                {teamMembers.map((list, index) => (
                    <li key={index} 
                        className="max-w-[264px] w-full flex flex-col gap-2 items-start lg:text-left border-2 border-megagrey rounded-xl p-2"
                        onClick={()=> navigate("/our-teams")}
                    >
                        <figure className="flex flex-none items-center justify-center rounded-full">
                            <img loading="lazy" src={list.image} alt={list.name} className="object-contain " />
                        </figure>
                        <h3 className="text-xl font-poppins font-medium">{list.name}</h3>
                        <p className="text-sm font-poppins text-[#75706D]">{list.role}</p>
                    </li>
                ))}
            </ul>
            
        </section>
       
  )
}
export default OurTeams;