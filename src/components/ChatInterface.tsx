import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ChatMessage } from "./ChatMessage";
import { CategoryButton } from "./CategoryButton";
import { Send, Building2, Microscope, GraduationCap, Trophy, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const campusData = {
  facilities: {
    library: "Our state-of-the-art library spans 50,000 sq ft with over 200,000 books, digital resources, and 24/7 study spaces.",
    cafeteria: "Multiple dining options including vegetarian, vegan, and international cuisines. Open from 7 AM to 10 PM.",
    gym: "Fully equipped fitness center with modern equipment, swimming pool, basketball court, and yoga studio.",
    hostel: "On-campus accommodation for 2,000+ students with Wi-Fi, laundry, and recreational facilities."
  },
  labs: {
    computer: "Advanced computer labs with latest software, high-speed internet, and 24/7 access for students.",
    chemistry: "Well-equipped chemistry labs with modern instruments and safety protocols for hands-on learning.",
    physics: "State-of-the-art physics labs with advanced equipment for experimentation and research.",
    engineering: "Specialized engineering labs for mechanical, electrical, and civil engineering departments."
  },
  faculty: {
    professors: "Over 150 highly qualified faculty members with PhD degrees from prestigious institutions worldwide.",
    ratio: "Student-faculty ratio of 15:1 ensuring personalized attention and mentorship for every student.",
    research: "Faculty actively involved in cutting-edge research with numerous publications in international journals.",
    experience: "Average teaching experience of 12+ years with industry expertise and academic excellence."
  },
  achievements: {
    ranking: "Ranked among top 50 universities nationally with 5-star rating for academic excellence.",
    placements: "95% placement rate with top companies like Google, Microsoft, Amazon recruiting our graduates.",
    research: "Published 500+ research papers in international journals and received 25+ patents this year.",
    awards: "Winner of 'Best University' award 2023 and 'Excellence in Education' recognition."
  }
};

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your campus assistant. I can help you with information about our facilities, labs, faculty, and achievements. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Facilities
    if (lowerMessage.includes("library")) return campusData.facilities.library;
    if (lowerMessage.includes("cafeteria") || lowerMessage.includes("food") || lowerMessage.includes("dining")) 
      return campusData.facilities.cafeteria;
    if (lowerMessage.includes("gym") || lowerMessage.includes("fitness") || lowerMessage.includes("sports")) 
      return campusData.facilities.gym;
    if (lowerMessage.includes("hostel") || lowerMessage.includes("accommodation") || lowerMessage.includes("dormitory")) 
      return campusData.facilities.hostel;
    
    // Labs
    if (lowerMessage.includes("computer lab") || lowerMessage.includes("it lab")) return campusData.labs.computer;
    if (lowerMessage.includes("chemistry lab")) return campusData.labs.chemistry;
    if (lowerMessage.includes("physics lab")) return campusData.labs.physics;
    if (lowerMessage.includes("engineering lab")) return campusData.labs.engineering;
    
    // Faculty
    if (lowerMessage.includes("professor") || lowerMessage.includes("teacher") || lowerMessage.includes("faculty")) {
      if (lowerMessage.includes("ratio")) return campusData.faculty.ratio;
      if (lowerMessage.includes("research")) return campusData.faculty.research;
      if (lowerMessage.includes("experience")) return campusData.faculty.experience;
      return campusData.faculty.professors;
    }
    
    // Achievements
    if (lowerMessage.includes("ranking") || lowerMessage.includes("rank")) return campusData.achievements.ranking;
    if (lowerMessage.includes("placement") || lowerMessage.includes("job") || lowerMessage.includes("career")) 
      return campusData.achievements.placements;
    if (lowerMessage.includes("research") && lowerMessage.includes("achievement")) return campusData.achievements.research;
    if (lowerMessage.includes("award")) return campusData.achievements.awards;
    
    // General categories
    if (lowerMessage.includes("facilities")) 
      return "We have excellent facilities including a modern library, cafeteria, gym, hostels, and recreational areas. What specific facility would you like to know about?";
    if (lowerMessage.includes("labs")) 
      return "Our campus has well-equipped labs for computer science, chemistry, physics, and engineering. Which lab interests you?";
    if (lowerMessage.includes("achievements")) 
      return "We're proud of our top rankings, excellent placement records, research publications, and multiple awards. What achievement would you like to learn about?";
    
    return "I'd be happy to help! You can ask me about our facilities (library, cafeteria, gym, hostels), labs (computer, chemistry, physics, engineering), faculty, or achievements. What interests you most?";
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(input),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleCategoryClick = (category: string) => {
    const queries = {
      facilities: "Tell me about campus facilities",
      labs: "What labs are available on campus?",
      faculty: "Information about faculty",
      achievements: "What are the campus achievements?"
    };
    
    setInput(queries[category as keyof typeof queries]);
    toast({
      title: "Category Selected",
      description: `Ask me about ${category}!`,
    });
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      {/* Quick Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <CategoryButton
          title="Facilities"
          description="Library, gym, cafeteria"
          icon={<Building2 />}
          onClick={() => handleCategoryClick("facilities")}
        />
        <CategoryButton
          title="Labs"
          description="Computer, chemistry, physics"
          icon={<Microscope />}
          onClick={() => handleCategoryClick("labs")}
        />
        <CategoryButton
          title="Faculty"
          description="Professors & expertise"
          icon={<GraduationCap />}
          onClick={() => handleCategoryClick("faculty")}
        />
        <CategoryButton
          title="Achievements"
          description="Rankings & awards"
          icon={<Trophy />}
          onClick={() => handleCategoryClick("achievements")}
        />
      </div>

      {/* Chat Messages */}
      <Card className="flex-1 p-4 mb-4 overflow-hidden">
        <div className="h-full overflow-y-auto pr-2">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isBot={message.isBot}
              timestamp={message.timestamp}
            />
          ))}
          
          {isTyping && (
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">AI is typing...</span>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </Card>

      {/* Input Area */}
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about facilities, labs, faculty, or achievements..."
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          disabled={isTyping}
          className="flex-1"
        />
        <Button 
          onClick={handleSendMessage} 
          disabled={!input.trim() || isTyping}
          size="icon"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};