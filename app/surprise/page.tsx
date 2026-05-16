"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

// 📸 Add your image paths here! 
// For example, if you place "image1.jpg" inside the "public" folder, keep it as "/image1.jpg"
const IMAGES = [
  "/section1/memory1.jpeg",    
  "/section1/memory2.jpeg",    
  "/section1/memory3.jpeg",    
  "/section1/memory4.jpeg",    
  "/section1/memory5.jpeg",    
  "/section1/memory6.jpeg",    

];

const FUNNY_IMAGES = [
  "/section2/image1.jpeg",
  "/section2/image4.jpeg",
  "/section2/image3.jpeg",
  "/section2/image5.jpeg",

];

const WALL_IMAGES = [
  "/section4/1.jpeg", "/section4/2.jpeg", "/section4/3.jpeg", "/section4/4.jpeg", "/section4/5.jpeg",
  "/section4/6.jpeg", "/section4/7.jpeg", "/section4/8.jpeg", "/section4/9.jpeg", "/section4/10.jpeg"
];

const SYMMETRICAL_IMAGES = [
  "/section3/photo1.jpeg", "/section3/photo2.jpeg", "/section3/photo3.jpeg", "/section3/photo4.jpeg","/section3/photo5.jpeg"
];

export default function SurprisePage() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // 🕰️ Live Clock Effect
  useEffect(() => {
    // Started counting from 2019 June 1
    const startDate = new Date("2019-06-01T00:00:00").getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - startDate;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTime({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // 💌 Initial entrance animation for the letter
    gsap.fromTo(
      letterRef.current,
      { opacity: 0, y: 80, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power4.out", delay: 0.2 }
    );

    // 📸 Setup highly performant scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: entry.target.hasAttribute('data-rotation') ? parseFloat(entry.target.getAttribute('data-rotation') as string) : (Math.random() * 6) - 3,
            duration: 1.2,
            ease: "power3.out",
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const photoCards = document.querySelectorAll(".photo-card");
    photoCards.forEach((card) => {
      // Set initial hidden state (Optimized for 2D only to prevent GPU lag)
      gsap.set(card, { 
        opacity: 0, 
        y: 80, 
        scale: 0.85, 
        rotation: (Math.random() * 20) - 10,
      });
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fdf2f8] overflow-hidden py-16 sm:py-24 px-4 sm:px-8 relative selection:bg-pink-300 selection:text-white">
      {/* ✨ Soft Animated Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-pink-300/30 blur-[100px] mix-blend-multiply pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-rose-300/30 blur-[100px] mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* 💕 The Long Emotional Message Section */}
        <div 
          ref={letterRef}
          className="w-full max-w-3xl bg-white/50 backdrop-blur-md border border-white/80 shadow-[0_20px_60px_-15px_rgba(236,72,153,0.2)] rounded-[2.5rem] p-8 sm:p-16 mb-32 relative opacity-0"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-10 bg-white/60 backdrop-blur-md rotate-[-3deg] shadow-sm rounded-sm"></div>
          <div className="absolute -bottom-6 -right-6 text-5xl animate-bounce" style={{ animationDuration: '3s' }}>❤️</div>
          <div className="absolute -top-8 -left-8 text-5xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>🌸</div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 font-serif drop-shadow-sm leading-tight">
            To My Favorite Person 💖
          </h1>
          
          <div className="space-y-6 text-lg sm:text-xl text-gray-800 leading-relaxed font-medium text-center">
            <p className="text-2xl sm:text-3xl font-serif text-pink-600 mb-6 leading-relaxed font-bold">
              Happy Birthday to the most beautiful soul! 🌸
            </p>
            <p className="italic text-gray-600 mb-10 max-w-2xl mx-auto font-serif text-xl">
              May your day be filled with as much happiness, love, and endless joy as you bring into my life every single day. 
              You deserve the universe and so much more.
            </p>
            
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => router.push("/letter")}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full hover:from-pink-500 hover:to-rose-500 shadow-[0_10px_20px_-5px_rgba(236,72,153,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(236,72,153,0.6)] hover:-translate-y-1"
              >
                <span className="text-lg tracking-wide">Read My Letter For You</span>
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">💌</span>
              </button>
            </div>
          </div>
        </div>

        {/* 🕰️ Live Clock Section */}
        <div className="w-full max-w-4xl text-center bg-white/60 backdrop-blur-md border border-white/80 p-10 sm:p-14 rounded-[3rem] shadow-[0_20px_50px_-10px_rgba(236,72,153,0.15)] relative overflow-hidden mb-32">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-300/40 rounded-full blur-[50px]"></div>
          
          <h2 className="text-3xl sm:text-4xl text-pink-600 mb-10 font-serif drop-shadow-sm font-bold">
            Counting memories since we met ❤️
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {Object.entries(time).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-pink-100 min-w-[110px] shadow-[0_8px_30px_rgba(236,72,153,0.1)] hover:border-pink-300 transition-colors">
                <span className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-rose-600 drop-shadow-sm">
                  {value}
                </span>
                <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-pink-500 mt-4 font-bold">{unit}</span>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-pink-400 font-serif italic text-xl">Since June 1, 2019</p>
        </div>

        {/* 📸 The Photos Gallery Section */}
        <div ref={galleryRef} className="w-full">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 font-serif inline-block relative">
              Our Beautiful Memories
              <div className="absolute -right-8 top-0 text-3xl animate-pulse">📸</div>
              <div className="absolute -left-12 sm:-left-20 top-2 text-4xl animate-bounce" style={{ animationDuration: '4s' }}>🌸</div>
              <div className="absolute -right-4 -bottom-10 text-3xl opacity-80 hover:rotate-12 transition-transform cursor-pointer" style={{ transform: 'rotate(15deg)' }}>🦋</div>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 pb-20 px-4">
            {IMAGES.map((src, index) => (
              <div 
                key={index}
                className="photo-card relative will-change-transform"
              >
                <div className="bg-white p-5 pb-20 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.05)] relative h-full">
                  <div className="w-full aspect-[4/5] bg-pink-50 rounded-md overflow-hidden relative border border-pink-100 shadow-inner">
                  {/* Using standard img tag so you can just drop files into public folder */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={src} 
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback placeholder if image doesn't exist yet, so it still looks beautiful!
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1518199266791-5375a83164ba?q=80&w=600&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent"></div>
                </div>
                
                {/* Cute handwriting caption below the picture */}
                <p className="absolute bottom-6 left-0 w-full text-center font-serif text-gray-600 text-xl font-medium italic px-4">
                  Memory {index + 1} 💌
                </p>
                
                {/* Subtle tape on the polaroid */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/50 backdrop-blur-sm rotate-[4deg] shadow-sm z-10"></div>
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* 😂 SECTION: FUNNY MOMENTS (Elegant Overlap) */}
        <div className="w-full bg-[#fce7f3] py-20 px-6 sm:px-12 md:px-24 border-y border-pink-200/50 relative overflow-hidden mt-10 mb-20 rounded-[3rem] shadow-[0_20px_50px_rgba(236,72,153,0.1)]">
           <div className="max-w-[80rem] mx-auto flex flex-col lg:flex-row items-center gap-12 sm:gap-16">
              {/* Text Left */}
              <div className="w-full lg:w-1/3 relative z-10 text-center lg:text-left">
                 <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-rose-400 mb-4 italic drop-shadow-sm leading-tight">Crazy. Silly. Unforgettable..</h2>
                 <p className="text-lg sm:text-xl text-gray-700 font-serif">Because every moment with you is special ♡</p>
              </div>
              {/* Photos Right - Elegantly Overlapping Row of 4 */}
              <div className="w-full lg:w-2/3 flex justify-center items-center relative z-10 mt-8 lg:mt-0 px-4">
                 <div className="absolute top-0 right-1/4 text-4xl opacity-40">✨</div>
                 <div className="absolute bottom-0 left-1/4 text-5xl opacity-30 text-rose-400">♡</div>
                 <div className="flex flex-wrap sm:flex-nowrap justify-center items-center w-full max-w-2xl gap-6 sm:gap-0">
                    {FUNNY_IMAGES.map((src, i) => {
                       const rotates = [-6, 2, -3, 5];
                       const zIndexes = [10, 20, 30, 40];
                       const isFirst = i === 0;
                       
                       return (
                          <div 
                            key={i} 
                            className={`bg-[#fcfaf8] p-2 sm:p-3 pb-10 sm:pb-16 shadow-[0_10px_20px_rgba(0,0,0,0.1)] border border-gray-100 w-[130px] sm:w-[180px] relative transition-all duration-500 hover:scale-110 hover:shadow-[0_15px_30px_rgba(236,72,153,0.2)] hover:!z-50 cursor-pointer flex-shrink-0 ${isFirst ? '' : 'sm:-ml-[30px]'}`}
                            style={{ 
                              transform: `rotate(${rotates[i]}deg)`, 
                              zIndex: zIndexes[i],
                            }}
                          >
                             <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-3 sm:h-5 bg-yellow-50/60 backdrop-blur-sm rotate-[-5deg] shadow-sm z-10 border border-white mix-blend-multiply"></div>
                             <div className="w-full aspect-[4/5] bg-pink-50 overflow-hidden relative shadow-inner">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={src} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1518199266791-5375a83164ba?q=80&w=400&auto=format&fit=crop&sig=${i + 10}`; }} alt="Funny Memory" />
                             </div>
                          </div>
                       )
                    })}
                 </div>
              </div>
           </div>
        </div>

        {/* 💖 SECTION: PRECIOUS MOMENTS (Symmetrical 5-Photo Grid) */}
        <div className="w-full bg-white/60 backdrop-blur-md py-24 px-6 sm:px-12 border border-white relative overflow-hidden mt-10 mb-10 rounded-[3rem] shadow-[0_20px_50px_rgba(236,72,153,0.05)]">
           <div className="max-w-[80rem] mx-auto flex flex-col items-center">
              <div className="text-center mb-16 relative z-10 inline-block w-full">
                 <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-rose-500 mb-4 italic drop-shadow-sm leading-tight relative inline-block">
                    Precious Moments ✨
                    <div className="absolute -left-12 sm:-left-20 -top-4 text-4xl sm:text-5xl drop-shadow-md" style={{ transform: 'rotate(-10deg)' }}>🎀</div>
                    <div className="absolute -right-4 sm:-right-10 -bottom-8 text-3xl opacity-80 animate-pulse">💌</div>
                 </h2>
                 <p className="text-lg sm:text-xl text-gray-700 font-serif">Every second with you is a treasure ♡</p>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 max-w-4xl">
                 {SYMMETRICAL_IMAGES.map((src, i) => {
                    const rotates = [-5, 0, 5, -3, 3];
                    const desktopMt = [20, -10, 20, 10, 10]; 
                    const rotate = rotates[i];
                    
                    return (
                       <div 
                         key={i} 
                         className="photo-card relative cursor-pointer group mt-[var(--mt-mobile)] sm:mt-[var(--mt-desktop)]" 
                         style={{ '--mt-mobile': '0px', '--mt-desktop': `${desktopMt[i]}px`, zIndex: 10 - i } as React.CSSProperties}
                         data-rotation={rotate}
                       >
                          <div className="bg-[#fcfaf8] p-2 sm:p-3 pb-10 sm:pb-14 shadow-[0_10px_20px_rgba(0,0,0,0.1)] border border-gray-100 w-[140px] sm:w-[220px] transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-4 group-hover:!z-50 group-hover:shadow-[0_15px_30px_rgba(236,72,153,0.3)]">
                             <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-3 sm:h-5 bg-yellow-50/60 backdrop-blur-sm rotate-[-4deg] shadow-sm z-10 border border-white mix-blend-multiply"></div>
                             <div className="w-full aspect-[4/5] bg-pink-50 overflow-hidden relative shadow-inner">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={src} className="w-full h-full object-cover sepia-[5%] group-hover:sepia-0 transition-all duration-500" onError={(e) => { (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1518199266791-5375a83164ba?q=80&w=400&auto=format&fit=crop&sig=${i + 30}`; }} alt="Precious Memory" />
                             </div>
                          </div>
                       </div>
                    )
                 })}
              </div>
           </div>
        </div>

        {/* 📌 SECTION: SCRAPBOOK WALL */}
        <div className="w-full bg-[#fdfaf8] py-24 px-4 sm:px-10 relative overflow-hidden mt-10 mb-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-pink-100">
           {/* Beautiful background flourishes */}
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-100/50 blur-[100px] pointer-events-none"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-rose-100/50 blur-[100px] pointer-events-none"></div>

           <div className="text-center mb-20 relative z-10">
             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 font-serif inline-block pb-2">
               Scrapbook Wall
             </h2>
             <div className="absolute -right-8 sm:-right-12 top-0 sm:-top-4 text-3xl sm:text-4xl animate-pulse">📌</div>
             <p className="mt-4 text-pink-400 font-serif italic text-lg sm:text-xl opacity-80">A beautiful mess of our memories...</p>
           </div>

           <div className="max-w-[90rem] mx-auto relative z-10">
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14 w-full">
                 {(() => {
                    const SCRAPBOOK_ITEMS = [];
                    WALL_IMAGES.forEach((src, idx) => {
                       SCRAPBOOK_ITEMS.push({ type: 'image', src });
                       if (idx === 1) SCRAPBOOK_ITEMS.push({ type: 'note', text: "Good times ♡♡", bg: "bg-[#fff0f6]" });
                       if (idx === 7) SCRAPBOOK_ITEMS.push({ type: 'note', text: "Memories forever ♡", bg: "bg-[#fce7f3]" });
                    });

                    return SCRAPBOOK_ITEMS.map((item, i) => {
                       const hasPin = i % 3 === 0;
                       const pinColors = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400'];
                       const pinColor = pinColors[i % 4];
                       
                       // Beautiful scattered rotations and a wavy vertical offset
                       const rotate = [-4, 6, -3, 8, -5, 4, -2, 7][i % 8];
                       const translateY = [0, 24, -16, 32, -12, 20, -24, 12][i % 8];

                       if (item.type === 'note') {
                          return (
                             <div 
                               key={i} 
                               className="photo-card relative mt-[var(--mt-mobile)] sm:mt-[var(--mt-desktop)]" 
                               style={{ '--mt-mobile': `${translateY / 2}px`, '--mt-desktop': `${translateY}px`, zIndex: i } as React.CSSProperties}
                               data-rotation={rotate}
                             >
                                <div className={`${item.bg} p-4 sm:p-6 w-32 sm:w-48 aspect-square shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:scale-110 hover:shadow-[0_15px_30px_rgba(236,72,153,0.2)] hover:!z-50 border border-black/5 flex flex-col items-center justify-center text-center`}>
                                   {hasPin && <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 ${pinColor} rounded-full shadow-sm border-2 border-white/80`}></div>}
                                   {!hasPin && <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-3 sm:h-5 bg-yellow-50/60 backdrop-blur-sm rotate-[-4deg] shadow-sm z-10 mix-blend-multiply"></div>}
                                   <p className="font-serif italic text-rose-500 text-xl sm:text-2xl font-bold leading-relaxed">{item.text}</p>
                                </div>
                             </div>
                          )
                       }

                       return (
                          <div 
                            key={i} 
                            className="photo-card relative cursor-pointer group mt-[var(--mt-mobile)] sm:mt-[var(--mt-desktop)]" 
                            style={{ '--mt-mobile': `${translateY / 2}px`, '--mt-desktop': `${translateY}px`, zIndex: i } as React.CSSProperties}
                            data-rotation={rotate}
                          >
                             <div className="bg-[#fcfaf8] p-2 sm:p-3 pb-10 sm:pb-14 shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:!z-50 group-hover:shadow-[0_15px_30px_rgba(236,72,153,0.3)] border border-gray-100 w-32 sm:w-44 md:w-52">
                                {hasPin ? (
                                   <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 ${pinColor} rounded-full shadow-sm border-2 border-white/80 z-20`}></div>
                                ) : (
                                   <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-3 sm:h-5 bg-yellow-50/60 backdrop-blur-sm rotate-[-4deg] shadow-sm z-10 border border-white mix-blend-multiply"></div>
                                )}
                                <div className="w-full aspect-[4/5] bg-pink-50 overflow-hidden relative shadow-inner">
                                   {/* eslint-disable-next-line @next/next/no-img-element */}
                                   <img 
                                     src={item.src} 
                                     className="w-full h-full object-cover sepia-[5%] group-hover:sepia-0 transition-all duration-500" 
                                     onError={(e) => { (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1518199266791-5375a83164ba?q=80&w=400&auto=format&fit=crop&sig=${i + 50}`; }}
                                     alt="Scrapbook Wall Memory"
                                   />
                                </div>
                             </div>
                          </div>
                       )
                    });
                 })()}
              </div>
           </div>
        </div>
        {/* 🚀 NAVIGATION TO FUNNY PAGE */}
        <div className="w-full flex flex-col items-center justify-center pb-32 pt-10 relative z-10">
           <p className="text-gray-500 font-serif italic text-xl mb-6 drop-shadow-sm">But wait... I couldn't forget about these 🤭</p>
           <button onClick={() => router.push('/funny')} className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-white transition-all duration-300 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full hover:scale-105 shadow-[0_10px_20px_-5px_rgba(236,72,153,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(236,72,153,0.6)]">
              <span className="text-xl tracking-wide font-serif">Open The Funny Vault</span>
              <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🔓</span>
           </button>
        </div>

      </div>
    </div>
  );
}
