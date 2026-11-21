'use client';

import { useI18n } from '@/i18n/provider';
import Container from '@/components/ui/Container';
import EditorialIntro from '@/components/sections/EditorialIntro';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';
import { assets } from '@/data/assets';

export default function ProductsPage() {
  const { t } = useI18n();

  return (
    <div>
      <EditorialIntro
        eyebrow={t.productsPage.eyebrow}
        title={t.productsPage.title}
        description={t.productsPage.description}
        image={assets.fibcBags}
        imagePosition="center"
      />

      {/* Catalogue Grid */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="mb-12">
            <SectionHeading
              title={t.productsPage.heading}
              subtitle={t.productsPage.subtitle}
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
