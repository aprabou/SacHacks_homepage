import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-[60px] py-[21px] flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <svg width="25" height="47" viewBox="0 0 25 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8387 5.6529C11.8351 6.69969 11.5053 7.72312 10.8891 8.59945C10.8891 8.59945 9.83261 9.95041 8.79272 10.8435C7.96624 11.5527 6.48068 12.5431 5.91029 12.9212C5.86373 12.9516 5.82382 12.9783 5.79001 13L5.67582 12.9217C5.12151 12.54 3.70635 11.5537 2.91701 10.8471C1.91924 9.95298 0.904296 8.60049 0.904296 8.60049C0.30859 7.71382 -0.00804695 6.68991 -0.00976562 5.64466C-0.00976562 2.82327 2.3056 0.208918 5.65531 0.0559507V0.0410156C5.70594 0.0410156 5.75638 0.0420456 5.80664 0.0441057C9.36422 0.148659 11.8387 2.797 11.8387 5.6529Z" fill="url(#paint0_linear_nav)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M19.4289 29.6647C21.9233 29.6647 23.42 34.3001 23.42 34.3001C23.42 34.3001 28.9077 24.1023 19.4289 19.0034C19.4289 19.0034 21.9039 7.04566 12.5554 0.538628L12.5 0.5L12.4446 0.538628C3.09608 7.04566 5.57109 19.0034 5.57109 19.0034C-3.90766 24.1023 1.58004 34.3001 1.58004 34.3001C1.58004 34.3001 3.07668 29.6647 5.57109 29.6647C6.56885 29.6647 6.56885 31.5189 6.56885 31.5189H18.4311C18.4311 31.5189 18.4311 29.6647 19.4289 29.6647ZM16.2422 17.4325C16.2422 19.3526 14.567 20.9091 12.5006 20.9091C10.4341 20.9091 8.75894 19.3526 8.75894 17.4325C8.75894 15.5125 10.4341 13.956 12.5006 13.956C14.567 13.956 16.2422 15.5125 16.2422 17.4325Z" fill="white"/>
            <defs>
              <linearGradient id="paint0_linear_nav" x1="0.0466022" y1="0.890473" x2="6.85703" y2="14.5057" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A80D11"/>
                <stop offset="0.364819" stopColor="#C2250F"/>
                <stop offset="0.682117" stopColor="#F46D1C"/>
                <stop offset="1" stopColor="#FFB84C"/>
              </linearGradient>
            </defs>
          </svg>
        </Link>
        
        <div className="flex items-center gap-[55px] text-white text-[20px] font-medium">
          <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
          <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
          {/* <Link href="/team" className="hover:opacity-80 transition-opacity">Team</Link> */}
          <Link href="/sponsors" className="hover:opacity-80 transition-opacity">Sponsors</Link>
          {/* <a href="#faq" className="hover:opacity-80 transition-opacity">FAQ</a> */}
        </div>
      </div>
    </nav>
  );
}
