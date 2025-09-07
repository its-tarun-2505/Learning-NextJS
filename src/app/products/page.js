import Link from 'next/link'
import style from './page.module.css'
import React from 'react'

const page = () => {
  return (
    <div className={style.page}>
      <h1 className={style.heading}>Welcome to the Products Page</h1>
      <p className={style.para}>Link of Product pages</p> 
      <Link className={style.link} href="/products/1">Product 1</Link><br/>
      <Link className={style.link} href="/products/2">Product 2</Link><br/>
      <Link className={style.link} href="/products/3">Product 3</Link><br/>
      <Link className={style.link} href="/products/4">Product 4</Link><br/>
      <Link className={style.link} href="/products/5">Product 5</Link><br/>
      <Link className={style.link} href="/products/6">Product 6</Link><br/>
      <Link className={style.link} href="/products/7">Product 7</Link><br/>
      <Link className={style.link} href="/products/8">Product 8</Link><br/>
      <Link className={style.link} href="/products/9">Product 9</Link><br/>
      <Link className={style.link} href="/products/10">Product 10</Link><br/>
    </div>
  )
}

export default page
