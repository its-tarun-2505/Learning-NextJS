"use client"
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';

const HomePage = () => { //to check nextAuth session (nextAuth is used only here : file-location : api/auth/[...nextauth]/route.js)
    const { data: session, status } = useSession();

    if(status === 'loading'){
        return <p>Loading...</p>
    }

    if(session){
        return (
            <div>
                <h1>Welcome, {session.user.email}</h1>
                <p>You are logged in.</p>
                <button onClick={() => signOut()}>Sign Out</button>
                <h1>Available Details:</h1>
                <h2>{JSON.stringify(session,2)}</h2>
            </div>
        )
    }

    // if user is not logged in
    return(
        <div>
            <h1>You are not logged in.</h1>
            <button onClick={()=> signIn("github")}>Sign In with GitHub</button>
        </div>
    )
  
}

export default HomePage
