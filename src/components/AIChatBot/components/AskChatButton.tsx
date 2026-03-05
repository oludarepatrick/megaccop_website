import { Button } from "@/components/ui/button"


type AskChatButtonProps = {
    onClick: () => void;
    isOpen: boolean;
};

export const AskChatButton = ({ onClick, isOpen }: AskChatButtonProps) => {
    return (
        <Button
            variant="outline"
            onClick={onClick}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close chat" : "Open chat with Jane"}
            className={`fixed bottom-8  right-8 z-50 border-white font-normal
                bg-megagreen hover:bg-green-600 text-whitebg hover:text-whitebg 
                font-poppins p-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200
                ${isOpen ? "scale-95 shadow-md hidden" : "scale-100"}
            `}
            >
                {isOpen ? (
                    // show close icon X when chat is open
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                        <path d="M1 1L13 13M13 1L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                ) : (
                    // show Ask Jane with logo when chat is closed
                    <span className="flex items-center gap-2">
                        <img src="/megacoop-logo-white.svg" alt="" className="w-5" />
                        Ask
                        <span className="hidden md:inline -ml-1">
                            Jane
                        </span>
                    </span>
                )}
        </Button>
    )
}