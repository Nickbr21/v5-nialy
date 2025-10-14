'use client';

import { useState } from 'react';
import { Star, Check, Shield, Clock, Award, Phone, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CotacaoLP() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Passo 1 - Detalhes da Viagem
    origem: '',
    destino: '',
    dataIda: '',
    dataVolta: '',
    flexibilidadeDatas: '',
    numeroPassageiros: '',
    classePreferida: '',
    
    // Passo 2 - Preferências e Orçamento
    orcamentoEstimado: '',
    preferenciaHospedagem: '',
    observacoesEspeciais: '',
    
    // Passo 3 - Dados Pessoais
    nomeCompleto: '',
    email: '',
    whatsapp: ''
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
    
    try {
      const response = await fetch('https://nialytravel.app.n8n.cloud/webhook/8ee524af-00c1-4785-9242-560cf7d1de4c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Formulário de cotação enviado com sucesso:', formData);
        router.push('/obrigado-cotacao');
      } else {
        throw new Error('Erro no envio');
      }
    } catch (error) {
      console.error('Erro no envio:', error);
      // Fallback: ainda redireciona para não quebrar a experiência
      router.push('/obrigado-cotacao');
    } finally {
      setIsSubmitting(false);
    }
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
    <div className="min-h-screen bg-white relative">
      {/* IMAGEM CINEMATOGRÁFICA DE FUNDO EM TELA CHEIA - CURVATURA DA TERRA À NOITE */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&h=1080&fit=crop"
          alt="Curvatura da Terra vista do espaço à noite com luzes das cidades brilhando"
          className="w-full h-full object-cover"
        />
        {/* Overlay azul-marinho com 80% de opacidade */}
        <div className="absolute inset-0 bg-[#0A1F44]/80"></div>
      </div>

      {/* CONTEÚDO DA PÁGINA */}
      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            {/* TÍTULO COM TAMANHO AUMENTADO */}
            <h1 className="text-7xl md:text-8xl font-bold mb-8 font-playfair leading-tight">
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
        <section className="py-24 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-20 text-white font-playfair">
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
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                  <div className="flex justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white font-playfair">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed font-montserrat">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUE A NIALY? */}
        <section className="py-24 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-bold mb-8 text-white font-playfair">
                  POR QUE A NIALY?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#C1A36F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white font-playfair">Expertise Incomparável</h3>
                      <p className="text-gray-300 font-montserrat">15 anos de experiência criando jornadas exclusivas para executivos e empresários de alto nível.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#C1A36F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white font-playfair">Rede Global Exclusiva</h3>
                      <p className="text-gray-300 font-montserrat">Parcerias com os melhores hotéis, companhias aéreas e prestadores de serviços de luxo do mundo.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#C1A36F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white font-playfair">Personalização Total</h3>
                      <p className="text-gray-300 font-montserrat">Cada viagem é única, desenhada especificamente para seus gostos, preferências e objetivos.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#C1A36F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white font-playfair">Tranquilidade Absoluta</h3>
                      <p className="text-gray-300 font-montserrat">Cuidamos de cada detalhe para que você se concentre apenas em viver momentos extraordinários.</p>
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
                <div className="absolute -bottom-6 -left-6 bg-[#C1A36F] text-black p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold font-playfair">10.000+</div>
                  <div className="text-sm font-semibold font-montserrat">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROVA SOCIAL */}
        <section className="py-24 bg-white/10 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-20 text-white font-playfair">
              O QUE NOSSOS CLIENTES DIZEM
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                  <div className="flex items-center justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#C1A36F] fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg leading-relaxed mb-6 text-gray-300 italic font-montserrat">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-white font-playfair">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm font-montserrat">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULÁRIO MULTI-ETAPAS REESTRUTURADO */}
        <section className="py-24 bg-black/30 backdrop-blur-sm relative overflow-hidden">
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
                Passo {currentStep} de 3
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-12">
              <form onSubmit={handleSubmit}>
                {/* PASSO 1 - DETALHES DA SUA VIAGEM */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#C1A36F] mb-8 font-playfair">Passo 1 de 3: "Detalhes da Sua Viagem"</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Origem *</label>
                        <input
                          type="text"
                          name="origem"
                          required
                          value={formData.origem}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                          placeholder="De onde você parte?"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Destino *</label>
                        <input
                          type="text"
                          name="destino"
                          required
                          value={formData.destino}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                          placeholder="Para onde deseja ir?"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Data de Ida *</label>
                        <input
                          type="date"
                          name="dataIda"
                          required
                          value={formData.dataIda}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Data de Volta *</label>
                        <input
                          type="date"
                          name="dataVolta"
                          required
                          value={formData.dataVolta}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Flexibilidade de Datas *</label>
                      <select
                        name="flexibilidadeDatas"
                        required
                        value={formData.flexibilidadeDatas}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="datas-exatas">Datas Exatas</option>
                        <option value="mais-menos-3-dias">+/- 3 dias</option>
                        <option value="mais-menos-7-dias">+/- 7 dias</option>
                        <option value="sou-flexivel">Sou Flexível</option>
                      </select>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Número de Passageiros *</label>
                        <select
                          name="numeroPassageiros"
                          required
                          value={formData.numeroPassageiros}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                        >
                          <option value="">Selecione</option>
                          <option value="1">1 pessoa</option>
                          <option value="2">2 pessoas</option>
                          <option value="3">3 pessoas</option>
                          <option value="4">4 pessoas</option>
                          <option value="5-mais">5 ou mais pessoas</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Classe Preferida *</label>
                        <select
                          name="classePreferida"
                          required
                          value={formData.classePreferida}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                        >
                          <option value="">Selecione</option>
                          <option value="economica">Econômica</option>
                          <option value="economica-premium">Econômica Premium</option>
                          <option value="executiva">Executiva</option>
                          <option value="primeira-classe">Primeira Classe</option>
                        </select>
                      </div>
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

                {/* PASSO 2 - PREFERÊNCIAS E ORÇAMENTO */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#C1A36F] mb-8 font-playfair">Passo 2 de 3: "Preferências e Orçamento"</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Orçamento Estimado por Pessoa *</label>
                        <select
                          name="orcamentoEstimado"
                          required
                          value={formData.orcamentoEstimado}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                        >
                          <option value="">Selecione uma faixa</option>
                          <option value="ate-3500">Até R$ 3.500</option>
                          <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                          <option value="10k-15k">R$ 10.000 - R$ 15.000</option>
                          <option value="15k-25k">R$ 15.000 - R$ 25.000</option>
                          <option value="acima-25k">Acima de R$ 25.000</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Preferência de Hospedagem *</label>
                        <select
                          name="preferenciaHospedagem"
                          required
                          value={formData.preferenciaHospedagem}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                        >
                          <option value="">Selecione</option>
                          <option value="somente-passagem">Somente passagem</option>
                          <option value="hotel-4-5-estrelas">Hotel (4 ou 5 estrelas)</option>
                          <option value="resort">Resort</option>
                          <option value="cruzeiro">Cruzeiro</option>
                          <option value="aluguel-temporada">Aluguel de Temporada (Casas e Villas)</option>
                          <option value="hotel-boutique">Hotel Boutique</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Observações Especiais *</label>
                      <textarea
                        name="observacoesEspeciais"
                        required
                        value={formData.observacoesEspeciais}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors resize-none font-montserrat"
                        placeholder="Conte-nos sobre suas preferências, ocasiões especiais, etc..."
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
                        type="button"
                        onClick={nextStep}
                        className="bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black px-12 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl font-montserrat"
                      >
                        PRÓXIMA ETAPA
                      </button>
                    </div>
                  </div>
                )}

                {/* PASSO 3 - SEUS DADOS PESSOAIS */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#C1A36F] mb-8 font-playfair">Passo 3 de 3: "Seus Dados Pessoais"</h3>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Nome Completo *</label>
                      <input
                        type="text"
                        name="nomeCompleto"
                        required
                        value={formData.nomeCompleto}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">Seu melhor E-mail *</label>
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
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#C1A36F] font-montserrat">WhatsApp (com DDD) *</label>
                      <input
                        type="tel"
                        name="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C1A36F] transition-colors font-montserrat"
                        placeholder="(11) 99999-9999"
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

        {/* RODAPÉ SIMPLIFICADO ATUALIZADO */}
        <footer className="bg-black/50 backdrop-blur-sm py-12 border-t border-white/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="text-3xl font-bold text-[#C1A36F] mb-4 font-playfair">NIALY</div>
            <p className="text-gray-300 mb-6 font-montserrat">
              A arquitetura da jornada executiva
            </p>
            <div className="flex justify-center items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a 
                  href="https://wa.me/5511921731022" 
                  className="font-montserrat hover:text-[#C1A36F] transition-colors"
                >
                  +55 11 92173-1022
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:atendimentonialy@gmail.com" 
                  className="font-montserrat hover:text-[#C1A36F] transition-colors"
                >
                  atendimentonialy@gmail.com
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}