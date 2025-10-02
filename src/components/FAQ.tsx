import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'O que é MEI e quem pode se cadastrar?',
    answer: 'MEI (Microempreendedor Individual) é uma categoria empresarial simplificada para quem trabalha por conta própria. Pode se cadastrar quem fatura até R$ 81.000 por ano, não tem participação em outra empresa e exerce uma das atividades permitidas pela legislação.'
  },
  {
    question: 'Quanto custa para abrir e manter um MEI?',
    answer: 'Abrir MEI é completamente gratuito. Você paga apenas uma taxa mensal chamada DAS (Documento de Arrecadação do Simples Nacional) que varia entre R$ 60 e R$ 72, dependendo da sua atividade. Este valor já inclui INSS, ISS ou ICMS.'
  },
  {
    question: 'Quais são os benefícios de ser MEI?',
    answer: 'Como MEI você tem CNPJ próprio, pode emitir notas fiscais, paga impostos reduzidos em guia única, tem direito a benefícios previdenciários (aposentadoria, auxílio-doença, salário-maternidade), acesso facilitado a crédito bancário e menos burocracia na gestão do negócio.'
  },
  {
    question: 'Quanto tempo leva para abrir um MEI?',
    answer: 'Com a documentação em mãos e seguindo o guia passo a passo, você consegue abrir seu MEI em poucos minutos pelo Portal do Empreendedor. O CNPJ é gerado automaticamente e você já pode começar a emitir notas fiscais no mesmo dia.'
  },
  {
    question: 'Preciso de contador para ser MEI?',
    answer: 'Não é obrigatório ter contador para MEI. O próprio microempreendedor pode fazer a abertura, pagamento mensal do DAS e a declaração anual. Porém, muitos optam por contratar um contador para ter mais segurança na gestão.'
  },
  {
    question: 'Posso ter MEI e trabalhar com carteira assinada?',
    answer: 'Sim, você pode ser MEI e ter um emprego com carteira assinada ao mesmo tempo. Não há impedimento legal para isso. Porém, você não terá direito ao seguro-desemprego caso seja demitido.'
  },
  {
    question: 'Como faço para emitir nota fiscal sendo MEI?',
    answer: 'Existem sistemas gratuitos disponibilizados pelas prefeituras e estados para emissão de notas fiscais. O guia completo ensina passo a passo como cadastrar-se nesses sistemas e emitir sua primeira nota fiscal eletrônica.'
  },
  {
    question: 'O que acontece se eu ultrapassar o limite de R$ 81.000?',
    answer: 'Se ultrapassar o limite de faturamento, você precisará migrar para ME (Microempresa) ou solicitar o desenquadramento. O guia explica detalhadamente como fazer essa transição quando necessário.'
  },
  {
    question: 'Quais atividades podem ser MEI?',
    answer: 'Existem mais de 400 atividades permitidas para MEI, incluindo serviços como cabeleireiro, eletricista, manicure, desenvolvedor, designer, fotógrafo, entre muitas outras. O guia traz a lista completa atualizada.'
  },
  {
    question: 'Preciso ter endereço comercial para abrir MEI?',
    answer: 'Não necessariamente. Você pode usar seu endereço residencial como endereço comercial do MEI, desde que não haja restrição no contrato de locação ou condomínio.'
  },
  {
    question: 'MEI paga imposto de renda?',
    answer: 'O MEI não paga imposto de renda sobre o faturamento da empresa, apenas a taxa mensal do DAS. Porém, como pessoa física, se você tiver rendimentos acima do limite, deve declarar IR normalmente.'
  },
  {
    question: 'Posso contratar funcionários sendo MEI?',
    answer: 'Sim, o MEI pode contratar até 1 (um) funcionário que receba o salário mínimo ou o piso da categoria. O guia ensina como fazer essa contratação de forma legal e simples.'
  },
  {
    question: 'O guia é atualizado para 2025?',
    answer: 'Sim, todo o conteúdo está completamente atualizado com as regras, valores e procedimentos vigentes em 2025. Você receberá também todas as atualizações futuras gratuitamente.'
  },
  {
    question: 'Tenho suporte se tiver dúvidas?',
    answer: 'Sim, você terá acesso a suporte por e-mail para esclarecer suas dúvidas durante todo o processo de abertura e gestão do seu MEI. Estamos aqui para ajudar você a ter sucesso.'
  },
  {
    question: 'O pagamento é seguro?',
    answer: 'Sim, o pagamento é processado pela Cakto, uma plataforma segura e confiável. Seus dados estão protegidos e você recebe acesso imediato após a confirmação do pagamento.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Perguntas <span className="text-emerald-600">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Tire todas suas dúvidas sobre MEI e o guia completo
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-gray-100 overflow-hidden hover:border-emerald-200 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-emerald-50 transition-colors duration-200"
              >
                <h3 className="font-bold text-gray-900 text-lg pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="text-emerald-600" size={24} />
                  ) : (
                    <Plus className="text-emerald-600" size={24} />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 sm:p-10 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ainda Tem Dúvidas?
          </h3>
          <p className="text-emerald-50 text-lg mb-8">
            Garanta seu acesso e tire todas suas dúvidas com nosso suporte especializado
          </p>
          <a
            href="https://pay.cakto.com.br/uh6tbcm_590320"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-10 py-5 rounded-lg font-bold text-xl hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Garantir Acesso Agora
          </a>
        </div>
      </div>
    </section>
  );
}
