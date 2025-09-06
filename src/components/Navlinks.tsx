import { NavLink } from "react-router-dom";
import clsx from "clsx";


export const Navlinks = () => {

  const activeClass= ({isActive}:{isActive: boolean}) =>
    clsx("hover:text-white transition-text duration-300", {
      "text-white": isActive,
      "text-textgrey": !isActive,
  });

  return (
  <>
    <li ><NavLink to="/" className={activeClass}>Home</NavLink></li>
    <li><NavLink to="/about" className={activeClass}>About</NavLink></li>
    <li><NavLink to="/services" className={activeClass}>Services</NavLink></li>
    <li><NavLink to="/invest" className={activeClass}>Invest</NavLink></li>
    <li><NavLink to="/contact" className={activeClass}>Contact</NavLink></li>
  </>
  );
};