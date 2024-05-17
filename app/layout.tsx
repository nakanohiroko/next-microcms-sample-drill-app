import React, { ReactNode, Suspense } from 'react';

import GoogleAnalytics from '@/app/components/elements/GoogleAnalytics/GoogleAnalytics';
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

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
