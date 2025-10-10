'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Clock, Star, Phone, Mail } from 'lucide-react';

export default function ObrigadoCotacaoPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background cinematográfico */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0A1F44] to-[#050505]"></div>
        
        {/* Efeito de vídeo cinematográfico simulado */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#0A1F44] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C1A36F]/20 to-transparent rounded-full animate-pulse"></div>
        </div>
        
        {/* Partículas douradas simuladas */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#C1A36F] rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Caixa de confirmação com efeito vidro fosco */}
          <div className="bg-[rgba(10,31,68,0.8)] backdrop-blur-xl border border-[rgba(193,163,111,0.3)] rounded-3xl p-12 md:p-16 shadow-2xl">
            
            {/* Ícone de sucesso */}
            <div className="w-24 h-24 bg-gradient-to-br from-[#C1A36F] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-black" />
            </div>
            
            {/* Título principal */}
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              SOLICITAÇÃO RECEBIDA
              <br />
              <span className="text-[#C1A36F]">COM SUCESSO</span>
            </h1>
            
            {/* Mensagem personalizada */}
            <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed">
              Obrigado! A arquitetura da sua próxima jornada já começou...
              <br />
              Nossa equipe de especialistas está analisando suas preferências neste exato momento.
            </p>
            
            {/* Seção "O que acontece agora?" */}
            <div className="bg-[rgba(193,163,111,0.1)] border border-[rgba(193,163,111,0.3)] rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-[#C1A36F] mb-8">O QUE ACONTECE AGORA?</h2>
              
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#C1A36F] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">ANÁLISE DETALHADA</h3>
                    <p className="text-gray-300 text-sm">
                      Nossa equipe está analisando cada detalhe das suas preferências para criar uma proposta única.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#C1A36F] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">CURADORIA EXCLUSIVA</h3>
                    <p className="text-gray-300 text-sm">
                      Selecionamos experiências únicas e acomodações de ultra-luxo especialmente para você.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#C1A36F] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">CONTATO PERSONALIZADO</h3>
                    <p className="text-gray-300 text-sm">
                      Em até 24 horas, você receberá uma ligação com sua proposta exclusiva.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Timeline de contato */}
            <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-6 mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#C1A36F]" />
                <h3 className="text-xl font-bold">CRONOGRAMA DE CONTATO</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#C1A36F] mb-2">2-4 HORAS</div>
                  <div className="text-sm text-gray-300">Confirmação por e-mail com detalhes do processo</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#C1A36F] mb-2">12-18 HORAS</div>
                  <div className="text-sm text-gray-300">Primeira análise e seleção de opções</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#C1A36F] mb-2">24 HORAS</div>
                  <div className="text-sm text-gray-300">Ligação com proposta personalizada completa</div>
                </div>
              </div>
            </div>
            
            {/* Informações de contato de emergência */}
            <div className="border-t border-[rgba(193,163,111,0.3)] pt-8">
              <h3 className="text-lg font-bold mb-6 text-[#C1A36F]">
                PRECISA FALAR CONOSCO URGENTEMENTE?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center gap-3 bg-[rgba(193,163,111,0.1)] rounded-lg p-4">
                  <Phone className="w-5 h-5 text-[#C1A36F]" />
                  <div>
                    <div className="font-semibold">WhatsApp VIP</div>
                    <div className="text-sm text-gray-300">(11) 99999-9999</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 bg-[rgba(193,163,111,0.1)] rounded-lg p-4">
                  <Mail className="w-5 h-5 text-[#C1A36F]" />
                  <div>
                    <div className="font-semibold">E-mail Prioritário</div>
                    <div className="text-sm text-gray-300">vip@nialy.com.br</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Botão de ação secundária */}
            <div className="mt-12">
              <a 
                href="/insiders"
                className="inline-flex items-center gap-3 border-2 border-[#C1A36F] text-[#C1A36F] px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#C1A36F] hover:text-black transition-all duration-300"
              >
                ENQUANTO ISSO, CONHEÇA NOSSO GRUPO VIP
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Mensagem de rodapé */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              Sua jornada dos sonhos está sendo cuidadosamente planejada pela equipe NIALY.
              <br />
              Prepare-se para uma experiência que superará todas as suas expectativas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}