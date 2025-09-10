import { NavLink } from "react-router-dom";
import clsx from "clsx";

interface NavlinksProps {
  onMenuItemClick?: () => void;
}

export const Navlinks = ({ onMenuItemClick }: NavlinksProps) => {

  const activeClass= ({isActive}:{isActive: boolean}) =>
    clsx("hover:text-white transition-text duration-300", {
      "text-white": isActive,
      "text-textgrey": !isActive,
  });

  const handleLinkClick = () => {
    if (onMenuItemClick) {
      onMenuItemClick();
    }
  };

  return (
  <>
    <li ><NavLink to="/" className={activeClass} onClick={handleLinkClick}>Home</NavLink></li>
    <li><NavLink to="/about" className={activeClass} onClick={handleLinkClick}>About</NavLink></li>
    <li><NavLink to="/services" className={activeClass} onClick={handleLinkClick}>Services</NavLink></li>
    <li><NavLink to="/invest" className={activeClass} onClick={handleLinkClick}>Invest</NavLink></li>
    <li><NavLink to="/contact" className={activeClass} onClick={handleLinkClick}>Contact</NavLink></li>
  </>
  );
};
