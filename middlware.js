import { NextResponse } from 'next/server'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(request) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    return NextResponse.redirect(new URL('/api/auth/login?post_login_redirect_url=/', request.url))
  }
}
 
export const config = {
  matcher: ['/details/:path*',],
}