import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { industries } from '@/data/industries';
import { getAsset } from '@/data/assets';
import { getProductBySlug } from '@/data/products';
import Container from '@/components/ui/Container';
import CTASection from '@/components/sections/CTASection';
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

export const metadata: Metadata = {
  title: 'Industries Served',
  description: 'Specialized industrial packaging solutions designed for agriculture, cement, chemicals, food grains, mining, and civil construction.',
};

const iconMap: Record<string, React.ElementType> = {
  Sprout,
  Building2,
  FlaskConical,
  Wheat,
  Pickaxe,
  Hammer,
};

export default function IndustriesPage() {
  return (
    <div>
      <EditorialIntro
        eyebrow="Industries we serve"
        title="Different industries. Different demands."
        description="Packaging requirements vary by material, handling method, storage environment, and transportation needs. We organise the product range around those practical differences."
        image={getAsset('industryAgriculture')}
      />

      {/* Industries List */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="space-y-12">
            {industries.map((ind) => {
              const Icon = iconMap[ind.iconName] || Building2;
              const asset = getAsset(ind.imageKey);
              return (
                <div
                  key={ind.slug}
                  id={ind.slug}
                  className="bg-white border border-warm-gray p-8 rounded-lg scroll-mt-24 shadow-xs"
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
                      <h2 className="text-2xl font-bold text-navy">{ind.name}</h2>
                      <p className="text-base text-steel leading-relaxed">{ind.description}</p>
                    </div>

                    <div className="lg:col-span-7 bg-ivory p-6 rounded-lg border border-warm-gray">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-4 flex items-center">
                        <Package className="w-4 h-4 mr-1.5" />
                        Recommended Packaging Products for {ind.name}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {ind.relatedProducts.map((slug) => {
                          const p = getProductBySlug(slug);
                          if (!p) return null;
                          return (
                            <Link
                              key={slug}
                              href={`/products/${slug}`}
                              className="group block p-4 bg-white border border-warm-gray rounded-md hover:border-navy transition-colors"
                            >
                              <div className="font-semibold text-navy group-hover:underline text-sm mb-1 flex items-center justify-between">
                                <span>{p.name}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <p className="text-xs text-steel line-clamp-2">{p.shortDescription}</p>
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

      <CTASection />
    </div>
  );
}
