export default function SponsorsSection() {
  const sponsors = [
    { name: 'CodeCrafters', logo: 'https://api.builder.io/api/v1/image/assets/TEMP/b7e05e27cc16fca7df4ed88570867e40b32c8748?width=120' },
    { name: 'Desmos', logo: 'https://api.builder.io/api/v1/image/assets/TEMP/b3b9ed67d1a196cc2fc8888a307f2c20e1099d4a?width=400' },
    { name: 'Liner', logo: 'https://api.builder.io/api/v1/image/assets/TEMP/9c2384f6ed6e797e96a6b03dd92aaacc85da3b41?width=456' },
    { name: 'UC Davis CS', logo: 'https://api.builder.io/api/v1/image/assets/TEMP/886ffe97c3ef4956400a51d25ab59dcb99bc9b0e?width=464' },
    { name: 'CFC', logo: './cfc.svg' },
    { name: 'ASUCD', logo: './asucd.png' },
  ];

  return (
    <section id="sponsors" className="relative py-20">
      <div className="max-w-[1440px] mx-auto px-4">
        <h2
          className="overflow-visible font-unbounded font-bold text-[64px] leading-[76px] tracking-[1.28px] mb-[51px]"
          style={{
            backgroundImage: 'linear-gradient(48deg, #AAA4F9 0%, #B8B4FF 25%, #E8E6FF 47%, #C8D4F0 52%, #8DBAF5 75%, #7AA8E8 100%)',
            backgroundSize: '40% 40%',
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
          Our Sponsors
        </h2>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-[22px] animate-scroll">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={index} className="flex-shrink-0 w-[302px] h-[160px] rounded-2xl border border-[#656565] bg-white/5 flex items-center justify-center p-8">
                <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
