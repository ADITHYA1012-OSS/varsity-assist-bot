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
        "h-auto p-4 flex flex-col items-center gap-2 hover:shadow-md transition-all duration-200 hover:-translate-y-1",
        className
      )}
      onClick={onClick}
    >
      <div className="text-primary text-2xl">{icon}</div>
      <div className="text-center">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </div>
    </Button>
  );
};