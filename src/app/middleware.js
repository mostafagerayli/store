import { NextResponse } from 'next/server'

export function middleware(request) {
    const isAdmin = false ;
    const {pathname} = request.nextUrl;

    if (pathname.startsWith('/dashboard') && isAdmin !== true){
        return NextResponse.redirect(new URL ('/login' , request.url))
    }

return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*']
}

