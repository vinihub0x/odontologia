# 📚 Guia de Componentes - Clínica Belo Sorriso

## Índice
1. [UI Components](#ui-components)
2. [Layout Components](#layout-components)
3. [Section Components](#section-components)
4. [Card Components](#card-components)
5. [Form Components](#form-components)
6. [Dados e Hooks](#dados-e-hooks)

---

## 🎨 UI Components

Componentes reutilizáveis de interface do usuário.

### Button

```jsx
import { Button } from './components/ui';

// Variantes: primary, secondary, outline, ghost, danger
// Tamanhos: sm, md, lg

<Button variant="primary" size="lg" onClick={handleClick}>
  Agendar Consulta
</Button>
```

**Props:**
- `variant`: primary | secondary | outline | ghost | danger (default: primary)
- `size`: sm | md | lg (default: md)
- `disabled`: boolean (default: false)
- `onClick`: function
- `className`: string (adicional)

### Modal

```jsx
import { Modal } from './components/ui';

<Modal 
  isOpen={isOpen} 
  onClose={onClose} 
  title="Título do Modal"
  size="md"
>
  {children}
</Modal>
```

**Props:**
- `isOpen`: boolean (obrigatório)
- `onClose`: function (obrigatório)
- `title`: string (obrigatório)
- `size`: sm | md | lg (default: md)
- `children`: ReactNode

### SuccessModal

```jsx
import { SuccessModal } from './components/ui';

<SuccessModal 
  isOpen={isOpen}
  onClose={onClose}
  title="Sucesso!"
  message="Sua ação foi concluída com sucesso"
  details={<div>Detalhes adicionais</div>}
/>
```

**Props:**
- `isOpen`: boolean
- `onClose`: function
- `title`: string
- `message`: string
- `details`: ReactNode (opcional)

### Loading

```jsx
import { Loading } from './components/ui';

<Loading message="Processando..." />
```

**Props:**
- `message`: string (default: "Carregando...")

---

## 🏗️ Layout Components

Componentes de layout estrutural.

### Navbar

```jsx
import { Navbar } from './components/layout';

<Navbar onScheduleClick={handleScheduleClick} />
```

**Features:**
- Logo com animação gradiente
- Menu responsivo com hamburger menu em mobile
- Navbar fixa ao scroll
- Link "Agendar Consulta" destacado

### Footer

```jsx
import { Footer } from './components/layout';

<Footer />
```

**Conteúdo:**
- Descrição da clínica
- Links rápidos
- Informações de contato
- Links de redes sociais
- Direitos reservados

### FloatingButton

```jsx
import { FloatingButton } from './components/layout';

<FloatingButton />
```

**Features:**
- Botão flutuante com WhatsApp
- Fixa no canto inferior direito
- Abre conversa do WhatsApp
- Animação ao hover

---

## 📄 Section Components

Componentes de seções principais da página.

### HeroSection

```jsx
import { HeroSection } from './components/sections';

<HeroSection 
  onScheduleClick={handleScheduleClick}
  onBudgetClick={handleBudgetClick}
/>
```

**Features:**
- Hero title com animação
- Dois botões de ação
- Background gradiente
- Scroll indicator animado
- Emoji grande com bounce animation

### AboutSection

```jsx
import { AboutSection } from './components/sections';

<AboutSection />
```

**Conteúdo:**
- Texto sobre a clínica
- 4 cards de valores (Inovação, Humanidade, Excelência, Confiança)
- Estatísticas (15+ anos, 5000+ pacientes, etc.)

### ServicesSection

```jsx
import { ServicesSection } from './components/sections';

<ServicesSection onServiceClick={handleServiceClick} />
```

**Features:**
- Grid 3 colunas de serviços
- Cards interativos com hover
- Clique em um card dispara modal de orçamento

### TeamSection

```jsx
import { TeamSection } from './components/sections';

<TeamSection />
```

**Features:**
- Grid 2 colunas de dentistas
- Informações completas de cada profissional
- Animações ao carregar

### TestimonialsSection

```jsx
import { TestimonialsSection } from './components/sections';

<TestimonialsSection />
```

**Features:**
- Grid 3 colunas de depoimentos
- Avaliação em estrelas
- Design elegante com border left colorido

### HoursSection

```jsx
import { HoursSection } from './components/sections';

<HoursSection />
```

**Features:**
- Tabela de horários funcionamento
- Informações adicionais (estacionamento, acessibilidade, etc.)
- Destacado contato de emergência

### ContactSection

```jsx
import { ContactSection } from './components/sections';

<ContactSection />
```

**Features:**
- Cards com informações de contato
- Placeholder para mapa
- Layout responsivo

---

## 🎴 Card Components

Componentes de cards reutilizáveis.

### ServiceCard

```jsx
import { ServiceCard } from './components/cards';

<ServiceCard 
  icon="🦷"
  name="Limpeza Dental"
  description="Descrição do serviço"
  price="A partir de R$ 150"
  onClick={handleClick}
/>
```

**Props:**
- `icon`: string (emoji)
- `name`: string
- `description`: string
- `price`: string
- `onClick`: function (opcional)

### TeamCard

```jsx
import { TeamCard } from './components/cards';

<TeamCard 
  image="👨‍⚕️"
  name="Dr. João"
  specialty="Implantodontia"
  bio="Bio do profissional"
  experience="15 anos"
  credentials="CRO-SP 123456"
/>
```

**Props:**
- `image`: string (emoji)
- `name`: string
- `specialty`: string
- `bio`: string
- `experience`: string
- `credentials`: string

### TestimonialCard

```jsx
import { TestimonialCard } from './components/cards';

<TestimonialCard 
  name="João Silva"
  comment="Excelente atendimento!"
  rating={5}
  service="Limpeza Dental"
/>
```

**Props:**
- `name`: string
- `comment`: string
- `rating`: number (1-5)
- `service`: string

---

## 📋 Form Components

Componentes de formulários com validação.

### AppointmentForm

```jsx
import { AppointmentForm } from './components/forms';

<AppointmentForm onSuccess={handleSuccess} />
```

**Campos:**
- Nome (obrigatório)
- Telefone (obrigatório)
- E-mail (obrigatório, validado)
- Serviço (select, obrigatório)
- Dentista (select, obrigatório)
- Data (obrigatório)
- Horário (obrigatório)

**Validação:**
- Email format validation
- Campos obrigatórios
- Mensagens de erro

**Callback:**
- `onSuccess(appointmentData)`: Disparado ao envio bem-sucedido

### BudgetForm

```jsx
import { BudgetForm } from './components/forms';

<BudgetForm onSuccess={handleSuccess} />
```

**Campos:**
- Nome (obrigatório)
- Telefone (obrigatório)
- Procedimento (select, obrigatório)
- Observações (textarea, opcional)

**Funcionalidade:**
- Cálculo automático de orçamento baseado no procedimento
- Margem de 10% adicionada

### PaymentForm

```jsx
import { PaymentForm } from './components/forms';

<PaymentForm 
  amount={500.00}
  onSuccess={handleSuccess} 
/>
```

**Métodos de Pagamento:**
- PIX (com QR code simulado)
- Cartão de Crédito
- Cartão de Débito

**Validação:**
- Dados de cartão apenas quando método selecionado
- CVV validado
- Data de expiração validada

---

## 🗂️ Dados e Hooks

### Services Data

```javascript
import { servicesData, budgetValues } from './data/services';

// servicesData contém 6 serviços
// budgetValues mapeia nome do serviço para valor
```

### Team Data

```javascript
import { teamData } from './data/team';

// teamData contém 4 dentistas fictícios
```

### Testimonials Data

```javascript
import { testimonialsData } from './data/testimonials';

// testimonialsData contém 6 depoimentos
```

### Hooks Customizados

#### useWindowSize

```javascript
import { useWindowSize } from './hooks';

const { width, height } = useWindowSize();
```

Retorna dimensões da janela e atualiza ao resize.

#### useScroll

```javascript
import { useScroll } from './hooks';

const { isAtTop, scrollY } = useScroll();
```

Retorna informações de scroll:
- `isAtTop`: boolean (true se scrollY < 50)
- `scrollY`: number (posição atual de scroll)

---

## 🎯 Padrões de Uso

### Criar um Modal com Formulário

```jsx
import { useState } from 'react';
import { Modal } from './components/ui';
import { AppointmentForm } from './components/forms';

export function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSuccess = (data) => {
    console.log('Formulário enviado:', data);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Abrir Modal
      </button>

      <Modal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Agendar Consulta"
      >
        <AppointmentForm onSuccess={handleSuccess} />
      </Modal>
    </>
  );
}
```

### Adicionar Nova Seção

1. Criar arquivo em `src/components/sections/NewSection.jsx`
2. Criar arquivo de estilo `src/components/sections/NewSection.css`
3. Exportar em `src/components/sections/index.js`
4. Importar e usar em `src/pages/Home.jsx`

### Adicionar Novo Serviço

1. Adicionar item em `src/data/services.js`
2. Atualizar `budgetValues` se necessário
3. Atualizar UI ou adicionar lógica conforme necessário

---

## 🎨 Customização

### Alterar Cores Primárias

Editar em `src/styles/variables.css`:

```css
:root {
  --primary: #22C55E;
  --primary-dark: #16A34A;
  --primary-light: #4ADE80;
  /* ... */
}
```

### Adicionar Animações

Adicionar em `src/styles/animations.css`:

```css
@keyframes novaAnimacao {
  from { /* estilos iniciais */ }
  to { /* estilos finais */ }
}

.animate-nova {
  animation: novaAnimacao 0.5s ease-in-out;
}
```

### Ajustar Responsividade

Modificar breakpoints em queries media existentes:

```css
@media (max-width: 768px) {
  /* estilos para tablets */
}

@media (max-width: 480px) {
  /* estilos para smartphones */
}
```

---

## 📞 Suporte

Para mais informações ou dúvidas sobre os componentes, consulte os arquivos individuais com comentários explicativos.

---

**Última atualização:** 2024
