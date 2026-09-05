export default function Logo({ compact = false }) {
  return (
    <span className={`brand-compact ${compact ? 'is-compact' : ''}`}>
      <img className="butterfly" src="/images/butterfly.png" alt="" />
      <span>
        <strong>Larson</strong>
        <small>Web Design</small>
      </span>
    </span>
  )
}
