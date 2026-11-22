// Prepare a destination only; this does not establish that a handset is reachable.
export function recipientNumber(value) {
  const trimmed = value.trim();
  if (!/^\+?[\d\s().-]+$/.test(trimmed)) return null;
  const digits = trimmed.replace(/\D/g, "");
  const national = /^[2-9]\d{2}[2-9]\d{6}$/;

  // An explicit country code must stand on its own. Never reinterpret invalid
  // international input as a different U.S. number.
  if (trimmed.startsWith("+")) {
    if (!/^[1-9]\d{7,14}$/.test(digits)) return null;
    if (digits.startsWith("1") && !national.test(digits.slice(1))) return null;
    return `+${digits}`;
  }
  if (national.test(digits)) return `+1${digits}`;
  if (digits.startsWith("1") && national.test(digits.slice(1))) return `+${digits}`;
  return null;
}
