'use client'

import { useEffect, useState } from 'react'
import { 
  Crown, 
  MessageCircle, 
  Clock, 
  Award,
  Phone,
  Mail,
  Instagram,
  Zap,
  Gift,
  Star,
  CheckCircle
} from 'lucide-react'

export default function BemVindoInsidersPage() {
  const [countdown, setCountdown] = useState(10)
  const [nomeUsuario, setNomeUsuario] = useState('Insider')

  useEffect(() => {
    // Countdown para redirecionamento automático
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      // Redirecionar para WhatsApp após 10 segundos
      window.location.href = 'https://wa.me/5511999999999?text=Olá! Acabei de me inscrever no NIALY Insiders e gostaria de acessar as ofertas exclusivas.'
    }
  }, [countdown])

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/5511999999999?text=Olá! Acabei de me inscrever no NIALY Insiders e gostaria de acessar as ofertas exclusivas.'
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fundo gradiente luxuoso */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44] via-[#1a3a6b] to-[#2a4a7b]"></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Conteúdo principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge de boas-vindas */}
          <div className="inline-flex items-center bg-[#C1A36F] text-white px-8 py-3 rounded-full mb-8 shadow-lg">
            <Crown className="w-6 h-6 mr-3" />
            <span className="font-bold text-lg">BEM-VINDO AO CLUBE EXCLUSIVO</span>
          </div>
          
          {/* Título principal */}
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            SEJA BEM-VINDO AO
            <span className="block text-[#C1A36F] mt-2">NIALY INSIDERS</span>
          </h1>
          
          {/* Mensagem de boas-vindas */}
          <div className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            <p className="mb-4">
              Parabéns, <span className="text-[#C1A36F] font-bold">{nomeUsuario}</span>! 
              Você agora faz parte de um grupo seleto de viajantes.
            </p>
            <p className="mb-4">
              Prepare-se para ter acesso a ofertas exclusivas, experiências únicas 
              e descontos de até 70% que não estão disponíveis para o público geral.
            </p>
          </div>

          {/* Seção de ofertas exclusivas */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 mb-12">
            <h2 className="font-playfair text-3xl font-bold text-white mb-8">
              Suas Ofertas Exclusivas Aguardam
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Miami */}
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="h-32 bg-gradient-to-br from-pink-400 to-orange-500 rounded-xl mb-4"></div>
                <h3 className="font-bold text-xl text-white mb-2">MIAMI, EUA</h3>
                <p className="text-gray-300 text-sm mb-3">Passagens Aéreas (Round Trip)</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Economy a partir de</span>
                    <span className="text-lg font-bold text-[#C1A36F]">R$ 2.590</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Executiva a partir de</span>
                    <span className="text-lg font-bold text-[#C1A36F]">R$ 10.999</span>
                  </div>
                </div>
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block">
                  OFERTA LIMITADA
                </div>
              </div>

              {/* Lisboa */}
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl mb-4"></div>
                <h3 className="font-bold text-xl text-white mb-2">LISBOA, PORTUGAL</h3>
                <p className="text-gray-300 text-sm mb-3">Pacote 5 Noites (Aéreo + Hotel 4 Estrelas)</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">A partir de</span>
                    <span className="text-lg font-bold text-[#C1A36F]">R$ 4.850</span>
                  </div>
                  <div className="text-center">
                    <span className="text-gray-300 text-sm">por pessoa</span>
                  </div>
                </div>
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block">
                  PACOTE COMPLETO
                </div>
              </div>

              {/* Cancún */}
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl mb-4"></div>
                <h3 className="font-bold text-xl text-white mb-2">CANCÚN, MÉXICO</h3>
                <p className="text-gray-300 text-sm mb-3">Resort All-Inclusive (Diária para Casal)</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">A partir de</span>
                    <span className="text-lg font-bold text-[#C1A36F]">R$ 1.200</span>
                  </div>
                  <div className="text-center">
                    <span className="text-red-400 font-bold">com até 40% OFF</span>
                  </div>
                </div>
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block">
                  ALL-INCLUSIVE
                </div>
              </div>
            </div>
          </div>

          {/* Benefícios do Insider */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <Zap className="w-16 h-16 text-[#C1A36F] mx-auto mb-4" />
              <h3 className="font-bold text-xl text-white mb-2">Ofertas Relâmpago</h3>
              <p className="text-gray-300">Primeiro acesso a promoções exclusivas</p>
            </div>
            
            <div className="text-center">
              <Gift className="w-16 h-16 text-[#C1A36F] mx-auto mb-4" />
              <h3 className="font-bold text-xl text-white mb-2">Upgrades Gratuitos</h3>
              <p className="text-gray-300">Melhorias automáticas sem custo</p>
            </div>
            
            <div className="text-center">
              <Star className="w-16 h-16 text-[#C1A36F] mx-auto mb-4" />
              <h3 className="font-bold text-xl text-white mb-2">Experiências VIP</h3>
              <p className="text-gray-300">Acesso a vivências exclusivas</p>
            </div>
          </div>

          {/* Botão principal e countdown */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="font-bold text-2xl text-white mb-4">
              Acesse o Grupo WhatsApp Exclusivo
            </h3>
            <p className="text-gray-300 mb-6">
              Todas as ofertas e oportunidades são compartilhadas primeiro no nosso grupo privado
            </p>
            
            <button 
              onClick={handleWhatsAppClick}
              className="bg-[#C1A36F] hover:bg-[#A8925F] text-white font-bold py-4 px-8 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl mb-6 inline-flex items-center"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              CLIQUE AQUI PARA ENTRAR NO GRUPO WHATSAPP
            </button>
            
            {/* Countdown */}
            <div className="bg-[#C1A36F] text-white px-6 py-3 rounded-full inline-block">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-bold">
                  Redirecionamento automático em: {countdown}s
                </span>
              </div>
            </div>
          </div>

          {/* Garantias */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-300 mb-8">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#C1A36F]" />
              <span>Acesso gratuito</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#C1A36F]" />
              <span>Ofertas exclusivas</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#C1A36F]" />
              <span>Suporte personalizado</span>
            </div>
          </div>

          {/* Informações de contato */}
          <div className="text-center">
            <p className="text-gray-300 mb-4">Dúvidas? Entre em contato conosco:</p>
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
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="font-playfair text-[20rem] font-bold text-white">N</div>
      </div>
      
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