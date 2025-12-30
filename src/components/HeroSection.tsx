'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [showRocket, setShowRocket] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setShowRocket(true);
    }, 1000);

    // Reset animation every 10 seconds
    const interval = setInterval(() => {
      setShowRocket(false);
      setTimeout(() => setShowRocket(true), 100);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Space Background */}
      <div className="absolute inset-0" />

      {/* Stars Background */}
      <div className="absolute inset-x-0 top-0 z-0 flex justify-center pointer-events-none" aria-hidden="true">
        <img src="/stars.svg" alt="" className="w-full max-w-[1500px] h-auto" />
      </div>

      {/* Background Decorative Elements - Layer 1 (Furthest back) */}
      <div className="absolute inset-0 z-[1]">
        {/* Subtle background orbs */}
        <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] rounded-full bg-purple-500/20 blur-[100px]" />
        <div className="absolute bottom-[30%] left-[15%] w-[250px] h-[250px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute top-[60%] right-[20%] w-[180px] h-[180px] rounded-full bg-indigo-500/15 blur-[90px]" />
      </div>

      {/* Central Solar System - Layer 2 (Background decoration) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        {/* Main Sun */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px]">
          <div className="w-full h-full rounded-full bg-gradient-radial from-yellow-200 to-orange-300 shadow-lg shadow-orange-400/50" />
        </div>

        {/* Orbital Rings */}
        <div className="absolute inset-0">
          {/* Inner ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-gray-600/30" />

          {/* Middle ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-gray-600/20" />

          {/* Outer ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-gray-600/15" />

          {/* Orbiting planets */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '60s' }}>
            <div className="absolute top-[40px] left-[150px] w-[20px] h-[20px] bg-blue-400 rounded-full" />
            <div className="absolute top-[120px] right-[80px] w-[16px] h-[16px] bg-green-400 rounded-full" />
          </div>

          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}>
            <div className="absolute bottom-[60px] left-[200px] w-[24px] h-[24px] bg-red-400 rounded-full" />
            <div className="absolute top-[200px] right-[150px] w-[18px] h-[18px] bg-purple-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating stars */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-[25%] right-[15%] w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[40%] left-[20%] w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[20%] right-[25%] w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Mountain Background - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] z-5 pointer-events-none">
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-indigo-900/50 to-transparent" />
      </div>

      {/* Rocket Animation */}
      {showRocket && (
        <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
          {/* Rocket */}
          <div
            className="absolute"
            style={{
              animation: 'rocketFly 6s ease-in-out forwards',
              transformOrigin: 'center',
            }}
          >
            <img
              src="/rocket.svg"
              alt="Rocket"
              className="w-[60px] h-[60px]"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))',
                animation: 'rocketRotate 6s ease-in-out forwards',
              }}
            />
          </div>

          {/* Trail effect */}
          {/* <div
            className="absolute"
            style={{
              animation: 'trailFly 6s ease-in-out forwards',
            }}
          >
            <div
              className="relative"
              style={{
                width: '80px',
                height: '3px',
                background: 'linear-gradient(90deg, rgba(255, 184, 76, 0) 0%, rgba(255, 184, 76, 0.8) 30%, rgba(242, 109, 28, 0.6) 60%, rgba(194, 37, 15, 0) 100%)',
                boxShadow: '0 0 15px rgba(255, 184, 76, 0.6)',
                animation: 'trailPulse 0.5s ease-in-out infinite',
              }}
            />
          </div> */}
        </div>
      )}

      {/* Main Content - Layer 3 (Foreground) */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="text-center space-y-8 max-w-4xl">
          {/* Main Title */}
          <h1 className="font-unbounded font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight text-white">
            SACHACKS
          </h1>

          {/* Date */}
          <p className="text-2xl sm:text-3xl font-semibold text-blue-100 tracking-wide">
            Feb 21 - 22, 2026
          </p>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-blue-200">
            Design. Code. Launch.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12">
            <button className="w-full sm:w-auto px-8 py-4 bg-black text-white text-lg font-semibold rounded-lg border border-blue-500 hover:bg-blue-900/50 transition-all duration-300 shadow-lg shadow-blue-500/25">
              Apply Now
            </button>

            <button className="w-full sm:w-auto px-8 py-4 bg-purple-600/20 text-white text-lg font-semibold rounded-lg border border-purple-400 hover:bg-purple-600/40 transition-all duration-300">
              Sponsor us!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}