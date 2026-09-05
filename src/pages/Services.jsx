import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import PageHero from '../components/PageHero.jsx'

const offerings = [
  {
    title: 'Custom Website Design',
    text: 'Build a custom website that reflects your business, works beautifully on every device, and gives customers confidence in your brand.',
    image: '/images/service-web.jpg',
  },
  {
    title: 'Logo & Brand Design',
    text: 'Create a professional visual identity with a custom logo, coordinated colors, and branding that helps your business stand out.',
    image: '/images/service-brand.jpg',
  },
  {
    title: 'Website Redesign',
    text: 'Give your existing website a fresh, modern look with improved navigation, updated content, and a better experience for your visitors.',
    image: '/images/devices-mock.jpg',
  },
  {
    title: 'Website Care',
    text: 'Your website should grow with your business. I provide ongoing maintenance, content updates, troubleshooting, and improvements so your site stays current.',
    image: '/images/service-care.jpg',
  },
]

const expectations = [
  {
    title: 'Personalized Service',
    text: 'Work directly with me from the first conversation through launch.',
  },
  {
    title: 'Mobile-Friendly Design',
    text: 'Your website will work comfortably across phones, tablets, and desktop screens.',
  },
  {
    title: 'SEO Foundations',
    text: 'Clear page structure and essential search-friendly details help search engines understand your website.',
  },
  {
    title: 'Clear Communication',
    text: 'Receive straightforward updates and know what to expect throughout your project.',
  },
  {
    title: 'Support After Launch',
    text: 'When your website needs changes or improvements, you’ll know who to contact.',
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Website services designed around your small business."
        text="From custom websites and redesigns to visual branding and ongoing website care, choose the support that fits your business now and as it grows."
      />

      <section className="section">
        <div className="container service-grid">
          {offerings.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <article className="offer-card">
                <div className="offer-photo">
                  <img src={item.image} alt="" />
                </div>
                <div className="offer-body">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section expect">
        <div className="container expect-layout">
          <Reveal>
            <p className="eyebrow dark">Working together</p>
            <h2>What You Can Expect</h2>
            <p>
              A website project should feel clear and manageable. You’ll receive personal attention,
              straightforward communication, and practical support throughout the process.
            </p>
            <img
              className="expect-photo"
              src="/images/contact-studio.jpg"
              alt="A welcoming design studio ready for collaboration"
            />
          </Reveal>
          <ul className="expect-list">
            {expectations.map((item, i) => (
              <li key={item.title} className="expect-item">
                <Reveal delay={i * 60}>
                  <div className="expect-row">
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta compact">
        <div className="container cta-inner">
          <Reveal>
            <h2>Have a website project in mind?</h2>
            <p>
              Let’s create a clear, welcoming website that reflects your business and helps the
              right customers find you.
            </p>
            <Link className="btn cream" to="/contact">
              Let’s work together <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
