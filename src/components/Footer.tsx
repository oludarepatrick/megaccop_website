import { Link } from "react-router-dom";
import Logo from "/Logo.svg";
// import Logo from "/Megacoop-logo.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Mail } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import facebookIcon from "../assets/facebook-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import instaIcon from "../assets/insta-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";
import { Label } from "./ui/label";


const socialIcons = [
  { icon: facebookIcon, url: "https://facebook.com/megacoop", name: "facebook" },
  { icon: twitterIcon, url: "https://twitter.com/SocietyMega", name: "twitter" },
  { icon: instaIcon, url: "https://instagram.com/megacoopng", name: "instagram" },
  { icon: youtubeIcon, url: "https://youtube.com/@megacoop", name: "youtube" },
];

const Footer = () => {
  return (
    <footer className="container mx-auto pt-40 bg-greybg ">
      <div className="max-w-[1280px] mx-auto relative px-4 flex gap-10 justify-between flex-col md:flex-row py-8">
        <Card className="p-0 bg-transparent border-none shadow-none">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="MegaCoop logo" width="221" height="81" />
          </Link>
          <CardHeader className="p-0">
            <CardTitle className="font-manrope font-semibold">
              Subscribe
            </CardTitle>
            <CardDescription className="text-footertext font-inter">
              Join our newsletter to stay up to date on features and releases.
            </CardDescription>
          </CardHeader>

          <CardContent className="px-2 bg-whitebg rounded-full flex items-center py-2">
            <Mail className="text-footertext" />
            <Label htmlFor="newsletter-email" className="sr-only">Email Address</Label>
            <Input
              type="text"
              placeholder="Enter your email"
              aria-label="Enter your email address"
              className=" bg-transparent border-none shadow-none focus-visible:ring-0 font-inter"
            />
            <Button className="bg-dark hover:bg-dark font-manrope rounded-full">
              Subscribe
            </Button>
          </CardContent>

          <CardFooter className="font-inter text-xs text-footertext p-0">
            <p>
              By subscribing you agree to with our
              <Link to="privacy-policy" className="underline text-dark font-medium pl-2"> Privacy Policy</Link>
            </p>
          </CardFooter>
        </Card>

        <nav className="flex  gap-20 gap-y-8 flex-wrap">
          <ul className="font-inter text-footertext flex flex-col gap-4">
            <h3 className="font-manrope font-bold text-dark">Quick links</h3>
              <li ><Link to="/" className="hover:text-megagreen">Home</Link></li>
              <li><Link to="/about" className="hover:text-megagreen">About</Link></li>
              <li><Link to="/services" className="hover:text-megagreen">Services</Link></li>
              <li><Link to="/" className="hover:text-megagreen">Invest</Link></li>
              <li><Link to="/contact" className="hover:text-megagreen">Contact</Link></li>
          </ul>
          <ul className="font-inter text-footertext flex flex-col gap-4">
            <h3 className="font-manrope font-bold text-dark">Products</h3>
              <li><Link to="/" className="hover:text-megagreen">Projects</Link></li>
             
          </ul>
          <ul className="font-inter text-footertext flex flex-col gap-4">
            <h3 className="font-manrope font-bold text-dark">Company</h3>
              <li ><Link to="/about" className="hover:text-megagreen">About</Link></li>
              <li ><Link to="/our-teams" className="hover:text-megagreen">Our Teams</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-megagreen">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-megagreen">Terms of Service</Link></li>
          </ul>
         
        </nav>
      </div>
      <div className="max-w-[1280px] mx-auto px-4">
        <hr/>
        <div className="py-6 flex items-center sm:justify-between flex-wrap gap-10 justify-center">
          <p className="text-footertext text-sm">Copyright © 2025 Megacoop. All Rights Reserved</p>
          <div className="flex items-center gap-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whitebg rounded-full p-2 hover:opacity-80 transition"
              >
                <img 
                  src={social.icon} 
                  alt={`${social.name}-icon`} 
                  width="20" 
                  height="20"
                  loading="lazy" 
                  decoding="async"
                />
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
