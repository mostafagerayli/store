import { NextResponse } from 'next/server'

export function middleware(request) {
  const isAdmin = false // باید از کوکی بگیری
  const { pathname } = request.nextUrl
  const token = false // باید از کوکی بگیری
  //توکن معتبر بود بتونه بره سفارش خرید انجام بده
  if (pathname.startsWith('/shopingCart') && !token){
    return NextResponse.redirect(new URL('/login', request.url))
  }
//داشبورد ادمین
  if (pathname.startsWith('/dashboard') && isAdmin !== true) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*','/shopingCart/:path*'],
}