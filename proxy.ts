// proxy.ts (Next.js 16+)
import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const userId = request.cookies.get('userId')?.value;
  const { pathname } = request.nextUrl;

  if (userId && pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const isPublicPath = pathname.startsWith('/login') || pathname.startsWith('/api') || pathname.startsWith('/favicon_io');
  if (!userId && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  const isDev = process.env.NODE_ENV === 'development';
  const styleNonce = isDev ? '' : `'nonce-${nonce}'`;

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    script-src-elem 'self' 'nonce-${nonce}';
    style-src 'self' ${styleNonce} 'unsafe-inline';
    style-src-elem 'self' ${styleNonce} 'unsafe-inline';
    style-src-attr 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://raw.githubusercontent.com;
    font-src 'self' data:;
    media-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    connect-src 'self' https://pokeapi.co;
  `.replace(/\s{2,}/g, ' ').trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('Content-Security-Policy', cspHeader);

  return response;
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|favicon_io|manifest.webmanifest|icon.svg|sw.js|workbox-).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
