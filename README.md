# Guia Prático MEI Completo 2025

Landing page completa para o guia MEI desenvolvida com React, TypeScript e Tailwind CSS.

## ✨ Características

- **React 18** com TypeScript
- **Tailwind CSS** para estilização moderna
- **Vite** para desenvolvimento rápido
- **Lucide React** para ícones
- **SEO otimizado** com meta tags e Schema.org
- **Responsivo** para todos os dispositivos
- **Performance otimizada** para produção

## 🚀 Deploy no Netlify

### Configuração Automática

1. **Fork ou clone este repositório**
2. **Conecte ao Netlify:**
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "Add new site" > "Import an existing project"
   - Conecte seu repositório GitHub/GitLab
   - As configurações são detectadas automaticamente via `netlify.toml`

### Configurações de Build

```bash
# Build command
npm run build

# Publish directory
dist

# Node version
18
```

### Variáveis de Ambiente (Opcional)

No painel do Netlify, configure as seguintes variáveis se necessário:

```bash
NODE_ENV=production
VITE_APP_NAME="Guia Prático MEI Completo 2025"
VITE_APP_URL="https://seu-site.netlify.app"
```

## 🛠️ Desenvolvimento Local

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [seu-repositorio]

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint

# Verificação de tipos TypeScript
npm run typecheck
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Hero.tsx        # Seção hero principal
│   ├── Benefits.tsx    # Benefícios do MEI
│   ├── WhatYouGet.tsx  # Conteúdo do guia
│   ├── Testimonials.tsx # Depoimentos
│   ├── FAQ.tsx         # Perguntas frequentes
│   ├── Guarantee.tsx   # Garantia
│   ├── CTA.tsx         # Call-to-action
│   └── Footer.tsx      # Rodapé
├── App.tsx             # Componente principal
├── main.tsx           # Ponto de entrada
└── index.css          # Estilos globais
```

## 🎨 Personalização

### Cores e Tema

As cores principais estão configuradas no Tailwind CSS:

- **Primary**: Emerald (verde)
- **Secondary**: Blue (azul)
- **Accent**: Amber (âmbar)

### SEO e Meta Tags

Configure no `index.html`:

- Title e description
- Open Graph tags
- Schema.org structured data
- Meta keywords

### Conteúdo

Edite os componentes em `src/components/` para personalizar:

- Textos e copy
- Links de CTA
- Depoimentos
- FAQ
- Benefícios

## 📱 Responsividade

O design é totalmente responsivo com breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance

### Otimizações Incluídas

- **Code splitting** automático
- **Asset optimization** via Vite
- **Modern JS** para browsers compatíveis
- **CSS purging** via Tailwind
- **Gzip compression** via Netlify
- **CDN global** via Netlify

### Lighthouse Score

O projeto está otimizado para alcançar:

- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

## 🔒 Segurança

Headers de segurança configurados no `netlify.toml`:

- X-Frame-Options
- X-XSS-Protection  
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## 📊 Analytics

Para adicionar Google Analytics:

1. Configure `VITE_GA_TRACKING_ID` nas variáveis de ambiente
2. Adicione o script no `index.html`

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

---

**Pronto para produção no Netlify! 🚀**