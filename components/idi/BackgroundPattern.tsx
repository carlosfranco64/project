'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface BackgroundPatternProps {
  className?: string;
  variant?: 'dots' | 'grid' | 'waves';
}

export function BackgroundPattern({ className, variant = 'dots' }: BackgroundPatternProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn('absolute inset-0 z-0 opacity-30', className)} />;
  }

  const isDark = resolvedTheme === 'dark';
  
  // Pattern colors based on theme
  const patternColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(20, 28, 76, 0.05)';
  
  // Define different patterns
  let pattern;
  switch (variant) {
    case 'grid':
      pattern = `
        linear-gradient(to right, ${patternColor} 1px, transparent 1px),
        linear-gradient(to bottom, ${patternColor} 1px, transparent 1px)
      `;
      break;
    case 'waves':
      return (
        <div className={cn('absolute inset-0 z-0 overflow-hidden', className)}>
          <svg
            className="absolute bottom-0 left-0 w-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill={isDark ? '#ffffff' : '#0b90d8'}
              fillOpacity="0.3"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <path
              fill={isDark ? '#ffffff' : '#0b90d8'}
              fillOpacity="0.2"
              d="M0,288L48,266.7C96,245,192,203,288,181.3C384,160,480,160,576,154.7C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      );
    case 'dots':
    default:
      pattern = `radial-gradient(${patternColor} 1px, transparent 1px)`;
      break;
  }

  return (
    <div
      className={cn('absolute inset-0 z-0 opacity-40', className)}
      style={{
        backgroundImage: pattern,
        backgroundSize: variant === 'grid' ? '30px 30px' : '20px 20px',
      }}
    />
  );
}