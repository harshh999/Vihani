'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { assets } from '@/data/assets';
import EditorialIntro from '@/components/sections/EditorialIntro';
import {
  ShieldAlert,
  FileSearch,
  Scale,
  Microscope,
} from 'lucide-react';
import { useI18n } from '@/i18n/provider';

export default function ManufacturingQualityPage() {
  const { t } = useI18n();

  return (
    <div>
      <EditorialIntro
        eyebrow={t.manufacturing.eyebrow}
        title={t.manufacturing.title}
        description={t.manufacturing.description}
        image={assets.manufacturing}
      />

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6" data-reveal="heading">
            <h2 className="text-3xl font-bold text-navy">
              {t.manufacturing.heading}
            </h2>
            <p className="text-base sm:text-lg text-steel leading-relaxed">
              {t.manufacturing.philosophyParagraph}
            </p>
          </div>

          <div data-reveal="image" className="relative aspect-[2/1] max-w-5xl mx-auto mt-12 rounded-xl overflow-hidden border border-warm-gray">
            <Image
              src={assets.manufacturing.src}
              alt={assets.manufacturing.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal-group>
            <div className="p-6 bg-ivory rounded-lg border border-warm-gray space-y-4" data-reveal-item>
              <div className="w-10 h-10 rounded-md bg-white border border-warm-gray flex items-center justify-center text-navy">
                <Microscope className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy">{t.manufacturing.rawMaterialTitle}</h3>
              <p className="text-sm text-steel leading-relaxed">
                {t.manufacturing.rawMaterialDesc}
              </p>
            </div>

            <div className="p-6 bg-ivory rounded-lg border border-warm-gray space-y-4" data-reveal-item>
              <div className="w-10 h-10 rounded-md bg-white border border-warm-gray flex items-center justify-center text-navy">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy">{t.manufacturing.tensileTestingTitle}</h3>
              <p className="text-sm text-steel leading-relaxed">
                {t.manufacturing.tensileTestingDesc}
              </p>
            </div>

            <div className="p-6 bg-ivory rounded-lg border border-warm-gray space-y-4" data-reveal-item>
              <div className="w-10 h-10 rounded-md bg-white border border-warm-gray flex items-center justify-center text-navy">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy">{t.manufacturing.seamIntegrityTitle}</h3>
              <p className="text-sm text-steel leading-relaxed">
                {t.manufacturing.seamIntegrityDesc}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Quality Process Checklist */}
      <section className="py-20 bg-ivory border-t border-warm-gray">
        <Container>
          <SectionHeading
            title={t.manufacturing.checklistHeading}
            subtitle={t.manufacturing.checklistSubtitle}
          />

          <div className="mt-12 bg-white border border-warm-gray rounded-lg divide-y divide-warm-gray shadow-xs" data-reveal="default">
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-1 font-mono text-xs font-bold text-navy">01</div>
              <div className="md:col-span-4 font-bold text-navy text-base">{t.manufacturing.checkItem1Title}</div>
              <div className="md:col-span-7 text-sm text-steel leading-relaxed">{t.manufacturing.checkItem1Desc}</div>
            </div>

            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-1 font-mono text-xs font-bold text-navy">02</div>
              <div className="md:col-span-4 font-bold text-navy text-base">{t.manufacturing.checkItem2Title}</div>
              <div className="md:col-span-7 text-sm text-steel leading-relaxed">{t.manufacturing.checkItem2Desc}</div>
            </div>

            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-1 font-mono text-xs font-bold text-navy">03</div>
              <div className="md:col-span-4 font-bold text-navy text-base">{t.manufacturing.checkItem3Title}</div>
              <div className="md:col-span-7 text-sm text-steel leading-relaxed">{t.manufacturing.checkItem3Desc}</div>
            </div>

            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-1 font-mono text-xs font-bold text-navy">04</div>
              <div className="md:col-span-4 font-bold text-navy text-base">{t.manufacturing.checkItem4Title}</div>
              <div className="md:col-span-7 text-sm text-steel leading-relaxed">{t.manufacturing.checkItem4Desc}</div>
            </div>

            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-1 font-mono text-xs font-bold text-navy">05</div>
              <div className="md:col-span-4 font-bold text-navy text-base">{t.manufacturing.checkItem5Title}</div>
              <div className="md:col-span-7 text-sm text-steel leading-relaxed">{t.manufacturing.checkItem5Desc}</div>
            </div>

            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-1 font-mono text-xs font-bold text-navy">06</div>
              <div className="md:col-span-4 font-bold text-navy text-base">{t.manufacturing.checkItem6Title}</div>
              <div className="md:col-span-7 text-sm text-steel leading-relaxed">{t.manufacturing.checkItem6Desc}</div>
            </div>
          </div>

          {/* Compliance Statement */}
          <div className="mt-8 p-6 bg-white border border-warm-gray rounded-lg flex items-start space-x-4 rtl:space-x-reverse" data-reveal="default">
            <FileSearch className="w-6 h-6 text-navy shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-steel leading-relaxed">
              <span className="font-semibold text-navy">
                {t.manufacturing.complianceNote}
              </span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
