import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const isAuthenticated = !!token;
    const path = req.nextUrl.pathname;
    const isAdmin = token?.role === "admin";

    const isAuthPage = ["/login", "/register"].includes(path);
    const isProtectedPage = path.startsWith("/my-cart");
    const isAdminPage = path.startsWith("/my-product");


    if (isAuthenticated && isAuthPage) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    if (isAuthenticated && isAdminPage && !isAdmin) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    if (!isAuthenticated && isProtectedPage) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
    }

    export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico)).*)",
    ],
};
