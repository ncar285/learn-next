// 'use client'

import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import Provider from '@/context/Provider';
import { SessionProvider, useSession } from 'next-auth/react';

export default function RootLayout({
  children,
  session, // This should be passed to your layout by your custom _app.tsx or _app.js
}: {
  children: React.ReactNode;
  session: any; // Adjust the type according to your session object's shape
}) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
