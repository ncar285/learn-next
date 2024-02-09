'use client'

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface ProviderProps {
  children: React.ReactNode;
  session: Session | null | undefined;
}

export default function Provider({ children, session }: ProviderProps){
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}