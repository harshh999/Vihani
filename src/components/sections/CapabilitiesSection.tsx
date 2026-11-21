'use client';

import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/data/assets';
import { useI18n } from '@/i18n/provider';

export default function CapabilitiesSection() {
  const { t } = useI18n();

  const capabilities = [
    [t.capabilitiesSection.item1Number, t.capabilitiesSection.item1Title, t.capabilitiesSection.item1Description],
    [t.capabilitiesSection.item2Number, t.capabilitiesSection.item2Title, t.capabilitiesSection.item2Description],
    [t.capabilitiesSection.item3Number, t.capabilitiesSection.item3Title, t.capabilitiesSection.item3Description],
  ];

  return (
    <section className="bg-ivory border-b border-warm-gray py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7" data-reveal="heading">
            <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-steel">
              {t.capabilitiesSection.eyebrow}
            </p>
            <h2 className="max-w-2xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-navy sm:text-5xl">
              {t.capabilitiesSection.title}
            </h2>
            <div data-reveal="image" className="relative mt-10 aspect-[1.75/1] overflow-hidden rounded-xl bg-warm-gray-light">
              <Image
                src={assets.manufacturing.src}
                alt={assets.manufacturing.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 58vw"
              />
            </div>
          </div>
          <div className="flex flex-col justify-end lg:col-span-5" data-reveal="paragraph">
            <p className="mb-10 max-w-md text-base leading-7 text-steel">
              {t.capabilitiesSection.description}
            </p>
            <div className="divide-y divide-navy border-y border-navy">
              {capabilities.map(([number, title, description]) => (
                <div key={number} className="grid grid-cols-[2.5rem_1fr] gap-3 py-5">
                  <span className="text-xs font-semibold text-steel font-mono">{number}</span>
                  <div>
                    <h3 className="text-base font-semibold text-navy">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-steel">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/manufacturing-quality" className="mt-6 text-sm font-semibold text-navy underline underline-offset-4">
              {t.capabilitiesSection.linkText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
