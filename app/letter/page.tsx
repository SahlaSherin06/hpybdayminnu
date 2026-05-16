"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LetterPage() {
  const router = useRouter();
  const letterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Elegant unfold/fade-in animation for the letter
    gsap.fromTo(
      letterRef.current,
      { opacity: 0, y: 80, rotateX: 15 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#fdf2f8] py-12 px-4 sm:px-8 flex flex-col items-center relative overflow-hidden font-sans selection:bg-pink-300 selection:text-white">
      {/* ✨ Soft Animated Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-pink-300/30 blur-[120px] pointer-events-none mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-rose-300/30 blur-[120px] pointer-events-none mix-blend-multiply animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>

      {/* 💌 The Letter Container */}
      <div className="flex-1 w-full flex flex-col items-center justify-center mt-12 sm:mt-12 z-10 pb-24">
        <div 
          ref={letterRef}
          className="relative w-full max-w-3xl bg-[#fffcf8] p-10 sm:p-16 md:p-20 rounded-sm shadow-[0_20px_60px_-15px_rgba(236,72,153,0.2)] border border-[#f5ead6] opacity-0"
          style={{
            // Creates actual lines on the paper like a notebook
            backgroundImage: "repeating-linear-gradient(transparent, transparent 39px, #e5e7eb 39px, #e5e7eb 40px)",
            backgroundPosition: "0 40px", // Align lines correctly
          }}
        >
          {/* Cute subtle tape holding the letter */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-white/40 backdrop-blur-md rotate-[-2deg] shadow-sm border border-white z-20 mix-blend-overlay"></div>

          <h1 className="text-3xl sm:text-4xl font-serif text-pink-500 mb-8 mt-2 font-bold drop-shadow-sm">
            Hi my dear friend 💕
          </h1>

          {/* ✍️ EDITABLE LETTER CONTENT */}
          {/* The leading-[40px] exactly matches the 40px line background, making it look handwritten on the lines! */}
          <div className="text-xl sm:text-2xl text-gray-700 font-serif italic leading-[40px] sm:leading-[40px]">
            <p>
              Are you doing well? Today is your birthday — it’s your special day 🎂✨<br />
              First of all, I wish you the most beautiful and happiest birthday ever 💖<br />
              Happy Birthday, Minnaa 🥹💗
            </p>
            <br />
            <p>
              Now you’ve turned 20 🥳<br />
              Our teenage years are finally over, and maybe from now on life will bring us many different situations. We may not always know how to handle everything perfectly, but I pray that God gives us the strength and courage to face every moment in life 🌸🤍
            </p>
            <br />
            <p>
              Now let me talk about our journey together 🥰<br />
              We met in 7th standard, and honestly, I never imagined we would become this close 🫶<br />
              Throughout this whole journey, I know I have hurt you many times, misunderstood you, fought with you, and done things you didn’t like please forgive me for that 🫠<br />
              But no matter what happened, I never hated you, Minnuoo… I love you the most💋 💕
            </p>
            <br />
            <p>
              We celebrated all your previous birthdays together 🎉<br />
              But this birthday you get new friends, new places, and new experiences🫠✨<br />
              No matter what problems come into your life, you can call me anytime 🫂💗<br />
              Please don’t keep sadness inside your heart, Minnuoo 🥺<br />
              If anything is bothering you, tell me openly. I will never judge you 🤍
            </p>
            <br />
            <p>
              If I have hurt you at any point in this journey, please forgive me 🫂<br />
              Even if we don’t talk much sometimes, you will always have a place in my heart forever 💖
            </p>
            <br />
            <p>
              And seriously… our old life together was so special 🥹✨<br />
              No matter how many new friends we make, I can never compare anyone to our friendship 💕<br />
              We talked about so many things, laughed so much, and created countless memories together 😂🤍
            </p>
            <br />
            <p>
              I still remember how last birthday you wrote me a long birthday note 🥹💌<br />
              This birthday I didn’t get one <br />
              But when you said, “No matter what, I love you the most❤️🩹” that single message made me so happy 💖<br />
              Minnuoo… I love youuuu 🫶💋
            </p>
            <br />
            <p>
              I pray that your life always stays bright, beautiful, and full of happiness 🌸✨<br />
              May all your dreams come true, may success always find you, and may your smile never fade 😊💖<br />
              And I hope our friendship stays strong forever, no matter where life takes us 🤍♾️
            </p>
            <br />
            <p>
              Love you Minnaaa 💕<br />
              Wishing you the most beautiful, happiest, and sweetest birthday ever 🎂❤️✨<br />
              Stay happy, stay blessed, and always keep smiling 🥹💖
            </p>
          </div>

          {/* Decorative stamp/flower */}
          <div className="absolute bottom-8 left-8 text-5xl opacity-40 rotate-[-15deg] drop-shadow-sm animate-pulse">
            🌸
          </div>
        </div>

        {/* ⬅️ Back Button */}
        <button
          onClick={() => router.push("/surprise")}
          className="mt-16 group relative inline-flex items-center justify-center gap-3 px-10 py-4 font-bold text-pink-600 transition-all duration-300 bg-white/80 backdrop-blur-md border border-pink-200 rounded-full hover:bg-white hover:text-pink-500 shadow-[0_10px_20px_rgba(236,72,153,0.1)] hover:shadow-[0_15px_30px_rgba(236,72,153,0.2)] hover:-translate-y-1"
        >
          <span className="text-2xl group-hover:-translate-x-2 transition-transform duration-300">←</span>
          <span className="text-xl tracking-wide font-serif">Back to our memories</span>
        </button>
      </div>
    </div>
  );
}
