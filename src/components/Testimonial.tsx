import Highlight from "./Highlight";
import star from "../assets/white-star.svg";
import Rating from "../assets/star-rating.svg";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Carousel, CarouselContent, CarouselItem} from "./ui/carousel";


const testimonies = [
        {
            testimony: "I used to struggle with saving, but MegaCoop made it simple. Now I save weekly without stress, and I even bought a deep freezer through the app on credit! This has really helped my business.",
            userName: "Chinwe A.",
            occupation: "Trader, Enugu",
            image: "img1",
            rating: 5
        },
        {
            testimony: "I love how I can track my savings and get reminders. The app is easy to use, even for someone like me who's not very techy. Plus, their customer support is friendly and quick",
            userName: "Joy E.",
            occupation: "Student, Ogun",
            image: "img1",
            rating: 5

        },
        {
            testimony: "I applied for NHF through the app, and it was the first time anyone explained the process clearly. I’m now working towards getting land with their help.",
            userName: "Samuel O.",
            occupation: "Electrician, Lagos",
            image: "img1",
            rating: 5
        },
        {
            testimony: "I love how I can track my savings and get reminders. The app is easy to use, even for someone like me who's not very techy. Plus, their customer support is friendly and quick",
            userName: "Joy E.",
            occupation: "Student, Ogun",
            image: "img1",
            rating: 4
        },
       
    ]

const Testimonials = () => {
    return (
        <section className="container mx-auto relative bg-megagreen py-10">
            <div className="max-w-[549px] mx-auto text-center flex flex-col justify-center items-center text-whitebg">
                <Highlight 
                    text="Testimonial" 
                    className="bg-whitebg/20"
                    textClassName="text-whitebg"
                    icon={star}
                />
                <h2 className="font-poppins text-3xl md:text-[40px] font-medium">
                    What Our Happy User Says
                </h2>
            </div>
            <Carousel className="max-w-[1280px] mx-auto py-20 px-8">
                <CarouselContent className="gap-5">
                    {testimonies.map((item, index) => (
                        <CarouselItem key={index} className="xl:basis-1/4 md:basis-2/4 basis-1/1 md:px-6 bg-whitebg rounded-lg p-6 font-poppins">
                            <blockquote>{item.testimony}</blockquote>
                            <div className="flex items-center gap-4 mt-4">
                                <Avatar>
                                    <AvatarImage src={item.image} alt={`Photo of ${item.userName}`} loading="lazy" />
                                    <AvatarFallback>AU</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm">{item.userName} - {item.occupation}</p>
                                    <div className="flex gap-1">
                                        {Array.from({ length: item.rating }).map((_, i) => (
                                        <img key={i} src={Rating} alt="star" className="" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                
            </Carousel>
            
        </section>
    )
}

export default Testimonials;