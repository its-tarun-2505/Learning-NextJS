import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const getProductData = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
};

const Page = async ({ params }) => {
  const { id } = await params;
  const product = await getProductData(id);

  const {
    title,
    brand,
    category,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
    images,
    warrantyInformation,
    shippingInformation,
  } = product;

  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(2);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Product Images */}
        <div className={styles.imageSection}>
          <img src={thumbnail} alt={title} className={styles.mainImage} />
          <div className={styles.thumbnailRow}>
            {images.map((img, index) => (
              <img key={index} src={img} alt={title} className={styles.thumbnail} />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className={styles.infoSection}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.brand}>{brand} • {category}</p>

          <div className={styles.ratingStock}>
            <span className={styles.rating}>★ {rating}</span>
            <span className={styles.stock}>({stock} in stock)</span>
          </div>

          <div className={styles.priceBlock}>
            <span className={styles.discountedPrice}>${discountedPrice}</span>
            <span className={styles.originalPrice}>${price}</span>
            <span className={styles.discount}>{discountPercentage}% OFF</span>
          </div>

          <p className={styles.description}>{description}</p>

          <div className={styles.buttons}>
            <button className={styles.cartBtn}>Add to Cart</button>
            <button className={styles.buyBtn}>Buy Now</button>
          </div>

          <div className={styles.extraInfo}>
            <p><strong>Shipping:</strong> {shippingInformation || "Fast delivery available"}</p>
            <p><strong>Warranty:</strong> {warrantyInformation || "1 year standard warranty"}</p>
          </div>

          <p className={styles.backLink}>
            <Link href="/products">← Back to Products</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
