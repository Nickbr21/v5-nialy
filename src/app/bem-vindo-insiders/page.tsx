'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Star, MapPin, Calendar, Users, Crown } from 'lucide-react';

export default function BemVindoInsidersPage() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          // Redirecionar para o WhatsApp (substitua pelo link real do grupo)
          window.location.href = "https://wa.me/5511999999999?text=Olá! Acabei de me inscrever no Grupo VIP NIALY e gostaria de ter acesso às ofertas exclusivas.";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background cinematográfico */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0A1F44] to-[#050505]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C1A36F] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0A1F44] rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header de boas-vindas */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Crown className="w-12 h-12 text-[#C1A36F]" />
              <h1 className="text-5xl md:text-7xl font-bold">
                BEM-VINDO AO
                <br />
                <span className="text-[#C1A36F]">GRUPO VIP</span>
              </h1>
              <Crown className="w-12 h-12 text-[#C1A36F]" />
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Você agora faz parte de um seleto grupo de viajantes exclusivos!
            </p>
            
            {/* Contador de redirecionamento */}
            <div className="bg-[rgba(193,163,111,0.2)] border border-[rgba(193,163,111,0.5)] rounded-xl p-6 inline-block">
              <p className="text-lg mb-2">Redirecionando para o WhatsApp em:</p>
              <div className="text-4xl font-bold text-[#C1A36F]">{countdown}s</div>
            </div>
          </div>

          {/* Ofertas exemplo com imagens deslumbrantes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              VEJA ALGUMAS DAS OFERTAS EXCLUSIVAS QUE VOCÊ RECEBERÁ
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "SANTORINI PRIVATIVO",
                  location: "Grécia",
                  duration: "7 dias",
                  guests: "2 pessoas",
                  originalPrice: "R$ 120.000",
                  vipPrice: "R$ 72.000",
                  discount: "40% OFF",
                  image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop",
                  highlights: [
                    "Villa com piscina infinita",
                    "Chef particular incluso",
                    "Iate privado para ilhas",
                    "Helicóptero para transfers"
                  ]
                },
                {
                  title: "DUBAI IMPERIAL",
                  location: "Emirados Árabes",
                  duration: "5 dias",
                  guests: "2 pessoas",
                  originalPrice: "R$ 180.000",
                  vipPrice: "R$ 126.000",
                  discount: "30% OFF",
                  image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
                  highlights: [
                    "Burj Al Arab Royal Suite",
                    "Jato privado incluso",
                    "Desert safari exclusivo",
                    "Compras VIP nos malls"
                  ]
                },
                {
                  title: "PATAGÔNIA SELVAGEM",
                  location: "Chile & Argentina",
                  duration: "10 dias",
                  guests: "4 pessoas",
                  originalPrice: "R$ 200.000",
                  vipPrice: "R$ 140.000",
                  discount: "30% OFF",
                  image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop",
                  highlights: [
                    "Lodge exclusivo EcoCamp",
                    "Helicóptero para glaciares",
                    "Guia naturalista privado",
                    "Trekking em Torres del Paine"
                  ]
                }
              ].map((offer, index) => (
                <div key={index} className="bg-[rgba(10,31,68,0.8)] backdrop-blur-sm border border-[rgba(193,163,111,0.3)] rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
                  
                  {/* Imagem principal */}
                  <div className="relative">
                    <img 
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                      {offer.discount}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-[#C1A36F]" />
                        <span>{offer.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{offer.title}</h3>
                    
                    {/* Detalhes da viagem */}
                    <div className="flex items-center gap-6 mb-6 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#C1A36F]" />
                        <span>{offer.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#C1A36F]" />
                        <span>{offer.guests}</span>
                      </div>
                    </div>
                    
                    {/* Preços */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-gray-400 line-through text-lg">{offer.originalPrice}</span>
                        <span className="text-3xl font-bold text-[#C1A36F]">{offer.vipPrice}</span>
                      </div>
                      <p className="text-sm text-gray-400">Economia de {offer.originalPrice.replace('R$ ', '').replace('.000', '')} - {offer.vipPrice.replace('R$ ', '').replace('.000', '')} = R$ {(parseInt(offer.originalPrice.replace('R$ ', '').replace('.000', '')) - parseInt(offer.vipPrice.replace('R$ ', '').replace('.000', ''))).toLocaleString()}</p>
                    </div>
                    
                    {/* Highlights */}
                    <div className="space-y-2">
                      {offer.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Star className="w-4 h-4 text-[#C1A36F] fill-current" />
                          <span className="text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instruções finais */}
          <div className="text-center">
            <div className="bg-[rgba(10,31,68,0.8)] backdrop-blur-sm border border-[rgba(193,163,111,0.3)] rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-[#C1A36F]">
                🎉 PARABÉNS! VOCÊ AGORA É MEMBRO VIP
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h4 className="font-bold mb-3">O QUE VOCÊ RECEBERÁ:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Ofertas exclusivas semanais</li>
                    <li>• Descontos de até 40% em pacotes premium</li>
                    <li>• Acesso antecipado a novos destinos</li>
                    <li>• Suporte prioritário 24/7</li>
                    <li>• Consultoria gratuita personalizada</li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h4 className="font-bold mb-3">COMO FUNCIONA:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Ofertas enviadas via WhatsApp</li>
                    <li>• Vagas limitadas (primeiro a responder)</li>
                    <li>• Sem compromisso de compra</li>
                    <li>• Pode sair do grupo a qualquer momento</li>
                    <li>• 100% gratuito para sempre</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-[rgba(193,163,111,0.1)] border border-[rgba(193,163,111,0.3)] rounded-xl p-6">
                <p className="text-lg font-semibold mb-2">
                  Você será redirecionado automaticamente para nosso grupo VIP no WhatsApp
                </p>
                <p className="text-gray-300 text-sm">
                  Caso não seja redirecionado, clique no botão abaixo para acessar manualmente
                </p>
                
                <a 
                  href="https://wa.me/5511999999999?text=Olá! Acabei de me inscrever no Grupo VIP NIALY e gostaria de ter acesso às ofertas exclusivas."
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black px-8 py-4 rounded-xl font-bold mt-6 hover:scale-105 transition-all duration-300"
                >
                  ACESSAR GRUPO VIP AGORA
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}