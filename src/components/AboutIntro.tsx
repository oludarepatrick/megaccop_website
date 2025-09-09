import IntroBcg from "../assets/about-bcg.png";

const AboutIntro = () => {
    return (
        <section className="container mx-auto bg pt-40 relative -top-25 px-8 py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${IntroBcg})`}}>
            <div className="max-w-4xl mx-auto text-center py-20">
                <h1 className="font-poppins text-3xl md:text-[54px] font-medium text-whitebg">
                    About Us
                </h1>
            </div>
        </section>
    )
}
export default AboutIntro;