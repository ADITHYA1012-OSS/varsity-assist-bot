import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryButtonProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export const CategoryButton = ({ title, description, icon, onClick, className }: CategoryButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "h-auto p-6 flex flex-col items-center gap-3 group relative overflow-hidden",
        "glass-effect hover:glow-effect transition-all duration-300 hover:-translate-y-2",
        "border-2 hover:border-primary/30 animate-slide-up",
        "before:absolute before:inset-0 before:bg-gradient-primary before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-5 hover:text-primary-foreground",
        className
      )}
      onClick={onClick}
    >
      <div className="relative z-10 text-primary group-hover:text-white text-3xl transform transition-transform duration-300 group-hover:scale-110 animate-float">
        {icon}
      </div>
      <div className="relative z-10 text-center">
        <h3 className="font-bold text-sm mb-1 group-hover:text-white transition-colors duration-300">{title}</h3>
        <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors duration-300">{description}</p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-accent rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-gradient-primary rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
    </Button>
  );
};