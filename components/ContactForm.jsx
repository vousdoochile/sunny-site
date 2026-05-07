export default function ContactForm() {
  return (
    <form
      className="form"
      action="https://formsubmit.co/sunny@sunnytexts.com"
      method="POST"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_subject"
        value="Sunny Contact Form Submission"
      />

      <input className="input" name="name" placeholder="Your name" required />

      <input
        className="input"
        name="email"
        placeholder="Email address"
        type="email"
        required
      />

      <input
        className="input"
        name="phone"
        placeholder="Phone number optional"
        type="tel"
      />

      <select className="select" name="interest" defaultValue="General inquiry">
        <option>General inquiry</option>
        <option>Sunny Texts question</option>
        <option>Join Sunny Vision waitlist</option>
        <option>Caregiver or facility pilot</option>
        <option>Investor or partner inquiry</option>
      </select>

      <textarea
        className="input"
        name="message"
        placeholder="How can we help?"
        required
      />

      <button className="btn btn-primary" type="submit">
        Submit inquiry
      </button>
    </form>
  );
}