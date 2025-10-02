import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    occupation: 'Designer Gráfica',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Sempre tive medo da burocracia, mas este guia simplificou tudo. Em 3 dias meu MEI estava aberto e já emiti minha primeira nota fiscal. Valeu cada centavo!',
    rating: 5
  },
  {
    name: 'João Santos',
    occupation: 'Desenvolvedor Web',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Trabalho como freelancer há anos e finalmente me formalizei. O guia é super completo e o suporte respondeu todas minhas dúvidas. Recomendo!',
    rating: 5
  },
  {
    name: 'Ana Costa',
    occupation: 'Confeiteira',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Meu sonho era ter minha confeitaria formalizada. Com este guia consegui abrir meu MEI sozinha, sem precisar pagar contador. Estou muito feliz!',
    rating: 5
  },
  {
    name: 'Carlos Oliveira',
    occupation: 'Eletricista',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Agora consigo trabalhar com empresas grandes que exigem nota fiscal. Meu faturamento aumentou 40% depois que me formalizei seguindo este guia.',
    rating: 5
  },
  {
    name: 'Juliana Ferreira',
    occupation: 'Manicure',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Muito prático e fácil de seguir. Consegui entender tudo sobre impostos e obrigações. Agora me sinto segura e profissional no meu trabalho.',
    rating: 5
  },
  {
    name: 'Roberto Almeida',
    occupation: 'Consultor de Marketing',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Investimento que se paga no primeiro cliente. O guia é atualizado para 2025 e tem informações que não encontrei em lugar nenhum. Excelente!',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white" id="depoimentos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            💬 <span className="text-emerald-600">+50.000</span> Empreendedores Já Transformaram Suas Vidas
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Veja o que dizem sobre nosso método revolucionário
          </p>
          
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg">
            <div className="flex items-center justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600">50.127</div>
                <div className="text-sm text-gray-600">MEIs Abertos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">4.9★</div>
                <div className="text-sm text-gray-600">Avaliação Média</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">97%</div>
                <div className="text-sm text-gray-600">Aprovação</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl relative"
            >
              <Quote className="absolute top-6 right-6 text-emerald-200" size={40} />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-emerald-100"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.occupation}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-amber-400" size={16} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 max-w-2xl mx-auto border-4 border-yellow-400">
            <p className="text-yellow-300 font-bold text-lg mb-4">
              🔥 Junte-se aos +50.000 empreendedores de sucesso!
            </p>
            <a
              href="https://pay.cakto.com.br/uh6tbcm_590320"
              className="inline-flex items-center gap-2 bg-yellow-400 text-red-700 px-10 py-5 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-pulse"
            >
              🚀 EU TAMBÉM QUERO TRANSFORMAR MINHA VIDA
            </a>
            <p className="text-yellow-200 text-sm mt-4">
              ⚡ Por apenas R$ 47,00 (era R$ 397) • Oferta termina domingo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
