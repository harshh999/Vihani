import type { Metadata } from 'next';
import Image from 'next/image';
import { company } from '@/data/company';
import { assets } from '@/data/assets';
import Container from '@/components/ui/Container';
import EditorialIntro from '@/components/sections/EditorialIntro';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';
import { ShieldCheck, Truck, Cog, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${company.companyName}, our business model, and industrial packaging sourcing capabilities.`,
};

export default function AboutPage() {
  return (
    <div>
      <EditorialIntro
        eyebrow="About Vihani"
        title="Packaging that works beyond the warehouse."
        description="Vihani Transoceanic is an industrial packaging supplier focused on woven polypropylene products, FIBC bags, flexible packaging, and technical fabrics for modern supply chains."
        image={assets.company}
      />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-steel leading-relaxed text-base sm:text-lg">
              <p>
                <strong className="text-navy">{company.companyName}</strong> is an industrial packaging provider focused on polypropylene woven products, flexible intermediate bulk containers (FIBC), and protective technical textiles.
              </p>
              <p>
                Industrial packaging demands rigorous standards. A tear, seam burst, or moisture ingress can compromise valuable cargo, halt manufacturing processes, or cause hazardous contamination during sea transport. We bridge procurement needs with vetted manufacturing operations to deliver packaging that meets strict mechanical tolerances.
              </p>
              <p>
                Our philosophy prioritizes structural integrity over shortcuts: selecting appropriate denier and virgin polypropylene resins, optimizing weave densities, and providing tailored barrier liners for sensitive chemicals and food-grade bulk products.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-warm-gray mb-6">
                <Image
                  src={assets.company.src}
                  alt={assets.company.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              <div className="bg-ivory border border-warm-gray p-6 rounded-lg space-y-6">
                <h3 className="text-lg font-bold text-navy border-b border-warm-gray pb-3">
                  Operational Principles
                </h3>
                <ul className="space-y-4 text-sm text-steel">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-navy block">Application-Specific Engineering:</strong>
                      Matching loop types, discharge spouts, and GSM directly to client discharge infrastructure.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-navy block">Traceable Quality Control:</strong>
                      Testing fabric tensile loads, elongation, UV resistance, and seam integrity prior to dispatch.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-navy block">Transparent Communication:</strong>
                      Honest assessments of material grades, lead times, and container loading volumes.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Model & Approach */}
      <section className="py-20 bg-ivory border-t border-b border-warm-gray">
        <Container>
          <SectionHeading
            title="Our Sourcing & Distribution Model"
            subtitle="How we manage technical packaging requirements from design to final destination."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-warm-gray">
              <div className="w-12 h-12 bg-ivory rounded-md flex items-center justify-center text-navy mb-5 border border-warm-gray">
                <Cog className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">1. Technical Specification</h3>
              <p className="text-sm text-steel leading-relaxed">
                We review cargo density, loading methods, stacking heights, and exposure risks to determine exact safety factors (5:1 or 6:1), baffle requirements, and liner configurations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-warm-gray">
              <div className="w-12 h-12 bg-ivory rounded-md flex items-center justify-center text-navy mb-5 border border-warm-gray">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">2. Quality Assurance & Testing</h3>
              <p className="text-sm text-steel leading-relaxed">
                Production lots undergo dimensional audits, stitching inspections, and drop/cyclic testing to verify that physical performance matches agreed laboratory specifications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-warm-gray">
              <div className="w-12 h-12 bg-ivory rounded-md flex items-center justify-center text-navy mb-5 border border-warm-gray">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">3. Containerized Logistics</h3>
              <p className="text-sm text-steel leading-relaxed">
                Palletized or bale-packed goods are coordinated for timely dispatch to domestic facilities or sea-freight ports, ensuring packaging supplies are on-site before packing cycles begin.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
