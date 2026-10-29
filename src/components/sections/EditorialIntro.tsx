import Image from 'next/image';
import Container from '@/components/ui/Container';
import { cn } from '@/lib/utils';

interface EditorialIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  imagePosition?: string;
  compact?: boolean;
  children?: React.ReactNode;
}

export default function EditorialIntro({
  eyebrow,
  title,
  description,
  image,
  imagePosition = 'center',
  compact = false,
  children,
}: EditorialIntroProps) {
  return (
    <section className={cn('border-b border-warm-gray bg-ivory', compact ? 'py-12 sm:py-16' : 'py-16 sm:py-24 lg:py-28')}>
      <Container>
        <div className={cn('grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16', compact ? 'lg:gap-12' : '')}>
          <div className="lg:col-span-5">
            <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-steel">{eyebrow}</p>
            <h1 className={cn('max-w-xl font-medium leading-[1.04] tracking-[-0.045em] text-navy', compact ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl lg:text-6xl')}>
              {title}
            </h1>
            <p className={cn('mt-7 max-w-lg text-steel leading-7', compact ? 'text-base' : 'text-base sm:text-lg')}>
              {description}
            </p>
            {children}
          </div>
          <div className={cn('relative overflow-hidden rounded-xl border border-warm-gray bg-warm-gray-light', compact ? 'aspect-[1.35/1] lg:col-span-7' : 'aspect-[1.25/1] lg:col-span-7 lg:aspect-[1.55/1]')}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              className="object-cover"
              style={{ objectPosition: imagePosition }}
              sizes="(max-width: 1023px) 100vw, 58vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
