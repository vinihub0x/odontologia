import './ContactSection.css';

export function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Entre em Contato</h2>
          <p>Estamos prontos para atender você</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Telefone</h4>
                <p>(11) 3000-0000</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💬</div>
              <div>
                <h4>WhatsApp</h4>
                <p>(11) 99999-9999</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>E-mail</h4>
                <p>contato@belossorriso.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Endereço</h4>
                <p>Rua do Sorriso, 123<br />São Paulo, SP 01234-567</p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-placeholder">
              <div className="map-content">
                <div className="map-icon">🗺️</div>
                <p>Mapa interativo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
