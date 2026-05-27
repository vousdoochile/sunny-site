import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" href="/">
          <Image src="/sunny-texts-logo.png" alt="Sunny Texts logo" width={80} height={80} />
          <span>Sunny Texts</span>
        </Link>
        <nav className="navlinks" aria-label="Main navigation">
          <Link href="/sunny-texts">Sunny Texts</Link>
          <Link href="/sunny-vision">Sunny Vision</Link>
          <Link href="/sunny-home">Sunny Home</Link>
          <Link href="/families">For Families</Link>
          <Link href="/investors">Investors</Link>
          <Link href="/about">About Sunny</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="btn btn-primary" href="/sunny-texts#start">Start Sunny Texts</Link>
      </div>
    </header>
  );
}
