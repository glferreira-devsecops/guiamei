import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

function SEOHead({
  title = "🚀 Como Abrir MEI em 2025 | Guia Completo Passo a Passo ATUALIZADO",
  description = "🔥 OFERTA RELÂMPAGO! Guia MEI 2025 COMPLETO por apenas R$ 47 (era R$ 397). Aprenda como abrir MEI, formalizar negócio e conquistar independência financeira. ✅ 88% OFF + Bônus Exclusivos!",
  keywords = "como abrir MEI 2025, microempreendedor individual, formalizar negócio, MEI passo a passo, abrir empresa, nota fiscal MEI, CNPJ MEI, portal do empreendedor, declaração MEI, DAS MEI, impostos MEI, benefícios MEI, autônomo MEI, trabalhar por conta própria, negócio próprio, empreendedorismo digital, renda extra, freelancer MEI, prestador de serviços, pequeno empreendedor Brasil",
  ogImage = "https://pay.cakto.com.br/images/mei-2025-guia-completo-og.jpg",
  canonicalUrl = "https://pay.cakto.com.br/uh6tbcm_590320"
}: SEOHeadProps) {

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Update Open Graph image
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage);
    }

    // Update Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }

    // Update Twitter description
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    }

    // Add structured data for current page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": canonicalUrl,
      "mainEntity": {
        "@type": "Guide",
        "name": "Guia Prático MEI Completo 2025",
        "description": description,
        "author": {
          "@type": "Organization",
          "name": "Guia Prático MEI"
        }
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
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
            "name": "Guia MEI 2025",
            "item": canonicalUrl
          }
        ]
      }
    };

    // Remove existing structured data script
    const existingScript = document.querySelector('script[data-seo="dynamic"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo', 'dynamic');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Update viewport for mobile optimization
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=yes');
    }

    // Add performance hints
    const performanceScript = document.createElement('script');
    performanceScript.innerHTML = `
      // Preload critical resources
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
      }
      
      // Optimize images loading
      if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        });
      }
      
      // Track Core Web Vitals
      if ('web-vital' in window) {
        window.webVitals?.getCLS?.(console.log);
        window.webVitals?.getFID?.(console.log);
        window.webVitals?.getLCP?.(console.log);
      }
    `;
    
    const existingPerformanceScript = document.querySelector('script[data-performance="dynamic"]');
    if (existingPerformanceScript) {
      existingPerformanceScript.remove();
    }
    
    performanceScript.setAttribute('data-performance', 'dynamic');
    document.head.appendChild(performanceScript);

  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null; // This component doesn't render anything
}

// Hook for dynamic SEO updates
export function useSEO() {
  const updateSEO = (seoData: SEOHeadProps) => {
    // This will trigger the useEffect in SEOHead component
    const event = new CustomEvent('seoUpdate', { detail: seoData });
    window.dispatchEvent(event);
  };

  return { updateSEO };
}

export default SEOHead;