'use client';

import { useState } from 'react';
import { ArrowLeft, Crown, Star, Gift, Zap, Shield, Users, Check, Phone, Mail, Instagram, MessageCircle, Plane, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function InsidersPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    interesse: '',
    mensagem: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Salvar dados no localStorage
    localStorage.setItem('insidersData', JSON.stringify(formData));
    localStorage.setItem('nomeUsuario', formData.nome);
    
    // Redirecionar para página de agradecimento
    window.location.href = `/agradecimento-insiders?nome=${encodeURIComponent(formData.nome)}`;
  };

  const beneficios = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Acesso Prioritário",
      description: "Seja o primeiro a conhecer nossos destinos exclusivos e ofertas especiais antes de qualquer outro cliente."
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Ofertas Exclusivas",
      description: "Descontos especiais de até 30% em pacotes selecionados, disponíveis apenas para membros Insiders."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Atendimento VIP",
      description: "Linha direta com nossos especialistas e atendimento prioritário 24/7 durante suas viagens."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Experiências Únicas",
      description: "Acesso a experiências exclusivas e parcerias especiais que não estão disponíveis ao público geral."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Proteção Total",
      description: "Seguro viagem premium incluído e assistência completa em qualquer situação durante sua jornada."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidade Exclusiva",
      description: "Faça parte de uma comunidade seleta de viajantes e participe de eventos exclusivos da NIALY."
    }
  ];

  const depoimentosVip = [
    {
      nome: "Patricia Mendes",
      localizacao: "São Paulo, SP",
      texto: "Ser Insider da NIALY mudou completamente minha forma de viajar. O acesso antecipado às ofertas me permitiu economizar mais de R$ 15.000 no último ano, além de viver experiências que jamais imaginei serem possíveis.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      nome: "Ricardo Santos",
      localizacao: "Rio de Janeiro, RJ", 
      texto: "A linha direta VIP salvou minha lua de mel. Quando nosso voo foi cancelado, em 10 minutos já tínhamos uma solução melhor que a original. É esse tipo de cuidado que faz toda a diferença.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      nome: "Amanda Costa",
      localizacao: "Brasília, DF",
      texto: "Os eventos exclusivos para Insiders são incríveis. Conheci pessoas fascinantes e descobri destinos que nunca estiveram no meu radar. Vale cada centavo da anuidade.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F44] via-[#1a2f5a] to-[#0A1F44]">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-[#C1A36F] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Voltar ao Início</span>
            </Link>
            
            <div className="text-center">
              <div className="text-[#C1A36F] text-2xl font-serif font-bold">NIALY</div>
              <div className="text-[#C1A36F] text-xs font-serif tracking-wider">INSIDERS</div>
            </div>
            
            <div className="text-sm text-white/70">
              Grupo VIP Exclusivo
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-[#C1A36F] text-[8rem] font-serif font-bold">N</div>
          <div className="absolute bottom-10 right-10 text-[#C1A36F] text-[6rem] font-serif font-bold">I</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#C1A36F] text-[10rem] font-serif font-bold">VIP</div>
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#C1A36F]/20 backdrop-blur-sm border border-[#C1A36F]/30 rounded-full px-6 py-2 mb-8">
            <Crown className="w-5 h-5 text-[#C1A36F]" />
            <span className="text-[#C1A36F] font-semibold">ACESSO EXCLUSIVO</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
            <span className="block">NIALY</span>
            <span className="text-[#C1A36F] font-bold">INSIDERS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Faça parte do círculo mais exclusivo de viajantes do Brasil. Acesso antecipado, ofertas especiais e experiências que o dinheiro não compra.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#inscricao"
              className="bg-[#C1A36F] hover:bg-[#B8956A] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              QUERO SER INSIDER
            </a>
            <a 
              href="#beneficios"
              className="border-2 border-[#C1A36F] text-[#C1A36F] hover:bg-[#C1A36F] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              CONHECER BENEFÍCIOS
            </a>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[#0A1F44] mb-6">
              Benefícios Exclusivos dos Insiders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais que um programa de fidelidade, é uma experiência de viagem completamente transformada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-[#F4F6F9] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="w-16 h-16 bg-[#C1A36F] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {beneficio.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-[#0A1F44] mb-4">
                  {beneficio.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {beneficio.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos VIP */}
      <section className="py-20 bg-[#F4F6F9]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[#0A1F44] mb-6">
              O Que Nossos Insiders Estão Dizendo
            </h2>
            <p className="text-xl text-gray-600">
              Experiências reais de quem já faz parte do nosso círculo exclusivo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {depoimentosVip.map((depoimento, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={depoimento.avatar} 
                    alt={depoimento.nome}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#0A1F44]">{depoimento.nome}</h4>
                    <p className="text-gray-500 text-sm">{depoimento.localizacao}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 italic leading-relaxed">
                  "{depoimento.texto}"
                </p>
                
                <div className="mt-4 flex items-center gap-2">
                  <Crown className="w-4 h-4 text-[#C1A36F]" />
                  <span className="text-sm text-[#C1A36F] font-semibold">INSIDER VERIFICADO</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[#0A1F44] mb-6">
              Como Funciona o Programa Insiders
            </h2>
            <p className="text-xl text-gray-600">
              Simples, exclusivo e transformador.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">Inscreva-se</h3>
              <p className="text-gray-600">Preencha o formulário e aguarde nossa análise. Vagas limitadas.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">Aprovação</h3>
              <p className="text-gray-600">Receba sua aprovação e acesso imediato aos benefícios exclusivos.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">Acesso VIP</h3>
              <p className="text-gray-600">Desfrute de ofertas exclusivas, atendimento prioritário e experiências únicas.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">Viaje Mais</h3>
              <p className="text-gray-600">Economize mais, viaje melhor e viva experiências inesquecíveis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section id="inscricao" className="py-20 bg-gradient-to-br from-[#0A1F44] to-[#1a2f5a]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#C1A36F]/20 backdrop-blur-sm border border-[#C1A36F]/30 rounded-full px-6 py-2 mb-6">
              <Crown className="w-5 h-5 text-[#C1A36F]" />
              <span className="text-[#C1A36F] font-semibold">VAGAS LIMITADAS</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Candidate-se ao Programa Insiders
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato para avaliar sua candidatura.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0A1F44] mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent outline-none transition-all"
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0A1F44] mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0A1F44] mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange('telefone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent outline-none transition-all"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0A1F44] mb-2">
                    Principal Interesse *
                  </label>
                  <select
                    value={formData.interesse}
                    onChange={(e) => handleInputChange('interesse', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent outline-none transition-all"
                    required
                  >
                    <option value="">Selecione seu interesse</option>
                    <option value="ofertas-exclusivas">Ofertas Exclusivas</option>
                    <option value="experiencias-unicas">Experiências Únicas</option>
                    <option value="atendimento-vip">Atendimento VIP</option>
                    <option value="destinos-exclusivos">Destinos Exclusivos</option>
                    <option value="eventos-especiais">Eventos Especiais</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0A1F44] mb-2">
                  Por que você quer ser um Insider?
                </label>
                <textarea
                  value={formData.mensagem}
                  onChange={(e) => handleInputChange('mensagem', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C1A36F] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Conte-nos sobre seu perfil de viajante e por que você seria um ótimo Insider..."
                />
              </div>

              <div className="bg-[#F4F6F9] rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C1A36F] mt-1 flex-shrink-0" />
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold text-[#0A1F44] mb-2">Ao se candidatar, você concorda que:</p>
                    <ul className="space-y-1">
                      <li>• As vagas são limitadas e sujeitas à aprovação</li>
                      <li>• Você receberá comunicações exclusivas sobre ofertas e eventos</li>
                      <li>• Seus dados serão tratados com total segurança e privacidade</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#C1A36F] hover:bg-[#B8956A] text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Crown className="w-5 h-5" />
                CANDIDATAR-SE AO PROGRAMA INSIDERS
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo e descrição */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <div className="text-[#C1A36F] text-4xl font-serif font-bold">NIALY</div>
                <div className="text-[#C1A36F] text-sm font-serif tracking-wider">INSIDERS</div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                O programa VIP mais exclusivo do Brasil para viajantes que buscam experiências extraordinárias.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/nialytravel/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#C1A36F] rounded-full flex items-center justify-center text-white hover:bg-[#B8956A] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="tel:+5511921731022" 
                  className="w-10 h-10 bg-[#C1A36F] rounded-full flex items-center justify-center text-white hover:bg-[#B8956A] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Links rápidos */}
            <div>
              <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-[#C1A36F] transition-colors">Início</a></li>
                <li><a href="/cotacao" className="text-gray-300 hover:text-[#C1A36F] transition-colors">Cotação</a></li>
                <li><a href="#beneficios" className="text-gray-300 hover:text-[#C1A36F] transition-colors">Benefícios</a></li>
              </ul>
            </div>
            
            {/* Contato */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contato VIP</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+5511921731022" className="hover:text-[#C1A36F] transition-colors">
                    +55 11 92173-1022
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  insiders@nialy.com.br
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 NIALY Insiders. Todos os direitos reservados. Programa exclusivo com vagas limitadas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}