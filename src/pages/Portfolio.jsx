import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import PageHero from '../components/PageHero.jsx'

const projects = [
  {
    type: 'Business Website',
    title: 'Larson Web Design',
    text: 'A polished, responsive home for Larson Web Design, created to present services clearly, build trust, and make it easy for small-business owners to take the next step.',
    image: '/images/LWD_screenshot.webp',
    alt: 'Homepage of the Larson Web Design website',
    href: '/',
    link: 'View website',
  },
  {
    type: 'Small-Business Website',
    title: 'Sews2Sews',
    text: 'A bright, welcoming website created for a local maker of one-of-a-kind sewn goods. The site presents her creations, explains how to purchase safely, and shares practical sewing and embroidery-machine tutorials.',
    image: '/images/s2s_screenshot.webp',
    alt: 'Homepage of the Sews2Sews handmade sewing business website',
    href: 'https://sews2sews.larsonwebdesign.com/',
    link: 'View live website',
    external: true,
  },
  {
    type: 'Exploratory Web Project',
    title: 'EWTT',
    text: 'An interactive project exploring emerging web trends, including responsive design, progressive web apps, dark mode, SVG effects, and WebVR.',
    image: '/images/ewtt_screenshot.webp',
    alt: 'Homepage of the EWTT website project',
    href: 'https://www.larsonwebdesign.com/ewtt/',
    link: 'View project',
    external: true,
  },
  {
    type: 'Collaborative Website Concept',
    title: 'J.A.R.S.',
    text: 'A collaborative web design concept created to practice team roles, service presentation, responsive layout, and structured business content. The business and contact details shown in the project are fictional.',
    image: '/images/jars_screenshot.webp',
    alt: 'Homepage of the J.A.R.S. website project',
    href: 'https://www.larsonwebdesign.com/jars/',
    link: 'View project',
    external: true,
  },
  {
    type: 'Ecommerce Website Concept',
    title: 'The Nail Hive',
    text: 'A fictional salon and spa website created to explore branded service content, appointment calls to action, newsletter promotion, and an ecommerce storefront.',
    image: '/images/thenailhive_screenshot.webp',
    alt: 'Homepage of The Nail Hive website project',
    href: 'https://larsonwebdesign.com/thenailhive/',
    link: 'View project',
    external: true,
  },
  {
    type: 'Collaborative WordPress Project',
    title: 'Amidst the Trees',
    text: 'A WordPress website developed with support from a classmate for a nature-centered retreat and consulting practice. The project involved evaluating plugins and organizing workshops, retreats, professional services, and team content. The current live site includes changes made after the original build.',
    note: 'The current site may differ from the original project.',
    image: '/images/amidstthetrees_screenshot.webp',
    alt: 'Homepage of the Amidst the Trees website project',
    href: 'https://amidstthetrees.com/',
    link: 'View live website',
    external: true,
  },
  {
    type: 'Archived Website Project',
    title: 'JNJ Roofing & Remodeling',
    text: 'A roofing and remodeling website designed to present services clearly and help local customers connect with the business. The original live site is no longer maintained by Larson Web Design.',
    image: '/images/jnj_screenshot.webp',
    alt: 'Homepage of the JNJ Roofing and Remodeling website project',
    archived: true,
  },
]

export default function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Websites designed with purpose and personality."
        text="Explore a selection of responsive web projects created for small businesses and creative brands. Each one is built around clear communication, thoughtful design, and an experience that feels good on every screen."
      />

      <section className="section portfolio-section">
        <div className="container">
          <h2 className="sr-only">Featured projects</h2>
          <ul className="portfolio-grid">
            {projects.map((project, i) => (
              <li key={project.title}>
                <Reveal delay={(i % 2) * 80}>
                  <article className="project-card">
                    <div className="project-visual">
                      <img src={project.image} alt={project.alt} />
                    </div>
                    <div className="project-content">
                      <p className="project-type">{project.type}</p>
                      <h3>{project.title}</h3>
                      <p>{project.text}</p>
                      {project.note ? (
                        <p className="project-note">
                          <small>{project.note}</small>
                        </p>
                      ) : null}
                      {project.archived ? (
                        <p className="project-archived">Archived project — no live link</p>
                      ) : project.external ? (
                        <a
                          className="project-link"
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.link}
                          <span aria-hidden="true"> →</span>
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : (
                        <Link className="project-link" to={project.href}>
                          {project.link}
                          <span aria-hidden="true"> →</span>
                        </Link>
                      )}
                    </div>
                  </article>
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
              Let's create a clear, welcoming website that reflects your business and helps the
              right customers find you.
            </p>
            <Link className="btn cream" to="/contact">
              Start a project <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
