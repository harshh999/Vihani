'use client';

import Image from 'next/image';
import { company } from '@/data/company';
import { assets } from '@/data/assets';
import Container from '@/components/ui/Container';
import EditorialIntro from '@/components/sections/EditorialIntro';
import SectionHeading from '@/components/ui/SectionHeading';
import { ShieldCheck, Truck, Cog, CheckCircle2 } from 'lucide-react';
import { useI18n } from '@/i18n/provider';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div>
      <EditorialIntro
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.description}
        image={assets.company}
      />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" data-reveal-group>
            <div className="lg:col-span-7 space-y-6 text-steel leading-relaxed text-base sm:text-lg" data-reveal-item>
              <p>
                <strong className="text-navy">{company.companyName}</strong>
                {t.about.p1Prefix}
              </p>
              <p>
                {t.about.p2}
              </p>
              <p>
                {t.about.p3}
              </p>
            </div>

            <div className="lg:col-span-5" data-reveal-item>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-warm-gray mb-6">
                <Image
                  src={assets.company.src}
                  alt={assets.company.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Operational Pillars */}
      <section className="py-20 bg-ivory border-t border-warm-gray">
        <Container>
          <SectionHeading
            title={t.about.pillarsHeading}
            subtitle={t.about.pillarsSubtitle}
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal-group>
            {/* Pillar 1 */}
            <div className="p-8 bg-white border border-warm-gray rounded-lg shadow-xs space-y-4" data-reveal-item>
              <div className="w-12 h-12 rounded-md bg-ivory border border-warm-gray flex items-center justify-center text-navy">
                <Cog className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy">{t.about.pillar1Title}</h3>
              <p className="text-sm text-steel leading-relaxed">
                {t.about.pillar1Desc}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 bg-white border border-warm-gray rounded-lg shadow-xs space-y-4" data-reveal-item>
              <div className="w-12 h-12 rounded-md bg-ivory border border-warm-gray flex items-center justify-center text-navy">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy">{t.about.pillar2Title}</h3>
              <p className="text-sm text-steel leading-relaxed">
                {t.about.pillar2Desc}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 bg-white border border-warm-gray rounded-lg shadow-xs space-y-4" data-reveal-item>
              <div className="w-12 h-12 rounded-md bg-ivory border border-warm-gray flex items-center justify-center text-navy">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy">{t.about.pillar3Title}</h3>
              <p className="text-sm text-steel leading-relaxed">
                {t.about.pillar3Desc}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Engineering Tolerances Table */}
      <section className="py-20 bg-white border-t border-warm-gray">
        <Container size="narrow">
          <div className="text-center space-y-4 mb-12">
            <h2 data-reveal="heading" className="text-3xl font-bold text-navy">
              {t.about.specsHeading}
            </h2>
          </div>

          <div className="border border-warm-gray rounded-lg overflow-hidden" data-reveal="default">
            <dl className="divide-y divide-warm-gray">
              <div className="py-4 px-6 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-ivory/50">
                <dt className="text-sm font-semibold text-navy">{t.about.spec1Label}</dt>
                <dd className="text-sm text-steel font-mono">{t.about.spec1Val}</dd>
              </div>
              <div className="py-4 px-6 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-white">
                <dt className="text-sm font-semibold text-navy">{t.about.spec2Label}</dt>
                <dd className="text-sm text-steel font-mono">{t.about.spec2Val}</dd>
              </div>
              <div className="py-4 px-6 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-ivory/50">
                <dt className="text-sm font-semibold text-navy">{t.about.spec3Label}</dt>
                <dd className="text-sm text-steel font-mono">{t.about.spec3Val}</dd>
              </div>
              <div className="py-4 px-6 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-white">
                <dt className="text-sm font-semibold text-navy">{t.about.spec4Label}</dt>
                <dd className="text-sm text-steel font-mono">{t.about.spec4Val}</dd>
              </div>
            </dl>
          </div>

          {/* Why Indian Packaging Ecosystem */}
          <div className="mt-16 bg-ivory border border-warm-gray p-8 rounded-lg" data-reveal="default">
            <h3 className="text-xl font-bold text-navy mb-4">
              {t.about.whyHeading}
            </h3>
            <div className="space-y-3 text-steel text-sm leading-relaxed">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <CheckCircle2 className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                <span>{t.about.whyPoint1}</span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <CheckCircle2 className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                <span>{t.about.whyPoint2}</span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <CheckCircle2 className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                <span>{t.about.whyPoint3}</span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <CheckCircle2 className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                <span>{t.about.whyPoint4}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
