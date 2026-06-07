# 🚀 Guia de Deployment - Clínica Belo Sorriso

## Opções de Hosting

### 1. Vercel (Recomendado para Vite + React)

**Vantagens:**
- Deploy automático via GitHub
- Preview branches
- Performance otimizada
- Certificado SSL gratuito
- Plano gratuito generoso

**Steps:**

```bash
# 1. Push para GitHub
git init
git add .
git commit -m "Initial commit"
git push origin main

# 2. Acesse Vercel
# - Go to https://vercel.com
# - Sign up com GitHub
# - Import projeto
# - Vercel detecta Vite automaticamente
# - Deploy!
```

**Variáveis de Ambiente:**
Neste projeto não há necessidade de variáveis secretas.

### 2. Netlify

**Steps:**

```bash
# 1. Build o projeto
npm run build

# 2. Arraste a pasta 'dist' para Netlify Drop
# ou conecte ao GitHub para deploy automático
```

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

```bash
# 1. Update vite.config.js
# base: '/repo-name/' (se not default branch)

# 2. Build
npm run build

# 3. Deploy (via script ou manual)
# - Push 'dist' para gh-pages branch
# - Enable Pages em configurações do repo
```

### 4. AWS (Amplify, S3 + CloudFront)

**Amplify:**
```bash
npm install -g @aws-amplify/cli

amplify init
amplify add hosting
amplify publish
```

### 5. Google Firebase

```bash
npm install -g firebase-tools

firebase init hosting
npm run build
firebase deploy
```

### 6. DigitalOcean / Heroku / Render

Todos suportam Node.js e podem hospedar aplicações Vite.

---

## Build & Deploy

### Build Local

```bash
# Install dependencies
npm install

# Build para produção
npm run build

# Teste localmente
npm run preview
```

### Checklist Pré-Deploy

- [ ] Testes responsividade em mobile
- [ ] Verificar console do browser (sem erros)
- [ ] Testar todos os formulários
- [ ] Validar links internos
- [ ] Verificar imagens/assets carregam
- [ ] Testar em diferentes navegadores
- [ ] Performance check (Lighthouse)

### Performance Optimization

**Vite já otimiza automaticamente:**
- Code splitting
- Tree shaking
- CSS minification
- JS minification
- Asset optimization

**Opcional - Melhorias adicionais:**

```bash
# Analyze bundle size
npm install --save-dev @vitejs/plugin-visualize
```

---

## Monitoramento & Analytics

### Google Analytics (Opcional)

```javascript
// Em main.jsx, antes de ReactDOM.render():
import { useEffect } from 'react';

useEffect(() => {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_ID';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
}, []);
```

### Sentry (Error Tracking - Opcional)

```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production",
});
```

---

## CI/CD Pipeline

### GitHub Actions

**Arquivo: `.github/workflows/deploy.yml`**

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## Variáveis de Ambiente

Este projeto não usa variáveis secretas, mas se precisar no futuro:

**Arquivo: `.env.local`**
```
VITE_API_URL=https://api.example.com
VITE_PUBLIC_KEY=seu_chave_publica
```

**Uso:**
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## SEO Básico

### Meta Tags

Adicionar em `index.html`:

```html
<meta name="description" content="Clínica odontológica profissional...">
<meta name="keywords" content="dentista, odontologia, São Paulo">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta property="og:title" content="Clínica Belo Sorriso">
<meta property="og:description" content="Sua saúde bucal é nossa prioridade">
<meta property="og:image" content="/og-image.png">
<meta name="theme-color" content="#22C55E">
```

### Sitemap

Criar `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://clinicabelossorriso.com</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://clinicabelossorriso.com#services</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### robots.txt

Criar `public/robots.txt`:

```
User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://clinicabelossorriso.com/sitemap.xml
```

---

## SSL/HTTPS

Todos os serviços de hosting recomendados oferecem SSL gratuito:
- ✅ Vercel
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Firebase
- ✅ AWS

---

## Troubleshooting

### Problemas Comuns

**1. Paths quebrados após deploy**
```javascript
// vite.config.js
export default {
  base: '/repo-name/',  // Add this if not root
}
```

**2. SPA Routing não funciona**
```
Configure redirect rules para enviar 404s para index.html
(Vercel e Netlify fazem isso automaticamente)
```

**3. Assets não carregam**
```
Certifique-se de usar `import` para assets
ou colocar em `public/` folder
```

---

## Performance Targets

**Ideais para Lighthouse:**
- ✅ Performance: 90+
- ✅ Accessibility: 95+
- ✅ Best Practices: 95+
- ✅ SEO: 95+

**Verificar:**
```bash
# Chrome DevTools > Lighthouse
# ou https://pagespeed.web.dev/
```

---

## Monitoramento de Uptime

### Opções Gratuitas:
- **UptimeRobot** - Monitora disponibilidade
- **Pingdom** - Testes de velocidade
- **StatusPage.io** - Dashboard de status

---

## Backup & Versioning

```bash
# Git tags para releases
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0

# Backup do banco de dados (se houver)
# Manter histórico de commits
```

---

## Próximas Etapas

1. **Domínio Customizado**
   - Configurar DNS
   - Update em Vercel/Netlify

2. **Email Profissional**
   - Usar Sendgrid/Mailgun para transacionais
   - Setup SMTP

3. **Analytics**
   - Google Analytics
   - Hotjar para heatmaps

4. **Contato Automatizado**
   - Integrar Formspree ou Nodemailer
   - Salvar em banco de dados

5. **WhatsApp API**
   - Implementar real WhatsApp integration
   - Twilio ou similar

---

## Suporte

Para dúvidas de deployment, consulte documentação oficial:
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)

---

**Última atualização:** 2024
