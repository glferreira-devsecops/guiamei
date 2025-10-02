import { useState, useEffect } from 'react';
import { X, Clock, AlertTriangle } from 'lucide-react';

export default function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    // Show banner after 10 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto">
      <div className="bg-gradient-to-r from-red-600 to-red-700 border-4 border-yellow-400 rounded-2xl p-4 shadow-2xl animate-bounce">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-yellow-300 hover:text-white"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-yellow-400 animate-pulse" size={24} />
          <div className="text-yellow-300 font-bold text-sm">
            ⚠️ OFERTA EXPIRA EM:
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 mb-3">
          <Clock className="text-yellow-400" size={20} />
          <div className="bg-black bg-opacity-30 rounded-lg px-3 py-1">
            <span className="text-yellow-300 font-bold text-lg">
              {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>
        
        <div className="text-center mb-3">
          <div className="text-yellow-200 text-xs mb-1">De R$ 397,00 por apenas</div>
          <div className="text-yellow-300 font-bold text-xl">R$ 47,00</div>
          <div className="bg-yellow-400 text-red-700 px-2 py-1 rounded text-xs font-bold inline-block">
            -88% OFF
          </div>
        </div>
        
        <a
          href="https://pay.cakto.com.br/uh6tbcm_590320"
          className="block w-full bg-yellow-400 text-red-700 text-center py-3 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-all duration-300 animate-pulse"
        >
          🚀 GARANTIR DESCONTO AGORA
        </a>
        
        <div className="text-yellow-200 text-xs text-center mt-2">
          ⚡ Só restam 47 vagas com este preço!
        </div>
      </div>
    </div>
  );
}