import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollAnimations from '@/components/animations/ScrollAnimations';
import { company } from '@/data/company';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vihanitransoceanic.com'),
  title: {
    default: `${company.companyName} | Premium Industrial Packaging`,
    template: `%s | ${company.companyName}`,
  },
  description: `${company.description} Suppliers of FIBC jumbo bags, woven sacks, fabric rolls, BOPP bags, and protective covers.`,
  keywords: [
    'FIBC bags',
    'jumbo bags',
    'PP woven sacks',
    'industrial packaging',
    'polypropylene bags',
    'BOPP bags',
    'tarpaulins',
    'Vihani Transoceanic',
  ],
  authors: [{ name: company.companyName }],
  openGraph: {
    title: `${company.companyName} | Industrial Packaging Solutions`,
    description: company.description,
    siteName: company.companyName,
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Header />
        <ScrollAnimations />
        <main className="relative z-10 flex-1" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
