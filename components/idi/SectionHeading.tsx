import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  accentColor?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = 'center',
  accentColor = 'from-[#0b90d8] to-[#141c4c]',
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'mb-12',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      className
    )}>
      <h2 className={cn(
        'text-3xl font-bold text-[#141c4c] dark:text-white mb-4 inline-block',
        `bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn(
        'h-1 bg-gradient-to-r from-[#0b90d8] to-[#141c4c] rounded-full mt-4',
        align === 'center' ? 'w-24 mx-auto' : 'w-24',
      )} />
    </div>
  );
}