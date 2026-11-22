"use client";

import { useState } from "react";
import styles from "./family.module.css";

function recipientNumber(value) {
  const trimmed = value.trim();
  const digits = trimmed.replace(/\D/g, "");
  if (!/^\+?[\d\s().-]+$/.test(trimmed)) return null;
  if (trimmed.startsWith("+") && /^\+[1-9]\d{7,14}$/.test(`+${digits}`))
    return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return null;
}

export default function FamilyStart() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [prepared, setPrepared] = useState("");

  function prepare(event) {
    event.preventDefault();
    const number = recipientNumber(phone);
    if (!number) {
      setPrepared("");
      setError(
        "Enter a 10-digit U.S. mobile number, or include the country code (for example, +1).",
      );
      return;
    }
    setError("");
    setPrepared(number);
  }

  const command = `FAMILY ${prepared}`;
  const bodySeparator =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)
      ? "&"
      : "?";

  return (
    <div className={styles.startCard}>
      <div className={styles.cardLabel}>
        <span aria-hidden="true">↗</span> START WITH A TEXT
      </div>
      <h3>Your phone. Their daily sunshine.</h3>
      <p>
        Have your loved one’s mobile number handy. You’ll send the first text
        from <strong>your own phone</strong>.
      </p>
      <form onSubmit={prepare} noValidate>
        <label htmlFor="family-recipient">Your loved one’s mobile number</label>
        <div className={styles.inputRow}>
          <input
            id="family-recipient"
            type="tel"
            inputMode="tel"
            autoComplete="off"
            placeholder="(555) 123-4567"
            value={phone}
            aria-describedby="family-phone-note family-phone-error"
            aria-invalid={Boolean(error)}
            onChange={(event) => {
              setPhone(event.target.value);
              setPrepared("");
              setError("");
            }}
          />
          <button type="submit">
            Prepare my text <span aria-hidden="true">→</span>
          </button>
        </div>
        <p id="family-phone-note" className={styles.small}>
          This stays in your browser. This page does not send texts or submit
          the number.
        </p>
        <p id="family-phone-error" role="alert" className={styles.error}>
          {error}
        </p>
      </form>
      <noscript>
        <p className={styles.small}>
          On your phone, text <code>FAMILY</code> followed by your loved one’s
          mobile number (including country code) to{" "}
          <strong>(855) 463-6694</strong>. This page needs JavaScript only to
          prepare that text for you.
        </p>
      </noscript>
      {prepared && (
        <div className={styles.prepared} role="status">
          <p>
            <strong>Ready to send from your phone</strong>
          </p>
          <a
            className={styles.primaryButton}
            href={`sms:+18554636694${bodySeparator}body=${encodeURIComponent(command)}`}
          >
            Open my text message <span aria-hidden="true">↗</span>
          </a>
          <p className={styles.small}>
            On a computer? Open Messages on your phone and text{" "}
            <code>{command}</code> to <strong>(855) 463-6694</strong>. Review
            it, then tap Send.
          </p>
        </div>
      )}
      <div className={styles.startFoot}>
        No payment today. Checkout comes only after they say YES.
      </div>
    </div>
  );
}
