'use client';

import { useState } from 'react';
import { ChevronRight, ArrowLeft, Check, Star, Shield, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CotacaoPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Etapa 1 - Dados Pessoais
    nome: '',
    email: '',
    telefone: '',
    
    // Etapa 2 - Preferências de Viagem
    destino: '',
    tipoViagem: '',
    dataViagem: '',
    duracao: '',
    numeroViajantes: '',
    
    // Etapa 3 - Experiências Desejadas
    tipoAcomodacao: '',
    experiencias: [] as string[],
    orcamento: '',
    
    // Etapa 4 - Detalhes Finais
    observacoes: '',
    prioridade: ''
  });

  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (checkbox.checked) {
        setFormData(prev => ({
          ...prev,
          experiencias: [...prev.experiencias, value]
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          experiencias: prev.experiencias.filter(exp => exp !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirecionar para página de agradecimento
    router.push('/obrigado-cotacao');
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.nome && formData.email && formData.telefone;
      case 2:
        return formData.destino && formData.tipoViagem && formData.dataViagem && formData.duracao && formData.numeroViajantes;
      case 3:
        return formData.tipoAcomodacao && formData.orcamento;
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0A1F44] to-[#050505]"></div>
        
        {/* Textura dourada */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            SOLICITE SUA
            <br />
            <span className="text-[#C1A36F]">COTAÇÃO EXCLUSIVA</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed">
            Em poucos minutos, nossa equipe de especialistas criará uma proposta 
            personalizada para a jornada dos seus sonhos.
          </p>
          
          {/* Benefícios */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "100% Seguro",
                description: "Seus dados protegidos com criptografia de nível bancário"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Resposta em 24h",
                description: "Nossa equipe entrará em contato em até 24 horas"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Sem Compromisso",
                description: "Cotação gratuita e sem obrigação de compra"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C1A36F] to-[#D4AF37] rounded-full flex items-center justify-center text-black mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário Multi-etapas */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step <= currentStep 
                      ? 'bg-gradient-to-br from-[#C1A36F] to-[#D4AF37] text-black' 
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {step < currentStep ? <Check className="w-5 h-5" /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-full h-1 mx-4 ${
                      step < currentStep ? 'bg-[#C1A36F]' : 'bg-gray-700'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#C1A36F] mb-2">
                {currentStep === 1 && "Dados Pessoais"}
                {currentStep === 2 && "Preferências de Viagem"}
                {currentStep === 3 && "Experiências Desejadas"}
                {currentStep === 4 && "Detalhes Finais"}
              </h2>
              <p className="text-gray-400">Etapa {currentStep} de {totalSteps}</p>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-[rgba(10,31,68,0.8)] backdrop-blur-sm border border-[rgba(193,163,111,0.3)] rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              {/* Etapa 1 - Dados Pessoais */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Nome Completo *</label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">E-mail *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Telefone *</label>
                      <input
                        type="tel"
                        name="telefone"
                        required
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Etapa 2 - Preferências de Viagem */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Destino Desejado *</label>
                      <select
                        name="destino"
                        required
                        value={formData.destino}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors"
                      >
                        <option value="">Selecione um destino</option>
                        <option value="europa">Europa</option>
                        <option value="asia">Ásia</option>
                        <option value="americas">Américas</option>
                        <option value="africa">África</option>
                        <option value="oceania">Oceania</option>
                        <option value="caribe">Caribe</option>
                        <option value="oriente-medio">Oriente Médio</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Tipo de Viagem *</label>
                      <select
                        name="tipoViagem"
                        required
                        value={formData.tipoViagem}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors"
                      >
                        <option value="">Selecione o tipo</option>
                        <option value="romantica">Romântica</option>
                        <option value="familia">Família</option>
                        <option value="negocios">Negócios</option>
                        <option value="aventura">Aventura</option>
                        <option value="relaxamento">Relaxamento</option>
                        <option value="cultural">Cultural</option>
                        <option value="gastronomica">Gastronômica</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Data Preferencial *</label>
                      <input
                        type="month"
                        name="dataViagem"
                        required
                        value={formData.dataViagem}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Duração *</label>
                      <select
                        name="duracao"
                        required
                        value={formData.duracao}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors"
                      >
                        <option value="">Selecione</option>
                        <option value="3-5">3-5 dias</option>
                        <option value="6-10">6-10 dias</option>
                        <option value="11-15">11-15 dias</option>
                        <option value="16-21">16-21 dias</option>
                        <option value="22+">Mais de 22 dias</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Nº de Viajantes *</label>
                      <select
                        name="numeroViajantes"
                        required
                        value={formData.numeroViajantes}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors"
                      >
                        <option value="">Selecione</option>
                        <option value="1">1 pessoa</option>
                        <option value="2">2 pessoas</option>
                        <option value="3-4">3-4 pessoas</option>
                        <option value="5-8">5-8 pessoas</option>
                        <option value="9+">Mais de 9 pessoas</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Etapa 3 - Experiências Desejadas */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Tipo de Acomodação *</label>
                    <select
                      name="tipoAcomodacao"
                      required
                      value={formData.tipoAcomodacao}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors"
                    >
                      <option value="">Selecione</option>
                      <option value="hotel-luxo">Hotel de Luxo (5 estrelas)</option>
                      <option value="resort-exclusivo">Resort Exclusivo</option>
                      <option value="villa-privada">Villa Privada</option>
                      <option value="iate-privado">Iate Privado</option>
                      <option value="safari-lodge">Safari Lodge</option>
                      <option value="boutique-hotel">Boutique Hotel</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-4 text-[#C1A36F]">Experiências de Interesse (selecione todas que desejar)</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'Jato Privado',
                        'Helicóptero Privado',
                        'Iate de Luxo',
                        'Experiências Gastronômicas',
                        'Spa & Wellness',
                        'Compras Exclusivas',
                        'Tours Privados',
                        'Eventos Culturais',
                        'Aventuras Exclusivas',
                        'Fotografia Profissional',
                        'Concierge 24h',
                        'Guia Especializado'
                      ].map((experiencia) => (
                        <label key={experiencia} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            value={experiencia}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-[#C1A36F] bg-white/10 border-white/20 rounded focus:ring-[#C1A36F] focus:ring-2"
                          />
                          <span className="text-white">{experiencia}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Orçamento Estimado *</label>
                    <select
                      name="orcamento"
                      required
                      value={formData.orcamento}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors"
                    >
                      <option value="">Selecione uma faixa</option>
                      <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                      <option value="100k-200k">R$ 100.000 - R$ 200.000</option>
                      <option value="200k-500k">R$ 200.000 - R$ 500.000</option>
                      <option value="500k-1m">R$ 500.000 - R$ 1.000.000</option>
                      <option value="1m+">Acima de R$ 1.000.000</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Etapa 4 - Detalhes Finais */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Observações Especiais</label>
                    <textarea
                      name="observacoes"
                      value={formData.observacoes}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors resize-none"
                      placeholder="Conte-nos sobre preferências especiais, restrições alimentares, celebrações, ou qualquer detalhe importante para tornar sua viagem perfeita..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#C1A36F]">Prioridade do Contato</label>
                    <select
                      name="prioridade"
                      value={formData.prioridade}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors"
                    >
                      <option value="">Selecione</option>
                      <option value="urgente">Urgente (viagem em até 30 dias)</option>
                      <option value="alta">Alta (viagem em até 90 dias)</option>
                      <option value="normal">Normal (viagem em até 6 meses)</option>
                      <option value="planejamento">Planejamento (viagem em mais de 6 meses)</option>
                    </select>
                  </div>
                  
                  <div className="bg-[rgba(193,163,111,0.1)] border border-[rgba(193,163,111,0.3)] rounded-xl p-6">
                    <h3 className="text-lg font-bold text-[#C1A36F] mb-3">O Que Acontece Agora?</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#C1A36F] rounded-full flex items-center justify-center text-black text-xs font-bold">1</div>
                        <span>Nossa equipe analisará suas preferências em detalhes</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#C1A36F] rounded-full flex items-center justify-center text-black text-xs font-bold">2</div>
                        <span>Criaremos uma proposta personalizada exclusiva para você</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#C1A36F] rounded-full flex items-center justify-center text-black text-xs font-bold">3</div>
                        <span>Entraremos em contato em até 24 horas com sua cotação</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Botões de Navegação */}
              <div className="flex justify-between items-center mt-12">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 px-6 py-3 border border-[#C1A36F] text-[#C1A36F] rounded-lg hover:bg-[#C1A36F] hover:text-black transition-all duration-300"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Voltar
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                      isStepValid()
                        ? 'bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black hover:scale-105'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Próximo
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black hover:scale-105 shadow-2xl hover:shadow-[#C1A36F]/50'
                    }`}
                  >
                    {isSubmitting ? 'ENVIANDO...' : 'SOLICITAR COTAÇÃO EXCLUSIVA'}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Seção de Confiança */}
      <section className="py-16 bg-[#0A1F44]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">POR QUE ESCOLHER A NIALY?</h2>
            <p className="text-gray-300">Mais de 10.000 viajantes já confiaram em nossa expertise</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "EXPERTISE COMPROVADA",
                description: "15 anos criando experiências únicas para clientes exigentes",
                icon: <Star className="w-8 h-8" />
              },
              {
                title: "SUPORTE 24/7",
                description: "Equipe disponível 24 horas durante toda sua jornada",
                icon: <Clock className="w-8 h-8" />
              },
              {
                title: "GARANTIA TOTAL",
                description: "100% de satisfação garantida ou seu dinheiro de volta",
                icon: <Shield className="w-8 h-8" />
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C1A36F] to-[#D4AF37] rounded-full flex items-center justify-center text-black mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}