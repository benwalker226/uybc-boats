import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; error?: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setResult({ success: true });
        setName("");
        setMessage("");
      } else {
        setResult({ success: false, error: data.error || "Unknown error" });
      }
    } catch (err) {
      setResult({ success: false, error: "Network error" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="main-center-container">
      <div className="form-box">
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Contact Us</h1>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            disabled={submitting}
            placeholder="Your Name"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            maxLength={1000}
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            disabled={submitting}
            placeholder="How can we help you?"
          />

          <button
            type="submit"
            className="button-primary"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Submit"}
          </button>
          {result?.success && (
            <div className="success-message" role="status">
              Thank you for reaching out! We'll be in touch soon.
            </div>
          )}
          {result?.success === false && (
            <div className="error-message" role="alert">
              {result.error}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}