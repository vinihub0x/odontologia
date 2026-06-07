# 🦷 Clínica Belo Sorriso - Aplicação Web React

Uma aplicação web profissional, moderna e responsiva para uma clínica odontológica fictícia, desenvolvida com React.js, Vite e CSS Modules. Perfeita para portfólio e apresentação em entrevistas de Front-End.

## ✨ Características

- ✅ **Design Profissional e Moderno**: Visual clean com paleta de cores verde (#22C55E) e branco
- ✅ **Totalmente Responsivo**: Mobile First - Funciona em todos os dispositivos
- ✅ **Landing Page Completa**: Hero Section, Sobre, Serviços, Equipe, Depoimentos, Horários, Contato
- ✅ **Formulários Funcionais**: Agendamento, Orçamento e Pagamento (simulado)
- ✅ **Animações Suaves**: Transições elegantes ao scroll, efeitos hover e loading
- ✅ **Componentes Reutilizáveis**: Estrutura limpa e bem organizada
- ✅ **Botão Flutuante WhatsApp**: Contato direto com a clínica
- ✅ **Navbar Fixa**: Menu navegável em qualquer ponto da página

## 🚀 Tecnologias Utilizadas

- React 18+ | Vite | CSS Modules | JavaScript ES6+

## 🔧 Como Executar

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

A aplicação estará disponível em `http://localhost:5175/`

## 📁 Estrutura

```
src/
├── components/
│   ├── layout/       (Navbar, Footer, FloatingButton)
│   ├── sections/     (Hero, About, Services, Team, Testimonials, Hours, Contact)
│   ├── cards/        (ServiceCard, TeamCard, TestimonialCard)
│   ├── forms/        (AppointmentForm, BudgetForm, PaymentForm)
│   └── ui/           (Button, Modal, Loading, SuccessModal)
├── pages/
│   └── Home.jsx
├── data/
│   ├── services.js
│   ├── team.js
│   └── testimonials.js
├── hooks/
│   └── index.js      (useWindowSize, useScroll)
└── styles/
    ├── global.css
    ├── variables.css
    └── animations.css
```

## 🎨 Paleta de Cores

- **Primária**: #22C55E (Verde)
- **Primária Escura**: #16A34A
- **Primária Claro**: #4ADE80
- **Cinzas**: Escala completa para contraste

## 📱 Responsividade

Desenvolvido com Mobile First para todos os dispositivos:
- Smartphones (320px - 480px)
- Tablets (480px - 768px)
- Desktops (768px+)
- Ultrawide (1400px+)

## 🎯 Funcionalidades

1. **Hero Section** - Título chamativo e botões de ação
2. **Sobre** - História e valores da clínica
3. **Serviços** - 6 serviços odontológicos com cards interativos
4. **Equipe** - 4 dentistas fictícios com informações
5. **Depoimentos** - 6 avaliações de pacientes
6. **Horários** - Tabela de funcionamento
7. **Contato** - Telefone, WhatsApp, E-mail, Endereço
8. **Agendamento** - Modal com formulário validado
9. **Orçamento** - Cálculo automático de valores
10. **Pagamento** - Simulação (PIX, Crédito, Débito)

## ✨ Extras

- Animações ao scroll (Fade, Slide, Scale, Bounce)
- Transições modernas e hover effects
- Loading elegante com spinner
- Validação de formulários
- Modal com feedback de sucesso
- Botão flutuante WhatsApp
- Navbar fixa com menu responsivo

## 🔐 Segurança

- Nenhum dado real é armazenado
- Nenhuma integração com gateway real
- Tudo é apenas demonstração visual

## 🎯 Perfeito Para

- Portfólio pessoal
- Entrevistas de React
- LinkedIn showcase
- Base para outros projetos

---

**Desenvolvido com ❤️ para profissionais de Front-End React**
