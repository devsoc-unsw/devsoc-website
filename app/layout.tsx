/**
 * This is the 'server layout' which is server-rendered so that we can use the
 * Metadata API - actual layout stuff happens in ClientLayout
 */

import type { Metadata } from 'next';
import React from 'react';

import './globals.css';
import ClientLayout from './clientLayout';

export const metadata: Metadata = {
  title: 'DevSoc UNSW',
  description: 'Official website of the UNSW Software Development Society',
}

export default async function RootLayout({
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
