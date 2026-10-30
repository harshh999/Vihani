import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/data/assets';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-ivory border-b border-warm-gray overflow-hidden">
      <div className="grid min-h-[min(760px,calc(100vh-6rem))] grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col justify-between px-5 py-12 sm:px-8 sm:py-16 lg:col-span-5 lg:px-12 xl:px-16">
          <div>
            <div>
            <p data-reveal="eyebrow" className="mb-12 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-steel">
              Vihani Transoceanic / Industrial Packaging
            </p>
            <h1 data-reveal="heading" className="max-w-xl text-[clamp(2.7rem,5.5vw,5.9rem)] font-medium leading-[0.98] tracking-[-0.055em] text-navy">
              Packaging that carries the load.
            </h1>
            <p data-reveal="paragraph" className="mt-8 max-w-md text-base leading-7 text-steel sm:text-lg">
              Woven polypropylene bags, FIBC containers, flexible packaging, and technical fabrics for demanding supply chains.
            </p>
            </div>

          <div data-reveal="link" className="mt-14 flex items-center gap-6 border-t border-navy/20 pt-5">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light focus-visible:outline-2 focus-visible:outline-navy"
            >
              Request a quote
              <ArrowUpRight className="ml-3 h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/products"
              className="text-sm font-semibold text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy"
            >
              View product range
            </Link>
          </div>
          </div>
        </div>

        <div data-reveal="image" className="relative min-h-[360px] overflow-hidden rounded-xl lg:col-span-7 lg:min-h-0">
          <Image
            data-parallax
            src={assets.hero.src}
            alt={assets.hero.alt}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1023px) 100vw, 58vw"
          />
          <div className="absolute bottom-0 left-0 bg-navy px-5 py-4 text-xs uppercase tracking-[0.16em] text-white sm:px-7">
            Bulk packaging / woven systems
          </div>
        </div>
      </div>
    </section>
  );
}
