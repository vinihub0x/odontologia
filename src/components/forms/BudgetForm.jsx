import { useState } from 'react';
import { Button } from '../ui';
import { servicesData, budgetValues } from '../../data/services';
import './BudgetForm.css';

export function BudgetForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    procedure: '',
    observations: '',
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
    if (!formData.procedure) newErrors.procedure = 'Procedimento é obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const budgetAmount = budgetValues[formData.procedure] || 150;
      const budgetData = {
        ...formData,
        id: Date.now(),
        budgetAmount,
        finalPrice: budgetAmount * 1.1, // Adiciona 10% de margem
        createdAt: new Date().toLocaleString('pt-BR'),
      };

      console.log('Orçamento criado:', budgetData);

      onSuccess(budgetData);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form className="budget-form" onSubmit={handleSubmit}>
      <p className="form-description">
        Preencha os dados abaixo para receber um orçamento personalizado.
      </p>

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
        <label htmlFor="procedure">Procedimento Desejado *</label>
        <select
          id="procedure"
          name="procedure"
          value={formData.procedure}
          onChange={handleChange}
          className={errors.procedure ? 'error' : ''}
        >
          <option value="">Selecione um procedimento</option>
          {servicesData.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
        {errors.procedure && <span className="error-text">{errors.procedure}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="observations">Observações Adicionais</label>
        <textarea
          id="observations"
          name="observations"
          value={formData.observations}
          onChange={handleChange}
          placeholder="Descreva detalhes do seu caso (opcional)"
          rows="4"
        ></textarea>
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="form-submit"
      >
        {isSubmitting ? 'Gerando orçamento...' : 'Solicitar Orçamento'}
      </Button>
    </form>
  );
}
