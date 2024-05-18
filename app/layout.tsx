import React, { ReactNode, Suspense } from 'react';

import GoogleAnalytics from '@/app/components/elements/GoogleAnalytics/GoogleAnalytics';
import "@/app/globals.css";

export const metadata = {
  title: 'Sample Drill App',
  alternates: {
    canonical: '/',
  },
  description: 'ドリルアプリのサンプルです',
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Sample Drill App',
    description: 'ドリルアプリのサンプルです',
    images: '/placeholder-social.jpg',
  },
  robots: {
    follow: false,
    googleBot: {
      follow: false,
      index: false,
    },
    index: false,
  },
};

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang='ja'>
      <head>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22><text y=%2214%22 font-size=%2214%22>📗</text></svg>"
        />
      </head>
      <body>
        <main
          className='font-NotoSansJP'
        >
          {children}
        </main>
      </body>
    </html>
  );
}
