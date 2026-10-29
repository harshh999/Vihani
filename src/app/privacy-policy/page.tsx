import type { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy (Demo)',
  description: 'Demonstration privacy and data handling notice for Vihani Transoceanic website preview.',
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="bg-navy text-white py-16 border-b border-navy-light/30">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Privacy Policy (Demonstration Notice)
            </h1>
            <p className="mt-3 text-steel-light text-sm sm:text-base">
              Standard data protection disclosure and interactive preview notice.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container size="narrow">
          <div className="prose prose-slate max-w-none space-y-6 text-steel leading-relaxed text-sm sm:text-base">
            <div className="p-4 bg-ivory border border-warm-gray rounded-md text-xs text-steel">
              <strong className="text-navy block mb-1">Demonstration Notice:</strong>
              This website is currently presented as a commercial preview and portfolio demo. Prior to formal enterprise deployment, this policy should be reviewed and approved by qualified legal counsel in accordance with applicable regional data privacy regulations (e.g., Digital Personal Data Protection Act / GDPR).
            </div>

            <h2 className="text-xl font-bold text-navy">1. Information Collection</h2>
            <p>
              When utilizing our inquiry or quotation submission forms, users may optionally submit business contact information including full names, company names, business email addresses, telephone numbers, and technical packaging specifications.
            </p>

            <h2 className="text-xl font-bold text-navy">2. Purpose of Processing</h2>
            <p>
              Submitted details are used solely to assess commercial requirements, calculate freight estimates, generate quotation sheets, or coordinate packaging physical samples.
            </p>

            <h2 className="text-xl font-bold text-navy">3. Data Retention & Third Parties</h2>
            <p>
              We do not sell, rent, or trade commercial inquiry data with unrelated third-party marketing entities. Technical specifications may be shared with authorized manufacturing and logistics partners strictly for production validation and shipping arrangements.
            </p>

            <h2 className="text-xl font-bold text-navy">4. Security Safeguards</h2>
            <p>
              Appropriate technical and operational standards are maintained to protect transmitted information against unauthorized alteration, exposure, or loss.
            </p>

            <h2 className="text-xl font-bold text-navy">5. Contact Information</h2>
            <p>
              For privacy queries or questions regarding data handling practices, please contact our administrative desk at sales@vihanitransoceanic.com.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
