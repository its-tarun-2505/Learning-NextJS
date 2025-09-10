import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CartCloud",
  description: "CartCloud - Next.js E-commerce App",
  icons:{
    icon: '/assets/favicon.ico', //add custom favicon
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="layout">
          <header className="header">
            <Link href="/" className="logo">
              <img src="/assets/logo1.png" alt="CartCloud Logo" width={200} height={60} />
            </Link>
            {/* <h1>CartCloud</h1> */}
            <nav>
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
            </nav>
          </header>

          <main className="main">
            <Providers>
              {children}
            </Providers>
          </main>

          <footer className="footer">
            <p>&copy; 2025 My Next.js App</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

