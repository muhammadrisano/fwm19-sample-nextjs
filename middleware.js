import { NextResponse } from "next/server";
import { getCookie } from "./service/utils";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const token = getCookie("token");
  // private route
  if (request.nextUrl.pathname.startsWith("/profile") && !token) {
      return NextResponse.redirect(new URL("/login", request.url));
  }
  // public route
  if (request.nextUrl.pathname.startsWith("/login") && token) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  //   matcher: ['/profile', '/profile/my-recipe']
  matcher: ["/profile/:slug*", "/login"],
};
