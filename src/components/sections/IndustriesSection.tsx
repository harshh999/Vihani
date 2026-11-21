'use client';

import Image from 'next/image';
import Link from 'next/link';
import { industries } from '@/data/industries';
import { getAsset } from '@/data/assets';
import { useI18n } from '@/i18n/provider';

const featuredIndustries = industries.slice(0, 3);

export default function IndustriesSection() {
  const { t } = useI18n();

  return (
    <section className="bg-ivory border-b border-warm-gray py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between" data-reveal="heading">
          <div>
            <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-steel">
              {t.industriesSection.eyebrow}
            </p>
            <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-navy sm:text-5xl">
              {t.industriesSection.title}
            </h2>
          </div>
          <Link href="/industries" className="text-sm font-semibold text-navy underline underline-offset-4">
            {t.industriesSection.exploreAll}
          </Link>
        </div>

        <div className="mt-12 border-t border-navy pt-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3" data-reveal-group>
            {featuredIndustries.map((industry, index) => {
              const asset = getAsset(industry.imageKey);
              const indKey = industry.slug as keyof typeof t.industryItems;
              const translatedDesc = t.industryItems[indKey]?.description || industry.description;

              return (
                <Link
                  key={industry.slug}
                  href={`/industries#${industry.slug}`}
                  data-reveal-item
                  className="group block"
                >
                  <div className="flex items-baseline justify-between border-b border-navy/20 pb-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">
                      0{index + 1}
                    </span>
                    <span className="text-lg text-navy transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <div className="relative mt-5 aspect-[1.55/1] overflow-hidden bg-warm-gray-light">
                    <Image
                      src={asset.src}
                      alt={asset.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1023px) 45vw, 27vw"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-navy">
                    {/* Protected industry name */}
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-steel">
                    {translatedDesc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
