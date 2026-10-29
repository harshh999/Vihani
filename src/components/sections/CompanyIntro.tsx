import Image from 'next/image';
import Link from 'next/link';
import { company } from '@/data/company';
import { assets } from '@/data/assets';

export default function CompanyIntro() {
  return (
    <section className="bg-ivory border-b border-warm-gray py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-5">
          <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-steel">02 / The company</p>
          <h2 className="max-w-md text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-navy sm:text-5xl">
            A precise link between production and supply.
          </h2>
        </div>
        <div className="lg:col-span-7">
          <div className="relative aspect-[1.7/1] overflow-hidden bg-warm-gray-light">
            <Image src={assets.company.src} alt={assets.company.alt} fill className="object-cover" sizes="(max-width: 1023px) 100vw, 58vw" />
          </div>
          <div className="mt-7 grid gap-8 sm:grid-cols-2">
            <p className="text-base leading-7 text-steel">
              <strong className="font-semibold text-navy">{company.companyName}</strong> supplies woven polypropylene, flexible packaging, and geotextile solutions for agriculture, construction, chemicals, and infrastructure.
            </p>
            <div className="border-t border-navy pt-4">
              <p className="text-sm leading-6 text-steel">The work is practical: select the right fabric, barrier, closure, and load performance for the way a product is filled, moved, and stored.</p>
              <Link href="/about" className="mt-5 inline-block text-sm font-semibold text-navy underline underline-offset-4">About Vihani ↗</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
