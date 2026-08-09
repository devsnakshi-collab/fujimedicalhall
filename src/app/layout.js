import Navbar from "@/component/Navbar";
import "./globals.css";
import Footer from "@/component/Footer";
import { CartProvider } from "@/context/CartContext";
import BottomNav from "@/component/BottomNav";

export const metadata = {
  metadataBase: new URL('https://www.fujimedicalhall.com'),
  title: {
    default: "Fuji Medical Hall - Home",
    template: "%s | Fuji Medical Hall"
  },
  description: "Your safe and reliable healthcare partner. Book home lab tests and purchase wholesale medicines.",
  keywords: ["pharmacy", "medical hall", "lab tests", "wholesale medicines", "healthcare", "fuji medical"],
  authors: [{ name: "Fuji Medical Hall" }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Fuji Medical Hall',
    description: 'Your safe and reliable healthcare partner. Book home lab tests and purchase wholesale medicines.',
    url: 'https://www.fujimedicalhall.com',
    siteName: 'Fuji Medical Hall',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fuji Medical Hall',
    description: 'Your safe and reliable healthcare partner.',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Pharmacy',
    name: 'Fuji Medical Hall',
    url: 'https://www.fujimedicalhall.com',
    description: 'Your safe and reliable healthcare partner. Book home lab tests and purchase wholesale medicines.',
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-gradient-to-b from-emerald-200 via-emerald-50 to-white bg-fixed dark:from-emerald-950/60 dark:via-zinc-950 dark:to-zinc-950 text-zinc-800 dark:text-zinc-100 pb-20 md:pb-0"
        suppressHydrationWarning={true}
      >
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <BottomNav />
        </CartProvider>
      </body>
    </html>
  );
}
