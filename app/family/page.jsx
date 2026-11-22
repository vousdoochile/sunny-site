import Image from "next/image";
import Link from "next/link";
import FamilyStart from "./FamilyStart";
import styles from "./family.module.css";

const portal = "https://billing.stripe.com/p/login/6oU28sd6rfZf0Jg7Js0ZW00";

export const metadata = {
  title: "A little sunshine for someone you love | Sunny Texts Family",
  description:
    "Sponsor friendly daily AI text conversations for a loved one. They choose to join; you handle billing. A 10-day free trial, then $6.99/month.",
  alternates: { canonical: "https://www.sunnytexts.com/family" },
  openGraph: {
    title: "A little sunshine for someone you love.",
    description:
      "Friendly daily texts. Their choice to join. 10 days free, then $6.99/month.",
    url: "https://www.sunnytexts.com/family",
    type: "website",
    images: [
      {
        url: "https://www.sunnytexts.com/sunny-texts-logo.png",
        alt: "Sunny Texts",
      },
    ],
  },
};

const questions = [
  [
    "What does my loved one receive?",
    "Friendly daily texts and AI-powered conversation through regular SMS. There’s no app to install or password to remember. A phone that can send and receive texts is all they need.",
  ],
  [
    "Will Sunny text them before they agree?",
    "No. You receive a private share code and pass it along yourself. Sunny sends the consent prompt only after your loved one texts JOIN with their code from the intended phone. They must then reply YES before you receive Checkout.",
  ],
  [
    "When does the free trial start?",
    "After your loved one says YES and you complete Stripe Checkout. Your 10-day free trial is followed by $6.99 per month, automatically renewing unless you cancel before the trial or next billing date. Starting an invitation does not start a trial or create a charge.",
  ],
  [
    "Can I see their conversations or a caregiver dashboard?",
    "This plan sponsors SMS for your loved one. It does not include a family dashboard, conversation access, caregiver metrics, or monitoring alerts.",
  ],
  [
    "What if they want to stop?",
    "They can reply STOP to opt out of texts and START to opt back in. STOP does not cancel your subscription. You manage or cancel billing separately through the Stripe Customer Portal.",
  ],
  [
    "Is Sunny a person or a care service?",
    "Sunny is an AI text companion, not a human caregiver, medical service, or emergency service. It does not monitor safety or replace personal contact. For emergencies, contact your local emergency services.",
  ],
];

