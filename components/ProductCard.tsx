import Link from "next/link";
import type { Product } from "../lib/products";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link className="product" href={`/products/${product.id}`}>
      <div className="product-image">{product.emoji}</div>
      <div className="product-body">
        <span className="tag">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <strong>{product.price.toLocaleString("ko-KR")}원</strong>
      </div>
    </Link>
  );
}
