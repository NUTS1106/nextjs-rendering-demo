import { notFound } from "next/navigation";
import { products } from "../../../lib/products";
import Counter from "../../../components/Counter";
import Link from "next/link";
export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}
export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) notFound();
  return (
    <>
      <Link className="back" href="/products">
        ← 상품 목록으로
      </Link>
      <section className="detail">
        <div className="detail-image">{product.emoji}</div>
        <div>
          <span className="eyebrow">DYNAMIC ROUTE /products/{id}</span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h2>{product.price.toLocaleString("ko-KR")}원</h2>
          <Counter />
          <p className="hint">
            위 장바구니 버튼은 <code>"use client"</code> 컴포넌트에서
            동작합니다.
          </p>
        </div>
      </section>
    </>
  );
}
