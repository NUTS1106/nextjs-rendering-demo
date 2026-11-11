import ClientProducts from "../../../components/ClientProducts";
export default function CSR() {
  return (
    <>
      <div className="page-head">
        <span className="eyebrow">RENDERING / CSR</span>
        <h1>Client-Side Rendering</h1>
        <p>
          브라우저의 <code>useEffect()</code>에서 <code>/api/products</code>를
          요청합니다. 상품 목록은 응답 이후에 표시됩니다.
        </p>
      </div>
      <ClientProducts />
      <div className="note">
        <b>확인 포인트</b>
        <p>
          개발자 도구 → Network에서 <code>/api/products</code> 요청을
          확인하세요. 이 예제의 상품 데이터는 초기 HTML에 포함되지 않습니다.
        </p>
      </div>
    </>
  );
}
