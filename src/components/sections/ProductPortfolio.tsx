import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { getAsset } from '@/data/assets';
import { ArrowUpRight } from 'lucide-react';

export default function ProductPortfolio() {
  return (
    <section className="bg-white border-b border-warm-gray py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-navy pb-6 sm:flex-row sm:items-end">
          <div data-reveal="heading">
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-steel">Product range</p>
            <h2 className="max-w-xl text-3xl font-medium tracking-[-0.04em] text-navy sm:text-5xl">
              Materials for movement.
            </h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-navy underline underline-offset-4">
            Complete catalogue <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4" data-reveal-group>
          {products.map((product) => {
            const asset = getAsset(product.imageKey);

            return (
              <Link key={product.slug} href={`/products/${product.slug}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-warm-gray-light">
                  <Image
                    src={asset.src}
                    alt={asset.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  />
                </div>
                <div className="mt-4 border-t border-navy pt-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-medium tracking-[-0.02em] text-navy">{product.name}</h3>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-steel">{product.shortDescription}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
