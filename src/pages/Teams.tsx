import { useHead } from "@unhead/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../components/ui/button";
import TeamsBcg from "../assets/teams-bcg.webp";
import elips1 from "../assets/elips-teams.png";
import { teamMembers as teamList } from "@/data/teamData";


const TeamMemberCard = ({ member, index }: { member: typeof teamList[0], index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const shortBio = member.bio.slice(0, 200) + "...";
    
    const toggleBio = () => {
        setIsExpanded(!isExpanded);
    };
    
    return (
        <motion.li 
            key={index} 
            className="max-w-[350px] w-full flex flex-col gap-4 self-start lg:text-left bg-whitebg shadow-xl rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <figure className="flex flex-none items-center justify-center rounded-xl w-full">
                <img loading="lazy" src={member.image} alt={member.name} className="object-contain w-full h-auto rounded-xl" />
            </figure>
            
            <div className="space-y-2">
                <h3 className="text-xl font-poppins font-semibold text-megagreen">{member.name}</h3>
                <p className="text-sm font-poppins font-medium text-[#75706D]">{member.role}</p>
            </div>
            
            <div className="space-y-3" onClick={() => toggleBio()}>
                <p className="text-sm font-poppins text-[#042612] leading-relaxed">
                    {isExpanded ? member.bio : shortBio}
                    <Button
                        onClick={toggleBio}
                        variant="ghost"
                        size="sm"
                        className="text-megagreen hover:text-megagreen hover:underline hover:bg-transparent transition-colors duration-200 cursor-pointer"
                    >
                        {isExpanded ? "See Less" : "Read More"}
                    </Button>
                </p>
                
            </div>
        </motion.li>
    );
};

const Teams = () => {
    useHead({title: "Our Teams"});
    
    return(
        <>
            <section className="container mx-auto bg pt-40 relative -mt-28 px-8 py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${TeamsBcg})`}}>
                <div className="max-w-4xl mx-auto text-center py-20">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="font-poppins text-3xl md:text-[54px] font-medium text-whitebg"
                    >
                        Our Teams
                    </motion.h1>
                </div>
            </section>
            
            <section className="relative container mx-auto px-8 pt-10 bg-no-repeat bg-bottom-left">
                <div 
                    className="absolute inset-0 bg-no-repeat bg-bottom-left opacity-40 -z-1"
                    style={{ backgroundImage: `url(${elips1})` }}
                />
                <div className="mx-auto text-center flex flex-col justify-center items-center mb-12">
                    <h2 className="md:text-[40px] text-3xl leading-[1.2] font-medium text-megagreen">
                        Meet Our Team
                    </h2>
                </div>
                
                <ul className="max-w-[1200px] mx-auto pb-20 flex gap-8 justify-center items-center flex-wrap">
                    {teamList.map((member, index) => (
                        <TeamMemberCard key={index} member={member} index={index} />
                    ))}
                </ul>
            </section>
        </>
    )
}
export default Teams;
