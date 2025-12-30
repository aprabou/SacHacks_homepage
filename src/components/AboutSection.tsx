'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

function Counter({ target, label, prefix = '', suffix = '+' }: { target: number; label: string; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(increment * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={counterRef}>
      {prefix}{count.toLocaleString()}{count === target ? suffix : ''}<br />{label}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-[104px] px-[136px] overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-x-0 top-0 z-0 flex justify-center pointer-events-none" aria-hidden="true">
        <img src="/stars.svg" alt="" className="w-full max-w-[1500px] h-auto" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="flex items-start gap-[136px]">
          {/* Globe */}
          <div className="flex flex-col items-center gap-[25px] w-[355px]">
            <div className="w-[190px] h-[190px] rounded-full relative"
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(225deg, #CEF 0%, #001EB2 77.37%)',
                boxShadow: '0 0 112px 20px #02C inset',
                filter: 'drop-shadow(0 0 114px rgba(0, 43, 255, 0.80)) drop-shadow(0 0 20px #02C)'
              }}>
              {/* Pale ellipse removed to prevent large overlay */}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-10 flex-1">
            <div className="flex flex-col gap-12">
              <h2 className="text-white text-[48px] font-bold leading-[26px] tracking-[-0.96px]">
                A Space for Everyone
              </h2>

              <p className="text-white text-[24px] font-normal leading-[35px]">
                SacHacks is the <span className="font-bold">first major intercollegiate hackathon in the Sacramento</span>, California area.
              </p>

              <p className="text-white text-[24px] font-normal leading-[35px] max-w-[678px]">
                We provide the place, you bring your ideas to our friendly competition between where all creative coders launch their ideas into action during a 24-hour hackathon.
              </p>
            </div>
          </div>
        </div>

        {/* What's Different Section */}
        <div className="flex items-center justify-center gap-[60px] mt-[104px]">
          <div className="flex flex-col gap-10 flex-1 max-w-[678px]">
            <div className="flex flex-col gap-12">
              <h2 className="text-white text-[48px] font-bold leading-[26px] tracking-[-0.96px]">
                Whats Different?
              </h2>
              <p className="text-white text-[24px] font-normal leading-[35px]">
                SacHacks VII isn’t just about building cool projects—it’s about solving real problems. This year, we’re partnering with local businesses and organizations to bring you real-world challenges to work on. You’ll have the chance to develop solutions that can make a genuine impact, continue beyond the hackathon, and potentially become long-term projects. Build something meaningful, collaborate with industry partners, and leave with more than just a demo—you leave with opportunity.
              </p>
            </div>
          </div>

          {/* Rocket Image */}
          <div className="flex justify-center items-center">
            <div className="w-[400px] h-[405px] flex items-center justify-center relative">
              <Image src="/rocket.svg" alt="Rocket" width={200} height={200} className="w-[200px] h-[200px]" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center items-center gap-[112px] mt-[31px] pt-[20px]">
          <div className="relative w-[298px] h-[193px]">
            <div className="absolute inset-0 rounded-[150px_10px_10px_10px] p-[10px]"
              style={{
                background: 'linear-gradient(48deg, #dbd9f2ff 55%, #6155DD 70%, #0B081B 100%)',
              }}>
              <div className="w-full h-full rounded-[140px_0px_0px_0px]"
                style={{
                  background: 'radial-gradient(231.03% 215.69% at 69.94% -79.61%, #000 0%, #0B081B 54.81%, #6155DD 67.79%, #AAA4F9 80.77%)'
                }} />
            </div>
            <div className="absolute top-[60px] left-[56px] w-[200px] h-[91px] flex flex-col justify-center items-center text-center font-unbounded font-bold text-[36px] tracking-[0.72px]"
              style={{
                background: 'linear-gradient(95deg, rgba(215, 215, 215, 0.20) -7.54%, #FFF 11.23%, #FFF 30.19%, #FFF 72.65%, rgba(255, 255, 255, 0.20) 114.15%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
              <Counter target={1000} label="Hackers" />
            </div>
          </div>

          <div className="relative w-[298px] h-[193px]">
            <div className="absolute inset-0 rounded-[150px_10px_10px_10px] p-[10px]"
              style={{
                background: 'linear-gradient(48deg, #dbd9f2ff 55%, #9747FF 70%, #0B081B 100%)',
              }}>
              <div className="w-full h-full rounded-[140px_0px_0px_0px]"
                style={{
                  background: 'radial-gradient(231.03% 215.69% at 69.94% -79.61%, #000 0%, #0B081B 54.81%, #9747FF 67.79%, #D6B7FF 80.77%)'
                }}
              />
            </div>
            <div className="absolute top-[60px] left-[60px] w-[203px] h-[91px] flex flex-col justify-center items-center text-center font-unbounded font-bold text-[36px] tracking-[0.72px]"
              style={{
                background: 'linear-gradient(95deg, rgba(215, 215, 215, 0.20) -7.54%, #FFF 11.23%, #FFF 30.19%, #FFF 72.65%, rgba(255, 255, 255, 0.20) 114.15%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
              <Counter target={80} label="Projects" />
            </div>
          </div>

          <div className="relative w-[298px] h-[193px]">
            <div className="absolute inset-0 rounded-[150px_10px_10px_10px] p-[10px]"
              style={{
                background: 'linear-gradient(48deg, #dbd9f2ff 55%, #618EFF 70%, #0B081B 100%)',
              }}>
              <div className="w-full h-full rounded-[140px_0px_0px_0px]"
                style={{ background: 'radial-gradient(231.03% 215.69% at 69.94% -79.61%, #000 0%, #0B081B 54.81%, #618EFF 67.79%, #A4C6F9 80.77%)' }} />
            </div>
            <div className="absolute top-[60px] left-[77px] w-[157px] h-[91px] flex flex-col justify-center items-center text-center font-unbounded font-bold text-[36px] tracking-[0.72px]"
              style={{
                background: 'linear-gradient(95deg, rgba(215, 215, 215, 0.20) -7.54%, #FFF 11.23%, #FFF 30.19%, #FFF 72.65%, rgba(255, 255, 255, 0.20) 114.15%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
              <Counter target={42} label="Prizes" prefix="$" suffix="k +" />
            </div>
          </div>
        </div>

        {/* We're In-Person Section */}
        <div className="flex items-center justify-center gap-[60px] mt-[104px]">
          <div className="flex justify-center items-center">
            <div className="w-[400px] h-[405px] flex items-center justify-center">
              <Image src="/rocketcomp.svg" alt="Rocket" width={297} height={263} className="" />
            </div>
          </div>

          <div className="flex flex-col gap-10 flex-1 max-w-[678px]">
            <div className="flex flex-col gap-12">
              <h2 className="text-white text-[48px] font-bold leading-[26px] tracking-[-0.96px]">
                We&apos;re In-Person!
              </h2>

              <p className="text-white text-[24px] font-normal leading-[35px] max-w-[666px]">
                This year, SacHacks VII is <span className="font-bold">fully in-person!</span> Join us on campus for a collaborative, high-energy hacking environment where you can code, team up, and build side-by-side with other innovators. We&apos;re excited to bring everyone together for workshops, mentorship, and a true hackathon atmosphere—all happening live, on site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
