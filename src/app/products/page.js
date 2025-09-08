import React from "react";
import Link from "next/link";
import style from "./page.module.css";

// Fetch products from the API
const fetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return groupByCategory(data?.products);
};

// Group products by category utility
const groupByCategory = (products) =>
  products.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {});

// Main Products component
const Products = async () => {
  const data = await fetchProducts();

  const scrollAmount = 240; // scroll distance in px (~ card width + gap)

  return (
    <div className={style.page}>
      <h1 className={style.heading}>Welcome to the Products Page</h1>
      <h2 className={style.subheading}>Browse Products by Category</h2>

      {Object.entries(data).map(([category, products]) => {
        return (
          <div key={category} className={style.categorySection}>
            <h3 className={style.categoryTitle}>{category.toUpperCase()}</h3>
            <div className={style.scrollControls}>
              <div
                className={style.productRow}
                style={{ overflowX: "auto", scrollBehavior: "smooth" }}
              >
                {products.map((product) => (
                  <div key={product.id} className={style.productCard}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className={style.thumbnail}
                      loading="lazy"
                    />
                    <div className={style.productInfo}>
                      <h4 className={style.title}>{product.title}</h4>
                      <p className={style.price}>PRICE: ${product.price}</p>
                      <p className={style.rating}>Rating: ★ {product.rating}</p>
                    </div>
                    <div className={style.cardButtons}>
                      <Link href={`/products/${product.id}`}>
                        <button className={style.viewButton}>
                          View Product
                        </button>
                      </Link>
                      <button
                        className={style.cartButton}
                        disabled={product.stock === 0}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
