import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isBot?: boolean;
  timestamp: Date;
}

export const ChatMessage = ({ message, isBot = false, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex w-full mb-4 animate-in slide-in-from-bottom-2 duration-300",
      isBot ? "justify-start" : "justify-end"
    )}>
      <div className={cn(
        "max-w-[70%] px-4 py-3 rounded-2xl shadow-sm",
        isBot 
          ? "bg-card text-card-foreground rounded-bl-md" 
          : "bg-primary text-primary-foreground rounded-br-md"
      )}>
        <p className="text-sm leading-relaxed">{message}</p>
        <span className={cn(
          "text-xs mt-1 block opacity-70",
          isBot ? "text-muted-foreground" : "text-primary-foreground/70"
        )}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};