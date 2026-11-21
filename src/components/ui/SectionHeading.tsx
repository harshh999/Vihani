import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === 'center' && 'text-center',
        className,
      )}
    >
      <h2 data-reveal="heading" className="text-3xl md:text-4xl font-bold text-navy">
        {title}
      </h2>

      {/* Decorative accent line */}
      <div
        className={cn(
          'mt-4 h-[2px] w-12 bg-navy',
          align === 'center' && 'mx-auto',
        )}
        aria-hidden="true"
      />

      {subtitle && (
        <p
          data-reveal="paragraph"
          className={cn(
            'text-lg text-steel mt-4 max-w-2xl',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
