import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';

import './globals.css';

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
