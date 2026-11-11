# Next.js 렌더링 실습

PPT의 4가지 핵심 기능을 실제 프로젝트로 연결한 예제입니다.

## 실행

Node.js 20.9 이상 권장.

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속.

## 프로덕션 빌드로 SSG 확인

```bash
npm run build
npm run start
```

빌드 결과에서 `/rendering/ssg`는 정적 페이지, `/rendering/ssr`은 동적 페이지로 표시됩니다.

## 구현된 기능

- `/products`: App Router의 상품 목록
- `/products/1`: `[id]` 동적 라우팅 및 Client Component 장바구니
- `/rendering/csr`: 브라우저 `useEffect`에서 `/api/products` 호출
- `/rendering/ssr`: `force-dynamic` 요청별 서버 렌더링
- `/rendering/ssg`: `force-static` 빌드 시 정적 렌더링
- `/api/products`, `/api/hello`: Route Handler JSON API

주의: CSR 페이지 자체는 Next.js가 초기 HTML을 사전 렌더링할 수 있지만, **상품 목록 데이터**는 브라우저가 API를 호출한 뒤에만 렌더링합니다. SSG는 `npm run dev`보다 프로덕션 빌드에서 확인하는 것이 정확합니다.
