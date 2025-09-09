import Link from "next/link";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.hero}>
    <div className={style.banner}><img src="/assets/banner1.png" alt="Banner" /></div>
      <div className={style.heroContent}>
        <h1 className={style.heading}>Welcome to the Products Store</h1>
        <p className={style.subheading}>Discover amazing products at the best prices</p>
        <Link href="/products">
          <button className={style.ctaButton}>View Products</button>
        </Link>
      </div>
    </div>
  );
}
