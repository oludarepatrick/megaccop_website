import introImg from "../assets/mega-about-img.png"
import Highlight from "./Highlight"

 const WhoWeAre = () => {
    return (
        <section className="container mx-auto px-8 pb-16">
            <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-between gap-8 lg:flex-row ">
                <header className="w-full max-w-[620px] mx-auto text-poppins text-center lg:text-left flex flex-col items-center lg:items-start">
                    <Highlight text="Anywhere, Anytime with Megacoop" textClassName="text-xs" />
                    <h2 className="md:text-[40px] text-3xl leading-[1.2] font-medium lg:pr-16">
                        All Transactions Easily on Your Mobile
                    </h2>
                    <p className="my-4 text-lg">
                        Paying for anything is as easy as a tap. With Megacoop, 
                        you can effortlessly handle a wide range of transactions,
                        from bill payments and barcode scans to e-commerce
                    </p>
                </header>
                <div className="w-full flex item-center justify-center ">
                    <img src={introImg} alt="mobile-app" loading="lazy"  />
                </div>
            </div>

        </section>
  )
}
export default WhoWeAre;