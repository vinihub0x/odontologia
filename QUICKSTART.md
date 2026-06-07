# 🚀 QUICK START - Clínica Belo Sorriso

## ⚡ Iniciar em 30 segundos

```bash
# 1. Navegue para a pasta
cd belo-sorriso-app

# 2. Instale dependências (primeira vez)
npm install

# 3. Inicie o servidor
npm run dev

# 4. Abra no navegador
# http://localhost:5175
```

**Pronto! 🎉 A aplicação está rodando**

---

## 📋 Comandos Principais

```bash
# Desenvolvimento
npm run dev          # Inicia servidor local com hot reload

# Produção
npm run build        # Cria build otimizada
npm run preview      # Visualiza a build localmente

# Linting (opcional)
npm run lint         # Se tiver ESLint configurado
```

---

## 🎯 O que Explorar Primeiro

### 1. Home Page
Acesse http://localhost:5175/ para ver a aplicação completa

### 2. Componentes Principais
- **Navbar (topo)** - Menu navegável
- **Hero Section** - Seção principal com botões
- **Serviços** - Cards clicáveis
- **Equipe** - Dentistas fictícios
- **Formulários** - Teste agendamento, orçamento, pagamento

### 3. Interações
Clique em:
- "Agendar Consulta" - Abre modal de agendamento
- "Solicitar Orçamento" - Abre modal de orçamento
- Um serviço qualquer - Abre modal de orçamento
- Botão WhatsApp (canto inferior direito)

### 4. Testes de Responsividade
```
Abra DevTools (F12 em Chrome)
Toggle Device Toolbar (Ctrl+Shift+M)
Teste em diferentes resoluções:
- iPhone 12 (390x844)
- iPad (768x1024)
- Desktop (1920x1080)
```

---

## 📁 Estrutura Rápida

```
src/
├── components/        ← Componentes React
│   ├── layout/       ← Navbar, Footer, etc
│   ├── sections/     ← Seções (Hero, About, Services, etc)
│   ├── cards/        ← Cards reutilizáveis
│   ├── forms/        ← Formulários (Agendamento, Orçamento, etc)
│   └── ui/           ← Componentes UI (Button, Modal, etc)
│
├── pages/            ← Páginas (Home.jsx)
├── data/             ← Dados fictícios (services, team, testimonials)
├── hooks/            ← Custom hooks
├── styles/           ← CSS global, variáveis, animações
│
├── App.jsx           ← App principal
├── main.jsx          ← Entry point
└── index.css         ← CSS base
```

---

## 🛠️ Editar Conteúdo

### Mudar Cores
**Arquivo:** `src/styles/variables.css`
```css
--primary: #22C55E;      ← Alterar para outra cor
--primary-dark: #16A34A;
--primary-light: #4ADE80;
```

### Mudar Serviços
**Arquivo:** `src/data/services.js`
```javascript
{
  id: 1,
  name: 'Novo Serviço',
  description: 'Descrição aqui',
  icon: '🦷',
  price: 'R$ 999',
}
```

### Mudar Equipe
**Arquivo:** `src/data/team.js`
```javascript
{
  id: 1,
  name: 'Novo Dentista',
  specialty: 'Especialidade',
  bio: 'Bio aqui',
  experience: '10 anos',
  image: '👨‍⚕️',
  credentials: 'CRO-SP 123456',
}
```

### Mudar Depoimentos
**Arquivo:** `src/data/testimonials.js`
```javascript
{
  id: 1,
  name: 'Novo Depoimento',
  comment: 'Texto aqui',
  rating: 5,
  date: '2024-01-15',
  service: 'Serviço',
}
```

### Mudar Contato
**Arquivo:** `src/components/sections/ContactSection.jsx`
```jsx
<p>(11) 3000-0000</p>      ← Mudar telefone
<p>(11) 99999-9999</p>     ← Mudar WhatsApp
<p>contato@belossorriso.com</p> ← Mudar email
```

