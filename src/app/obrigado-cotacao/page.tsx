'use client'

import { useEffect, useState } from 'react'
import { 
  CheckCircle, 
  MessageCircle, 
  Clock, 
  Award,
  Phone,
  Mail,
  MapPin,
  Instagram
} from 'lucide-react'

export default function ObrigadoCotacaoPage() {
  const [nomeUsuario, setNomeUsuario] = useState('Cliente')

  useEffect(() => {
    // Aqui você poderia pegar o nome do usuário dos parâmetros da URL ou localStorage
    // Por exemplo: const params = new URLSearchParams(window.location.search)
    // const nome = params.get('nome') || 'Cliente'
    // setNomeUsuario(nome)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Vídeo de fundo simulado com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"></div>
      <div className="video-overlay"></div>
      
      {/* Conteúdo principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Caixa principal */}
          <div className="bg-[#0A1F44] bg-opacity-90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-[#C1A36F] border-opacity-30">
            {/* Ícone de sucesso */}
            <div className="mb-8">
              <CheckCircle className="w-24 h-24 text-[#C1A36F] mx-auto" />
            </div>
            
            {/* Título principal */}
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              SOLICITAÇÃO RECEBIDA
              <span className="block text-[#C1A36F] mt-2">COM SUCESSO</span>
            </h1>
            
            {/* Mensagem personalizada */}
            <div className="text-xl text-gray-300 mb-8 leading-relaxed">
              <p className="mb-4">
                Obrigado, <span className="text-[#C1A36F] font-bold">{nomeUsuario}</span>.
              </p>
              <p className="mb-4">
                A arquitetura da sua próxima jornada já começou.
              </p>
              <p>
                Em poucas horas, nosso especialista entrará em contato via WhatsApp.
              </p>
              <p className="text-[#C1A36F] font-bold mt-6">
                O extraordinário lhe aguarda.
              </p>
            </div>
            
            {/* Informações do próximo passo */}
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-white text-xl mb-4 flex items-center justify-center">
                <Clock className="w-6 h-6 mr-3 text-[#C1A36F]" />
                Próximos Passos
              </h3>
              <ul className="text-gray-300 space-y-3 text-left max-w-md mx-auto">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#C1A36F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Análise detalhada do seu perfil de viagem</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#C1A36F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Curadoria personalizada de experiências</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#C1A36F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Proposta exclusiva em até 24 horas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#C1A36F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Contato direto via WhatsApp</span>
                </li>
              </ul>
            </div>
            
            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </a>
              <a 
                href="/" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                Voltar ao Início
              </a>
            </div>
            
            {/* Garantia */}
            <div className="flex items-center justify-center text-gray-300">
              <Award className="w-5 h-5 mr-2 text-[#C1A36F]" />
              <span className="text-sm">Consultoria gratuita e sem compromisso</span>
            </div>
          </div>
          
          {/* Informações de contato alternativas */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">Precisa falar conosco agora?</p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <a href="tel:+5511999999999" className="flex items-center hover:text-[#C1A36F] transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                (11) 99999-9999
              </a>
              <a href="mailto:contato@nialy.com.br" className="flex items-center hover:text-[#C1A36F] transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                contato@nialy.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Logo N de fundo */}
      <div className="logo-n-background top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">N</div>
      
      {/* Rodapé minimalista */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="flex items-center mb-4 sm:mb-0">
              <h3 className="font-playfair text-2xl font-bold text-[#C1A36F] mr-6">NIALY</h3>
              <span>&copy; 2025 NIALY. Todos os direitos reservados.</span>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#C1A36F] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C1A36F] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}