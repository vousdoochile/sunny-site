import JoinMessage from "./JoinMessage";
import styles from "./join.module.css";

export const metadata = {
  title: "Join your Sunny Texts invitation",
  description: "Open a text to Sunny from your invited phone. Joining is always your choice.",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default function JoinPage() {
  return <div className={styles.page}>
    <a href="/family" className={styles.brand}>☀ Sunny Texts</a>
    <h1>A little sunshine.<br />Your choice to join.</h1>
    <p className={styles.intro}>Someone who cares about you would like to sponsor your Sunny Texts conversations.</p>
    <JoinMessage />
    <section className={styles.next}>
      <h2>What happens next?</h2>
      <p>After you send JOIN, Sunny will text you the details. Read them, then reply <strong>YES</strong> if you want to join, or <strong>NO</strong> to decline. Your sponsor receives Checkout only after your YES.</p>
      <p>Opening this page sends no text and does not sign you up. If you previously replied STOP, you must text START yourself before joining.</p>
      <p className={styles.small}>Sunny is an AI text companion, not medical care or an emergency service. Recurring SMS; frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help. STOP does not cancel sponsor billing.</p>
      <nav aria-label="Invitation information"><a href="/sms-terms">SMS Terms</a><a href="/privacy">Privacy</a><a href="mailto:sunny@sunnytexts.com">Help</a></nav>
    </section>
  </div>;
}
