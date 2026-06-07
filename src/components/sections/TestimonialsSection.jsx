import { TestimonialCard } from '../cards';
import { testimonialsData } from '../../data/testimonials';
import './TestimonialsSection.css';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Depoimentos de Pacientes</h2>
          <p>Veja o que nossos pacientes dizem sobre nós</p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
