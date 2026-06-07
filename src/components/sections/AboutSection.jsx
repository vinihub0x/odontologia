import './AboutSection.css';

export function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>Sobre Clínica Belo Sorriso</h2>
          <p>Conheça nossa história e compromisso com você</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Nossa História</h3>
            <p>
              A Clínica Belo Sorriso foi fundada há mais de 15 anos com a missão de proporcionar atendimento odontológico de excelência. Ao longo desses anos, conquistamos a confiança de milhares de pacientes que viram seus sorrisos transformarem completamente.
            </p>
            <p>
              Nossa equipe é composta por profissionais altamente qualificados e atualizados com as mais recentes tecnologias e técnicas em odontologia. Cada paciente recebe um atendimento personalizado e dedicado.
            </p>
          </div>

          <div className="about-values">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h4>Inovação</h4>
              <p>Utilizamos tecnologias de ponta para melhores resultados</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Humanidade</h4>
              <p>Tratamos cada paciente como um membro da família</p>
            </div>

            <div className="value-card">
              <div className="value-icon">✨</div>
              <h4>Excelência</h4>
              <p>Buscamos sempre a qualidade máxima em tudo que fazemos</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h4>Confiança</h4>
              <p>Sua confiança é nossa maior recompensa</p>
            </div>
          </div>
        </div>

        <div className="about-features">
          <div className="feature">
            <h4>15+</h4>
            <p>Anos de experiência</p>
          </div>
          <div className="feature">
            <h4>5000+</h4>
            <p>Pacientes satisfeitos</p>
          </div>
          <div className="feature">
            <h4>100%</h4>
            <p>Satisfação garantida</p>
          </div>
          <div className="feature">
            <h4>24/7</h4>
            <p>Atendimento emergencial</p>
          </div>
        </div>
      </div>
    </section>
  );
}
