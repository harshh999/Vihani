import Image from 'next/image';
import { type Product } from '@/data/products';
import { getAsset } from '@/data/assets';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
}

export default function ProductCard({
  product,
  variant = 'default',
}: ProductCardProps) {
  const asset = getAsset(product.imageKey);

  return (
    <a
      href={`/products/${product.slug}`}
      data-reveal-item
      className={cn(
        'group block bg-white rounded-lg overflow-hidden border border-warm-gray',
        'transition-shadow duration-300 hover:shadow-md',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy',
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-warm-gray-light overflow-hidden">
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className={cn('p-5', variant === 'compact' && 'p-4')}>
        <h3
          className={cn(
            'font-semibold text-navy',
            variant === 'compact' ? 'text-base' : 'text-lg',
          )}
        >
          {product.name}
        </h3>

        {variant !== 'compact' && (
          <p className="mt-2 text-sm text-steel leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        )}

        <span className="mt-3 inline-flex items-center text-sm font-medium text-navy group-hover:underline">
          Learn More
          <span className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </a>
  );
}
