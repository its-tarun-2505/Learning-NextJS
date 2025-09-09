import { signToken } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const { email, password } = await request.json();

    if(email != "abc@gmail.com" && password != "123456"){
        return NextResponse.json({message: "Invalid Credentials"}, {status: 401});
    }

    const token = await signToken({email, "role": "user"});
    const response = NextResponse.json({message: "Login Successful"});

    response.cookies.set('token', token, {
        httpOnly: true,
        maxAge: 60 * 60,
        path: '/'
    })

    return response;    
}