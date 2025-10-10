'use client';

import { useState } from 'react';
import { Star, Check, Shield, Clock, Award, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CotacaoLP() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    destino: '',
    dataViagem: '',
    duracao: '',
    passageiros: '',
    orcamento: '',
    tipoViagem: '',
    hospedagem: '',
    observacoes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Formulário de cotação enviado:', formData);
    
    // Redirecionar para página de agradecimento
    router.push('/obrigado-cotacao');
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "CEO, Tech Solutions",
      text: "A NIALY transformou completamente nossa visão sobre viagens corporativas. Cada detalhe foi pensado com uma precisão que jamais experimentamos antes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Marina Silva",
      role: "Diretora de Marketing",
      text: "Não é apenas uma agência, é uma experiência de vida. A curadoria dos destinos e o atendimento personalizado superam qualquer expectativa.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative py-24 bg-gradient-to-br from-[#0A1F44] via-[#1a2f5a] to-[#0A1F44] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 font-playfair">
            O PONTO DE PARTIDA PARA SUA
            <br />
            <span className="text-[#C1A36F] text-glow">VIAGEM DE ALTA PERFORMANCE</span>
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-12 text-gray-300 font-montserrat">
            Transforme seus sonhos de viagem em realidade com nossa expertise de 15 anos 
            no mercado de luxo. Cada jornada é única, cada detalhe é perfeito.
          </p>
          
          <div className="flex justify-center">
            <div className="bg-[#C1A36F] text-black px-8 py-3 rounded-full font-bold text-lg">
              ✈️ Cotação Gratuita e Sem Compromisso
            </div>
          </div>
        </div>
      </section>

      {/* A GARANTIA NIALY */}
      <section className="py-24 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#0A1F44] font-playfair">
            A GARANTIA NIALY
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="w-12 h-12 text-[#C1A36F]" />,
                title: "SUPORTE 24/7",
                description: "Nossa equipe está disponível 24 horas por dia, 7 dias por semana, para garantir que sua viagem seja perfeita do início ao fim."
              },
              {
                icon: <Award className="w-12 h-12 text-[#C1A36F]" />,
                title: "GARANTIA DE SATISFAÇÃO",
                description: "100% de satisfação garantida ou seu dinheiro de volta. Sua experiência é nossa prioridade absoluta."
              },
              {
                icon: <Clock className="w-12 h-12 text-[#C1A36F]" />,
                title: "RESPOSTA EM 24H",
                description: "Receba sua cotação personalizada em até 24 horas, com todas as opções cuidadosamente selecionadas para você."
              }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0A1F44] font-playfair">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-montserrat">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE A NIALY? */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-[#0A1F44] font-playfair">
                POR QUE A NIALY?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#C1A36F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#0A1F44] font-playfair">Expertise Incomparável</h3>
                    <p className="text-gray-600 font-montserrat">15 anos de experiência criando jornadas exclusivas para executivos e empresários de alto nível.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#C1A36F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#0A1F44] font-playfair">Rede Global Exclusiva</h3>
                    <p className="text-gray-600 font-montserrat">Parcerias com os melhores hotéis, companhias aéreas e prestadores de serviços de luxo do mundo.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#C1A36F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#0A1F44] font-playfair">Personalização Total</h3>
                    <p className="text-gray-600 font-montserrat">Cada viagem é única, desenhada especificamente para seus gostos, preferências e objetivos.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#C1A36F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#0A1F44] font-playfair">Tranquilidade Absoluta</h3>
                    <p className="text-gray-600 font-montserrat">Cuidamos de cada detalhe para que você se concentre apenas em viver momentos extraordinários.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop"
                alt="Viagem de luxo"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#0A1F44] text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-[#C1A36F] font-playfair">10.000+</div>
                <div className="text-sm font-semibold font-montserrat">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-24 bg-[#F4F6F9]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#0A1F44] font-playfair">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C1A36F] fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg leading-relaxed mb-6 text-gray-700 italic font-montserrat">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-[#0A1F44] font-playfair">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm font-montserrat">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO MULTI-ETAPAS */}
      <section className="py-24 bg-[#0A1F44] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-white font-playfair">
              SOLICITE SUA COTAÇÃO PERSONALIZADA
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-montserrat">
              Preencha os dados abaixo e receba uma proposta exclusiva em até 24 horas
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-center items-center gap-4 mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= step ? 'bg-[#C1A36F] text-black' : 'bg-gray-600 text-gray-300'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 ${
                      currentStep > step ? 'bg-[#C1A36F]' : 'bg-gray-600'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center text-gray-300 font-montserrat">
              Etapa {currentStep} de 3
            </div>
          </div>
          
          <div className="glass-effect rounded-2xl p-12">
            <form onSubmit={handleSubmit}>
              {/* ETAPA 1 - DADOS PESSOAIS */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#C1A36F] mb-8 font-playfair">Seus Dados</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Nome Completo *</label>
                      <input
                        type="text"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">E-mail *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Telefone *</label>
                    <input
                      type="tel"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black px-12 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl font-montserrat"
                    >
                      PRÓXIMA ETAPA
                    </button>
                  </div>
                </div>
              )}

              {/* ETAPA 2 - DETALHES DA VIAGEM */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#C1A36F] mb-8 font-playfair">Detalhes da Viagem</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Destino Desejado *</label>
                      <input
                        type="text"
                        name="destino"
                        required
                        value={formData.destino}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                        placeholder="Ex: Paris, Maldivas, Japão..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Data da Viagem</label>
                      <input
                        type="date"
                        name="dataViagem"
                        value={formData.dataViagem}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Duração</label>
                      <select
                        name="duracao"
                        value={formData.duracao}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                      >
                        <option value="">Selecione a duração</option>
                        <option value="3-5-dias">3 a 5 dias</option>
                        <option value="1-semana">1 semana</option>
                        <option value="2-semanas">2 semanas</option>
                        <option value="1-mes">1 mês</option>
                        <option value="mais-1-mes">Mais de 1 mês</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Número de Passageiros</label>
                      <select
                        name="passageiros"
                        value={formData.passageiros}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                      >
                        <option value="">Selecione</option>
                        <option value="1">1 pessoa</option>
                        <option value="2">2 pessoas</option>
                        <option value="3-4">3 a 4 pessoas</option>
                        <option value="5-10">5 a 10 pessoas</option>
                        <option value="mais-10">Mais de 10 pessoas</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Tipo de Viagem</label>
                    <select
                      name="tipoViagem"
                      value={formData.tipoViagem}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="lazer">Lazer</option>
                      <option value="negocios">Negócios</option>
                      <option value="lua-mel">Lua de Mel</option>
                      <option value="familia">Família</option>
                      <option value="aventura">Aventura</option>
                      <option value="cultural">Cultural</option>
                    </select>
                  </div>
                  
                  <div className="flex gap-4 justify-center">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="border-2 border-[#C1A36F] text-[#C1A36F] px-8 py-3 rounded-xl font-bold hover:bg-[#C1A36F] hover:text-black transition-all duration-300 font-montserrat"
                    >
                      VOLTAR
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black px-12 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl font-montserrat"
                    >
                      PRÓXIMA ETAPA
                    </button>
                  </div>
                </div>
              )}

              {/* ETAPA 3 - PREFERÊNCIAS E ORÇAMENTO */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#C1A36F] mb-8 font-playfair">Preferências e Orçamento</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Orçamento Estimado</label>
                      <select
                        name="orcamento"
                        value={formData.orcamento}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                      >
                        <option value="">Selecione uma faixa</option>
                        <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                        <option value="100k-200k">R$ 100.000 - R$ 200.000</option>
                        <option value="200k-500k">R$ 200.000 - R$ 500.000</option>
                        <option value="500k+">Acima de R$ 500.000</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Preferência de Hospedagem</label>
                      <select
                        name="hospedagem"
                        value={formData.hospedagem}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                      >
                        <option value="">Selecione</option>
                        <option value="hotel-luxo">Hotel de Luxo</option>
                        <option value="resort">Resort</option>
                        <option value="villa-privada">Villa Privada</option>
                        <option value="boutique">Hotel Boutique</option>
                        <option value="cruzeiro">Cruzeiro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Observações Especiais</label>
                    <textarea
                      name="observacoes"
                      value={formData.observacoes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors resize-none font-montserrat"
                      placeholder="Conte-nos sobre suas preferências especiais, restrições alimentares, ocasiões especiais, etc..."
                    />
                  </div>
                  
                  <div className="flex gap-4 justify-center">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="border-2 border-[#C1A36F] text-[#C1A36F] px-8 py-3 rounded-xl font-bold hover:bg-[#C1A36F] hover:text-black transition-all duration-300 font-montserrat"
                    >
                      VOLTAR
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black px-12 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed font-montserrat"
                    >
                      {isSubmitting ? 'ENVIANDO...' : 'SOLICITAR COTAÇÃO'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* RODAPÉ SIMPLIFICADO */}
      <footer className="bg-[#0A1F44] py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-3xl font-bold text-[#C1A36F] mb-4 font-playfair">NIALY</div>
          <p className="text-gray-300 mb-6 font-montserrat">
            A arquitetura da jornada executiva
          </p>
          <div className="flex justify-center items-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="font-montserrat">(11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="font-montserrat">contato@nialy.com.br</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}