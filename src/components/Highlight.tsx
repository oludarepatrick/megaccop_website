import star from "../assets/star.svg";

type HighlightProps = {
    text: string
}

const Highlight = ({text} : HighlightProps) => {
    return (
        <div className="bg-fadeorange flex gap-3 rounded-full py-3 px-5">
            <img src={star} alt="star-highlight-icon" />
            <p className="text-megaorange font-poppins font-medium">{text}</p>

        </div>
    )
}

export default Highlight;
