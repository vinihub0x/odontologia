import { useState } from 'react';
import { Button } from '../ui';
import { servicesData } from '../../data/services';
import { teamData } from '../../data/team';
import './AppointmentForm.css';

export function AppointmentForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    dentist: '',
    date: '',
    time: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'E-mail é obrigatório';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'E-mail inválido';
    if (!formData.service) newErrors.service = 'Serviço é obrigatório';
    if (!formData.dentist) newErrors.dentist = 'Dentista é obrigatório';
    if (!formData.date) newErrors.date = 'Data é obrigatória';
    if (!formData.time) newErrors.time = 'Horário é obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const appointmentData = {
        ...formData,
        id: Date.now(),
        status: 'agendado',
        createdAt: new Date().toLocaleString('pt-BR'),
      };

      // Aqui você salvaria em localStorage ou enviaria para um servidor
      console.log('Agendamento criado:', appointmentData);

      onSuccess(appointmentData);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nome Completo *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu nome"
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Telefone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="service">Serviço Desejado *</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={errors.service ? 'error' : ''}
          >
            <option value="">Selecione um serviço</option>
            {servicesData.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
          {errors.service && <span className="error-text">{errors.service}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="dentist">Dentista Preferido *</label>
          <select
            id="dentist"
            name="dentist"
            value={formData.dentist}
            onChange={handleChange}
            className={errors.dentist ? 'error' : ''}
          >
            <option value="">Selecione um dentista</option>
            {teamData.map((dentist) => (
              <option key={dentist.id} value={dentist.name}>
                {dentist.name} - {dentist.specialty}
              </option>
            ))}
          </select>
          {errors.dentist && <span className="error-text">{errors.dentist}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">Data *</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={errors.date ? 'error' : ''}
          />
          {errors.date && <span className="error-text">{errors.date}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="time">Horário *</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={errors.time ? 'error' : ''}
          />
          {errors.time && <span className="error-text">{errors.time}</span>}
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="form-submit"
      >
        {isSubmitting ? 'Agendando...' : 'Agendar Consulta'}
      </Button>
    </form>
  );
}
