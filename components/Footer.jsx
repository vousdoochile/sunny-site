import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Sunny Texts</h3>
          <p>Daily check-ins for older adults. Peace of mind for families.</p>
          <p>Text HELLO to (855) 463-6694 to start your free 10-day trial.</p>
        </div>
        <div>
          <h3>Products</h3>
          <div className="footer-links">
            <Link href="/sunny-texts">Sunny Texts</Link>
            <Link href="/sunny-vision">Sunny Vision</Link>
            <Link href="/families">For Families</Link>
            <Link href="/investors">Investors</Link>
          </div>
        </div>
        <div>
          <h3>Legal</h3>
          <div className="footer-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/sms-terms">SMS Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
