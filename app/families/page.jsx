import Link from 'next/link';

export const metadata = { title: 'For Families | Sunny Texts' };

export default function FamiliesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">For families</p>
          <h1>Stay connected without adding complexity.</h1>
          <p className="lead">Sunny Texts gives older adults a friendly daily connection and gives families more visibility when communication patterns change.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/sunny-texts#start">Start Sunny Texts</Link>
            <Link className="btn btn-secondary" href="/contact">Contact us</Link>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container grid-3">
          <div className="card"><h3>For older adults</h3><p>Friendly daily texts that feel familiar and easy to answer.</p></div>
          <div className="card"><h3>For adult children</h3><p>More peace of mind when a loved one misses a reply or needs support.</p></div>
          <div className="card"><h3>For caregivers</h3><p>Simple visibility into concern signals without adding another app for the older adult.</p></div>
        </div>
      </section>
      <section className="section">
        <div className="container legal">
          <h2>Support language families understand</h2>
          <p>Sunny focuses on connection, reassurance, caregiver visibility, and moments of confusion. Sunny Texts does not diagnose conditions, replace care, or guarantee outcomes.</p>
          <p>It helps families create a lightweight daily touchpoint through the tool many older adults already use: text messaging.</p>
        </div>
      </section>
    </>
  );
}
