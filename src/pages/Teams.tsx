import { useHead } from "@unhead/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../components/ui/button";
import TeamsBcg from "../assets/teams-bcg.webp";
import elips1 from "../assets/elips-teams.png";
import member1 from "../assets/team-member-1.png";
import member2 from "../assets/team-member-2.png";
import member3 from "../assets/team-member-3.png";



const teamList = [
        {
            name: "Agnes Olukemi Oludara",
            role: "Legal Advisor & Strategic Counsel | MegaCoop Board",
            image: member1,
            bio: `Agnes Olukemi Oludara is a distinguished legal practitioner and the Principal
                Partner at Fagbola Eboda & Co., a Nigerian law firm established in 2006. With
                nearly two decades of professional experience, she has built a reputation as a
                trusted advisor in commercial law, cooperative governance, and real estate
                transactions.
                As Strategic Legal Advisor to MegaCoop, Agnes has played a central role in
                strengthening the cooperative’s governance structures, ensuring compliance with
                regulatory requirements, and providing legal leadership for property development
                and investment initiatives. Her work has supported MegaCoop’s transformation
                into a modern financial services cooperative, offering innovative solutions in
                housing, savings, loans, and investment opportunities.
                Her expertise spans corporate structuring, mergers and acquisitions, real estate
                development finance, property transactions, dispute resolution, and cooperative law frameworks. Agnes has successfully
                led negotiations with regulators, government agencies, and development partners, and structured transactions worth
                over ₦200 million. She is also recognized for her ability to resolve complex disputes through mediation and arbitration,
                saving clients substantial costs and preserving business relationships.
                Beyond MegaCoop, she has transformed Fagbola Eboda & Co. into a specialized legal services hub for cooperatives,
                SMEs, and property developers, with a growing portfolio of clients across Nigeria.
                Agnes is a member of the Nigerian Bar Association, Ikeja Branch, the African Women Lawyers Association (AWLA)
                and the Institute of Chartered Mediators and Conciliators (ICMC). Her commitment to innovation, ethical practice, and
                community impact continues to drive growth for MegaCoop and the cooperative movement in Nigeria, especially Lagos
                State.`
        },
        {
            name: "Olu Awogbemila",
            role: "Strategic Advisor, MegaCoop Board ",
            image: member2,
            bio: `Olu Awogbemila brings a wealth of experience in strategic communications,
            organizational leadership, and corporate governance to MegaCoop, underpinned
            by a successful career in financial services and entrepreneurship. With more than
            two decades of professional impact, he has consistently demonstrated the ability to
            navigate complex business environments, manage stakeholders effectively, and
            drive institutional growth.
            Olu is a graduate of the University of Lagos with a Bachelor’s degree in Mass
            Communication and a Master’s degree in International Law and Diplomacy,
            complemented by a Post Graduate Diploma in Philosophy. This multidisciplinary
            academic background equips him with a broad perspective on international
            business relations, regulatory frameworks, and strategic communication—key
            assets for advancing MegaCoop’s mission of expanding member value through innovation and collaboration.
            During his 12 years in banking, Olu served in executive roles at Lead Bank Plc, where he oversaw Corporate Affairs,
            Human Resources, and General Administration. His leadership portfolio covered corporate image management, human
            capital development, and the optimization of multi-location assets, including fleet and facilities management—skills that
            directly align with MegaCoop’s need for strong governance and efficient operational structures.
            As Founding Director of Recore Limited since 2004, he has successfully built and sustained a thriving enterprise,
            demonstrating excellence in entrepreneurship, business development, and market expansion. This entrepreneurial insight 
            enhances MegaCoop’s strategic drive to scale its membership, expand offerings, and deliver sustainable financial
            solutions.
            Olu is a Fellow of the Institute of Strategic Human Capital Managers, a member of the Nigerian Institute of Training
            and Development (NITAD), and an alumnus of Lagos Business School (SMP 10), ensuring that his expertise remains
            current and relevant to today’s dynamic cooperative and business landscape.`
        },
        {
            name: "Ernest Mbanefo",
            role: "MegaCoop Board",
            image: member3,
            bio: `Ernest Mbanefo is a seasoned executive with over 38 years of cross-sector
            experience spanning civil infrastructure, energy, real estate, and cooperative finance.
            At Mega (Ikeja) Cooperative Multipurpose Society Limited, he provides visionary
            leadership that blends technical expertise, commercial insight, and values-driven
            governance to advance the financial wellbeing of members.
            A trained Civil Engineer (B.Eng.) with an MBA and professional certifications in
            Project Management, Gas Systems, Investment Analysis, and Health & Safety,
            Ernest’s career includes leading some of Nigeria’s most complex and capital-
            intensive ventures. Notably, he oversaw the planning and delivery of the country’s
            first fully indigenous midstream gas transmission system, establishing his reputation
            for engineering excellence and risk-managed project execution.
            Ernest’s expertise extends to front-end engineering design (FEED), EPC project
            management, contract structuring, and regulatory compliance, as well as financial modeling, blended-value investments,
            and cooperative growth strategies. At MegaCoop, he has championed innovative models for affordable housing, thrift
            and loan services, investment products, and digital transformation; helping to reposition the cooperative for sustainable
            growth in a challenging economic environment.
            Beyond MegaCoop, Ernest serves on several other Boards, where he contributes to infrastructure and investment
            strategy, and advises multiple enterprises and non-profit institutions. He is widely respected as a mentor, policy
            contributor, and advocate for dignified living, combining professional rigor with servant leadership.
            Through his work at MegaCoop, Ernest remains committed to expanding membership, improving financial inclusion,
            and creating opportunities that empower individuals, families, and communities to thrive`
        },
       
    ]

const TeamMemberCard = ({ member, index }: { member: typeof teamList[0], index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const shortBio = member.bio.slice(0, 200) + "...";
    
    const toggleBio = () => {
        setIsExpanded(!isExpanded);
    };
    
    return (
        <motion.li 
            key={index} 
            className="max-w-[350px] w-full flex flex-col gap-4 items-start lg:text-left bg-whitebg shadow-xl rounded-xl p-6"
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
            
            <div className="space-y-3">
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
                
                <ul className="max-w-[1200px] mx-auto pb-20 flex gap-8 justify-center flex-wrap">
                    {teamList.map((member, index) => (
                        <TeamMemberCard key={index} member={member} index={index} />
                    ))}
                </ul>
            </section>
        </>
    )
}
export default Teams;