export default function FamilyPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#family-main">
        Skip to content
      </a>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Sunny Texts home">
          <Image src="/sun.png" alt="" width={44} height={44} />
          <span>
            Sunny Texts<small>FOR SOMEONE YOU LOVE</small>
          </span>
        </Link>
        <nav aria-label="Family navigation">
          <a className={styles.howLink} href="#how-it-works">
            How it works
          </a>
          <a className={styles.headerButton} href="#start-family">
            Get started <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <div id="family-main">
        <section className={styles.hero} aria-labelledby="family-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true">✦</span> A DAILY CONNECTION. A FAMILIAR
              TEXT.
            </p>
            <h1 id="family-title">
              A little sunshine
              <br />
              for someone
              <br />
              you <em>love.</em>
            </h1>
            <p className={styles.lead}>
              You can’t always be there. A friendly text can.
            </p>
            <p className={styles.intro}>
              Sponsor Sunny’s daily AI text conversations for a parent or loved
              one. They choose to join. You take care of the subscription.
            </p>
            <a className={styles.primaryButton} href="#start-family">
              Start their invitation <span aria-hidden="true">↗</span>
            </a>
            <p className={styles.priceLine}>
              <strong>10 days free.</strong> Then $6.99/month. Cancel anytime.
            </p>
            <div className={styles.heroChecks}>
              <span>✓ No app to learn</span>
              <span>✓ Their choice, always</span>
              <span>✓ Secure Stripe Checkout</span>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.orbit} aria-hidden="true" />
            <div className={styles.phone}>
              <div className={styles.phoneTop}>
                <span>9:41</span>
                <span aria-hidden="true">••• ▰</span>
              </div>
              <div className={styles.phoneContact}>
                <Image src="/sun.png" alt="" width={48} height={48} />
                <strong>
                  Sunny Texts <span aria-hidden="true">☀</span>
                </strong>
                <span>Your AI text companion</span>
              </div>
              <div className={styles.phoneMessages}>
                <div className={styles.messageDate}>
                  A LITTLE EVERYDAY CONVERSATION
                </div>
                <div className={styles.incoming}>
                  Good morning! ☀ What’s one little thing you’re looking
                  forward to today?
                </div>
                <div className={styles.outgoing}>
                  Coffee on the porch. And maybe a visit from my grandson.
                </div>
                <div className={styles.incoming}>
                  That sounds like a lovely kind of day. What do you two like
                  doing together?
                </div>
                <div className={styles.typing} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className={styles.phoneInput} aria-hidden="true">
                <span>Text Message</span>
                <b>↑</b>
              </div>
            </div>
            <p className={styles.exampleCaption}>
              Illustrative conversation. Not a customer testimonial.
            </p>
          </div>
        </section>

        <div className={styles.promiseStrip}>
          <p>
            <strong>You’re the sponsor.</strong> They’re in control.
          </p>
          <p>
            Regular SMS <span aria-hidden="true">✦</span> No app download{" "}
            <span aria-hidden="true">✦</span> No shared passwords
          </p>
        </div>

        <section
          className={styles.stepsSection}
          id="how-it-works"
          aria-labelledby="steps-title"
        >
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>A SIMPLE START, TOGETHER</p>
            <h2 id="steps-title">
              You invite.
              <br />
              They decide. <em>Sunny says hello.</em>
            </h2>
            <p>
              Talk with your loved one first. Their participation is always
              their choice.
            </p>
          </div>
          <ol className={styles.steps}>
            <li>
              <span className={styles.stepNumber}>01</span>
              <div className={styles.stepIcon} aria-hidden="true">
                ↗
              </div>
              <h3>Start & share</h3>
              <p>
                From your phone, text <strong>FAMILY</strong> followed by their
                mobile number to <strong>(855) 463-6694</strong>. Only you
                receive the private, expiring share code. Pass it along
                yourself.
              </p>
              <span className={styles.stepTag}>YOU → YOUR LOVED ONE</span>
            </li>
            <li>
              <span className={styles.stepNumber}>02</span>
              <div className={styles.stepIcon} aria-hidden="true">
                ♡
              </div>
              <h3>They JOIN, then say YES</h3>
              <p>
                They text <strong>JOIN &lt;code&gt;</strong> to Sunny from that
                same number, read the disclosure, and reply <strong>YES</strong>
                . Sunny never sends them an unsolicited first text.
              </p>
              <span className={styles.stepTag}>THEIR PHONE. THEIR CHOICE.</span>
            </li>
            <li>
              <span className={styles.stepNumber}>03</span>
              <div className={styles.stepIcon} aria-hidden="true">
                ☀
              </div>
              <h3>You handle the rest</h3>
              <p>
                After their YES, you receive your secure Checkout link. Complete
                Checkout to start the <strong>10-day free trial</strong>. They
                get Sunny Texts; you manage the billing.
              </p>
              <span className={styles.stepTag}>THEN $6.99 / MONTH</span>
            </li>
          </ol>
        </section>

        <section
          className={styles.startSection}
          id="start-family"
          aria-labelledby="start-title"
        >
          <div className={styles.startCopy}>
            <p className={styles.eyebrow}>A THOUGHTFUL LITTLE GIFT</p>
            <h2 id="start-title">
              Make room for
              <br />
              <em>one more hello.</em>
            </h2>
            <p>
              A daily conversation can start with one simple invitation from
              you.
            </p>
            <div className={styles.pricing}>
              <span>10 days free</span>
              <strong>
                $6.99<small>/ month after trial</small>
              </strong>
              <p>
                One sponsored recipient. Automatically renews after the trial
                unless canceled. Manage or cancel anytime through{" "}
                <a href={portal}>Stripe’s Customer Portal</a>.
              </p>
            </div>
          </div>
          <FamilyStart />
        </section>

        <section className={styles.faqSection} aria-labelledby="faq-title">
          <div className={styles.faqIntro}>
            <p className={styles.eyebrow}>A FEW GOOD QUESTIONS</p>
            <h2 id="faq-title">
              Good to know.
              <br />
              <em>Easy to understand.</em>
            </h2>
            <p>
              Need a hand? We’re at{" "}
              <a href="mailto:sunny@sunnytexts.com">sunny@sunnytexts.com</a>.
            </p>
          </div>
          <div className={styles.faqList}>
            {questions.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <Link href="/" className={styles.footerBrand}>
            Sunny Texts <span aria-hidden="true">☀</span>
          </Link>
          <p>A little connection goes a long way.</p>
          <a href={portal}>Manage / Cancel Billing ↗</a>
        </div>
        <p>
          Sunny Texts is an AI companion for adults 18+, not medical care,
          safety monitoring, or an emergency service. Sponsored SMS only; no
          family dashboard or conversation access is included.
        </p>
        <p>
          Recurring SMS; message frequency varies. Message and data rates may
          apply. Reply STOP to opt out of texts or HELP for help. Consent is not
          a condition of purchase. STOP does not cancel sponsor billing. Cancel
          your trial or subscription through the Stripe Customer Portal or
          contact <a href="mailto:sunny@sunnytexts.com">sunny@sunnytexts.com</a>
          .
        </p>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Sunny Texts</span>
          <nav aria-label="Family legal links">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/sms-terms">SMS Terms</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </footer>
      <a className={styles.mobileCta} href="#start-family">
        Invite someone you love <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
