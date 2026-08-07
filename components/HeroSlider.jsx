"use client";
import { useEffect, useState } from "react";

const SLIDES = ["/slider/slide-1.jpg","/slider/slide-2.jpg","/slider/slide-3.jpg","/slider/slide-4.jpg","/slider/slide-5.jpg"];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <>
      <div className="hero-bg" aria-hidden="true">
        {SLIDES.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={src} src={src} alt="" className={i === active ? "active" : ""} />
        ))}
        <div className="hero-veil" />
      </div>
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={i === active ? "on" : ""} onClick={() => setActive(i)} aria-label={`Görsel ${i + 1}`} />
        ))}
      </div>
    </>
  );
}
