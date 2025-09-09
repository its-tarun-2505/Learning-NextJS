"use client"

import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
   const route = useRouter();

  const handleClick = async() => {
    const response = await fetch('api/logout', {
        method: 'POST',
    });
    
    if(response.ok){
      route.push('/login');
    }else{
      alert('Error logging out');
    }
  }
    
  return (
    <div>
        <h1>User Dashboard</h1>
        <p>Welcome to your dashboard!</p>
        <button type='button' onClick={handleClick}>Logout</button>
    </div>
  ) 
}

export default page
