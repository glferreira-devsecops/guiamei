import Hero from './components/Hero';
import Benefits from './components/Benefits';
import WhatYouGet from './components/WhatYouGet';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import CTA from './components/CTA';
import Footer from './components/Footer';
import UrgencyBanner from './components/UrgencyBanner';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <WhatYouGet />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <CTA />
      <Footer />
      <UrgencyBanner />
    </div>
  );
}

export default App;
