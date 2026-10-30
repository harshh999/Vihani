import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { assets } from '@/data/assets';
import EditorialIntro from '@/components/sections/EditorialIntro';
import {
  ShieldAlert,
  CheckCircle,
  FileSearch,
  Scale,
  Microscope,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Manufacturing & Quality Assurance',
  description: 'Verified industrial manufacturing protocols, fabric tensile testing, and quality control procedures at Vihani Transoceanic.',
};

export default function ManufacturingQualityPage() {
  return (
    <div>
      <EditorialIntro
        eyebrow="Manufacturing & quality"
        title="Built around material performance."
        description="Our packaging and manufacturing-related capabilities focus on material selection, load-bearing construction, consistent extrusion, and verification against agreed specifications."
        image={assets.manufacturing}
      />

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6" data-reveal="heading">
            <h2 className="text-3xl font-bold text-navy">
              Quality Driven by Industrial Reality
            </h2>
            <p className="text-base sm:text-lg text-steel leading-relaxed">
              When bulk bags hold two metric tons of cargo suspended overhead or undergo weeks of ocean humidity, packaging cannot fail. Our manufacturing and sourcing guidelines adhere strictly to load-bearing calculations, virgin polymer formulation, and consistent denier extrusion.
            </p>
          </div>

          <div data-reveal="image" className="relative aspect-[2/1] max-w-5xl mx-auto mt-12 rounded-xl overflow-hidden border border-warm-gray">
            <Image
              src={assets.manufacturing.src}
              alt={assets.manufacturing.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal-group>
            <div className="p-6 bg-ivory rounded-lg border border-warm-gray space-y-4" data-reveal-item>
              <div className="w-10 h-10 rounded-md bg-white border border-warm-gray flex items-center justify-center text-navy">
                <Microscope className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy">Raw Material Control</h3>
              <p className="text-sm text-steel leading-relaxed">
                Utilizing high-grade polypropylene and polyethylene polymers with controlled melt flow indexes (MFI) and UV stabilizer masterbatches to maintain tensile stability under sunlight.
              </p>
            </div>

            <div className="p-6 bg-ivory rounded-lg border border-warm-gray space-y-4" data-reveal-item>
              <div className="w-10 h-10 rounded-md bg-white border border-warm-gray flex items-center justify-center text-navy">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy">Tensile & Burst Testing</h3>
              <p className="text-sm text-steel leading-relaxed">
                Warp and weft fabric strips undergo calibrated tensile testing to confirm tear resistance and elongation thresholds match designated Safe Working Loads (SWL).
              </p>
            </div>

            <div className="p-6 bg-ivory rounded-lg border border-warm-gray space-y-4" data-reveal-item>
              <div className="w-10 h-10 rounded-md bg-white border border-warm-gray flex items-center justify-center text-navy">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy">Seam & Stitch Integrity</h3>
              <p className="text-sm text-steel leading-relaxed">
                Heavy-duty lock stitching, chain stitches, and dust-proof filler cords are systematically audited to prevent powder leakage and structural stress failures at loop attachment points.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Quality Process Checklist */}
      <section className="py-20 bg-ivory border-t border-warm-gray">
        <Container>
          <SectionHeading
            title="Production Verification Checklist"
            subtitle="Parameters verified before packaging consignments receive shipping clearance."
          />

          <div className="mt-12 bg-white border border-warm-gray p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-navy mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-navy">GSM & Weave Density Audit</h4>
                  <p className="text-xs text-steel mt-0.5">Grammage verification across fabric roll batches using calibrated electronic cutters.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-navy mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-navy">Lifting Loop Load Verification</h4>
                  <p className="text-xs text-steel mt-0.5">Ensuring reinforced webbings comply with standard multi-point crane hook tolerances.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-navy mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-navy">Dimensional Tolerances Inspection</h4>
                  <p className="text-xs text-steel mt-0.5">Physical measurements of base dimensions, baffle spacing, and spout diameters.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-navy mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-navy">Moisture & Liner Sealing Check</h4>
                  <p className="text-xs text-steel mt-0.5">Inspection of PE liner thickness, insertion fit, and thermal bottom seals.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-navy mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-navy">Print Quality & Ink Adhesion</h4>
                  <p className="text-xs text-steel mt-0.5">Rub testing and optical clarity review for branding, hazard marks, and handling symbols.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-navy mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-navy">Export Packaging & Palletization</h4>
                  <p className="text-xs text-steel mt-0.5">Compression baling and stretch wrapping to guard against transit humidity and friction.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-warm-gray text-xs text-steel flex items-center space-x-2">
              <FileSearch className="w-4 h-4 text-navy flex-shrink-0" />
              <span>
                Note: Client-specific technical data sheets (TDS), test certificates, and compliance documentation are provided directly upon quotation for specific order specifications.
              </span>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
