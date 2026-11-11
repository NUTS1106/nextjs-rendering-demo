import { products } from "../../../lib/products";
import ProductCard from "../../../components/ProductCard";
export const dynamic = "force-dynamic";
export default function SSR() {
  const renderedAt = new Date().toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
  });
  return (
    <>
      <div className="page-head">
        <span className="eyebrow">RENDERING / SSR</span>
        <h1>Server-Side Rendering</h1>
        <p>
          서버가 요청 시점에 HTML을 생성합니다. 새로고침하면 렌더링 시각이
          변경됩니다.
        </p>
        <span className="time">서버 렌더링 시각: {renderedAt}</span>
      </div>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <div className="note">
        <b>확인 포인트</b>
        <p>
          <code>dynamic = 'force-dynamic'</code>으로 요청마다 렌더링하도록
          설정했습니다.
        </p>
      </div>
    </>
  );
}
