import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const page = async({params}) => {
    const {id} = await params;
    console.log('paramsID', id);
    
  return (
    <div className={styles.page}>
        <h1 className={styles.heading}>Product {id}</h1>
        <p className={styles.para}>This is the page for product {id}</p>
        <p className={styles.para}>More details about product {id} will be available soon.</p>
        <p className={styles.para}>
            <Link href="/products">Back to Products</Link>
        </p>
    </div>
  )
}

export default page
