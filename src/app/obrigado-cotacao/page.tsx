'use client'

import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ObrigadoCotacaoPage() {
  const [leadName, setLeadName] = useState('Cliente')

  useEffect(() => {
    // Aqui você poderia pegar o nome do lead do localStorage ou URL params
    // Para demonstração, vamos usar um nome genérico
    const name = localStorage.getItem('leadName') || 'Cliente'
    setLeadName(name)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fundo com vídeo cinematográfico */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Marca d'água */}
      <div className="absolute top-20 right-20 opacity-5 text-[#C1A36F] text-[200px] font-serif pointer-events-none z-10">
        N
      </div>

      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl w-full">
          {/* Caixa de conteúdo centralizada */}
          <div className="bg-[#0A1F44]/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            {/* Ícone de check grande e dourado */}
            <div className="w-24 h-24 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Check className="w-12 h-12 text-white" />
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              SOLICITAÇÃO RECEBIDA COM SUCESSO
            </h1>

            {/* Texto personalizado */}
            <div className="text-xl md:text-2xl text-white/90 leading-relaxed space-y-6">
              <p>
                Obrigado, <span className="text-[#C1A36F] font-semibold">{leadName}</span>.
              </p>
              <p>
                A arquitetura da sua próxima jornada já começou. Nossa equipe de especialistas 
                está analisando seu briefing e, em poucas horas, o consultor ideal para sua 
                viagem entrará em contato via WhatsApp.
              </p>
              <p className="text-[#C1A36F] font-semibold text-2xl">
                O extraordinário lhe aguarda.
              </p>
            </div>

            {/* Informações adicionais */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-[#C1A36F] text-3xl font-bold mb-2">24h</div>
                  <div className="text-white/70">Tempo máximo de resposta</div>
                </div>
                <div>
                  <div className="text-[#C1A36F] text-3xl font-bold mb-2">100%</div>
                  <div className="text-white/70">Personalizado para você</div>
                </div>
                <div>
                  <div className="text-[#C1A36F] text-3xl font-bold mb-2">24/7</div>
                  <div className="text-white/70">Suporte disponível</div>
                </div>
              </div>
            </div>

            {/* Botão para voltar ao site */}
            <div className="mt-12">
              <button
                onClick={() => window.location.href = '/'}
                className="bg-[#C1A36F] hover:bg-[#B8956A] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Voltar ao Site
              </button>
            </div>
          </div>

          {/* Informação de contato de emergência */}
          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">
              Precisa falar conosco urgentemente? 
              <a href="tel:+5511921731022" className="text-[#C1A36F] hover:text-[#B8956A] ml-2 font-semibold">
                +55 11 92173-1022
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}