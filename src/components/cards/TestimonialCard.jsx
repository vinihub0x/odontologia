import './TestimonialCard.css';

export function TestimonialCard({ name, comment, rating, service }) {
  const stars = Array(rating).fill('★');

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-stars">
          {stars.map((_, i) => (
            <span key={i} className="star">★</span>
          ))}
        </div>
        <p className="testimonial-service">{service}</p>
      </div>
      <p className="testimonial-comment">"{comment}"</p>
      <p className="testimonial-name">— {name}</p>
    </div>
  );
}
