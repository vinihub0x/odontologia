import './FloatingButton.css';

export function FloatingButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999';
    const message = 'Olá! Gostaria de mais informações sobre os serviços da Clínica Belo Sorriso.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      className="floating-button"
      onClick={handleWhatsAppClick}
      aria-label="Contato via WhatsApp"
      title="Contate-nos via WhatsApp"
    >
      💬
    </button>
  );
}
