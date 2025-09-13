import { ChatInterface } from "@/components/ChatInterface";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import campusHero from "@/assets/campus-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div 
          className="h-64 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${campusHero})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
          <div className="relative z-10 container px-4 h-full flex items-center justify-center text-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                AI-Powered Campus Assistant
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Campus Inquiry Chatbot
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Get instant information about our facilities, laboratories, faculty, and achievements
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Chat Interface */}
      <main className="container px-4 py-8">
        <Card className="shadow-2xl border-0 bg-card/95 backdrop-blur">
          <div className="p-6 h-[600px]">
            <ChatInterface />
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-primary/5 py-8 mt-12">
        <div className="container px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Campus AI Assistant. Powered by advanced AI technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;