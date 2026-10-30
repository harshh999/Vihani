import type { Metadata } from 'next';
import { products } from '@/data/products';
import { assets } from '@/data/assets';
import Container from '@/components/ui/Container';
import EditorialIntro from '@/components/sections/EditorialIntro';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/ui/ProductCard';

export const metadata: Metadata = {
  title: 'Products Catalogue',
  description: 'Explore our complete industrial packaging portfolio: FIBC bags, PP woven sacks, BOPP bags, fabric rolls, tarpaulins, and technical geotextiles.',
};

export default function ProductsPage() {
  return (
    <div>
      <EditorialIntro
        eyebrow="Our products"
        title="Materials made for movement."
        description="Explore bulk bags, PP woven sacks, BOPP bags, flexible packaging, fabric rolls, tarpaulins, and technical textile products for industrial supply chains."
        image={assets.fibcBags}
        imagePosition="center"
      />

      {/* Catalogue Grid */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="mb-12">
            <SectionHeading
              title="All Packaging Solutions"
              subtitle="Browse through our core product categories. Custom dimensions, prints, and liner specifications available on request."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-reveal-group>
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}
