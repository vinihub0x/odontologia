import { useState } from 'react';
import { Button } from '../ui';
import './PaymentForm.css';

export function PaymentForm({ amount, onSuccess }) {
  const [paymentData, setPaymentData] = useState({
    method: 'pix',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({
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

    if (paymentData.method === 'cartao' || paymentData.method === 'debito') {
      if (!paymentData.cardName.trim()) newErrors.cardName = 'Nome do titular é obrigatório';
      if (!paymentData.cardNumber.trim()) newErrors.cardNumber = 'Número do cartão é obrigatório';
      if (!paymentData.cardExpiry.trim()) newErrors.cardExpiry = 'Data de expiração é obrigatória';
      if (!paymentData.cardCVV.trim()) newErrors.cardCVV = 'CVV é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      const transaction = {
        id: Date.now(),
        method: paymentData.method.toUpperCase(),
        amount,
        status: 'aprovado',
        timestamp: new Date().toLocaleString('pt-BR'),
      };

      console.log('Pagamento processado:', transaction);
      onSuccess(transaction);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <div className="payment-amount">
        <span>Valor Total:</span>
        <strong>R$ {amount.toFixed(2).replace('.', ',')}</strong>
      </div>

      <div className="payment-methods">
        <label className={`method-option ${paymentData.method === 'pix' ? 'active' : ''}`}>
          <input
            type="radio"
            name="method"
            value="pix"
            checked={paymentData.method === 'pix'}
            onChange={handleChange}
          />
          <span className="method-icon">💳</span>
          <span className="method-text">PIX</span>
        </label>

        <label className={`method-option ${paymentData.method === 'cartao' ? 'active' : ''}`}>
          <input
            type="radio"
            name="method"
            value="cartao"
            checked={paymentData.method === 'cartao'}
            onChange={handleChange}
          />
          <span className="method-icon">💳</span>
          <span className="method-text">Crédito</span>
        </label>

        <label className={`method-option ${paymentData.method === 'debito' ? 'active' : ''}`}>
          <input
            type="radio"
            name="method"
            value="debito"
            checked={paymentData.method === 'debito'}
            onChange={handleChange}
          />
          <span className="method-icon">💳</span>
          <span className="method-text">Débito</span>
        </label>
      </div>

      {paymentData.method === 'pix' && (
        <div className="pix-info">
          <p className="pix-instruction">
            Escaneie o código QR abaixo ou use a chave PIX para realizar o pagamento:
          </p>
          <div className="qr-code">🔲</div>
          <p className="pix-key">Chave PIX: contato@belossorriso.com</p>
        </div>
      )}

      {(paymentData.method === 'cartao' || paymentData.method === 'debito') && (
        <>
          <div className="form-group">
            <label htmlFor="cardName">Nome do Titular *</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={paymentData.cardName}
              onChange={handleChange}
              placeholder="JOÃO SILVA"
              className={errors.cardName ? 'error' : ''}
            />
            {errors.cardName && <span className="error-text">{errors.cardName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Número do Cartão *</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handleChange}
              placeholder="0000 0000 0000 0000"
              className={errors.cardNumber ? 'error' : ''}
            />
            {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cardExpiry">Validade *</label>
              <input
                type="text"
                id="cardExpiry"
                name="cardExpiry"
                value={paymentData.cardExpiry}
                onChange={handleChange}
                placeholder="MM/AA"
                className={errors.cardExpiry ? 'error' : ''}
              />
              {errors.cardExpiry && <span className="error-text">{errors.cardExpiry}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="cardCVV">CVV *</label>
              <input
                type="text"
                id="cardCVV"
                name="cardCVV"
                value={paymentData.cardCVV}
                onChange={handleChange}
                placeholder="000"
                className={errors.cardCVV ? 'error' : ''}
              />
              {errors.cardCVV && <span className="error-text">{errors.cardCVV}</span>}
            </div>
          </div>
        </>
      )}

      <div className="payment-info">
        <p>✓ Pagamento 100% seguro e criptografado</p>
        <p>✓ Seus dados de cartão não são armazenados</p>
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={isProcessing}
        className="form-submit"
      >
        {isProcessing ? 'Processando pagamento...' : 'Confirmar Pagamento'}
      </Button>
    </form>
  );
}
