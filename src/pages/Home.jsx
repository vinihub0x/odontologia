import { useState } from 'react';
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  TeamSection,
  TestimonialsSection,
  HoursSection,
  ContactSection,
} from '../components/sections';
import { Modal, SuccessModal } from '../components/ui';
import { AppointmentForm, BudgetForm, PaymentForm } from '../components/forms';
import './Home.css';

export function Home() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [budgetModalOpen, setBudgetModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [successModal, setSuccessModal] = useState({ open: false, type: '', data: null });
  const [selectedService, setSelectedService] = useState(null);

  const handleAppointmentSuccess = (data) => {
    setAppointmentModalOpen(false);
    setSuccessModal({
      open: true,
      type: 'appointment',
      data,
    });
  };

  const handleBudgetSuccess = (data) => {
    setBudgetModalOpen(false);
    setSuccessModal({
      open: true,
      type: 'budget',
      data,
    });
  };

  const handlePaymentSuccess = (data) => {
    setPaymentModalOpen(false);
    setSuccessModal({
      open: true,
      type: 'payment',
      data,
    });
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setBudgetModalOpen(true);
  };

  const getSuccessModalContent = () => {
    const { type, data } = successModal;

    if (type === 'appointment') {
      return {
        title: 'Consulta Agendada com Sucesso! 🎉',
        message: 'Sua consulta foi agendada com sucesso.',
        details: (
          <>
            <p><strong>Data:</strong> {data.date}</p>
            <p><strong>Horário:</strong> {data.time}</p>
            <p><strong>Serviço:</strong> {data.service}</p>
            <p><strong>Dentista:</strong> {data.dentist}</p>
            <p className="notification-text">Uma confirmação foi enviada para seu e-mail.</p>
          </>
        ),
      };
    } else if (type === 'budget') {
      return {
        title: 'Orçamento Gerado! 💰',
        message: 'Seu orçamento foi criado com sucesso.',
        details: (
          <>
            <p><strong>Procedimento:</strong> {data.procedure}</p>
            <p><strong>Valor Base:</strong> R$ {data.budgetAmount.toFixed(2).replace('.', ',')}</p>
            <p><strong>Valor Final:</strong> R$ {data.finalPrice.toFixed(2).replace('.', ',')}</p>
            <p className="notification-text">Você pode proceder com o pagamento quando estiver pronto.</p>
          </>
        ),
      };
    } else if (type === 'payment') {
      return {
        title: 'Pagamento Realizado com Sucesso! ✅',
        message: 'Sua transação foi processada com sucesso.',
        details: (
          <>
            <p><strong>Método:</strong> {data.method}</p>
            <p><strong>Valor:</strong> R$ {data.amount.toFixed(2).replace('.', ',')}</p>
            <p><strong>ID da Transação:</strong> #{data.id}</p>
            <p className="notification-text">Um comprovante foi enviado para seu e-mail.</p>
          </>
        ),
      };
    }
  };

  const handlePaymentClick = () => {
    const budgetData = successModal.type === 'budget' ? successModal.data : null;
    if (budgetData) {
      setPaymentModalOpen(true);
      setSuccessModal({ open: false, type: '', data: null });
    }
  };

  return (
    <main className="home">
      <HeroSection
        onScheduleClick={() => setAppointmentModalOpen(true)}
        onBudgetClick={() => setBudgetModalOpen(true)}
      />
      <AboutSection />
      <ServicesSection onServiceClick={handleServiceClick} />
      <TeamSection />
      <TestimonialsSection />
      <HoursSection />
      <ContactSection />

      {/* Appointment Modal */}
      <Modal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        title="Agendar Consulta"
        size="lg"
      >
        <AppointmentForm onSuccess={handleAppointmentSuccess} />
      </Modal>

      {/* Budget Modal */}
      <Modal
        isOpen={budgetModalOpen}
        onClose={() => setBudgetModalOpen(false)}
        title="Solicitar Orçamento"
        size="md"
      >
        <BudgetForm onSuccess={handleBudgetSuccess} />
      </Modal>

      {/* Payment Modal */}
      <Modal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        title="Realizar Pagamento"
        size="lg"
      >
        {successModal.data && (
          <PaymentForm
            amount={successModal.data.finalPrice}
            onSuccess={handlePaymentSuccess}
          />
        )}
      </Modal>

      {/* Success Modal */}
      <SuccessModal
        isOpen={successModal.open}
        onClose={() => {
          setSuccessModal({ open: false, type: '', data: null });
        }}
        {...(successModal.open ? getSuccessModalContent() : {})}
      />
    </main>
  );
}
