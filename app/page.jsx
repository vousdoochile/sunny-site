import Image from 'next/image';
import Link from 'next/link';
import SmsDisclosure from '../components/SmsDisclosure';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Sunny Texts is live now</div>
            <h1>Daily check-ins for older adults. Peace of mind for families.</h1>
            <p className="lead">
              Sunny helps older adults stay connected while giving families more visibility and peace of mind.
            </p>
            <p>
              Sunny Texts sends cheerful daily texts that remember your stories and check in every day.
              Optional family alerts add peace of mind when a reply is missed.
            </p>

            <div className="cta-row">
              <Link className="btn btn-primary" href="/sunny-texts#start">
                Start Sunny Texts
              </Link>
              <Link className="btn btn-secondary" href="/sunny-vision">
                Join Sunny Vision Waitlist
              </Link>
            </div>

            <p className="sms-line">
              Text HELLO to (855) 463-6694 to start your free 10-day trial.
            </p>
            <SmsDisclosure />
          </div>

          <div className="hero-card">
            <Image
              className="logo-hero"
              src="/sunny-texts-logo.png"
              alt="Sunny Texts logo"
              width={360}
              height={360}
              priority
            />

            <div className="phone-video-card">
              <video className="phone-video" autoPlay muted loop playsInline>
                <source src="/textflow4x.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid-2">
          <div>
            <h2>Connection for older adults. Peace of mind for families.</h2>
            <p>
              Sunny Texts helps older adults stay connected through warm daily text conversations while giving loved ones more visibility when communication patterns change.
            </p>
            <p>
              There are no apps, passwords, or complicated technology. Everything works through simple text messages designed to feel familiar and easy to use.
            </p>
            <p>
              Optional caregiver notifications provide additional reassurance when a loved one misses a check-in or may need support.
            </p>
          </div>

          <div className="trust-image">
            <div className="family-bubbles">
              <div className="bubble">
                <Image src="/gma.png" alt="Older adult" width={64} height={64} className="avatar-image" />
                <div className="bubble-copy">
                  <strong>Loved One</strong>
                  <p>Receives cheerful daily check-ins and friendly conversation.</p>
                </div>
              </div>

              <div className="bubble">
                <Image src="/sun.png" alt="Sunny Texts" width={64} height={64} className="avatar-image" />
                <div className="bubble-copy">
                  <strong>Sunny</strong>
                  <p>Remembers stories, routines, and meaningful moments over time.</p>
                </div>
              </div>

              <div className="bubble">
                <Image src="/daughter.png" alt="Caregiver" width={64} height={64} className="avatar-image" />
                <div className="bubble-copy">
                  <strong>Caregiver</strong>
                  <p>Can receive optional alerts when extra visibility may help.</p>
                </div>
              </div>

              <div className="bubble">
                <div className="avatar">✓</div>
                <div className="bubble-copy">
                  <strong>Family</strong>
                  <p>More reassurance without adding another complicated system.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>How it works</h2>

          <div className="grid-3">
            <div className="card">
              <div className="icon">1</div>
              <h3>Start by text</h3>
              <p>Text HELLO to begin your free trial. No apps, passwords, or complicated setup.</p>
            </div>

            <div className="card">
              <div className="icon">2</div>
              <h3>Daily conversation</h3>
              <p>Sunny checks in with cheerful text conversations that remember preferences, stories, and routines.</p>
            </div>

            <div className="card">
              <div className="icon">3</div>
              <h3>Optional caregiver support</h3>
              <p>If a reply is missed or concern signals appear, Sunny can notify a trusted family member.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container product-split">
          <div className="card">
            <Image className="product-logo" src="/sunny-texts-logo.png" alt="Sunny Texts logo" width={220} height={220} />
            <h2>Sunny Texts</h2>
            <p>Live now. Friendly daily SMS check-ins for older adults with optional caregiver alerts.</p>
            <p>
              <strong>Free 10-day trial, then $6.99/month. Cancel anytime.</strong>
            </p>
            <Link className="btn btn-primary" href="/sunny-texts#start">
              Start Sunny Texts
            </Link>
          </div>

          <div className="card">
            <Image className="product-logo" src="/sunny-vision-logo.png" alt="Sunny Vision logo" width={220} height={220} />
            <h2>Sunny Vision</h2>
            <p>Upcoming real-time support layer for voice guidance, caregiver visibility, and moments of confusion.</p>
            <p>
              <strong>Currently in waitlist and pilot development.</strong>
            </p>
            <Link className="btn btn-blue" href="/sunny-vision">
              Join Sunny Vision Waitlist
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Why we built Sunny</h2>
            <p>
              Sunny was created from a personal belief that older adults deserve more connection, dignity, and visibility as they age.
            </p>
            <p>
              The mission is simple: make support feel warm, familiar, and low-tech for families navigating aging, caregiving, and moments of confusion.
            </p>
          </div>

          <div className="card">
            <h3>Simple pricing</h3>
            <p>
              <strong>Free 10-day trial, then $6.99/month.</strong>
            </p>
            <p>No apps. No passwords. Simple, private text messages.</p>
            <Link className="btn btn-primary" href="/sunny-texts#start">
              Start Sunny Texts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}