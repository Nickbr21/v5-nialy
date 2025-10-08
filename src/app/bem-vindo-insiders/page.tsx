'use client'

import { useEffect, useState } from 'react'
import { Plane, MapPin, Calendar, Users } from 'lucide-react'

export default function BemVindoInsidersPage() {
  const [countdown, setCountdown] = useState(10)

  const offers = [
    {
      destination: "Miami",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      price: "R$ 2.847",
      originalPrice: "R$ 4.200",
      discount: "32% OFF",
      description: "Voo + Hotel 5★ + Transfer",
      duration: "7 dias",
      people: "2 pessoas"
    },
    {
      destination: "Lisboa",
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&h=300&fit=crop",
      price: "R$ 3.290",
      originalPrice: "R$ 4.800",
      discount: "31% OFF",
      description: "Voo + Hotel Boutique + City Tour",
      duration: "8 dias",
      people: "2 pessoas"
    },
    {
      destination: "Cancún",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      price: "R$ 4.150",
      originalPrice: "R$ 6.200",
      discount: "33% OFF",
      description: "Resort All-Inclusive + Voo",
      duration: "6 dias",
      people: "2 pessoas"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          // Redirecionar para o WhatsApp quando o countdown chegar a 0
          window.location.href = 'https://wa.me/5511921731022?text=Olá! Acabei de me cadastrar no NIALY Insiders e gostaria de saber mais sobre as ofertas exclusivas.'
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleWhatsAppRedirect = () => {
    window.location.href = 'https://wa.me/5511921731022?text=Olá! Acabei de me cadastrar no NIALY Insiders e gostaria de saber mais sobre as ofertas exclusivas.'
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fundo com imagem de avião */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop&q=80"
          alt="Avião NIALY"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Marca d'água */}
      <div className="absolute top-20 right-20 opacity-5 text-[#C1A36F] text-[200px] font-serif pointer-events-none z-10">
        N
      </div>

      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full">
          {/* Título Principal */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              VOCÊ DEU O PRIMEIRO PASSO PARA SUA VIAGEM!
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              Seja bem-vindo ao NIALY Insiders. Enquanto preparamos seu acesso, 
              confira algumas oportunidades exclusivas disponíveis esta semana:
            </p>
          </div>

          {/* Seção de Ofertas */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-white text-center mb-8">
              OFERTAS EXCLUSIVAS DESTA SEMANA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offers.map((offer, index) => (
                <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={offer.image} 
                      alt={offer.destination}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[#C1A36F] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {offer.discount}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-serif text-[#0A1F44] mb-2">{offer.destination}</h3>
                    <p className="text-gray-600 mb-4">{offer.description}</p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {offer.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {offer.people}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500 line-through">{offer.originalPrice}</div>
                        <div className="text-2xl font-bold text-[#C1A36F]">{offer.price}</div>
                      </div>
                      <button className="bg-[#0A1F44] hover:bg-[#0A1F44]/90 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
                        Ver Detalhes
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botão Principal e Countdown */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif text-white mb-4">
                Pronto para descobrir mais ofertas exclusivas?
              </h3>
              
              <button
                onClick={handleWhatsAppRedirect}
                className="bg-[#C1A36F] hover:bg-[#B8956A] text-white px-8 py-4 rounded-xl text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg mb-6 w-full md:w-auto"
              >
                CLIQUE AQUI PARA ENTRAR NO GRUPO WHATSAPP
              </button>
              
              <div className="text-white/70 text-lg">
                Você será redirecionado em <span className="text-[#C1A36F] font-bold text-2xl">{countdown}</span> segundos...
              </div>
              
              <div className="mt-4 text-sm text-white/60">
                Ou clique no botão acima para acessar imediatamente
              </div>
            </div>
          </div>

          {/* Informações de Benefícios */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Ofertas Diárias</h4>
              <p className="text-white/70 text-sm">Receba as melhores oportunidades todos os dias</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Destinos Exclusivos</h4>
              <p className="text-white/70 text-sm">Acesso a lugares que poucos conhecem</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#C1A36F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Comunidade VIP</h4>
              <p className="text-white/70 text-sm">Conecte-se com outros viajantes de elite</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}