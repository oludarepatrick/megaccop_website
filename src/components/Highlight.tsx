import type { HTMLAttributes } from "react";
import star from "../assets/star.svg";

type HighlightProps = HTMLAttributes<HTMLDivElement> & {
    text: string
    textClassName? : string
    icon?: string
}

const Highlight = ({
    text, 
    className, 
    textClassName,
    icon= star,
    ...props} : HighlightProps) => {

    return (
        <div className={`bg-fadeorange flex gap-3 items-center rounded-full py-3 px-5 ${className}`} {...props}>
            <img src={icon} alt="star-highlight-icon" />
            <p className={`text-megaorange font-poppins font-medium ${textClassName}`}>{text}</p>

        </div>
    )
}

export default Highlight;
