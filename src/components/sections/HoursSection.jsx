import './HoursSection.css';

export function HoursSection() {
  const schedule = [
    { day: 'Segunda', hours: '08:00 - 18:00' },
    { day: 'Terça', hours: '08:00 - 18:00' },
    { day: 'Quarta', hours: '08:00 - 18:00' },
    { day: 'Quinta', hours: '08:00 - 18:00' },
    { day: 'Sexta', hours: '08:00 - 18:00' },
    { day: 'Sábado', hours: '08:00 - 12:00' },
    { day: 'Domingo', hours: 'Fechado' },
  ];

  return (
    <section className="hours">
      <div className="container">
        <div className="section-header">
          <h2>Horários de Atendimento</h2>
          <p>Estamos aqui para cuidar do seu sorriso</p>
        </div>

        <div className="hours-content">
          <div className="hours-table">
            <table>
              <tbody>
                {schedule.map((item, index) => (
                  <tr key={index} className={item.hours === 'Fechado' ? 'closed' : ''}>
                    <td className="day">{item.day}</td>
                    <td className="hours">{item.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="hours-info">
            <h3>Informações Importantes</h3>
            <ul>
              <li>📞 Agende sua consulta com antecedência</li>
              <li>🚨 Atendimento emergencial disponível 24h</li>
              <li>💳 Aceitamos diversos meios de pagamento</li>
              <li>🅿️ Estacionamento gratuito na clínica</li>
              <li>♿ Acessibilidade garantida para PCDs</li>
            </ul>

            <div className="contact-highlight">
              <p><strong>WhatsApp:</strong> (11) 99999-9999</p>
              <p><strong>Telefone:</strong> (11) 3000-0000</p>
              <p><strong>E-mail:</strong> contato@belossorriso.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
