import { cn } from "@/lib/utils";

interface CardGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardGradient({ children, className, ...props }: CardGradientProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10",
        "bg-white/5 p-8 shadow-2xl",
        "backdrop-blur-xl transition-all duration-300",
        "hover:border-white/20 hover:bg-white/10",
        "dark:border-gray-800/50 dark:bg-gray-900/50",
        "dark:hover:border-gray-800 dark:hover:bg-gray-900/80",
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/30 dark:from-gray-800/5 dark:to-gray-800/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}