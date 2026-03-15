import { TooltipProvider } from "../ui/tooltip";
import { AskChatButton } from "./components/AskChatButton";
import { ChatDialog } from "./components/ChatDialog";
import { useChatBot } from "./hooks/useChatBot";




const AskMegaBot = () => {
    const chat = useChatBot();

    return (
        <TooltipProvider delayDuration={300}>
            <ChatDialog
                isOpen={chat.isOpen}
                currentView={chat.currentView}
                greeting={chat.greeting}
                messages={chat.messages}
                input={chat.input}
                isStartingSession={chat.isStartingSession}
                isTyping={chat.isTyping}
                messagesEndRef={chat.messagesEndRef}
                onNewChat={chat.newChat}
                onClose={chat.closeChat}
                onChipClick={(label) => chat.handleSend(label)}
                onInputChange={chat.setInput}
                onSend={chat.handleSend}
                onKeyDown={chat.handleKeyDown}
            
            />

            <AskChatButton
                isOpen={chat.isOpen}
                onClick={chat.toggleChat}
            />
        </TooltipProvider>
    )
}

export default AskMegaBot;
