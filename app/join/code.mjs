// Pure browser helper. Never resolves an invitation or contacts the backend.
export function codeFromFragment(fragment) {
  const params = new URLSearchParams(fragment.replace(/^#/, ""));
  if (params.getAll("c").length !== 1) return null;
  const value = params.get("c");
  if (/^[A-HJ-NP-Z2-9]{8}$/i.test(value)) return value.toUpperCase();
  if (/^[a-f0-9]{48}$/i.test(value)) return value.toLowerCase();
  return null;
}

export function joinSmsUri(code, userAgent = "", touchPoints = 0) {
  if (!/^(?:[A-HJ-NP-Z2-9]{8}|[a-f0-9]{48})$/.test(code)) return null;
  const apple = /iPhone|iPad|iPod/.test(userAgent) ||
    (/Macintosh/.test(userAgent) && touchPoints > 1);
  return `sms:+18554636694${apple ? "&" : "?"}body=${encodeURIComponent(`JOIN ${code}`)}`;
}
