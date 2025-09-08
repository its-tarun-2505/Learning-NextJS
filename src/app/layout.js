import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="layout">
          <header className="header">
            <h1>CartCloud</h1>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
            </nav>
          </header>

          <main className="main">{children}</main>

          <footer className="footer">
            <p>&copy; 2025 My Next.js App</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

