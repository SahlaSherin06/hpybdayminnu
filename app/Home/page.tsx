// app/Home.tsx

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Home() {
  const router = useRouter();
  const [hearts, setHearts] = useState<
    { id: number; left: number; delay: number; duration: number; size: number }[]
  >([]);

  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const arr = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 8,
      size: 15 + Math.random() * 25,
    }));

    setHearts(arr);
  }, []);

  useEffect(() => {
    if (hearts.length === 0) return;

    const heartElements = document.querySelectorAll(".floating-heart");

    heartElements.forEach((el) => {
      const delay = parseFloat(el.getAttribute("data-delay") || "0");
      const duration = parseFloat(el.getAttribute("data-duration") || "5");

      gsap.to(el, {
        y: "-120vh",
        x: () => "+=" + (Math.random() * 100 - 50),
        rotation: () => Math.random() * 360,
        opacity: 0,
        duration,
        repeat: -1,
        delay,
        ease: "power1.inOut",
      });
    });

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
      }
    );

    gsap.to(buttonRef.current, {
      y: -5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [hearts]);

  const handleOpenSurprise = () => {
    gsap.to(contentRef.current, {
      opacity: 0,
      scale: 1.1,
      duration: 0.6,
      ease: "power2.in",
      onComplete: () => router.push("/surprise"),
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fdf2f8]">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-300/50 blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-rose-300/40 blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-purple-300/40 blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '9s', animationDelay: '2s' }}></div>
      </div>

      {/* Floating Hearts Container */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {hearts.map((h) => (
          <span
            key={h.id}
            className="floating-heart absolute bottom-[-50px] text-pink-400/70 drop-shadow-sm will-change-transform"
            data-delay={h.delay}
            data-duration={h.duration}
            style={{
              left: `${h.left}%`,
              fontSize: `${h.size}px`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* Main Glassmorphism Card */}
      <div
        ref={contentRef}
        className="relative z-20 w-[90%] max-w-lg p-10 sm:p-14 rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_0_rgba(236,72,153,0.15)] text-center flex flex-col items-center opacity-0"
      >
        {/* Decorative elements */}
        <div className="absolute -top-6 -left-4 text-4xl animate-bounce" style={{ animationDuration: '3s' }}>✨</div>
        <div className="absolute -bottom-5 -right-5 text-4xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>💖</div>
        
        {/* Top small text/badge */}
        <div className="mb-6 inline-block px-5 py-1.5 rounded-full bg-white/60 backdrop-blur-sm text-pink-600 text-sm font-bold tracking-widest uppercase shadow-sm border border-pink-100">
          A Special Day
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 drop-shadow-sm font-serif">
          Happy Birthday
        </h1>
        
        {/* Paragraph */}
        <p className="text-lg sm:text-xl font-medium mb-10 leading-relaxed text-gray-700 italic max-w-xs">
          I made something special for you...
        </p>

        {/* Button */}
        <button
          ref={buttonRef}
          onClick={handleOpenSurprise}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full hover:from-pink-600 hover:to-rose-600 shadow-[0_10px_25px_-5px_rgba(236,72,153,0.5)]"
        >
          <span className="text-lg tracking-wide">Open Your Surprise</span>
          <span className="text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">🎁</span>
          
          {/* Subtle button glow effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
}