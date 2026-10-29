import Image from 'next/image';
import Link from 'next/link';
import { industries } from '@/data/industries';
import { getAsset } from '@/data/assets';

export default function IndustriesSection() {
  return (
    <section className="bg-white border-b border-warm-gray py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-steel">03 / Applications</p>
            <h2 className="max-w-sm text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-navy sm:text-5xl">Designed for the sectors that keep things moving.</h2>
            <Link href="/industries" className="mt-8 inline-block text-sm font-semibold text-navy underline underline-offset-4">Explore industries ↗</Link>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {industries.map((industry, index) => {
              const asset = getAsset(industry.imageKey);
              return (
                <Link key={industry.slug} href={`/industries#${industry.slug}`} className="group border-t border-navy pt-4">
                  <div className="flex items-start justify-between">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-steel">0{index + 1}</span>
                    <span className="text-lg text-navy transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                  </div>
                  <div className="relative mt-5 aspect-[1.55/1] overflow-hidden bg-warm-gray-light">
                    <Image src={asset.src} alt={asset.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width: 640px) 100vw, (max-width: 1023px) 45vw, 27vw" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-navy">{industry.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-steel">{industry.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
