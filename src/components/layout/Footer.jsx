import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Clínica Belo Sorriso</h4>
            <p>Sua saúde bucal é nossa prioridade. Cuidamos do seu sorriso com excelência e profissionalismo.</p>
          </div>

          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <ul className="footer-contact">
              <li>
                <strong>Telefone:</strong> (11) 3000-0000
              </li>
              <li>
                <strong>WhatsApp:</strong> (11) 99999-9999
              </li>
              <li>
                <strong>E-mail:</strong> contato@belossorriso.com
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">f</a>
              <a href="#" aria-label="Instagram" className="social-link">📷</a>
              <a href="#" aria-label="WhatsApp" className="social-link">💬</a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Clínica Belo Sorriso. Todos os direitos reservados.</p>
          <p className="footer-notice">Desenvolvido com ❤️ para seu sorriso</p>
        </div>
      </div>
    </footer>
  );
}
