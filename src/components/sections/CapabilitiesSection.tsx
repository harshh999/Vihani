import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/data/assets';

const capabilities = [
  ['01', 'Material selection', 'Polypropylene and polyethylene constructions selected for the load, barrier, and handling conditions of the application.'],
  ['02', 'Quality verification', 'Fabric tensile loads, dimensional tolerances, stitching, liners, and print finish are checked against the agreed specification.'],
  ['03', 'Containerized dispatch', 'Bale-packed or palletized goods are coordinated for domestic and sea-freight delivery schedules.'],
];

export default function CapabilitiesSection() {
  return (
    <section className="bg-ivory border-b border-warm-gray py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7" data-reveal="heading">
            <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-steel">Manufacturing & quality</p>
            <h2 className="max-w-2xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-navy sm:text-5xl">Control is part of the product.</h2>
            <div data-reveal="image" className="relative mt-10 aspect-[1.75/1] overflow-hidden rounded-xl bg-warm-gray-light">
              <Image src={assets.manufacturing.src} alt={assets.manufacturing.alt} fill className="object-cover" sizes="(max-width: 1023px) 100vw, 58vw" />
            </div>
          </div>
          <div className="flex flex-col justify-end lg:col-span-5" data-reveal="paragraph">
            <p className="mb-10 max-w-md text-base leading-7 text-steel">Vihani’s manufacturing and sourcing guidelines focus on consistent denier extrusion, load-bearing calculations, and packaging that arrives ready for the packing cycle.</p>
            <div className="divide-y divide-navy border-y border-navy">
              {capabilities.map(([number, title, description]) => (
                <div key={number} className="grid grid-cols-[2.5rem_1fr] gap-3 py-5">
                  <span className="text-xs font-semibold text-steel">{number}</span>
                  <div>
                    <h3 className="text-base font-semibold text-navy">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-steel">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/manufacturing-quality" className="mt-6 text-sm font-semibold text-navy underline underline-offset-4">Manufacturing & quality ↗</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
