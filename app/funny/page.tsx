"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

// ==========================================
// 📸 & 🎥 EDIT YOUR PHOTOS AND VIDEOS HERE
// ==========================================

const FUNNY_VAULT_PHOTOS = [
  // Add your 19 funny photos here!
  "/funny/a1.jpeg", "/section2/image5.jpeg", "/funny/a3.jpeg", "/funny/a4.jpeg", "/funny/a5.jpeg",
  "/funny/a20.jpeg", "/funny/a7.jpeg", "/funny/a8.jpeg", "/funny/a9.jpeg", "/funny/a10.jpeg",
  "/funny/a11.jpeg", "/funny/a12.jpeg", "/funny/a13.jpeg", "/funny/a14.jpeg", "/funny/a15.jpeg",
  "/funny/a16.jpeg", "/funny/a17.jpeg", "/funny/a18.jpeg", "/funny/a19.jpeg","/funny/a21.jpeg"
];

// 🎥 Add your funny videos and their cover photos here!
const FUNNY_VAULT_VIDEOS = [
  {
    src: "/video/video1.mp4", 
    poster: "/video/cover1.jpeg" // 🖼️ Add your cover photo path here!
  },
  {
    src: "/video/video2.mp4",
    poster: "/video/cover2.jpeg"
  }
];

// ==========================================

