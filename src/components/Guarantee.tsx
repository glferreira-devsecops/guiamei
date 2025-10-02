import { Shield, CheckCircle2 } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="bg-white bg-opacity-20 p-6 rounded-full">
                  <Shield className="text-white" size={64} />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6">
                💯 Garantia Blindada de 30 Dias
              </h2>

              <p className="text-xl text-emerald-50 text-center mb-4 leading-relaxed">
                <strong>RISCO ZERO!</strong> Você tem 30 dias completos para testar todo o conteúdo. Se não conseguir abrir seu MEI ou não ficar 100% satisfeito, devolvemos seu dinheiro na hora!
              </p>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-8 text-center">
                <p className="text-yellow-300 font-bold text-lg">
                  🛡️ Nossa garantia é tão forte que assumimos todo o risco para você!
                </p>
                <p className="text-emerald-100 text-sm mt-2">
                  Mais de 50.000 pessoas já confiaram em nosso método
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <CheckCircle2 className="text-white mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-white mb-2">🔒 RISCO ZERO</h3>
                  <p className="text-emerald-50 text-sm">
                    30 dias para testar tudo + reembolso instantâneo
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <CheckCircle2 className="text-white mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-white mb-2">💰 DINHEIRO DE VOLTA</h3>
                  <p className="text-emerald-50 text-sm">
                    Sem perguntas, sem burocracia, sem complicação
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <CheckCircle2 className="text-white mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-white mb-2">⚡ SUPORTE VIP</h3>
                  <p className="text-emerald-50 text-sm">
                    Ajuda pessoal até você abrir seu MEI
                  </p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://pay.cakto.com.br/uh6tbcm_590320"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-red-700 px-12 py-6 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-pulse"
                >
                  🚀 SIM! QUERO COMEÇAR SEM RISCOS
                </a>
                <p className="text-yellow-200 text-sm mt-4 font-semibold">
                  ✅ Acesso imediato + 30 dias de garantia total + Bônus exclusivos
                </p>
                <p className="text-emerald-100 text-xs mt-2">
                  💳 Pagamento 100% seguro via Cakto • Pix, Cartão ou Boleto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
