'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';
import { ArrowLeft } from 'lucide-react';
import { useI18n } from '@/i18n/provider';

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div className="py-28 bg-ivory text-center flex-1 flex items-center">
      <Container size="narrow">
        <div className="bg-white border border-warm-gray p-10 rounded-lg shadow-xs space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-steel font-mono">
            {t.notFound.eyebrow}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy">
            {t.notFound.title}
          </h1>
          <p className="text-steel max-w-md mx-auto text-sm sm:text-base leading-relaxed">
            {t.notFound.description}
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white text-sm font-semibold rounded-md hover:bg-navy-light transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180" />
              {t.notFound.returnButton}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
