import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products, getProductBySlug } from '@/data/products';
import { getAsset } from '@/data/assets';
import Container from '@/components/ui/Container';
import CTASection from '@/components/sections/CTASection';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.name} | Industrial Packaging`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const asset = getAsset(product.imageKey);

  return (
    <div>
      {/* Breadcrumb Header */}
      <section className="bg-white border-b border-warm-gray py-4">
        <Container>
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-steel">
            <Link href="/products" className="hover:text-navy flex items-center">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Products
            </Link>
            <span>/</span>
            <span className="text-navy font-medium truncate">{product.name}</span>
          </div>
        </Container>
      </section>

      {/* Main Detail Section */}
      <section className="py-12 lg:py-16 bg-ivory">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Product Image */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-warm-gray p-3 rounded-lg">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-warm-gray-light">
                  <Image
                    src={asset.src}
                    alt={asset.alt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <p className="mt-3 text-xs text-center text-steel">
                  Standard industrial product overview. Actual specifications tailored to order.
                </p>
              </div>
            </div>

            {/* Right: Technical Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                {product.category}
              </div>

              <h1 className="text-4xl sm:text-5xl font-medium text-navy tracking-[-0.04em] leading-[1.05]">
                {product.name}
              </h1>

              <p className="text-lg text-steel leading-relaxed">
                {product.description}
              </p>

              {/* Supported Applications */}
              {product.applications && product.applications.length > 0 && (
                <div className="bg-white p-6 border border-warm-gray rounded-lg space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-navy">
                    Recommended Applications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.applications.map((app) => (
                      <div key={app} className="flex items-start space-x-2.5 text-sm text-steel">
                        <CheckCircle2 className="w-4 h-4 text-navy mt-0.5 flex-shrink-0" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Specifications */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div className="bg-white p-6 border border-warm-gray rounded-lg space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-navy">
                    Technical Parameters
                  </h3>
                  <dl className="divide-y divide-warm-gray/60 text-sm">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} className="py-2.5 grid grid-cols-3 gap-4">
                        <dt className="text-navy font-semibold">{key}</dt>
                        <dd className="col-span-2 text-steel">{val}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.slug)}`}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-navy text-white font-semibold rounded-md hover:bg-navy-light transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-navy"
                >
                  Request a Quote for This Product
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-white border border-warm-gray text-navy text-sm font-medium rounded-md hover:bg-warm-gray-light transition-colors"
                >
                  Back to All Products
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
