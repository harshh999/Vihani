import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/data/assets';
import { company } from '@/data/company';
import {
  footerIndustryLinks,
  footerProductLinks,
} from '@/data/navigation';

const currentYear = 2026;

const footerLinkClass =
  'text-sm text-steel-light transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white';

export default function Footer() {
  return (
    <footer className="border-t border-navy-light/40 bg-navy text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 pb-5 pt-7 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_0.8fr_1.1fr] lg:gap-6">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Vihani Transoceanic Home"
            >
              <Image
                src={assets.logoWhite.src}
                alt={assets.logoWhite.alt}
                width={assets.logoWhite.width}
                height={assets.logoWhite.height}
                className="h-11 w-auto object-contain sm:h-12"
              />
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-warm-gray">
              {company.tagline}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-steel-light">
              Vihani Transoceanic is an industrial packaging supplier and manufacturer
              specializing in woven polypropylene, flexible packaging, and geotextile
              solutions for demanding industries.
            </p>
          </div>

          <FooterLinkGroup heading="Products" items={footerProductLinks} />

          <nav aria-label="Explore">
            <h2 className="mb-4 !text-xs !leading-4 font-semibold uppercase tracking-wider text-warm-gray">
              Explore
            </h2>
            <ul className="space-y-2">
              {footerIndustryLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className={footerLinkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/manufacturing-quality" className={footerLinkClass}>
                  Manufacturing &amp; Quality
                </Link>
              </li>
            </ul>
          </nav>

          <div className="min-w-0">
            <h2 className="mb-4 !text-xs !leading-4 font-semibold uppercase tracking-wider text-warm-gray">
              Contact
            </h2>
            <address className="not-italic text-sm leading-relaxed text-steel-light">
              <a
                href={`tel:${company.contactInfo.phoneHref}`}
                className={footerLinkClass}
              >
                {company.contactInfo.phone}
              </a>
              <div className="mt-2 space-y-1">
                {company.contactInfo.emails.map((email) => (
                  <a
                    key={email.address}
                    href={`mailto:${email.address}`}
                    className={`block break-words ${footerLinkClass}`}
                  >
                    {email.address}
                  </a>
                ))}
              </div>
              <a
                href={company.contactInfo.addressHref}
                target="_blank"
                rel="noreferrer"
                className={`mt-3 block max-w-xs break-words ${footerLinkClass}`}
              >
                {company.contactInfo.address}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pb-3 pt-3 text-xs text-steel-light sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {company.companyName}. All rights reserved.
          </p>
          <nav aria-label="Legal and contact">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <Link href="/privacy-policy" className={footerLinkClass}>
                  Privacy Policy (Demo)
                </Link>
              </li>
              <li>
                <Link href="/contact" className={footerLinkClass}>
                  Contact &amp; Quote
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({
  heading,
  items,
}: {
  heading: string;
  items: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={heading}>
      <h2 className="mb-4 !text-xs !leading-4 font-semibold uppercase tracking-wider text-warm-gray">
        {heading}
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={footerLinkClass}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
