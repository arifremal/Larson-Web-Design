import Reveal from './Reveal.jsx'

export default function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="page-hero">
      <img className="page-hero-mark" src="/images/butterfly.png" alt="" />
      <div className="container narrow">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {text ? <p>{text}</p> : null}
          {children}
        </Reveal>
      </div>
    </section>
  )
}
