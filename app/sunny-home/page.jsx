import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Sunny Home | Ambient support for aging at home',
};

export default function SunnyHomePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container grid-2">
          <div>
            <p className="kicker">Pilot and waitlist only</p>

            <h1>Ambient support for aging at home.</h1>

            <p className="lead">
              Sunny Home is an ambient AI support system designed to help older adults stay safer,
              calmer, and more connected while aging at home.
            </p>

            <p>
              Sunny Home combines voice guidance, contextual awareness, caregiver visibility,
              and environmental sensing into a low-tech home companion built for moments of
              confusion, stress, or disorientation.
            </p>

            <div className="cta-row">
              <Link className="btn btn-blue" href="/contact">
                Join the Sunny Home waitlist
              </Link>

              <Link className="btn btn-secondary" href="/contact">
                Request pilot information
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <Image
              className="logo-hero"
              src="/sunny-home-logo.png"
              alt="Sunny Home logo"
              width={420}
              height={420}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">

          <div
            className="phone-video-card"
            style={{ maxWidth: '520px', margin: '0 auto 48px auto' }}
          >
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
              <div className="icon">☀</div>

              <h3>Ambient awareness</h3>

              <p>
                Sunny Home is being designed to understand room activity,
                routines, and moments of confusion through environmental
                sensing and contextual awareness.
              </p>
            </div>

            <div className="card">
              <div className="icon">🎙</div>

              <h3>Calm voice guidance</h3>

              <p>
                Voice support helps provide reassurance, orientation,
                and simple guidance during stressful or confusing moments.
              </p>
            </div>

            <div className="card">
              <div className="icon">📲</div>

              <h3>Family visibility</h3>

              <p>
                Optional caregiver workflows provide greater visibility
                when communication changes, concern signals appear,
                or support may be needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Built for continuity, not surveillance.</h2>

            <p>
              Sunny Home is being designed as a privacy-first support layer
              that helps older adults remain connected and oriented while
              giving families greater reassurance and visibility.
            </p>

            <p>
              The system combines voice interaction, room awareness,
              contextual memory, caregiver workflows, and environmental
              sensing into one ambient home companion platform.
            </p>

            <p>
              Sunny Home is currently in MVP and pilot development.
            </p>
          </div>

          <Image
            className="screenshot"
            src="/sunny-home-logo.png"
            alt="Sunny Home concept"
            width={1200}
            height={1200}
          />
        </div>
      </section>
    </>
  );
}