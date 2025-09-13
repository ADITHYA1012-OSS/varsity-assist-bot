import { cn } from "@/lib/utils";

export const BackgroundGraphics = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-accent rounded-full opacity-10 animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-primary rounded-full opacity-5 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-accent rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-primary rounded-full opacity-8 animate-float" style={{ animationDelay: '0.5s' }} />
      
      {/* Geometric patterns */}
      <div className="absolute top-1/4 left-1/4 w-1 h-20 bg-gradient-to-b from-primary/20 to-transparent rotate-45" />
      <div className="absolute top-3/4 right-1/4 w-1 h-16 bg-gradient-to-b from-accent/20 to-transparent -rotate-45" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Radial gradients for depth */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 opacity-10"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 opacity-8"
        style={{
          background: `radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)`
        }}
      />
    </div>
  );
};