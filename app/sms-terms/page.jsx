import Image from 'next/image';

export const metadata = {
  title: 'SMS Terms | Sunny Texts',
};

export default function SmsTermsPage() {
  return (
    <section className="page-hero">
      <div className="container legal">
        <h1>Sunny Texts SMS Terms</h1>

        <p>
          By opting in to receive text messages from Sunny Texts, you agree to
          receive recurring conversational and account-related SMS messages.
        </p>

        <p>
          Message frequency varies. Message and data rates may apply. Reply STOP
          to cancel or HELP for help.
        </p>

        <p>Consent is not a condition of purchase.</p>

        <div style={{ marginTop: '36px', marginBottom: '36px' }}>
          <Image
            src="/optin.jpg"
            alt="Sunny Texts SMS opt-in example"
            width={1000}
            height={600}
            className="screenshot"
          />
        </div>

        <h2>Contact</h2>

        <p>
          Email: sunny@sunnytexts.com
          <br />
          Call/Text: (855) 463-6694
        </p>
      </div>
    </section>
  );
}