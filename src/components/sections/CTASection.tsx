import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-12 lg:gap-6 lg:px-12 lg:py-12">
        <div className="lg:col-span-7">
          <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-steel-light">Start a conversation</p>
          <h2 className="max-w-2xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl">Tell us what the packaging has to do.</h2>
        </div>
        <div className="flex flex-col justify-end lg:col-span-5">
          <p className="max-w-md text-base leading-7 text-steel-light">Share the product, load, filling method, and destination. Our team can help shape the right specification.</p>
          <div className="mt-5 flex flex-wrap items-center gap-6">
            <Link href="/contact" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-warm-gray-light">Request a quote ↗</Link>
            <Link href="/products" className="text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">Browse products</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
