import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import PageHero from '../components/PageHero.jsx'

export default function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Hi, I’m Sabrina.">
        <p>
          I’m the designer behind Larson Web Design. I create clear, professional websites that help
          small businesses feel confident online and make it easier for customers to connect with
          them.
        </p>
        <p>
          I combine practical website planning with the creative details I enjoy most—organizing
          content, choosing colors, developing logos, and arranging layouts that feel true to each
          business.
        </p>
      </PageHero>

      <section className="section about-page">
        <div className="container about-layout">
          <Reveal>
            <div className="about-frame">
              <img src="/images/sabrina-portrait.jpg" alt="Sabrina, designer behind Larson Web Design" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2>I started Larson Web Design because I love creating.</h2>
            <p>
              I started Larson Web Design because I enjoy helping people turn their ideas into
              something clear, useful, and personal. Every project gives me an opportunity to
              combine creative problem-solving with the practical details that make a website work.
            </p>
            <p>
              My goal is to make the website process feel approachable and create an online presence
              that small-business owners feel proud to use and share.
            </p>
            <blockquote>When your website feels right, your customers feel it too.</blockquote>
            <Link className="btn primary" to="/contact">
              Let’s work together <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
