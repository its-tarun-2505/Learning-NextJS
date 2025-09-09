import { jwtVerify, SignJWT } from "jose";

let SecretKey = "SREDTFYGHJK";

// create a token
export async function signToken(payload) {
    return await new SignJWT(payload).setProtectedHeader({alg:'HS256'}).setExpirationTime('1h').sign(SecretKey);
}

// verify a token
export async function verifyToken(token) {
    try{
        const{payload} = await jwtVerify(token, SecretKey);
        return payload;
    }catch{
        return null;
    }
} 