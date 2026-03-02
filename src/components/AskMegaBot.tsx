import { Button } from "./ui/button"

const AskMegaBot = () => {
    return (
        <Button variant="outline" 
            className="fixed bottom-8 right-8 z-50 border-white bg-megagreen text-whitebg font-poppins p-6 rounded-full ">
            <img src="/megacoop-logo-white.svg" className="w-5 mr-2" />
            Ask
            <span className="hidden md:inline -ml-1">
                MegaBoT
            </span>
        </Button>
    )
}

export default AskMegaBot;