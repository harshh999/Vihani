'use client';

import Link from 'next/link';
import Image from 'next/image';
import { industries } from '@/data/industries';
import { getAsset } from '@/data/assets';
import { getProductBySlug } from '@/data/products';
import Container from '@/components/ui/Container';
import EditorialIntro from '@/components/sections/EditorialIntro';
import {
  Wheat,
  Building2,
  FlaskConical,
  Sprout,
  Pickaxe,
  Hammer,
  ArrowRight,
  Package,
} from 'lucide-react';
import { useI18n } from '@/i18n/provider';

const iconMap: Record<string, React.ElementType> = {
  Sprout,
  Building2,
  FlaskConical,
  Wheat,
  Pickaxe,
  Hammer,
};

export default function IndustriesPage() {
  const { t } = useI18n();

  return (
    <div>
      <EditorialIntro
        eyebrow={t.industriesPage.eyebrow}
        title={t.industriesPage.title}
        description={t.industriesPage.description}
        image={getAsset('industryAgriculture')}
      />

      {/* Industries List */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="space-y-12" data-reveal-group>
            {industries.map((ind) => {
              const Icon = iconMap[ind.iconName] || Building2;
              const asset = getAsset(ind.imageKey);
              const indKey = ind.slug as keyof typeof t.industryItems;
              const translatedDesc = t.industryItems[indKey]?.description || ind.description;

              return (
                <div
                  key={ind.slug}
                  id={ind.slug}
                  className="bg-white border border-warm-gray p-8 rounded-lg scroll-mt-24 shadow-xs"
                  data-reveal-item
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-warm-gray">
                        <Image
                          src={asset.src}
                          alt={asset.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 42vw"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-md bg-ivory border border-warm-gray flex items-center justify-center text-navy">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-navy">
                        {/* Protected industry name */}
                        {ind.name}
                      </h2>
                      <p className="text-base text-steel leading-relaxed">{translatedDesc}</p>
                    </div>

                    <div className="lg:col-span-7 bg-ivory p-6 rounded-lg border border-warm-gray">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-4 flex items-center">
                        <Package className="w-4 h-4 mr-1.5 rtl:mr-0 rtl:ml-1.5" />
                        {t.industriesPage.recommendedProductsPrefix} {ind.name}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {ind.relatedProducts.map((slug) => {
                          const p = getProductBySlug(slug);
                          if (!p) return null;
                          const productKey = p.slug as keyof typeof t.productItems;
                          const translatedShortDesc = t.productItems[productKey]?.shortDescription || p.shortDescription;

                          return (
                            <Link
                              key={slug}
                              href={`/products/${slug}`}
                              className="group block p-4 bg-white border border-warm-gray rounded-md hover:border-navy transition-colors"
                            >
                              <div className="font-semibold text-navy group-hover:underline text-sm mb-1 flex items-center justify-between">
                                {/* Protected product name */}
                                <span>{p.name}</span>
                                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <p className="text-xs text-steel line-clamp-2">{translatedShortDesc}</p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
