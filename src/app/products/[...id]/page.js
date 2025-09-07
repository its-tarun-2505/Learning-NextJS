import React from 'react'
import Link from 'next/link'

const page = async({params}) => {
    const {id} = await params;
    console.log('paramsID', id);
    
  return (
    <div>
        <h1>Product {id}</h1>
        <p>This is the page for product {id}</p>
        <p>More details about product {id} will be available soon.</p>
        <p>
            <Link href="/products">Back to Products</Link>
        </p>
    </div>
  )
}

export default page
