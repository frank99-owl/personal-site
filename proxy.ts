import { NextResponse, type NextRequest } from "next/server";
import { negotiateLocale } from "@/lib/locale";

// Send `/` to /zh or /en based on the browser's language, so a link shared
// with a Chinese reader opens in Chinese. Every other path is untouched.
export function proxy(request: NextRequest) {
  const locale = negotiateLocale(request.headers.get("accept-language"));
  const response = NextResponse.redirect(new URL(`/${locale}`, request.url), 307);
  response.headers.set("Vary", "Accept-Language");
  return response;
}

export const config = {
  matcher: "/",
};
