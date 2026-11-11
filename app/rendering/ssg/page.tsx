import { products } from "../../../lib/products";
import ProductCard from "../../../components/ProductCard";
export const dynamic = "force-static";
export default function SSG() {
  return (
    <>
      <div className="page-head">
        <span className="eyebrow">RENDERING / SSG</span>
        <h1>Static Site Generation</h1>
        <p>
          빌드 시점에 상품 HTML을 생성하고 이후 요청에서는 미리 생성한 결과를
          제공합니다.
        </p>
      </div>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <div className="note">
        <b>확인 포인트</b>
        <p>
          <code>npm run build</code> 후 <code>npm run start</code>로 실행하세요.
          빌드 결과에서 이 경로가 정적으로 생성되었는지 확인할 수 있습니다.
        </p>
      </div>
    </>
  );
}
