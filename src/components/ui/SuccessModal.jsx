import { Button } from './Button';
import './SuccessModal.css';

export function SuccessModal({ isOpen, onClose, title, message, details }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="success-modal" onClick={(e) => e.stopPropagation()}>
        <div className="success-icon">✓</div>
        <h2>{title}</h2>
        <p>{message}</p>
        {details && (
          <div className="success-details">
            {details}
          </div>
        )}
        <Button onClick={onClose} className="mt-lg" variant="primary">
          Fechar
        </Button>
      </div>
    </div>
  );
}
