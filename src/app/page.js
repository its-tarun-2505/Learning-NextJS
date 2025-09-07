import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 style={{textAlign:'center', margin:'2rem 0' }}>Welcome to the Products Store</h1>
      <p style={{textAlign:'center', fontSize:'1.2rem'}}>
        <Link href="/products">View Products</Link>
      </p>
    </div>
  );
}
