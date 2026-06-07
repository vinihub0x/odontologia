import './ServiceCard.css';

export function ServiceCard({ icon, name, description, price, onClick }) {
  return (
    <div className="service-card" onClick={onClick}>
      <div className="service-icon">{icon}</div>
      <h3>{name}</h3>
      <p className="service-description">{description}</p>
      <p className="service-price">{price}</p>
    </div>
  );
}
