import { ChatInterface } from "@/components/ChatInterface";
import { BackgroundGraphics } from "@/components/BackgroundGraphics";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Bot } from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundGraphics />
      
      {/* Enhanced Background */}
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/15 relative z-10">
        {/* Header with enhanced visuals */}
        <header className="relative overflow-hidden">
          <div 
            className="h-80 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${campusHero})` }}
          >
            {/* Enhanced overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 text-white/20">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
            <div className="absolute bottom-10 right-10 text-white/20">
              <Bot className="w-12 h-12 animate-float" />
            </div>
            
            <div className="relative z-10 container px-4 h-full flex items-center justify-center text-center">
              <div className="animate-slide-up">
                <Badge variant="secondary" className="mb-6 glass-effect text-white border-white/30 px-4 py-2 text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                  AI-Powered Campus Assistant
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Campus Inquiry Chatbot
                  </span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Get instant information about our facilities, laboratories, faculty, and achievements with our intelligent AI assistant
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Chat Interface with enhanced design */}
        <main className="container px-4 py-12">
          <Card className="shadow-2xl border-0 glass-effect glow-effect animate-slide-up max-w-6xl mx-auto">
            <div className="p-8 h-[650px] relative">
              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-accent rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              
              <ChatInterface />
            </div>
          </Card>
        </main>

        {/* Enhanced Footer */}
        <footer className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 py-12 mt-16 relative">
          <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
          <div className="container px-4 text-center relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Bot className="w-5 h-5 text-primary animate-pulse" />
              <span className="font-semibold text-foreground">Campus AI Assistant</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Campus AI Assistant. Powered by advanced AI technology.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;