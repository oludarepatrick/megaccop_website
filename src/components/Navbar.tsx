import { Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "/Logo.svg";
import { useState } from "react";
import { X } from "lucide-react";
import { Navlinks } from "./Navlinks";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="container mx-auto sticky top-0 left-0 w-full z-50 mt-6 px-8">
      <nav
        arial-label="Global-Navigation"
        className="max-w-[1280px] mx-auto bg-black flex items-center justify-between lg:px-16 p-4 gap-4 rounded-full"
      >
        <h1 className="sr-only">MegaCoop</h1>
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="MegaCoop logo" />
        </Link>

        {/* Mobile Icon */}
        <Button
          variant="ghost"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="text-whitebg !w-8 !h-8" />
          ) : (
            <AlignJustify className="text-whitebg !w-8 !h-8" />
          )}
        </Button>

        {/* Desktop */}
        <ul className="list-none gap-6 items-center hidden lg:flex">
          <Navlinks />
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/SignIn">
            <Button variant="outline" className="bg-transparent rounded-full border-megagreen text-whitebg font-normal">
              Sign Up
            </Button>
          </Link>
          <Link to="/SignUp">
            <Button className="bg-megagreen rounded-full">Login</Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-megagreen shadow-lg z-10">
          <ul className="list-none flex flex-col items-center gap-4 p-4">
            <Navlinks />
          </ul>

          <div className="flex flex-col items-center gap-4 p-4">
            <Link to="/SignIn">
              <Button variant="outline" className="border-whitebg rounded-full px-8">
                Sign Up
              </Button>
            </Link>
            <Link to="/SignUp">
              <Button className="rounded-full px-10">Login</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
