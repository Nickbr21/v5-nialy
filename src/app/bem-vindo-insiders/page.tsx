'use client'

import { useEffect, useState } from 'react'
import { Star, MapPin, Calendar, Users, Plane, ArrowRight } from 'lucide-react'

export default function BemVindoInsiders() {
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    // Countdown para redirecionamento automático
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          // Redirecionar para o grupo WhatsApp
          window.location.href = "https://wa.me/5511999999999?text=Olá! Vim através do NIALY Insiders e gostaria de conhecer as ofertas exclusivas!"
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F44] via-[#1a2f5a] to-[#0A1F44] relative overflow-hidden">
      {/* Efeito de partículas de fundo */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#C1A36F] rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header de boas-vindas */}
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
              SEJA BEM-VINDO AO NIALY INSIDERS
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-montserrat font-light leading-relaxed mb-8">
              Você agora tem acesso exclusivo às melhores oportunidades de viagem do mercado. 
              Confira algumas das ofertas que nossos membros VIP estão aproveitando neste momento.
            </p>
            
            {/* Contador de redirecionamento */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-[#C1A36F]/30">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white font-montserrat">
                Redirecionamento automático em <span className="font-bold text-[#C1A36F]">{countdown}s</span>
              </span>
            </div>
          </div>

          {/* Seção de ofertas exclusivas */}
          <div className="mb-16">
            <h2 className="font-playfair text-3xl font-bold text-white text-center mb-12 uppercase">
              Ofertas Exclusivas Disponíveis Agora
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Oferta 1: Miami */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#C1A36F]/30 transform hover:scale-105 transition-all duration-300">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop" 
                    alt="Miami Beach - Vista aérea deslumbrante" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    LIMITADO
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center text-white mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="font-montserrat font-medium">Miami, EUA</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-4">MIAMI, EUA</h3>
                  <p className="text-gray-300 font-montserrat font-light mb-4">
                    Passagens Aéreas (Round Trip)
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-montserrat">Economy</span>
                      <span className="text-[#C1A36F] font-bold text-lg">a partir de R$ 2.590</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-montserrat">Executiva</span>
                      <span className="text-[#C1A36F] font-bold text-lg">a partir de R$ 10.999</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-2 text-gray-300 text-sm font-montserrat">Destino Premium</span>
                  </div>
                </div>
              </div>

              {/* Oferta 2: Lisboa */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#C1A36F]/30 transform hover:scale-105 transition-all duration-300">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop" 
                    alt="Lisboa - Vista panorâmica da cidade histórica" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    POPULAR
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center text-white mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="font-montserrat font-medium">Lisboa, Portugal</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-4">LISBOA, PORTUGAL</h3>
                  <p className="text-gray-300 font-montserrat font-light mb-4">
                    Pacote 5 Noites (Aéreo + Hotel 4 Estrelas)
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-montserrat">Por pessoa</span>
                      <span className="text-[#C1A36F] font-bold text-xl">A partir de R$ 4.850</span>
                    </div>
                    <div className="text-gray-400 text-sm font-montserrat">
                      Inclui: Voo + Hotel + Café da manhã
                    </div>
                  </div>
                  
                  <div className="flex items-center text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-2 text-gray-300 text-sm font-montserrat">Pacote Completo</span>
                  </div>
                </div>
              </div>

              {/* Oferta 3: Cancún */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#C1A36F]/30 transform hover:scale-105 transition-all duration-300">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop" 
                    alt="Cancún - Resort de luxo com praia paradisíaca" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    40% OFF
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center text-white mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="font-montserrat font-medium">Cancún, México</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-4">CANCÚN, MÉXICO</h3>
                  <p className="text-gray-300 font-montserrat font-light mb-4">
                    Resort All-Inclusive (Diária para Casal)
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-montserrat">Diária casal</span>
                      <span className="text-[#C1A36F] font-bold text-xl">A partir de R$ 1.200</span>
                    </div>
                    <div className="text-orange-400 text-sm font-montserrat font-bold">
                      com até 40% OFF - Oferta limitada!
                    </div>
                  </div>
                  
                  <div className="flex items-center text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-2 text-gray-300 text-sm font-montserrat">All-Inclusive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Principal */}
          <div className="text-center mb-12">
            <div 
              className="inline-block p-8 rounded-2xl shadow-2xl max-w-2xl"
              style={{
                background: 'rgba(10, 31, 68, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(193, 163, 111, 0.3)'
              }}
            >
              <h3 className="font-playfair text-3xl font-bold text-white mb-6 uppercase">
                Acesso Exclusivo Liberado
              </h3>
              <p className="text-gray-300 font-montserrat font-light mb-8 leading-relaxed">
                Estas são apenas algumas das oportunidades disponíveis para nossos membros VIP. 
                No grupo, você terá acesso a ofertas ainda mais exclusivas, com descontos de até 60% 
                e experiências que não encontrará em nenhum outro lugar.
              </p>
              
              <a 
                href="https://wa.me/5511999999999?text=Olá! Vim através do NIALY Insiders e gostaria de conhecer as ofertas exclusivas!"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#C1A36F] to-[#A8925F] hover:from-[#A8925F] hover:to-[#8B7A4F] text-white font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="font-playfair uppercase">CLIQUE AQUI PARA ENTRAR NO GRUPO WHATSAPP</span>
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Benefícios do grupo */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-playfair text-xl font-bold text-white mb-3 uppercase">Ofertas Diárias</h4>
              <p className="text-gray-300 font-montserrat font-light">
                Receba ofertas exclusivas todos os dias, com descontos de até 60% em destinos premium.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-playfair text-xl font-bold text-white mb-3 uppercase">Comunidade VIP</h4>
              <p className="text-gray-300 font-montserrat font-light">
                Conecte-se com outros viajantes de alto padrão e compartilhe experiências únicas.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-playfair text-xl font-bold text-white mb-3 uppercase">Acesso Antecipado</h4>
              <p className="text-gray-300 font-montserrat font-light">
                Seja o primeiro a saber sobre promoções relâmpago e oportunidades limitadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}