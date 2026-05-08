import Image from 'next/image';
import Link from 'next/link';
import SmsDisclosure from '../../components/SmsDisclosure';

export const metadata = {
  title: 'Sunny Texts | Live SMS check-ins for older adults',
};

export default function SunnyTextsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container grid-2">
          <div>
            <p className="kicker">Live now</p>
            <h1>Start your free 10-day trial.</h1>
            <p className="lead">
              Sunny Texts sends cheerful daily text messages that help older adults stay connected and give families optional visibility when a reply is missed.
            </p>

            <div className="cta-row" id="start">
              <a className="btn btn-primary" href="sms:+18554636694&body=HELLO">
                Text HELLO
              </a>
              <Link className="btn btn-secondary" href="/contact">
                Ask a question
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
            />
            <h3>Free 10-day trial, then $6.99/month. Cancel anytime.</h3>
            <p>No apps. No passwords. Simple, private text messages.</p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid-3">
          <div className="card">
            <div className="icon">☀</div>
            <h3>Daily check-ins</h3>
            <p>Sunny reaches out every day with friendly conversation, light prompts, and warm reminders.</p>
          </div>

          <div className="card">
            <div className="icon">♡</div>
            <h3>Remembers stories</h3>
            <p>Sunny can remember preferences and meaningful details to make each conversation feel personal.</p>
          </div>

          <div className="card">
            <div className="icon">✓</div>
            <h3>Optional alerts</h3>
            <p>Families can add optional caregiver support when a reply is missed or concern signals appear.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Designed for texting, not app training.</h2>
            <p>
              Sunny Texts meets people where they already are: SMS. That makes setup simple for older adults and easier for families to support.
            </p>

            <ul className="clean">
              <li>No app download</li>
              <li>No password to remember</li>
              <li>No complicated dashboard for the older adult</li>
              <li>Works through familiar text messages</li>
            </ul>
          </div>

          <div className="phone-video-card">
            <video className="phone-video" autoPlay muted loop playsInline>
              <source src="/ec.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
