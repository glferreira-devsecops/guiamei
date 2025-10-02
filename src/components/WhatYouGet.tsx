import { BookOpen, Video, Download, Headphones, RefreshCw, Zap } from 'lucide-react';

const modules = [
  {
    icon: BookOpen,
    title: 'Módulo 1: Fundamentos do MEI',
    items: [
      'O que é MEI e quem pode se tornar um',
      'Diferenças entre MEI, ME e EIRELI',
      'Atividades permitidas e não permitidas',
      'Limites de faturamento e contratação'
    ]
  },
  {
    icon: Zap,
    title: 'Módulo 2: Abertura Passo a Passo',
    items: [
      'Documentação necessária completa',
      'Tutorial completo do Portal do Empreendedor',
      'Como escolher a atividade econômica correta',
      'Obtenção do CNPJ em tempo recorde'
    ]
  },
  {
    icon: Download,
    title: 'Módulo 3: Emissão de Notas Fiscais',
    items: [
      'Como emitir sua primeira nota fiscal',
      'Sistemas gratuitos de emissão',
      'Notas fiscais estaduais e municipais',
      'Organização de documentos fiscais'
    ]
  },
  {
    icon: RefreshCw,
    title: 'Módulo 4: Gestão e Obrigações',
    items: [
      'Pagamento do DAS mensal simplificado',
      'Declaração anual (DASN-SIMEI)',
      'Controle financeiro básico',
      'Como evitar multas e problemas fiscais'
    ]
  },
  {
    icon: Video,
    title: 'Módulo 5: Crescimento do Negócio',
    items: [
      'Estratégias de precificação para MEI',
      'Marketing digital para microempreendedores',
      'Como conquistar seus primeiros clientes',
      'Quando e como migrar para ME'
    ]
  },
  {
    icon: Headphones,
    title: 'Bônus Exclusivos',
    items: [
      'Planilha de controle financeiro para MEI',
      'Modelos de contrato e propostas',
      'Lista de ferramentas gratuitas essenciais',
      'Suporte por e-mail para dúvidas'
    ]
  }
];

export default function WhatYouGet() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50" id="conteudo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O Que Você Vai <span className="text-emerald-600">Aprender</span>
          </h2>
          <p className="text-xl text-gray-600">
            Um guia completo, do básico ao avançado, com tudo que você precisa para abrir e gerenciar seu MEI com sucesso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-emerald-500"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                    <Icon className="text-emerald-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {module.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {module.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 sm:p-12 text-center shadow-2xl border-4 border-yellow-400 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-red-700 px-6 py-2 rounded-full font-bold text-sm animate-bounce">
            🔥 DESCONTO LIMITADO
          </div>
          
          <div className="bg-yellow-400 text-red-700 px-4 py-2 rounded-lg font-bold text-sm mb-6 inline-block">
            ⚠️ Apenas 47 vagas restantes com este preço!
          </div>
          
          <div className="mb-6">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-gray-300 line-through text-xl">De R$ 397,00</span>
              <span className="bg-yellow-400 text-red-700 px-3 py-1 rounded-full text-sm font-bold">SAVE 88%</span>
            </div>
            <h3 className="text-4xl sm:text-5xl font-bold text-yellow-300 mb-2 drop-shadow-lg">
              Por apenas R$ 47,00
            </h3>
            <p className="text-yellow-200 text-lg font-semibold">
              💎 Acesso Vitalício + Bônus Exclusivos + Suporte VIP
            </p>
          </div>
          
          <div className="bg-black bg-opacity-20 rounded-lg p-4 mb-6">
            <p className="text-yellow-200 text-sm mb-2">🎁 <strong>BÔNUS GRATUITOS:</strong></p>
            <div className="text-yellow-300 text-sm space-y-1">
              <p>✅ Kit de Planilhas Financeiras (R$ 97)</p>
              <p>✅ Suporte VIP por WhatsApp (R$ 147)</p>
              <p>✅ Grupo Exclusivo de Empreendedores (R$ 197)</p>
              <p>✅ Atualizações Vitalícias (R$ 297)</p>
            </div>
            <p className="text-yellow-200 text-xs mt-2">Total em Bônus: R$ 738,00</p>
          </div>
          
          <a
            href="https://pay.cakto.com.br/uh6tbcm_590320"
            className="inline-flex items-center gap-2 bg-yellow-400 text-red-700 px-12 py-6 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-pulse"
          >
            🚀 GARANTIR OFERTA AGORA
          </a>
          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="text-yellow-200">🔒 Pagamento 100% Seguro</div>
            <div className="text-yellow-200">💯 Garantia de 30 Dias</div>
            <div className="text-yellow-200">⚡ Acesso Imediato</div>
          </div>
          
          <p className="text-yellow-100 text-xs mt-4">
            ⏰ Oferta válida apenas até domingo às 23:59h
          </p>
        </div>
      </div>
    </section>
  );
}
