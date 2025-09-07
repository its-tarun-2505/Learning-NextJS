import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Products Store</h1>
      <p>
        <Link href="/products">View Products</Link>
      </p>
    </div>
  );
}
