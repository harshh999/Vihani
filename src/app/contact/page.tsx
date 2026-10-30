'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { company } from '@/data/company';
import Container from '@/components/ui/Container';
import QuoteForm from '@/components/forms/QuoteForm';
import EditorialIntro from '@/components/sections/EditorialIntro';
import { assets } from '@/data/assets';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

function ContactContent() {
  const searchParams = useSearchParams();
  const preselectedProduct = searchParams.get('product') || undefined;

  return (
    <div>
      <EditorialIntro
        eyebrow="Contact"
        title="Let's discuss your packaging requirements."
        description="Share your product type, specifications, quantity, and intended application so our team can understand the right packaging direction."
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
                <h2 className="text-xl font-bold text-navy border-b border-warm-gray pb-4">
                  Direct Inquiries
                </h2>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-navy mt-1 flex-shrink-0" />
                    <div>
                      <strong className="block text-navy font-semibold">Email Us</strong>
                      <div className="space-y-1">
                        {company.contactInfo.emails.map((email) => (
                          <a
                            key={email.address}
                            href={`mailto:${email.address}`}
                            className="block break-words text-steel hover:text-navy underline underline-offset-4"
                          >
                            {email.address}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 text-navy mt-1 flex-shrink-0" />
                    <div>
                      <strong className="block text-navy font-semibold">Direct Contact</strong>
                      <a href={`tel:${company.contactInfo.phoneHref}`} className="text-steel hover:text-navy underline underline-offset-4">
                        {company.contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-navy mt-1 flex-shrink-0" />
                    <div>
                      <strong className="block text-navy font-semibold">Registered Office & Origin</strong>
                      <a
                        href={company.contactInfo.addressHref}
                        target="_blank"
                        rel="noreferrer"
                        className="block break-words text-steel hover:text-navy underline underline-offset-4"
                      >
                        {company.contactInfo.address}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-5 h-5 text-navy mt-1 flex-shrink-0" />
                    <div>
                      <strong className="block text-navy font-semibold">Business Hours</strong>
                      <span className="text-steel">Monday – Saturday: 09:30 – 18:30 IST</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-warm-gray text-xs text-steel leading-relaxed bg-ivory p-4 rounded-md">
                  <span className="font-semibold text-navy block mb-1">Commercial Evaluation:</span>
                  Please include anticipated monthly or per-order volumes, destination port, and material density if known for accurate container load optimization.
                </div>
              </div>
            </div>

            {/* Right Form Column */}
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
    <Suspense fallback={<div className="py-20 text-center text-steel">Loading quotation interface...</div>}>
      <ContactContent />
    </Suspense>
  );
}
