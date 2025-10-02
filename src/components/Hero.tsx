import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50 pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-down">
            <TrendingUp size={16} />
            <span>Mais de 15 milhões de MEIs ativos no Brasil</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
            Abra seu <span className="text-emerald-600">MEI em 2025</span> e Transforme seu Futuro Financeiro
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up">
            O guia completo e definitivo para <strong>formalizar seu negócio</strong>, emitir notas fiscais e conquistar sua <strong>independência financeira</strong> com estratégias validadas.
          </p>

          <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-8 rounded-r-lg animate-pulse">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414L9 8.586 7.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 101.414 1.414L9 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-red-700 font-bold">🔥 OFERTA RELÂMPAGO - Só até Domingo!</p>
                <p className="text-red-600 text-sm">Últimas 24 horas com 88% de desconto</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up-delayed">
            <a
              href="https://pay.cakto.com.br/uh6tbcm_590320"
              className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-lg font-bold text-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center animate-bounce"
            >
              ⚡ GARANTIR OFERTA AGORA
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </a>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-gray-500 line-through text-lg">De R$ 397,00</span>
                <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">-88%</span>
              </div>
              <div className="font-bold text-2xl text-red-600">
                Por apenas R$ 47,00
              </div>
              <p className="text-sm text-gray-600">Acesso Vitalício + Garantia de 30 dias</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16">
            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow animate-scale-in">
              <div className="bg-emerald-100 p-3 rounded-full">
                <Shield className="text-emerald-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900">100% Seguro</h3>
              <p className="text-gray-600 text-sm">Informações validadas e atualizadas para 2025</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow animate-scale-in animation-delay-200">
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="text-blue-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900">Suporte Total</h3>
              <p className="text-gray-600 text-sm">Tire suas dúvidas a qualquer momento</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow animate-scale-in animation-delay-400">
              <div className="bg-amber-100 p-3 rounded-full">
                <TrendingUp className="text-amber-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900">Resultados Rápidos</h3>
              <p className="text-gray-600 text-sm">Seu MEI pronto em poucos dias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
