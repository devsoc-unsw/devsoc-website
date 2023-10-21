import type { Metadata } from 'next';
import React from 'react';

import './globals.css';
import ClientLayout from './clientLayout';

export const metadata: Metadata = {
  title: 'DevSoc UNSW',
  description: 'Official website of the UNSW Software Development Society',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
