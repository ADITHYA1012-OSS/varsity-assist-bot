import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isBot?: boolean;
  timestamp: Date;
}

export const ChatMessage = ({ message, isBot = false, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex w-full mb-6 animate-bounce-in",
      isBot ? "justify-start" : "justify-end"
    )}>
      <div className={cn(
        "max-w-[70%] px-5 py-4 rounded-2xl relative group",
        "backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]",
        isBot 
          ? "glass-effect text-card-foreground rounded-bl-md hover:shadow-lg" 
          : "bg-gradient-primary text-primary-foreground rounded-br-md glow-effect hover:shadow-xl"
      )}>
        {/* Decorative dot for bot messages */}
        {isBot && (
          <div className="absolute -left-2 top-4 w-3 h-3 bg-accent rounded-full animate-pulse-glow" />
        )}
        
        {/* Message content with better typography */}
        <p className="text-sm leading-relaxed font-medium">{message}</p>
        
        {/* Enhanced timestamp with icon */}
        <div className={cn(
          "flex items-center gap-1 mt-2 text-xs opacity-60 hover:opacity-80 transition-opacity",
          isBot ? "text-muted-foreground" : "text-primary-foreground/70"
        )}>
          <div className="w-1 h-1 bg-current rounded-full" />
          <span>{timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        
        {/* Subtle gradient overlay for user messages */}
        {!isBot && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 rounded-2xl rounded-br-md pointer-events-none" />
        )}
      </div>
    </div>
  );
};