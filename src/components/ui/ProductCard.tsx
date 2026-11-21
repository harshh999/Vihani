'use client';

import Image from 'next/image';
import { type Product } from '@/data/products';
import { getAsset } from '@/data/assets';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/provider';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
}

export default function ProductCard({
  product,
  variant = 'default',
}: ProductCardProps) {
  const asset = getAsset(product.imageKey);
  const { t } = useI18n();

  // Look up translated product description if available
  const productKey = product.slug as keyof typeof t.productItems;
  const translatedItem = t.productItems[productKey];
  const shortDescription = translatedItem?.shortDescription || product.shortDescription;

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
          {/* Product name is protected and never translated */}
          {product.name}
        </h3>

        {variant !== 'compact' && (
          <p className="mt-2 text-sm text-steel leading-relaxed line-clamp-2">
            {shortDescription}
          </p>
        )}

        <span className="mt-3 inline-flex items-center text-sm font-medium text-navy group-hover:underline">
          {t.common.learnMore}
          <span className="ml-1 rtl:ml-0 rtl:mr-1 rtl:rotate-180 transition-transform duration-200 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </a>
  );
}
