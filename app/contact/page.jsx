import ContactForm from '../../components/ContactForm';

export const metadata = { title: 'Contact | Sunny Texts' };

export default function ContactPage() {
  return (
    <section className="page-hero">
      <div className="container grid-2">
        <div>
          <p className="kicker">Contact</p>
          <h1>Tell us how Sunny can help.</h1>
          <p className="lead">Choose the option that fits your interest: start Sunny Texts, join the Sunny Vision waitlist, explore a caregiver or facility pilot, or contact us about an investor or partner inquiry.</p>
          <div className="card">
            <h3>Direct contact</h3>
            <p>Email: sunny@sunnytexts.com</p>
          </div>
        </div>
        <div className="card">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
