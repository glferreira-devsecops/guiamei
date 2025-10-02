import { ArrowRight, Clock, TrendingUp, Users } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Não Perca Mais Tempo!<br />
            <span className="text-emerald-400">Formalize Seu Negócio Hoje</span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Milhares de empreendedores já deram o primeiro passo rumo à independência financeira. Chegou a sua vez de conquistar seus objetivos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <Clock className="text-emerald-400 mx-auto mb-3" size={40} />
              <p className="text-white font-semibold">Acesso Imediato</p>
              <p className="text-gray-300 text-sm mt-2">Comece agora mesmo</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <TrendingUp className="text-emerald-400 mx-auto mb-3" size={40} />
              <p className="text-white font-semibold">Resultados Rápidos</p>
              <p className="text-gray-300 text-sm mt-2">MEI aberto em dias</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <Users className="text-emerald-400 mx-auto mb-3" size={40} />
              <p className="text-white font-semibold">Suporte Total</p>
              <p className="text-gray-300 text-sm mt-2">Tire suas dúvidas</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 mb-10 border-4 border-yellow-400 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-red-700 px-4 py-1 rounded-bl-lg font-bold text-sm animate-pulse">
              🔥 ÚLTIMAS HORAS!
            </div>
            
            <div className="text-center mb-6">
              <p className="text-yellow-300 text-lg font-bold uppercase tracking-wider mb-2">⚡ OFERTA RELÂMPAGO ⚡</p>
              <div className="bg-black bg-opacity-20 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-gray-300 line-through text-2xl">De R$ 397,00</span>
                  <span className="bg-yellow-400 text-red-700 px-3 py-1 rounded-full text-sm font-bold animate-bounce">-88% OFF</span>
                </div>
                <div className="text-6xl font-bold text-yellow-300 drop-shadow-lg">
                  R$ 47,00
                </div>
                <p className="text-yellow-200 text-lg mt-2 font-semibold">💎 Acesso Vitalício + Bônus Exclusivos</p>
              </div>
              
              <div className="bg-yellow-400 text-red-700 px-4 py-2 rounded-lg font-bold text-sm mb-4">
                ⏰ Oferta expira em: 23h 45min
              </div>
            </div>

            <a
              href="https://pay.cakto.com.br/uh6tbcm_590320"
              className="group inline-flex items-center gap-3 bg-yellow-400 text-red-700 px-12 py-6 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 w-full sm:w-auto justify-center animate-pulse"
            >
              🚀 GARANTIR DESCONTO AGORA
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-sm">
              <div className="flex items-center justify-center gap-2 text-yellow-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>🔒 Pagamento 100% Seguro</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-yellow-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>💯 Garantia de 30 Dias</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-yellow-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>⚡ Acesso Imediato</span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-yellow-200 text-sm mb-2">🎁 <strong>BÔNUS ESPECIAL:</strong> Quem comprar hoje ganha:</p>
              <div className="bg-black bg-opacity-20 rounded-lg p-3">
                <p className="text-yellow-300 text-sm">✅ Kit de Planilhas Financeiras (Valor: R$ 97)</p>
                <p className="text-yellow-300 text-sm">✅ Suporte VIP por WhatsApp (Valor: R$ 147)</p>
                <p className="text-yellow-300 text-sm">✅ Atualizações Vitalícias (Valor: R$ 197)</p>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-sm">
            Você está a um clique de transformar seu futuro profissional
          </p>
        </div>
      </div>
    </section>
  );
}
