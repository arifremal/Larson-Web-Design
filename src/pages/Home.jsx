import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

const reasons = [
  {
    n: '01',
    title: 'Clear & welcoming',
    text: 'Visitors find what they need without feeling lost or overwhelmed.',
  },
  {
    n: '02',
    title: 'True to your business',
    text: 'Your colors, voice, and story come together in a site that genuinely feels like you.',
  },
  {
    n: '03',
    title: 'Ready to grow',
    text: 'A flexible, responsive foundation supports your business as it evolves.',
  },
]

const services = [
  {
    n: '01',
    title: 'Website design & redesign',
    text: 'A professional, easy-to-use website shaped around your business and customers.',
    image: '/images/service-web.jpg',
  },
  {
    n: '02',
    title: 'Brand identity',
    text: 'A cohesive logo, palette, and visual style that people remember.',
    image: '/images/service-brand.jpg',
  },
  {
    n: '03',
    title: 'Website care',
    text: 'Dependable updates and support to keep your website working well.',
    image: '/images/service-care.jpg',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <p className="hero-watermark" aria-hidden="true">
          Larson
        </p>
        <div className="container hero-grid">
          <Reveal>
            <p className="eyebrow">Thoughtful designs for real people</p>
            <h1>
              A website that feels like <em>you</em>—and works for your business.
            </h1>
            <p className="lead">
              Warm, accessible websites designed with care, so your customers feel welcome and you
              feel confident sharing your business online.
            </p>
            <div className="actions">
              <Link className="btn primary" to="/contact">
                Let’s work together <span aria-hidden="true">→</span>
              </Link>
              <Link className="btn secondary" to="/portfolio">
                View our work <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className="trust">
              <li>Accessible by design</li>
              <li>Made for every screen</li>
              <li>Personal support</li>
            </ul>
          </Reveal>

          <Reveal className="hero-visual" delay={120}>
            <div className="hero-frame">
              <img
                src="/images/hero-studio.jpg"
                alt="A modern website design shown on a studio laptop"
              />
            </div>
            <img className="hero-butterfly" src="/images/butterfly.png" alt="" />
            <div className="float-card n2">
              <strong>Design with purpose</strong>
              <small>Support with heart.</small>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>
              Creative <i>♡</i> Thoughtful <i>♡</i> Personal
            </span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal className="heading center">
            <p className="eyebrow">Why Larson Web Design</p>
            <h2>A thoughtful website does more than look beautiful.</h2>
            <p>Good design helps people understand your business, trust what you do, and take the next step.</p>
          </Reveal>
          <div className="reason-grid three">
            {reasons.map((item, i) => (
              <Reveal key={item.n} delay={i * 80}>
                <article className="reason-card">
                  <span>{item.n}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">How I can help</p>
            <h2>Everything your online presence needs—without the overwhelm.</h2>
            <p>I’ll guide you through the process with clear communication and thoughtful recommendations.</p>
            <Link className="text-link" to="/services">
              View all services
            </Link>
          </Reveal>
          <div className="home-services">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 70}>
                <article className="home-service">
                  <img src={service.image} alt="" />
                  <div>
                    <span>{service.n}</span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="heading heading-row">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Made for real businesses and real people.</h2>
            </div>
            <Link className="btn secondary" to="/portfolio">
              See the portfolio <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <div className="featured-grid">
            <Reveal>
              <Link className="project-tile" to="/portfolio">
                <div className="project-media">
                  <img src="/images/s2s_screenshot.webp" alt="Sews2Sews website" />
                  <em>Website design</em>
                </div>
                <span>Sews2Sews</span>
                <h3>A bright, inviting home for one-of-a-kind sewn goods.</h3>
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <Link className="project-tile offset" to="/portfolio">
                <div className="project-media">
                  <img src="/images/thenailhive_screenshot.webp" alt="The Nail Hive website" />
                  <em>Website redesign</em>
                </div>
                <span>The Nail Hive</span>
                <h3>A polished digital experience with personality and clarity.</h3>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about-band">
        <div className="container about-preview">
          <Reveal>
            <div className="about-photo">
              <img src="/images/sabrina-portrait.jpg" alt="Sabrina, designer behind Larson Web Design" />
            </div>
          </Reveal>
          <Reveal delay={90}>
            <p className="eyebrow">Personal, one-on-one service</p>
            <h2>A partner who truly cares about your business.</h2>
            <p>
              I believe building a website should feel exciting—not intimidating. You’ll receive
              clear communication, thoughtful guidance, and dependable support from the first idea
              through launch and beyond.
            </p>
            <Link className="text-link" to="/about">
              Why choose Larson Web Design
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <Reveal>
            <img className="cta-butterfly" src="/images/butterfly.png" alt="" />
            <p className="eyebrow">Ready when you are</p>
            <h2>Let’s create something you’ll be proud to share.</h2>
            <p>Tell me about your business, your ideas, and where you’d like to go next.</p>
            <Link className="btn cream" to="/contact">
              Start your project <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
