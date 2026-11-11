"use client";
import { useEffect, useState } from "react";
import type { Product } from "../lib/products";
import ProductCard from "./ProductCard";
export default function ClientProducts() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("/api/products")
      .then((r) => {
        if (!r.ok) throw new Error("API 요청 실패");
        return r.json();
      })
      .then(setItems)
      .catch((e) => setError(String(e)))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {loading ? (
        <p className="status">브라우저에서 상품 데이터를 불러오는 중...</p>
      ) : error ? (
        <p className="status">{error}</p>
      ) : (
        <div className="product-grid">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </>
  );
}
