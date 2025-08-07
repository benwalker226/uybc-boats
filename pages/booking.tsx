import React, { useState } from 'react';
import Head from 'next/head';

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Boat Damage/Repair Report | UYBC Boat Management</title>
      </Head>
      <main className="main-center-container">
        {!submitted ? (
          <div className="form-box">
            <form onSubmit={handleSubmit}>
              <h1>Boat Damage/Repair Report</h1>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button className="button-primary" type="submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        ) : (
          <div className="success-message">Thank you for your boat damage/repair report!</div>
        )}
      </main>
    </>
  );
}