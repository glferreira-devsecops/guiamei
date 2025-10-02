import { CheckCircle2, FileText, CreditCard, PiggyBank, Award, Building2 } from 'lucide-react';

const benefits = [
  {
    icon: FileText,
    title: 'CNPJ Próprio',
    description: 'Tenha seu próprio CNPJ e abra portas para novos clientes e oportunidades empresariais',
    color: 'emerald'
  },
  {
    icon: CreditCard,
    title: 'Emissão de Notas Fiscais',
    description: 'Emita notas fiscais legalmente e trabalhe com empresas de qualquer porte',
    color: 'blue'
  },
  {
    icon: PiggyBank,
    title: 'Impostos Reduzidos',
    description: 'Pague apenas uma taxa mensal fixa entre R$ 60 e R$ 72, muito menos que outras categorias',
    color: 'amber'
  },
  {
    icon: Award,
    title: 'Benefícios Previdenciários',
    description: 'Tenha direito a aposentadoria, auxílio-doença, salário-maternidade e pensão por morte',
    color: 'purple'
  },
  {
    icon: Building2,
    title: 'Acesso a Crédito',
    description: 'Consiga empréstimos e crédito bancário com condições especiais para empresas',
    color: 'rose'
  },
  {
    icon: CheckCircle2,
    title: 'Processos Simplificados',
    description: 'Abertura gratuita, menos burocracia e declaração anual simplificada',
    color: 'teal'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white" id="beneficios">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por Que Se Tornar um <span className="text-emerald-600">MEI em 2025?</span>
          </h2>
          <p className="text-xl text-gray-600">
            Descubra todos os benefícios de formalizar seu negócio e dar o próximo passo na sua carreira empreendedora
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`inline-flex p-4 rounded-xl bg-${benefit.color}-100 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`text-${benefit.color}-600`} size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://pay.cakto.com.br/uh6tbcm_590320"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Quero Ter Acesso ao Guia Completo
          </a>
        </div>
      </div>
    </section>
  );
}
