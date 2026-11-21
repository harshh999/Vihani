'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { company } from '@/data/company';
import Container from '@/components/ui/Container';
import QuoteForm from '@/components/forms/QuoteForm';
import EditorialIntro from '@/components/sections/EditorialIntro';
import { assets } from '@/data/assets';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useI18n } from '@/i18n/provider';

function ContactContent() {
  const searchParams = useSearchParams();
  const preselectedProduct = searchParams.get('product') || undefined;
  const { t } = useI18n();

  return (
    <div>
      <EditorialIntro
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
        image={assets.company}
        compact
      />

      {/* Main Content */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" data-reveal-group>
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8" data-reveal-item>
              <div className="bg-white border border-warm-gray p-8 rounded-lg shadow-xs space-y-6">
                <h2 className="text-xl font-bold text-navy border-b border-warm-gray/60 pb-3">
                  {t.contact.infoHeading}
                </h2>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start space-x-3.5 rtl:space-x-reverse">
                    <Phone className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-steel mb-0.5">
                        {t.contact.phoneLabel}
                      </span>
                      <a
                        href={`tel:${company.contactInfo.phoneHref}`}
                        className="text-sm font-semibold text-navy hover:underline"
                        dir="ltr"
                      >
                        {company.contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Emails */}
                  <div className="flex items-start space-x-3.5 rtl:space-x-reverse">
                    <Mail className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-steel mb-0.5">
                        {t.contact.emailLabel}
                      </span>
                      {company.contactInfo.emails.map((e) => (
                        <div key={e.address}>
                          <a
                            href={`mailto:${e.address}`}
                            className="block text-sm font-semibold text-navy hover:underline break-all"
                            dir="ltr"
                          >
                            {e.address}
                          </a>
                          <span className="text-xs text-steel">
                            {e.purpose}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-3.5 rtl:space-x-reverse">
                    <MapPin className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-steel mb-0.5">
                        {t.contact.addressLabel}
                      </span>
                      <a
                        href={company.contactInfo.addressHref}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-steel leading-relaxed hover:text-navy block"
                        dir="ltr"
                      >
                        {company.contactInfo.address}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-3.5 rtl:space-x-reverse">
                    <Clock className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-steel mb-0.5">
                        {t.contact.hoursLabel}
                      </span>
                      <p className="text-sm text-steel" dir="ltr">
                        {t.contact.hoursValue}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Support Notice */}
              <div className="bg-white border border-warm-gray p-6 rounded-lg text-sm text-steel space-y-2">
                <strong className="text-navy block font-semibold">
                  {t.contact.whyChooseTitle}
                </strong>
                <p className="leading-relaxed text-xs sm:text-sm">
                  {t.contact.whyChooseDesc}
                </p>
              </div>
            </div>

            {/* Right: Quote Request Form */}
            <div className="lg:col-span-7" data-reveal-item>
              <QuoteForm initialProductSlug={preselectedProduct} />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-steel">Loading contact form...</div>}>
      <ContactContent />
    </Suspense>
  );
}
