import type { ReactNode } from "react";
import Link from "next/link";
import "../app/globals.css";
export const metadata = {
  title: "Next.js 렌더링 실습",
  description: "CSR SSR SSG와 App Router 데모",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header className="header">
          <Link href="/" className="logo">
            ◈ NEXT<span>LAB</span>
          </Link>
          <nav>
            <Link href="/products">상품 목록</Link>
            <Link href="/rendering/csr">CSR</Link>
            <Link href="/rendering/ssr">SSR</Link>
            <Link href="/rendering/ssg">SSG</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer>Next.js App Router · 렌더링 방식 실습</footer>
      </body>
    </html>
  );
}
