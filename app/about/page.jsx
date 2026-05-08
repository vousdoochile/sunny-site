import Image from 'next/image';

export const metadata = {
  title: 'About Sunny | Sunny Texts',
};

export default function AboutPage() {
  return (
    <section className="page-hero">
      <div className="container grid-2">
        <div>
          <p className="kicker">About Sunny</p>

          <h1>Built from family experience. Designed for simple daily connection.</h1>

          <p className="lead">
            Sunny was created to help families stay connected through simple, human daily communication.
          </p>

          <p>
            Founder Dean Reese built Sunny after watching multiple older siblings face Alzheimer’s,
            dementia, or both. Two of them have since passed away. One loss became especially personal
            because Sunny was originally being built to help support his sister before it was too late.
          </p>

          <p>
            That experience changed the mission completely.
          </p>

          <p>
            Sunny was designed around a simple reality. Families care deeply about their loved ones,
            but life gets busy. Adult children cannot always call every day. Caregivers cannot always
            be present. Silence, confusion, or missed communication can become serious warning signs.
          </p>

          <p>
            Sunny Texts provides warm daily SMS conversations for older adults using familiar technology
            they already understand: texting. The platform remembers personal details, maintains friendly
            conversation, and can escalate to a trusted emergency contact when concern signals or missed
            responses appear.
          </p>

          <p>
            Sunny Vision is the next layer of the platform, focused on real-time guidance, caregiver
            visibility, and support during moments of confusion.
          </p>

          <p>
            Dean Reese holds the Artificial Intelligence Governance Professional certification and has
            hands-on experience building AI systems, workflow automation, SMS infrastructure, and
            real-time caregiver support tools using technologies including OpenAI, Twilio, Supabase,
            Stripe, and Vercel.
          </p>

          <div className="card">
            <h3>Sunny’s mission</h3>
            <p>
              Help older adults feel connected. Help families worry less. Help prevent moments of silence
              from becoming emergencies.
            </p>
          </div>
        </div>

        <div className="hero-card">
          <Image
            className="screenshot"
            src="/DR.jpg"
            alt="Dean Reese, founder of Sunny Texts"
            width={900}
            height={1100}
            priority
          />
        </div>
      </div>
    </section>
  );
}