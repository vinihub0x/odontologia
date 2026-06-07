import { Button } from '../ui';
import './HeroSection.css';

export function HeroSection({ onScheduleClick, onBudgetClick }) {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Seu sorriso merece o melhor cuidado
          </h1>
          <p className="hero-subtitle">
            Clínica odontológica moderna com profissionais qualificados, oferecendo os melhores tratamentos para sua saúde bucal
          </p>

          <div className="hero-buttons">
            <Button
              variant="primary"
              size="lg"
              onClick={onScheduleClick}
              className="animate-bounce"
            >
              Agendar Consulta
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onBudgetClick}
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-emoji">🦷</div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}
