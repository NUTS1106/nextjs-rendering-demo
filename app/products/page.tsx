import ProductCard from "../../components/ProductCard";
import { products } from "../../lib/products";
export default async function Products() {
  return (
    <>
      <div className="page-head">
        <span className="eyebrow">APP ROUTER /products</span>
        <h1>상품 목록</h1>
        <p>
          Server Component에서 데이터를 준비하고, 동적 경로로 상세 페이지를
          연결합니다.
        </p>
      </div>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
