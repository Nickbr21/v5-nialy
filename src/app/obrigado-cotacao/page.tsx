'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, Plane, Clock, MessageCircle } from 'lucide-react'

export default function ObrigadoCotacao() {
  const [leadName, setLeadName] = useState('')

  useEffect(() => {
    // Recuperar nome do lead do localStorage ou URL params
    const urlParams = new URLSearchParams(window.location.search)
    const name = urlParams.get('nome') || localStorage.getItem('leadName') || 'Viajante'
    setLeadName(name)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Vídeo cinematográfico de fundo - Jato decolando */}
      <div className="absolute inset-0">
        {/* Simulação de vídeo cinematográfico com gradientes e animações */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Efeito de movimento de nuvens */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full blur-3xl opacity-20"
                style={{
                  width: `${100 + Math.random() * 200}px`,
                  height: `${50 + Math.random() * 100}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Partículas douradas simulando rastro do jato */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#C1A36F] rounded-full opacity-60 animate-pulse"
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

      {/* Conteúdo principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div 
          className="max-w-2xl w-full p-12 rounded-2xl text-center shadow-2xl"
          style={{
            background: 'rgba(10, 31, 68, 0.8)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(193, 163, 111, 0.3)'
          }}
        >
          {/* Ícone de sucesso */}
          <div className="mb-8">
            <CheckCircle className="w-24 h-24 text-[#C1A36F] mx-auto mb-6 animate-pulse" strokeWidth={1.5} />
          </div>

          {/* Título principal */}
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-8 uppercase">
            SOLICITAÇÃO RECEBIDA COM SUCESSO
          </h1>

          {/* Mensagem personalizada */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-200 mb-6 font-montserrat font-light leading-relaxed">
              Obrigado, <span className="text-[#C1A36F] font-bold">{leadName}</span>. 
              A arquitetura da sua próxima jornada já começou.
            </p>
            <p className="text-lg text-gray-300 font-montserrat font-light leading-relaxed">
              Em poucas horas, nosso especialista entrará em contato via WhatsApp. 
              O extraordinário lhe aguarda.
            </p>
          </div>

          {/* Seção "O Que Acontece Agora?" */}
          <div className="mb-12">
            <h2 className="font-playfair text-2xl font-bold text-white mb-8 uppercase">
              O Que Acontece Agora?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C1A36F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-white mb-2">Análise Detalhada</h3>
                  <p className="text-gray-300 text-sm font-montserrat font-light">
                    Nossa equipe analisa suas preferências e cria um briefing personalizado.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C1A36F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-white mb-2">Contato Direto</h3>
                  <p className="text-gray-300 text-sm font-montserrat font-light">
                    Nosso especialista entra em contato via WhatsApp em até 24h.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C1A36F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-white mb-2">Proposta Exclusiva</h3>
                  <p className="text-gray-300 text-sm font-montserrat font-light">
                    Receba uma proposta única com curadoria premium para sua jornada.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Informações de contato de emergência */}
          <div className="border-t border-gray-600 pt-8">
            <p className="text-gray-300 mb-4 font-montserrat font-light">
              Precisa falar conosco urgentemente?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-montserrat font-medium">WhatsApp Direto</span>
              </a>
              <a 
                href="mailto:contato@nialy.com.br"
                className="flex items-center space-x-2 border border-[#C1A36F] text-[#C1A36F] hover:bg-[#C1A36F] hover:text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="font-montserrat font-medium">contato@nialy.com.br</span>
              </a>
            </div>
          </div>

          {/* Botão para voltar ao site */}
          <div className="mt-8">
            <a 
              href="/"
              className="inline-flex items-center space-x-2 text-gray-300 hover:text-[#C1A36F] transition-colors font-montserrat"
            >
              <span>← Voltar ao site</span>
            </a>
          </div>
        </div>
      </div>

      {/* Estilos CSS para animações */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-5px); }
          75% { transform: translateY(-15px) translateX(5px); }
        }
      `}</style>
    </div>
  )
}