import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heading}>Welcome to the Products Store</h1>
        <p className={styles.subheading}>Discover amazing products at the best prices</p>
        <Link href="/products">
          <button className={styles.ctaButton}>View Products</button>
        </Link>
      </div>
    </div>
  );
}
