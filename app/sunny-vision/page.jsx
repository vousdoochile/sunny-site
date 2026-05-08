import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Sunny Vision | Waitlist and pilot product',
};

export default function SunnyVisionPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container grid-2">
          <div>
            <p className="kicker">Pilot and waitlist only</p>

            <h1>Real-time support for moments of confusion.</h1>

            <p className="lead">
              Sunny Vision is an in-development support layer for real-time voice guidance,
              family visibility, and emergency escalation during moments of confusion.
            </p>

            <div className="cta-row">
              <Link className="btn btn-blue" href="/contact">
                Join the Sunny Vision waitlist
              </Link>

              <Link className="btn btn-secondary" href="/contact">
                Request pilot info
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <Image
              className="logo-hero"
              src="/sunny-vision-logo.png"
              alt="Sunny Vision logo"
              width={380}
              height={380}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">

          <div className="phone-video-card" style={{ maxWidth: '480px', margin: '0 auto 48px auto' }}>
            <video
              className="phone-video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/SV_Clip.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="icon">🎙</div>
              <h3>Voice guidance</h3>
              <p>
                Calm spoken support for questions like “Where am I?” or “I’m confused.”
              </p>
            </div>

            <div className="card">
              <div className="icon">👁</div>
              <h3>Context support</h3>
              <p>
                Phone today; voice-first home device next. Glases later.
              </p>
            </div>

            <div className="card">
              <div className="icon">📲</div>
              <h3>Escalation routing</h3>
              <p>
                When concern signals appear, Sunny Vision connects back to Sunny Texts caregiver workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Built as an extension of Sunny Texts.</h2>

            <p>
              Sunny Vision is not a separate medical device. It is being explored as a low-tech support layer that connects to Sunny Texts for caregiver communication, visibility, and event logging.
            </p>

            <p>
              Sunny Vision is not live for general purchase. Families, caregivers, and facilities can request waitlist or pilot information.
            </p>
          </div>

          <Image
            className="screenshot"
            src="/sunny-vision-dashboard.png"
            alt="Sunny Vision caregiver dashboard concept"
            width={1200}
            height={720}
          />
        </div>
      </section>
    </>
  );
}