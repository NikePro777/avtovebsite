import './api/styles/globals.css';
import Head from 'next/head';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gaijam F1',
  description: 'дорогие авто - дешево',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="rus">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
