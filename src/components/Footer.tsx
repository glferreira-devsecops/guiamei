import { Mail, FileText, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <FileText size={24} />
                Guia Prático MEI 2025
              </h3>
              <p className="text-sm leading-relaxed">
                O guia completo para formalizar seu negócio e conquistar sua independência financeira como Microempreendedor Individual.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#beneficios" className="hover:text-emerald-400 transition-colors">
                    Benefícios do MEI
                  </a>
                </li>
                <li>
                  <a href="#conteudo" className="hover:text-emerald-400 transition-colors">
                    O Que Você Aprende
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="hover:text-emerald-400 transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-emerald-400 transition-colors">
                    Perguntas Frequentes
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Informações</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Shield className="text-emerald-400 flex-shrink-0 mt-0.5" size={18} />
                  <span>Garantia de 7 dias</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="text-emerald-400 flex-shrink-0 mt-0.5" size={18} />
                  <span>Suporte por e-mail incluso</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-4">
                Este produto destina-se exclusivamente a fins educacionais e informativos sobre o processo de abertura e gestão de MEI no Brasil.
              </p>
              <p className="text-sm text-gray-500">
                2025 Guia Prático MEI Completo. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
