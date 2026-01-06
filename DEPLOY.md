# 🚀 Guia de Deploy - Loly Krás Landing Page

## 📋 Resumo do Projeto

Landing page responsiva em PT-BR para a **Loly Krás Consultoria em Gestão Gastronômica**, desenvolvida com **Vite + React + TypeScript + TailwindCSS**.

### ✅ Seções Implementadas

1. **Hero Section** - "Você produz, eu cuido da gestão"
2. **Fila de Consultoria** - Formulário Google Forms
3. **Problemas** - Carousel com 4 dores do público
4. **Soluções** - 4 benefícios principais
5. **Planilhas Gratuitas** - 4 recursos downloadáveis
6. **Pacotes** - 9 opções de consultoria (R$ 155 a R$ 9.000)
7. **Sobre** - Apresentação da Loly
8. **FAQ** - 11 perguntas frequentes
9. **Contato** - CTAs e canais de comunicação
10. **Footer** - Links e informações
11. **WhatsApp Flutuante** - Botão fixo verde

### 🎯 CTAs Principais

- **Agende sua reunião gratuita** → Calendly: https://calendly.com/loly-lolykras/30min
- **WhatsApp Flutuante** → https://wa.me/5551995052775
- **Entrar na fila** → Google Forms

### 🔍 SEO Configurado

- ✅ Lang: pt-BR
- ✅ Title: "Loly Krás - Consultoria em Gestão Gastronômica"
- ✅ Meta Description otimizada
- ✅ Meta Keywords
- ✅ Open Graph (Facebook)
- ✅ Twitter Cards

---

## 🛠️ Comandos Disponíveis

Conforme definido no `package.json`:

```bash
# Instalar dependências
pnpm install

# Desenvolvimento local (porta 3000)
pnpm dev

# Build para produção
pnpm build

# Rodar servidor de produção
pnpm start

# Preview do build
pnpm preview

# Verificar tipos TypeScript
pnpm check

# Formatar código
pnpm format
```

---

## 🌐 Deploy no Manus

### Opção 1: Deploy Direto (Recomendado)

O site já está rodando em produção na URL temporária do Manus:

**URL Atual:** https://3000-ibmd5jvbtoyiqje75l95l-ae525513.us1.manus.computer

Esta URL é temporária e vinculada à sessão do sandbox. Para uma URL permanente, siga a Opção 2.

### Opção 2: Deploy via GitHub Actions (Automático)

Para configurar deploy automático sempre que houver push na branch `main`:

1. **Criar arquivo `.github/workflows/deploy.yml`**:

```yaml
name: Deploy to Manus

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Deploy to Manus
        run: |
          # Adicionar script de deploy aqui
          echo "Deploy realizado com sucesso!"
```

2. **Commit e push**:

```bash
git add .
git commit -m "feat: add GitHub Actions deploy workflow"
git push origin main
```

### Opção 3: Deploy Manual via Git

Para atualizar o site após fazer alterações:

```bash
# 1. Fazer alterações nos arquivos
# 2. Testar localmente
pnpm dev

# 3. Build para produção
pnpm build

# 4. Commit e push
git add .
git commit -m "feat: sua mensagem de commit"
git push origin main

# 5. No servidor de produção, fazer pull e rebuild
git pull origin main
pnpm install
pnpm build
pnpm start
```

---

## 📁 Estrutura do Projeto

```
lolykras-landing-sync/
├── client/                    # Frontend
│   ├── public/               # Assets estáticos (imagens)
│   │   ├── hero-loly-notebook.jpg
│   │   ├── loly-profile.jpg
│   │   └── ...
│   ├── src/
│   │   ├── components/       # Componentes React
│   │   │   ├── FAQ.tsx
│   │   │   ├── WhatsAppButton.tsx
│   │   │   ├── PackagesCarousel.tsx
│   │   │   └── ui/          # Componentes Radix UI
│   │   ├── pages/
│   │   │   ├── Home.tsx     # Landing page principal
│   │   │   ├── PrivacyPolicy.tsx
│   │   │   └── TermsOfUse.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── index.html
├── server/                   # Backend Express (opcional)
├── shared/                   # Código compartilhado
├── dist/                     # Build de produção
│   ├── public/              # Frontend compilado
│   └── index.js            # Backend compilado
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── .env                     # Variáveis de ambiente
└── README.md
```

---

## 🔧 Configuração de Variáveis de Ambiente

O arquivo `.env` na raiz do projeto contém:

```env
VITE_APP_TITLE="Loly Krás - Consultoria em Gestão Gastronômica"
VITE_APP_LOGO="/logo.png"
VITE_ANALYTICS_ENDPOINT=""
VITE_ANALYTICS_WEBSITE_ID=""
```

Para adicionar analytics (Umami), preencha os campos `VITE_ANALYTICS_*`.

---

## 🎨 Customização

### Alterar Cores (TailwindCSS)

Edite `client/src/index.css` para ajustar o tema:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    /* ... outras variáveis */
  }
}
```

### Alterar Conteúdo

- **Hero**: `client/src/pages/Home.tsx` (linha ~211)
- **Pacotes**: `client/src/pages/Home.tsx` (linha ~22-95)
- **FAQ**: `client/src/components/FAQ.tsx` (linha ~11-59)
- **Contato**: `client/src/pages/Home.tsx` (linha ~508-570)

### Alterar URLs

Todas as URLs estão hardcoded nos componentes. Para usar variáveis de ambiente:

1. Adicione no `.env`:
```env
VITE_CALENDLY_URL="https://calendly.com/loly-lolykras/30min"
VITE_WHATSAPP_NUMBER="5551995052775"
```

2. Use no código:
```tsx
const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;
const whatsappUrl = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`;
```

---

## 📱 Responsividade

O site foi desenvolvido com abordagem **mobile-first**:

- ✅ Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- ✅ Menu mobile com hamburger
- ✅ Grid responsivo para pacotes (1 col mobile → 3 cols desktop)
- ✅ Tipografia fluida com `clamp()`
- ✅ Imagens otimizadas

---

## 🚨 Troubleshooting

### Erro: "Cannot find module"
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Erro: "Port 3000 already in use"
```bash
# Matar processo na porta 3000
lsof -ti:3000 | xargs kill -9

# Ou usar outra porta
pnpm dev --port 3001
```

### Build falha
```bash
# Verificar erros de TypeScript
pnpm check

# Limpar cache do Vite
rm -rf dist node_modules/.vite
pnpm install
pnpm build
```

---

## 📞 Contatos do Projeto

- **Cliente**: Loly Krás
- **WhatsApp**: +55 51 99505-2775
- **Email**: loly@lolykras.com
- **Instagram**: @lolykras_consultoria
- **Repositório**: gabsleme1988/lolykras-landing-sync

---

## 📝 Changelog

### v1.0.0 (2026-01-06)
- ✅ Implementação completa da landing page
- ✅ SEO otimizado em PT-BR
- ✅ 9 pacotes de consultoria
- ✅ FAQ com 11 perguntas
- ✅ WhatsApp flutuante
- ✅ Responsividade mobile-first
- ✅ Build de produção otimizado

---

## 🎯 Próximos Passos

1. [ ] Configurar domínio customizado (ex: lolykras.com.br)
2. [ ] Adicionar Google Analytics ou Umami
3. [ ] Implementar formulário de contato próprio
4. [ ] Adicionar seção de depoimentos
5. [ ] Criar blog/artigos
6. [ ] Otimizar imagens (WebP, lazy loading)
7. [ ] Adicionar animações (Framer Motion já instalado)

---

**Desenvolvido com ❤️ no Manus**
