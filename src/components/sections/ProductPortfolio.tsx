'use client';

import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { getAsset } from '@/data/assets';
import { useI18n } from '@/i18n/provider';

const featuredSlugs = ['fibc-jumbo-bags', 'pp-woven-sacks', 'bopp-bags', 'tarpaulins'];

export default function ProductPortfolio() {
  const featured = products.filter((p) => featuredSlugs.includes(p.slug));
  const { t } = useI18n();

  return (
    <section className="bg-ivory border-b border-warm-gray py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between" data-reveal="heading">
          <div>
            <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-steel">
              {t.productPortfolio.eyebrow}
            </p>
            <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-navy sm:text-5xl">
              {t.productPortfolio.title}
            </h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-navy underline underline-offset-4">
            {t.productPortfolio.browseAll}
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>
          {featured.map((product) => {
            const asset = getAsset(product.imageKey);
            const productKey = product.slug as keyof typeof t.productItems;
            const itemTranslation = t.productItems[productKey];
            const shortDesc = itemTranslation?.shortDescription || product.shortDescription;

            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                data-reveal-item
                className="group relative flex flex-col justify-between border-t border-navy pt-5"
              >
                <div>
                  <div className="flex items-baseline justify-between text-xs font-semibold uppercase tracking-[0.18em] text-steel">
                    <span>{itemTranslation?.category || product.category}</span>
                    <span className="text-navy transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" aria-hidden="true">↗</span>
                  </div>
                  <h3 className="mt-3 text-xl font-medium leading-snug text-navy">
                    {/* Protected product name */}
                    {product.name}
                  </h3>
                  <div className="relative mt-5 aspect-[1.25/1] overflow-hidden bg-warm-gray-light">
                    <Image
                      src={asset.src}
                      alt={asset.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1023px) 45vw, 22vw"
                    />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-steel">
                  {shortDesc}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 border-t border-navy/20 pt-8" data-reveal="paragraph">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-steel">
              {t.productPortfolio.exploreAllBanner}
            </p>
            <Link
              href="/products"
              className="inline-flex shrink-0 items-center text-sm font-semibold text-navy underline underline-offset-4"
            >
              {t.productPortfolio.allProductsLink}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
