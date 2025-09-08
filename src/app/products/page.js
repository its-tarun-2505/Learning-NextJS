import Link from 'next/link'
import style from './page.module.css'
import React from 'react'

const fetchProducts = async() => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data;
}

const page = async() => {
  const data = await fetchProducts();
  // console.log('products', data);
  
  return (
    <>
      <div className={style.page}>
        <h1 className={style.heading}>Welcome to the Products Page</h1>
        <h2 className={style.subheading}>Product Details</h2>
        <div className={style.productContainer}>
          {data && data.products.map((product) => (
            <div key={product.id} style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'90vw', padding:'0.25rem 0rem'}}>
              <h3>* {" " + product.title}</h3>
              <Link href={`/products/${product.id}`}>View Product</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default page

{/* <p className={style.para}>Link of Product pages</p> 
<Link className={style.link} href="/products/1">Product 1</Link><br/>
<Link className={style.link} href="/products/2">Product 2</Link><br/>
<Link className={style.link} href="/products/3">Product 3</Link><br/>
<Link className={style.link} href="/products/4">Product 4</Link><br/>
<Link className={style.link} href="/products/5">Product 5</Link><br/>
<Link className={style.link} href="/products/6">Product 6</Link><br/>
<Link className={style.link} href="/products/7">Product 7</Link><br/>
<Link className={style.link} href="/products/8">Product 8</Link><br/>
<Link className={style.link} href="/products/9">Product 9</Link><br/>
<Link className={style.link} href="/products/10">Product 10</Link><br/> */}