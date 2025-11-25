// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // cookie-аас loggedInUser-г уншина
  const loggedIn = request.cookies.get("loggedInUser")?.value;

  const pathname = request.nextUrl.pathname;

  // Хамгаалах замууд: "/" болон бусад page-уудыг жагсаана
  const protectedPaths = ["/", "/profile", "/dashboard"]; // шаардлагатай бол нэм

  // Хэрэглэгч логин хийгээд байгаа бол /login-руу нэвтрэхийг хориглоно
  if (loggedIn && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Хэрэв /login биш, protectedPaths дотор орж байгаад логин байхгүй бол /login руу чиглүүл
  if (!loggedIn && protectedPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/profile", "/dashboard", "/login"], // middleware-ийг ажиллуулах замууд
};
