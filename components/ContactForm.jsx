import SmsDisclosure from './SmsDisclosure';

export default function ContactForm() {
  return (
    <form className="form" action="mailto:sunny@sunnytexts.com" method="post" encType="text/plain">
      <input className="input" name="name" placeholder="Your name" required />
      <input className="input" name="email" placeholder="Email address" type="email" required />
      <input className="input" name="phone" placeholder="Phone number" />
      <select className="select" name="interest" defaultValue="Start Sunny Texts">
        <option>Start Sunny Texts</option>
        <option>Join Sunny Vision waitlist</option>
        <option>Caregiver or facility pilot</option>
        <option>Investor or partner inquiry</option>
      </select>
      <textarea name="message" placeholder="How can we help?" />
      <label className="check">
        <input type="checkbox" required />
        <span>I agree to receive SMS messages from Sunny Texts.</span>
      </label>
      <SmsDisclosure />
      <button className="btn btn-primary" type="submit">Send message</button>
    </form>
  );
}