---

## 🎨 Editar Componentes

### Editar um Componente
```jsx
// Exemplo: Editar título do Hero
// Arquivo: src/components/sections/HeroSection.jsx

<h1 className="hero-title">
  Seu sorriso merece o melhor cuidado  ← Mudar aqui
</h1>
```

### Editar Estilos
```css
/* Exemplo: Mudar cor do botão
   Arquivo: src/components/ui/Button.css */

.btn-primary {
  background-color: var(--primary);  ← Muda com --primary
  color: var(--white);
}
```

---

## ✨ Adicionar Funcionalidades

### Adicionar Novo Formulário
1. Criar arquivo em `src/components/forms/NovoForm.jsx`
2. Criar `NovoForm.css`
3. Exportar em `src/components/forms/index.js`
4. Usar em `src/pages/Home.jsx`

### Adicionar Nova Seção
1. Criar arquivo em `src/components/sections/NovaSection.jsx`
2. Criar `NovaSection.css`
3. Exportar em `src/components/sections/index.js`
4. Adicionar em `src/pages/Home.jsx`

### Adicionar Animação
1. Editar `src/styles/animations.css`
2. Adicionar `@keyframes`
3. Usar classe `.animate-novaAnimacao`

---

## 🔍 Troubleshooting

### Porta 5175 em uso
```bash
# A aplicação tentará a próxima porta (5176, 5177, etc)
# Se quiser especificar:
npm run dev -- --port 3000
```

### Build não funciona
```bash
# Limpe cache
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Estilo não aplica
```
1. Verifique se .css está importado no .jsx
2. Verifique se classe está certa no HTML
3. Verifique prioridade CSS (especificidade)
```

### Componente não renderiza
```
1. Verifique importação
2. Verifique export
3. Abra DevTools (F12) e veja console
4. Verifique props obrigatórias
```

---

## 📚 Documentação Completa

Para documentação detalhada, veja:

- **README.md** - Overview completo
- **COMPONENTS.md** - Documentação de componentes
- **DEPLOYMENT.md** - Guia de deployment
- **PROJECT_SUMMARY.md** - Resumo executivo

---

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
# Siga as instruções
```

### Netlify
```bash
npm run build
# Drag & drop 'dist' folder em Netlify
```

### Seu próprio servidor
```bash
npm run build
# Copie pasta 'dist' para seu servidor
# Configure para servir 'index.html' em 404s
```

---

## 💡 Dicas

1. **Testar Responsividade**
   - DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M)

2. **Ver Animações**
   - Scroll lentamente pela página
   - Hover em cards e botões

3. **Testar Formulários**
   - Tente enviar com campos vazios
   - Tente com email inválido
   - Veja validação funcionando

4. **Editar em Tempo Real**
   - Faça alteração em arquivo .jsx ou .css
   - Salve (Ctrl+S)
   - Página recarrega automaticamente (HMR)

---

## 📞 Suporte Rápido

### Erros Comuns

| Erro | Solução |
|------|---------|
| Module not found | `npm install` |
| Port in use | Aguarde ou use --port diferente |
| Styles não aplicam | Verifique import e nome classe |
| Componente não renderiza | Verifique console F12 |
| Hot reload não funciona | Reinicie com `npm run dev` |

---

## 🎯 Próximos Passos

1. **Explorar** - Navegue pela aplicação
2. **Editar** - Customize cores, textos, dados
3. **Testar** - Teste formulários e responsividade
4. **Deploy** - Suba para Vercel/Netlify
5. **Compartilhar** - Mostre no LinkedIn!

---

## 🎉 Pronto!

Você tem tudo que precisa para:
- ✅ Desenvolver o projeto
- ✅ Customizar conforme necessário
- ✅ Deploy em minutos
- ✅ Impressionar em entrevistas
- ✅ Adicionar ao portfólio

**Happy Coding! 🚀**

---

**Desenvolvido com ❤️ para sucesso na carreira**
