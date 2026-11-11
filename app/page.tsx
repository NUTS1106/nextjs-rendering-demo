import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="hero">
        <span className="eyebrow">NEXT.JS · LEARNING PROJECT</span>
        <span>자동 배포 확인</span>
        <h1>
          하나의 프로젝트로 배우는
          <br />
          <em>CSR · SSR · SSG</em>
        </h1>
        <p>
          상품 목록과 API를 통해 렌더링 방식, App Router, Server / Client
          Component를 직접 확인해 보세요.
        </p>
        <div className="actions">
          <Link className="btn primary" href="/products">
            상품 둘러보기 →
          </Link>
          <Link className="btn secondary" href="/rendering/csr">
            렌더링 비교하기
          </Link>
        </div>
      </section>
      <section className="features">
        <Link href="/rendering/csr">
          <b>01 / CSR</b>
          <h2>Client-Side Rendering</h2>
          <p>브라우저에서 API 데이터를 가져와 화면 구성</p>
        </Link>
        <Link href="/rendering/ssr">
          <b>02 / SSR</b>
          <h2>Server-Side Rendering</h2>
          <p>요청마다 서버에서 콘텐츠 생성</p>
        </Link>
        <Link href="/rendering/ssg">
          <b>03 / SSG</b>
          <h2>Static Site Generation</h2>
          <p>빌드 시점에 HTML 미리 생성</p>
        </Link>
      </section>
      <section className="note">
        <h2>백엔드도 함께 구현했어요</h2>
        <p>
          <code>/api/products</code>는 상품 JSON을, <code>/api/hello</code>는
          간단한 인사 JSON을 반환합니다.
        </p>
        <a href="/api/hello" target="_blank" rel="noreferrer">
          API 응답 보기 ↗
        </a>
      </section>
    </>
  );
}
