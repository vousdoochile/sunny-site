import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: 'Investors | Sunny' };

export default function InvestorsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container grid-2">
          <div>
            <p className="kicker">Investors and partners</p>

            <h1>A low-tech care platform for families navigating aging, memory loss, and daily safety.</h1>

            <p className="lead">
              Sunny starts with live SMS check-ins through Sunny Texts and expands into camera-aware support through Sunny Vision and ambient in-home support through Sunny Home.
            </p>

            <div className="cta-row">
              <Link className="btn btn-primary" href="/contact">
                Investor or partner inquiry
              </Link>
            </div>
          </div>

          <Image
            className="logo-hero"
            src="/sunny-home-logo.png"
            alt="Sunny Home by Sunny Texts logo"
            width={420}
            height={420}
            priority
          />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid-3">
          <div className="card">
            <h3>Live wedge</h3>
            <p>
              Sunny Texts is live now as a simple SMS-first relationship and check-in product for older adults and families.
            </p>
          </div>

          <div className="card">
            <h3>Caregiver visibility</h3>
            <p>
              Optional family alerts create a practical path from companionship to concern signals, missed replies, and escalation workflows.
            </p>
          </div>

          <div className="card">
            <h3>Expansion path</h3>
            <p>
              Sunny Vision and Sunny Home extend the platform into real-time guidance, room awareness, and ambient support for aging at home.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Product ecosystem</h2>

            <ul className="clean">
              <li>Sunny Texts: live daily SMS check-ins</li>
              <li>Sunny Vision: camera-aware and context-aware support layer</li>
              <li>Sunny Home: ambient in-home device for voice guidance, room awareness, and caregiver visibility</li>
              <li>Caregiver workflows: alerts, escalation, visibility, and support history</li>
              <li>Future continuity data: family context, routines, and concern patterns</li>
            </ul>
          </div>

          <Image
            className="screenshot"
            src="/sunny-home-device.png"
            alt="Sunny Home ambient support device concept"
            width={1200}
            height={720}
          />
        </div>
      </section>
    </>
  );
}
