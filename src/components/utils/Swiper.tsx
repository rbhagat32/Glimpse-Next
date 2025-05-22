"use client";

import { useRef } from "react";

export function Swiper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    ref.current?.classList.add("active");
    startX.current = e.pageX - (ref.current?.offsetLeft || 0);
    scrollLeft.current = ref.current?.scrollLeft || 0;
  };

  const onMouseLeave = () => {
    isDown.current = false;
    ref.current?.classList.remove("active");
  };

  const onMouseUp = () => {
    isDown.current = false;
    ref.current?.classList.remove("active");
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - (ref.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1; // control speed of scroll
    if (ref.current) {
      ref.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className="overflow-x-auto flex gap-2 hide-scrollbar select-none"
    >
      {children}
    </div>
  );
}
