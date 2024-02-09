import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextRequest, NextResponse } from 'next/server';

import { cookies } from 'next/headers'

 
export default NextAuth(authConfig).auth;
 
// export function middleware(request: NextRequest) {
//   const currentUser = request.cookies.get('currentUser')?.value
 
//   if (currentUser) {
//     return NextResponse.redirect(new URL('/dashboard', request.url))
//   }
//   return NextResponse.redirect(new URL('/login', request.url))
// }
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
 
export async function getSession() {
  const sessionId = cookies().get('sessionId')?.value
  return sessionId ? await db.findSession(sessionId) : null
}