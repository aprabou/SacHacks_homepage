import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-[60px] py-[21px] flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/rocket.svg"
            alt="SacHacks Logo"
            width={47}
            height={47}
            className="h-[47px] w-auto"
          />
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
