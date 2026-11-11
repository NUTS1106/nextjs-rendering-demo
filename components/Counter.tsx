"use client";
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <button onClick={() => setCount(Math.max(0, count - 1))}>−</button>
      <span>
        장바구니 수량: <b>{count}</b>
      </span>
      <button onClick={() => setCount(count + 1)}>＋</button>
    </div>
  );
}
