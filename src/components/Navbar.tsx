import { Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "/Logo.svg";
import { useState } from "react";
import { X } from "lucide-react";
import { Navlinks } from "./Navlinks";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when menu item is clicked
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  // Animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as const
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0, 0, 0.2, 1] as const
      }
    }
  };

  // Animation variants for mobile menu icon
  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
  };

  return (
    <header className="container mx-auto sticky top-0 left-0 w-full z-50 mt-6 px-8">
      <nav
        aria-label="Global-Navigation"
        className="max-w-[1280px] mx-auto bg-black flex items-center justify-between lg:px-16 px-4 gap-4 rounded-full relative"
      >
        <h1 className="sr-only">MegaCoop</h1>
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="MegaCoop logo" />
        </Link>

        {/* Mobile Icon */}
        <Button
          variant="ghost"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden hover:bg-transparent"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.div
            animate={menuOpen ? "open" : "closed"}
            variants={iconVariants}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {menuOpen ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <X className="text-whitebg !w-8 !h-8" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <AlignJustify className="text-whitebg !w-8 !h-8" />
              </motion.div>
            )}
          </motion.div>
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

      {/* Mobile menu with AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden absolute top-16 left-0 w-full bg-megagreen shadow-lg z-10 rounded-lg"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.ul 
              className="list-none flex flex-col items-center gap-4 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <Navlinks onMenuItemClick={handleMenuItemClick} />
            </motion.ul>

            <motion.div 
              className="flex flex-col items-center gap-4 p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <Link to="/SignIn" onClick={handleMenuItemClick}>
                <Button variant="outline" className="border-whitebg rounded-full px-8">
                  Sign Up
                </Button>
              </Link>
              <Link to="/SignUp" onClick={handleMenuItemClick}>
                <Button className="rounded-full px-10">Login</Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
