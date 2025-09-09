import { NextResponse } from "next/server"

export const POST = (request) => {
    const response = NextResponse.json({message: "Logout Successful"});

    response.cookies.set('token', '', {
        maxAge: 0,
    })

    return response;
}