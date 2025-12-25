'use client'

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "What is a hackathon?", answer: "A hackathon is a 24-hour event where students collaborate to build creative projects and compete for prizes." },
    { question: "When & Where will the event take place?", answer: "SacHacks VI will take place virtually, with optional in-person workspaces in Davis, California." },
    { question: "Who can attend?", answer: "Any college student or recent graduate is welcome to participate in SacHacks!" },
    { question: "Does it cost anything?", answer: "No! SacHacks is completely free to attend, including meals, swag, and workshops." },
    { question: "When is the application deadline?", answer: "Applications are open now and will close closer to the event date. Apply early!" },
  ];

  return (
    <section id="faq" className="relative py-20 overflow-hidden mb-[10rem]">
      {/* Stars Background */}
      <div className="absolute inset-x-0 top-0 z-0 flex justify-center pointer-events-none" aria-hidden="true">
        <img src="/stars.svg" alt="" className="w-full max-w-screen h-auto" />
      </div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-4">
        <h2
          className="overflow-visible font-unbounded font-bold text-[64px] leading-[76px] tracking-[1.28px] mb-[51px]"
          style={{
            backgroundImage: 'linear-gradient(48deg, #AAA4F9 0%, #B8B4FF 25%, #E8E6FF 47%, #C8D4F0 52%, #8DBAF5 75%, #7AA8E8 100%)',
            backgroundSize: '15% 15%',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'block',
            width: '100%',
            textAlign: 'center',
          }}
        >
          FAQ
        </h2>

        <div className="max-w-[1104px] mx-auto flex flex-col gap-[-1px]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#CDCDCD] py-[23px]">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-[61px] text-left"
              >
                <h3 className="text-[30px] font-bold tracking-[-0.6px]"
                  style={{
                    background: 'linear-gradient(95deg, rgba(215, 215, 215, 0.20) -7.54%, #FFF 11.23%, #FFF 30.19%, #FFF 72.65%, rgba(255, 255, 255, 0.20) 114.15%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                  {faq.question}
                </h3>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  className={`flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-45' : ''}`}
                >
                  <path d="M13.2227 3.11182V24.2676" stroke="white" strokeWidth="4.6301" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23.8008 13.6899L2.645 13.6899" stroke="white" strokeWidth="4.6301" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-white/80 text-[20px] leading-[30px]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
