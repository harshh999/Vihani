'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { assets } from '@/data/assets';
import { cn } from '@/lib/utils';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useI18n } from '@/i18n/provider';
import LanguageSelector from '@/components/layout/LanguageSelector';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useI18n();

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.products, href: '/products' },
    { label: t.nav.industries, href: '/industries' },
    { label: t.nav.manufacturingQuality, href: '/manufacturing-quality' },
    { label: t.nav.contact, href: '/contact' },
  ];

  // Handle escape key to close menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-warm-gray transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo (Original orientation preserved) */}
            <Link
              href="/"
              className="flex items-center py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy shrink-0"
              aria-label="Vihani Transoceanic Home"
              dir="ltr"
            >
              <Image
                src={assets.logo.src}
                alt={assets.logo.alt}
                width={assets.logo.width}
                height={assets.logo.height}
                priority
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 rtl:space-x-reverse" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-navy relative py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy',
                      isActive ? 'text-navy font-semibold' : 'text-steel'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 rtl:left-auto rtl:right-0 w-full h-[2px] bg-navy" aria-hidden="true" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA & Language Selector */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSelector />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 xl:px-5 py-2.5 text-sm font-medium rounded-md bg-navy text-white hover:bg-navy-light transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                {t.nav.requestQuote}
                <ArrowRight className="ml-1.5 rtl:ml-0 rtl:mr-1.5 rtl:rotate-180 w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                className="p-2 text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-white text-navy lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex min-h-[100dvh] flex-col">
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-warm-gray px-4 sm:px-6">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                aria-label="Vihani Transoceanic Home"
                dir="ltr"
              >
                <Image
                  src={assets.logo.src}
                  alt={assets.logo.alt}
                  width={assets.logo.width}
                  height={assets.logo.height}
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                className="rounded-md p-2 text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy cursor-pointer"
                aria-label={t.nav.closeMenu}
                aria-controls="mobile-navigation"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-6 sm:px-8" aria-label="Mobile Navigation">
              <div className="flex flex-col">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        'border-b border-warm-gray/40 py-3.5 text-lg font-medium transition-colors hover:text-navy',
                        isActive ? 'font-bold text-navy' : 'text-steel'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-6 flex w-full items-center justify-center rounded-md bg-navy px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-navy-light"
              >
                {t.nav.requestQuote}
                <ArrowRight className="ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 h-4 w-4" aria-hidden="true" />
              </Link>

              {/* Mobile Language Selector */}
              <div className="mt-4">
                <LanguageSelector isMobile onSelectLanguage={closeMenu} />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
