'use client';

import Container from '@/components/ui/Container';
import { useI18n } from '@/i18n/provider';

export default function PrivacyPolicyPage() {
  const { t } = useI18n();

  return (
    <div>
      <section className="bg-navy text-white py-16 border-b border-navy-light/30">
        <Container>
          <div className="max-w-3xl">
            <h1 data-reveal="heading" className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t.privacy.heroTitle}
            </h1>
            <p data-reveal="paragraph" className="mt-3 text-steel-light text-sm sm:text-base">
              {t.privacy.heroSubtitle}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container size="narrow">
          <div className="prose prose-slate max-w-none space-y-6 text-steel leading-relaxed text-sm sm:text-base" data-reveal-group>
            <div className="p-4 bg-ivory border border-warm-gray rounded-md text-xs text-steel">
              <strong className="text-navy block mb-1">{t.privacy.demoNoticeTitle}</strong>
              {t.privacy.demoNoticeText}
            </div>

            <h2 data-reveal-item className="text-xl font-bold text-navy">{t.privacy.s1Title}</h2>
            <p>
              {t.privacy.s1Text}
            </p>

            <h2 data-reveal-item className="text-xl font-bold text-navy">{t.privacy.s2Title}</h2>
            <p>
              {t.privacy.s2Text}
            </p>

            <h2 data-reveal-item className="text-xl font-bold text-navy">{t.privacy.s3Title}</h2>
            <p>
              {t.privacy.s3Text}
            </p>

            <h2 data-reveal-item className="text-xl font-bold text-navy">{t.privacy.s4Title}</h2>
            <p>
              {t.privacy.s4Text}
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
