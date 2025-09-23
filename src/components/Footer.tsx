import { Link, useLocation } from "react-router-dom";
import Logo from "/Megacoop-logo.svg";
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


const socialIcons = [
  { icon: facebookIcon, url: "https://facebook.com/megacoop" },
  { icon: twitterIcon, url: "https://twitter.com/megacoop" },
  { icon: instaIcon, url: "https://instagram.com/megacoop" },
  { icon: youtubeIcon, url: "https://youtube.com/@megacoop" },
];

const Footer = () => {
  const location = useLocation();
  return (
    <footer
      
      className={`bg-greybg mx-auto ${location.pathname === "/" || location.pathname === "/services" || location.pathname === "/about" ? "pt-40" : "pt-0"}`}

    >
      <div className="max-w-[1280px] mx-auto relative px-4 flex gap-10 justify-between flex-col md:flex-row py-8">
        <Card className="p-0 bg-transparent border-none shadow-none">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="MegaCoop logo" />
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
            <Input
              type="text"
              placeholder="Enter your email"
              className=" bg-transparent border-none shadow-none focus-visible:ring-0 font-inter"
            />
            <Button className="bg-dark hover:bg-dark font-manrope rounded-full">
              Subscribe
            </Button>
          </CardContent>

          <CardFooter className="font-inter text-xs text-footertext p-0">
            <p>
              By subscribing you agree with our 
              <Link to="terms-and-conditions" className="underline text-dark font-medium"> Terms & Conditions</Link> and
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
              <li ><Link to="/" className="hover:text-megagreen">Mobile App</Link></li>
              <li><Link to="/" className="hover:text-megagreen">Projects</Link></li>
             
          </ul>
          <ul className="font-inter text-footertext flex flex-col gap-4">
            <h3 className="font-manrope font-bold text-dark">Company</h3>
              <li ><Link to="/about" className="hover:text-megagreen">About</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-megagreen">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-megagreen">Support</Link></li>
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
                <img src={social.icon} alt={`social-icon-${index}`} />
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
