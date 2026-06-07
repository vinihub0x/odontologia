import { TeamCard } from '../cards';
import { teamData } from '../../data/team';
import './TeamSection.css';

export function TeamSection() {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-header">
          <h2>Nossa Equipe</h2>
          <p>Profissionais altamente qualificados e dedicados</p>
        </div>

        <div className="team-grid">
          {teamData.map((member) => (
            <div key={member.id} className="team-item">
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
