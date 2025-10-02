// SEO Utilities for Guia MEI 2025

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogType: string;
  canonicalUrl: string;
  structuredData?: object;
}

export const defaultSEO: SEOData = {
  title: "🚀 Como Abrir MEI em 2025 | Guia Completo Passo a Passo ATUALIZADO",
  description: "🔥 OFERTA RELÂMPAGO! Guia MEI 2025 COMPLETO por apenas R$ 47 (era R$ 397). Aprenda como abrir MEI, formalizar negócio e conquistar independência financeira. ✅ 88% OFF + Bônus Exclusivos!",
  keywords: [
    "como abrir MEI 2025",
    "microempreendedor individual",
    "formalizar negócio",
    "MEI passo a passo",
    "abrir empresa",
    "nota fiscal MEI",
    "CNPJ MEI",
    "portal do empreendedor",
    "declaração MEI",
    "DAS MEI",
    "impostos MEI",
    "benefícios MEI",
    "autônomo MEI",
    "trabalhar por conta própria",
    "negócio próprio",
    "empreendedorismo digital",
    "renda extra",
    "freelancer MEI",
    "prestador de serviços",
    "pequeno empreendedor Brasil"
  ],
  ogImage: "https://pay.cakto.com.br/images/mei-2025-guia-completo-og.jpg",
  ogType: "website",
  canonicalUrl: "https://pay.cakto.com.br/uh6tbcm_590320"
};

// Generate structured data for rich snippets
export function generateStructuredData(seoData: SEOData) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${seoData.canonicalUrl}#website`,
        "url": seoData.canonicalUrl,
        "name": "Guia Prático MEI 2025",
        "description": "Especialistas em orientação para abertura de MEI no Brasil",
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${seoData.canonicalUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "pt-BR"
      },
      {
        "@type": "WebPage",
        "@id": `${seoData.canonicalUrl}#webpage`,
        "url": seoData.canonicalUrl,
        "name": seoData.title,
        "isPartOf": {
          "@id": `${seoData.canonicalUrl}#website`
        },
        "datePublished": "2025-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": seoData.description,
        "breadcrumb": {
          "@id": `${seoData.canonicalUrl}#breadcrumb`
        },
        "inLanguage": "pt-BR",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": [seoData.canonicalUrl]
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${seoData.canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://pay.cakto.com.br"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Guias",
            "item": "https://pay.cakto.com.br/guias"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Guia MEI 2025"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://pay.cakto.com.br#organization",
        "name": "Guia Prático MEI 2025",
        "url": "https://pay.cakto.com.br",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://pay.cakto.com.br#logo",
          "inLanguage": "pt-BR",
          "url": "https://pay.cakto.com.br/images/logo-guia-mei.png",
          "contentUrl": "https://pay.cakto.com.br/images/logo-guia-mei.png",
          "width": 200,
          "height": 60,
          "caption": "Guia Prático MEI 2025"
        },
        "image": {
          "@id": "https://pay.cakto.com.br#logo"
        },
        "description": "Especialistas em orientação para abertura de MEI no Brasil. Mais de 15 milhões de empreendedores já formalizaram seus negócios.",
        "foundingDate": "2020",
        "areaServed": {
          "@type": "Country",
          "name": "Brasil"
        },
        "sameAs": [
          "https://www.facebook.com/GuiaMEI2025",
          "https://www.instagram.com/GuiaMEI2025",
          "https://www.youtube.com/GuiaMEI2025",
          "https://www.linkedin.com/company/GuiaMEI2025",
          "https://twitter.com/GuiaMEI2025"
        ]
      }
    ]
  };
}

// SEO optimization utilities
export function optimizeTitle(title: string, maxLength: number = 60): string {
  if (title.length <= maxLength) return title;
  return title.substring(0, maxLength - 3) + '...';
}

export function optimizeDescription(description: string, maxLength: number = 160): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3) + '...';
}

export function generateKeywords(baseKeywords: string[], location?: string): string {
  let keywords = [...baseKeywords];
  
  if (location) {
    keywords = keywords.map(keyword => `${keyword} ${location}`);
    keywords.push(...baseKeywords); // Keep original keywords too
  }
  
  return keywords.join(', ');
}

// Social media optimization
export function generateSocialMeta(seoData: SEOData) {
  return {
    // Facebook/Open Graph
    'og:title': optimizeTitle(seoData.title, 95),
    'og:description': optimizeDescription(seoData.description, 200),
    'og:image': seoData.ogImage,
    'og:image:alt': seoData.title,
    'og:url': seoData.canonicalUrl,
    'og:type': seoData.ogType,
    'og:site_name': 'Guia Prático MEI 2025',
    'og:locale': 'pt_BR',
    
    // Twitter
    'twitter:card': 'summary_large_image',
    'twitter:title': optimizeTitle(seoData.title, 70),
    'twitter:description': optimizeDescription(seoData.description, 200),
    'twitter:image': seoData.ogImage,
    'twitter:site': '@GuiaMEI2025',
    'twitter:creator': '@GuiaMEI2025',
    
    // WhatsApp
    'whatsapp:title': optimizeTitle(seoData.title, 65),
    'whatsapp:description': optimizeDescription(seoData.description, 100),
    'whatsapp:image': seoData.ogImage,
    
    // LinkedIn
    'linkedin:title': optimizeTitle(seoData.title, 120),
    'linkedin:description': optimizeDescription(seoData.description, 160)
  };
}

// Performance tracking for SEO
export function trackSEOPerformance() {
  if (typeof window === 'undefined') return;
  
  // Track Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log('LCP:', entry.startTime);
      }
      if (entry.entryType === 'first-input') {
        const fidEntry = entry as PerformanceEventTiming;
        console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
      }
      if (entry.entryType === 'layout-shift') {
        const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
        if (!clsEntry.hadRecentInput) {
          console.log('CLS:', clsEntry.value);
        }
      }
    }
  });
  
  observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
}

// Generate sitemap data
export function generateSitemapData() {
  const baseUrl = 'https://pay.cakto.com.br';
  const lastmod = new Date().toISOString();
  
  return [
    {
      url: `${baseUrl}/uh6tbcm_590320`,
      lastmod,
      changefreq: 'weekly',
      priority: 1.0,
      images: [
        {
          loc: `${baseUrl}/images/mei-2025-guia-completo.jpg`,
          title: 'Guia Prático MEI Completo 2025',
          caption: 'Como abrir MEI em 2025 - Guia completo passo a passo'
        }
      ]
    },
    {
      url: baseUrl,
      lastmod,
      changefreq: 'monthly',
      priority: 0.8
    }
  ];
}