export default function FunnyVaultPage() {
  const router = useRouter();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power3.out",
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".animate-pop").forEach((el) => {
      // Add will-change for performance
      if (el instanceof HTMLElement) {
        el.style.willChange = "transform, opacity";
      }
      gsap.set(el, { opacity: 0, y: 50 });
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#fff5f8] overflow-hidden py-16 sm:py-24 px-4 sm:px-8 relative selection:bg-pink-300 selection:text-white">
      {/* 🌟 Ethereal Animated Background */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-rose-200/40 to-pink-200/40 blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-orange-100/30 to-pink-200/30 blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* ✨ Aesthetic Title Section */}
        <div className="text-center mb-24 mt-8 animate-pop relative">
          {/* Floating Elements */}
          <div className="absolute -left-12 -top-6 text-5xl opacity-80" style={{ transform: 'rotate(-15deg)' }}>🤫</div>
          <div className="absolute -right-8 top-10 text-4xl opacity-60 animate-bounce" style={{ animationDuration: '4s' }}>✨</div>
          <div className="absolute right-1/4 -bottom-10 text-3xl opacity-70" style={{ transform: 'rotate(20deg)' }}>🎀</div>
          
          <div className="inline-block relative">
             <div className="absolute -inset-4 bg-white/40 blur-xl rounded-full pointer-events-none"></div>
             <h1 className="relative text-6xl sm:text-7xl lg:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-br from-rose-500 via-pink-400 to-orange-400 font-serif tracking-tight drop-shadow-md">
               The Funny Vault
             </h1>
          </div>
          
          <p className="text-xl sm:text-2xl text-rose-400/90 font-serif italic max-w-2xl mx-auto font-medium drop-shadow-sm mt-4">
            "Because we can't be beautifully serious all the time..." 🤭
          </p>
        </div>

        {/* 📸 Funny Photos Grid */}
        <div className="w-full mb-32">
          <div className="flex items-center justify-center gap-6 mb-12 animate-pop">
            <span className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-pink-300 rounded-full"></span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-rose-500 font-bold italic tracking-wide">Embarrassing Moments</h2>
            <span className="h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-pink-300 rounded-full"></span>
          </div>
          
          {/* Elegant Horizontal Scroll Container */}
          <div className="animate-pop flex overflow-x-auto gap-8 sm:gap-14 px-6 sm:px-16 pb-24 pt-12 snap-x snap-mandatory hide-scrollbar w-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx global>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {FUNNY_VAULT_PHOTOS.map((src, i) => {
               // Make them look slightly scattered and messy!
               const rotate = [-6, 8, -4, 5, -8, 7][i % 6];
               
               return (
                  <div key={i} className="group relative cursor-pointer flex-shrink-0 snap-center" style={{ transform: `rotate(${rotate}deg)` }}>
                     <div className="bg-white p-3 pb-12 sm:pb-16 shadow-[0_10px_20px_rgba(0,0,0,0.1)] border border-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] group-hover:!z-50 w-[220px] sm:w-[280px]">
                        {/* Tape */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 sm:w-16 h-4 sm:h-6 bg-yellow-50/60 backdrop-blur-md rotate-[-3deg] shadow-sm z-10 border border-white/40"></div>
                        
                        <div className="w-full aspect-[3/4] bg-gray-100 overflow-hidden relative shadow-inner">
                           {/* eslint-disable-next-line @next/next/no-img-element */}
                           <img 
                             src={src} 
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                             onError={(e) => { (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1543158022-721245041a99?q=80&w=400&auto=format&fit=crop&sig=${i + 60}`; }} 
                             alt="Funny Photo" 
                           />
                        </div>
                        <p className="absolute bottom-4 left-0 w-full text-center font-serif text-gray-500 text-lg sm:text-xl italic">Oops! 🤭</p>
                     </div>
                  </div>
               )
            })}
          </div>
        </div>

        {/* 🎬 Funny Videos Section */}
        <div className="w-full mb-32 bg-white/40 backdrop-blur-md border border-white rounded-[3rem] p-8 sm:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col items-center justify-center gap-4 mb-12 animate-pop text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 sm:w-16 bg-pink-300"></span>
              <h2 className="text-3xl sm:text-4xl font-serif text-rose-500 font-bold">Our Videos 🎬</h2>
              <span className="h-px w-10 sm:w-16 bg-pink-300"></span>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 font-serif max-w-2xl mt-2 italic leading-relaxed px-4">
              "I have no time to create a beautiful video for you , but I created some beautiful memories for you like these..." ❤️
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {FUNNY_VAULT_VIDEOS.map((video, i) => (
              <div key={i} className="animate-pop bg-white p-4 shadow-xl rounded-[2rem] border border-pink-100 transform transition-transform hover:-translate-y-2 duration-300 group cursor-pointer" onClick={() => setActiveVideo(video.src)}>
                <div className="w-full aspect-video bg-black/5 rounded-[1rem] overflow-hidden relative shadow-inner flex items-center justify-center border border-gray-100 group-hover:border-pink-300 transition-colors">
                  <video 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    poster={video.poster}
                    muted
                    loop
                    playsInline
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-pink-500 border-b-[10px] border-b-transparent ml-2"></div>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-4 text-gray-600 font-serif italic font-bold">Play Video {i + 1} 🎥</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-rose-400 font-serif italic text-lg animate-pop">Press play if you dare... 😂</p>
        </div>

        {/* 💖 ULTRA PREMIUM ENDING MESSAGE */}
        <div className="relative w-full max-w-[65rem] mb-24 mt-20 animate-pop group">
           {/* Ethereal Glowing Background Behind Card */}
           <div className="absolute inset-0 bg-gradient-to-r from-pink-200/50 via-rose-200/50 to-pink-200/50 blur-[100px] rounded-full scale-90 opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
           
           <div className="relative w-full bg-white/60 backdrop-blur-2xl border-[1.5px] border-white/80 p-10 sm:p-20 lg:p-24 rounded-[3rem] sm:rounded-[4rem] shadow-[0_30px_80px_rgba(236,72,153,0.15)] text-center overflow-hidden transition-all duration-700 hover:shadow-[0_40px_100px_rgba(236,72,153,0.25)] hover:-translate-y-2">
             
             {/* Premium Glass Highlights */}
             <div className="absolute inset-0 rounded-[3rem] sm:rounded-[4rem] ring-1 ring-inset ring-white/60 pointer-events-none"></div>
             <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
             
             {/* Floating Ambient Orbs */}
             <div className="absolute -top-32 -left-32 w-80 h-80 bg-rose-300/30 rounded-full blur-[80px] mix-blend-multiply"></div>
             <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pink-300/30 rounded-full blur-[80px] mix-blend-multiply"></div>
             
             {/* Decorative Embellishments */}
             <div className="absolute top-10 lg:top-14 left-1/2 -translate-x-1/2 text-5xl opacity-80 drop-shadow-sm" style={{ transform: 'translateX(-50%) rotate(-10deg)' }}>💌</div>
             <div className="absolute right-10 lg:right-16 top-16 text-4xl opacity-50 animate-pulse">✨</div>
             <div className="absolute left-10 lg:left-16 bottom-20 text-4xl opacity-50 hover:rotate-180 transition-transform duration-1000 cursor-pointer">🌸</div>
             
             <div className="relative z-10 mt-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 mb-8 sm:mb-12 drop-shadow-sm">
                   Minnaa...
                </h2>
                
                <div className="space-y-8 sm:space-y-10">
                

                
                  
                  <p className="text-lg sm:text-xl lg:text-2xl text-rose-500 font-serif leading-relaxed italic font-medium drop-shadow-sm">
                   no matter where life takes us… <br className="hidden sm:block" />
                    no matter how much time passes… <br className="hidden sm:block" />
                    you will always remain one of the most beautiful parts of my life.
                  </p>

                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-serif leading-[1.8] max-w-3xl mx-auto">
                    Thank you for every laugh, every memory, every moment, and every little thing you did without even realizing how much it meant to me.
                  </p>

                  <p className="text-lg sm:text-xl lg:text-2xl text-pink-600 font-serif leading-relaxed font-bold">
                    Some people enter our lives and leave memories behind… <br />
                    but you became a memory I never want to lose. 🌸
                  </p>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-serif leading-relaxed pt-4">
                    I hope this birthday brings you the same happiness you brought into my life every single day. <br />
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 inline-block mt-4 drop-shadow-sm">Happy Birthday, my favorite person. 🎂✨</span>
                  </p>

                  {/* Elegant Custom Divider */}
                  <div className="flex items-center justify-center gap-4 sm:gap-6 py-8">
                     <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-pink-300"></span>
                     <span className="text-pink-400 text-2xl sm:text-3xl animate-pulse drop-shadow-md">♡</span>
                     <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-pink-300"></span>
                  </div>
                  
                  <div className="pt-2 pb-6">
                    <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-serif leading-relaxed italic mb-8">
                      And if I had to choose again… <br/>
                      in every lifetime, <br/>
                      <span className="text-rose-500 font-bold tracking-wide mt-2 inline-block">I would still choose you as my best friend. ❤️</span>
                    </p>
                    <div className="inline-block relative mt-6">
                       {/* Glowing aura strictly behind the text */}
                       <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-rose-100/60 to-pink-100/60 blur-xl sm:blur-2xl rounded-full pointer-events-none"></div>
                       <span className="relative text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-rose-500 to-rose-400 tracking-tight drop-shadow-xl" style={{ textShadow: '0 8px 20px rgba(236,72,153,0.15)' }}>
                         I love you endlessly. ✨
                       </span>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>

        {/* ⬅️ Back Button */}
        <div className="animate-pop pb-12">
          <button 
            onClick={() => router.push('/surprise')} 
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-gray-600 transition-all duration-300 bg-white/80 backdrop-blur-md border border-pink-200 rounded-full hover:bg-white hover:text-pink-600 shadow-[0_10px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_rgba(236,72,153,0.15)] hover:-translate-y-1"
          >
             <span className="text-2xl group-hover:-translate-x-2 transition-transform duration-300">⬅️</span>
             <span className="text-xl tracking-wide font-serif">Back to our memories</span>
          </button>
        </div>

      </div>

      {/* 🎬 VIDEO MODAL */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-10 opacity-0 animate-[fadeIn_0.3s_forwards]" 
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-black rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 overflow-hidden scale-95 animate-[scaleUp_0.3s_forwards]" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-6 text-white/70 hover:text-white text-4xl hover:scale-110 transition-all z-50 drop-shadow-md" 
              onClick={() => setActiveVideo(null)}
            >
              ×
            </button>
            <video 
              src={activeVideo} 
              controls 
              autoPlay 
              className="w-full h-full aspect-video object-contain" 
            />
          </div>
          <style jsx>{`
            @keyframes fadeIn { to { opacity: 1; } }
            @keyframes scaleUp { to { transform: scale(1); } }
          `}</style>
        </div>
      )}
    </div>
  );
}
