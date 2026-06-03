import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LEGACY_CITIZENSHIP_PREFIX = "/hero-einbürgerungstest";
const CITIZENSHIP_PREFIX = "/hero-einbuergerungstest";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const decoded = decodeURIComponent(pathname);

  if (
    decoded === LEGACY_CITIZENSHIP_PREFIX ||
    decoded.startsWith(`${LEGACY_CITIZENSHIP_PREFIX}/`)
  ) {
    const suffix = decoded.slice(LEGACY_CITIZENSHIP_PREFIX.length);
    const url = request.nextUrl.clone();
    url.pathname = `${CITIZENSHIP_PREFIX}${suffix}`;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/hero-einbürgerungstest", "/hero-einbürgerungstest/:path*"],
};
