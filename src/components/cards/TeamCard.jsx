import './TeamCard.css';

export function TeamCard({ image, name, specialty, bio, experience, credentials }) {
  return (
    <div className="team-card">
      <div className="team-image">{image}</div>
      <div className="team-info">
        <h3>{name}</h3>
        <p className="team-specialty">{specialty}</p>
        <p className="team-bio">{bio}</p>
        <div className="team-meta">
          <span className="team-experience">
            <strong>Experiência:</strong> {experience}
          </span>
          <span className="team-credentials">
            <strong>CRO:</strong> {credentials.split(',')[0]}
          </span>
        </div>
      </div>
    </div>
  );
}
