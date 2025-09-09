import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

export const middleware = async (request) => {
    const token = request.cookies.get('token')?.value;
    const user = token ? await verifyToken(token) : null;
    
    if(!user){
        return NextResponse.redirect(new URL('login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/path*']
}