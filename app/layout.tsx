import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';

const ttCommonsPro = localFont({ src: './TT_Commons_Pro_Variable.woff2'})

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
      <body className={ttCommonsPro.className}>{children}</body>
    </html>
  )
}
