'use client';

import Image from 'next/image';
import Link from 'next/link';
import { company } from '@/data/company';
import { assets } from '@/data/assets';
import { useI18n } from '@/i18n/provider';

export default function CompanyIntro() {
  const { t } = useI18n();

  return (
    <section className="bg-ivory border-b border-warm-gray py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-5" data-reveal="heading">
          <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-steel">
            {t.companyIntro.eyebrow}
          </p>
          <h2 className="max-w-md text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-navy sm:text-5xl">
            {t.companyIntro.title}
          </h2>
        </div>
        <div className="lg:col-span-7">
          <div data-reveal="image" className="relative aspect-[1.7/1] overflow-hidden rounded-xl bg-warm-gray-light">
            <Image
              src={assets.company.src}
              alt={assets.company.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 58vw"
            />
          </div>
          <div className="mt-7 grid gap-8 sm:grid-cols-2" data-reveal-group>
            <p data-reveal-item className="text-base leading-7 text-steel">
              <strong className="font-semibold text-navy">{company.companyName}</strong>
              {t.companyIntro.paragraph1Prefix}
            </p>
            <div data-reveal-item className="border-t border-navy pt-4">
              <p className="text-sm leading-6 text-steel">
                {t.companyIntro.paragraph2}
              </p>
              <Link href="/about" className="mt-5 inline-block text-sm font-semibold text-navy underline underline-offset-4">
                {t.companyIntro.aboutLink}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
