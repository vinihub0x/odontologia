import { ServiceCard } from '../cards';
import { servicesData } from '../../data/services';
import './ServicesSection.css';

export function ServicesSection({ onServiceClick }) {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Nossos Serviços</h2>
          <p>Oferecemos uma ampla gama de procedimentos odontológicos</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} onClick={() => onServiceClick(service)}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
