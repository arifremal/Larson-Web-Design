import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import PageHero from '../components/PageHero.jsx'

const initial = {
  name: '',
  business: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  website: '',
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)

  function update(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function submit(event) {
    event.preventDefault()
    if (form.website) return

    const body = [
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      '',
      form.message,
    ].join('\n')

    window.location.href = `mailto:contact@larsonwebdesign.com?subject=${encodeURIComponent(
      `Project inquiry from ${form.name}`,
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Start your project"
        title="Tell me about your business and what you need."
        text="You don’t need to have every detail planned before reaching out. Tell me what is working, what needs to change, and what you hope your website or brand will accomplish."
      />

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <h2>A good project starts with listening.</h2>
            <p>Share your ideas, questions, and goals, and we’ll begin with the next practical step.</p>
            <a className="mail-link" href="mailto:contact@larsonwebdesign.com">
              contact@larsonwebdesign.com
            </a>
            <img
              className="contact-photo"
              src="/images/contact-studio.jpg"
              alt="A warm, inviting design studio space"
            />
          </Reveal>

          {sent ? (
            <Reveal className="form success-card">
              <p className="eyebrow dark">Thank you</p>
              <h2>Your project details are ready to send.</h2>
              <p>
                If your email app did not open, write to{' '}
                <a href="mailto:contact@larsonwebdesign.com">contact@larsonwebdesign.com</a> and I
                will get back to you soon.
              </p>
            </Reveal>
          ) : (
            <Reveal>
              <form className="form" onSubmit={submit}>
                <div className="form-grid">
                  <label>
                    Name
                    <input name="name" value={form.name} onChange={update} required />
                  </label>
                  <label>
                    Business
                    <input name="business" value={form.business} onChange={update} />
                  </label>
                  <label>
                    Email
                    <input type="email" name="email" value={form.email} onChange={update} required />
                  </label>
                  <label>
                    Phone
                    <input name="phone" value={form.phone} onChange={update} />
                  </label>
                </div>
                <label>
                  Service
                  <select name="service" value={form.service} onChange={update} required>
                    <option value="">Choose one</option>
                    <option>Custom Website Design</option>
                    <option>Logo &amp; Brand Design</option>
                    <option>Website Redesign</option>
                    <option>Website Care</option>
                    <option>Not Sure Yet</option>
                  </select>
                </label>
                <label>
                  Project details
                  <textarea
                    name="message"
                    rows="7"
                    value={form.message}
                    onChange={update}
                    required
                  />
                </label>
                <input
                  className="hp"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  value={form.website}
                  onChange={update}
                />
                <button className="btn primary" type="submit">
                  Send Project Details
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}
