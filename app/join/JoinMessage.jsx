"use client";
import { useEffect, useState } from "react";
import { codeFromFragment, joinSmsUri } from "./code.mjs";
import styles from "./join.module.css";

export default function JoinMessage() {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    function read() {
      const code = codeFromFragment(window.location.hash);
      setMessage(code ? { code, uri: joinSmsUri(code, navigator.userAgent, navigator.maxTouchPoints) } : null);
    }
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);
  return <section aria-label="Your invitation" className={styles.card}>
    {message ? <>
      <h2>Ready to say hello?</h2>
      <p>Use the phone your sponsor invited. Tap below, review the message, then tap <strong>Send</strong>.</p>
      <a className={styles.button} href={message.uri}>Open my text message ↗</a>
      <p>Or open Messages yourself and send:</p>
      <p className={styles.command}><code>JOIN {message.code}</code></p>
      <p>to <strong>(855) 463-6694</strong>.</p>
      <p className={styles.small}>This page does not check whether your code is still valid. Invitations expire after 24 hours and work only from the invited phone.</p>
    </> : <>
      <h2>Open your private invitation</h2>
      <p>Use the complete link your sponsor shared, or text <strong>JOIN</strong> followed by their code to <strong>(855) 463-6694</strong> from your invited phone.</p>
      <p>If the link is incomplete or expired, ask your sponsor for a fresh invitation.</p>
    </>}
    <noscript><p>JavaScript is needed only for the button. You can still text JOIN followed by your sponsor’s code to (855) 463-6694.</p></noscript>
  </section>;
}
