import { cn } from "@/lib/utils";

interface BackgroundGradientProps extends React.HTMLAttributes<HTMLDivElement> {}

export function BackgroundGradient({
  className,
  children,
  ...props
}: BackgroundGradientProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-[#141c4c] to-[#0b90d8] p-[1px] relative overflow-hidden transition-all hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}