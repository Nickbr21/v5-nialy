'use client';

import { useEffect, useState } from 'react';
import { Check, Clock, Phone, Mail, Calendar, Star } from 'lucide-react';

export default function GratidaoCotacaoPage() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Simular captura do nome do usuário (em produção viria dos parâmetros da URL ou localStorage)
    setUserName('Viajante');
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Vídeo de fundo cinematográfico simulado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44] via-[#1a2f5a] to-black"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Efeitos visuais cinematográficos */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C1A36F] rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Caixa de confirmação com efeito vidro fosco */}
          <div className="glass-effect rounded-3xl p-12 md:p-16 text-white">
            {/* Ícone de sucesso */}
            <div className="w-20 h-20 bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-black" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-playfair">
              SOLICITAÇÃO RECEBIDA COM SUCESSO
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed font-montserrat">
              Obrigado, <span className="text-[#C1A36F] font-bold">{userName}</span>. 
              A arquitetura da sua próxima jornada já começou...
            </p>
            
            {/* Seção: O Que Acontece Agora? */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 text-left">
              <h2 className="text-3xl font-bold mb-8 text-[#C1A36F] text-center font-playfair">
                O QUE ACONTECE AGORA?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#C1A36F] font-playfair">PRÓXIMAS 24 HORAS</h3>
                  <p className="text-gray-300 font-montserrat">
                    Nossa equipe de especialistas analisará sua solicitação e preparará uma proposta personalizada
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#C1A36F] font-playfair">CONTATO DIRETO</h3>
                  <p className="text-gray-300 font-montserrat">
                    Um de nossos consultores entrará em contato para refinar os detalhes da sua jornada
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#C1A36F] font-playfair">PROPOSTA EXCLUSIVA</h3>
                  <p className="text-gray-300 font-montserrat">
                    Receberá uma proposta detalhada com opções cuidadosamente selecionadas para você
                  </p>
                </div>
              </div>
            </div>
            
            {/* Cronograma detalhado */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-bold mb-6 text-[#C1A36F] text-center font-playfair">
                CRONOGRAMA DA SUA JORNADA
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    time: "Hoje",
                    title: "Análise Inicial",
                    description: "Nossa equipe analisa seu perfil e preferências"
                  },
                  {
                    time: "24h",
                    title: "Primeira Proposta",
                    description: "Você recebe a proposta inicial por e-mail"
                  },
                  {
                    time: "48h",
                    title: "Consulta Personalizada",
                    description: "Reunião para ajustar detalhes e preferências"
                  },
                  {
                    time: "72h",
                    title: "Proposta Final",
                    description: "Proposta definitiva com todos os detalhes"
                  },
                  {
                    time: "7 dias",
                    title: "Confirmação",
                    description: "Aprovação final e início dos preparativos"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C1A36F] rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-[#C1A36F] text-black px-3 py-1 rounded-full text-sm font-bold font-montserrat">
                          {step.time}
                        </span>
                        <h4 className="text-lg font-bold text-white font-playfair">{step.title}</h4>
                      </div>
                      <p className="text-gray-300 font-montserrat">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Informações de contato */}
            <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-[#C1A36F] font-playfair">
                PRECISA FALAR CONOSCO?
              </h3>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#C1A36F]" />
                  <span className="font-montserrat">(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#C1A36F]" />
                  <span className="font-montserrat">contato@nialy.com.br</span>
                </div>
              </div>
            </div>
            
            {/* Mensagem final */}
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-300 italic font-montserrat">
                "Sua jornada extraordinária está prestes a começar. 
                Prepare-se para viver momentos que se tornarão memórias eternas."
              </p>
              <div className="mt-4 text-[#C1A36F] font-bold text-xl font-playfair">
                — Equipe NIALY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}