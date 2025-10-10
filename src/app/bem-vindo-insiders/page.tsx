'use client';

import { useEffect, useState } from 'react';
import { Check, MapPin, Calendar, Users, Star, ExternalLink } from 'lucide-react';

export default function IntermediariaInsidersPage() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          // Redirecionar para o WhatsApp (substitua pelo link real do grupo)
          window.location.href = "https://wa.me/5511999999999?text=Olá! Acabei de me inscrever no NIALY Insiders e gostaria de fazer parte do grupo VIP!";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const ofertas = [
    {
      destino: "MIAMI",
      titulo: "Experiência Art Deco Premium",
      preco: "R$ 45.000",
      precoOriginal: "R$ 78.000",
      desconto: "42% OFF",
      duracao: "7 dias / 6 noites",
      pessoas: "2 pessoas",
      inclui: [
        "Voos executivos diretos",
        "Hotel 5 estrelas em South Beach",
        "Transfer em Rolls Royce",
        "Jantar no Joe's Stone Crab",
        "Tour privativo de arte em Wynwood",
        "Yacht day com chef a bordo"
      ],
      imagem: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
      destino: "LISBOA",
      titulo: "Charme Português Exclusivo",
      preco: "R$ 38.000",
      precoOriginal: "R$ 65.000",
      desconto: "41% OFF",
      duracao: "8 dias / 7 noites",
      pessoas: "2 pessoas",
      inclui: [
        "Voos em classe executiva",
        "Palácio convertido em hotel de luxo",
        "Transfer em Mercedes Classe S",
        "Degustação de vinhos no Douro",
        "Aula de culinária com chef Michelin",
        "Tour privativo pelos azulejos históricos"
      ],
      imagem: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop"
    },
    {
      destino: "CANCÚN",
      titulo: "Paraíso Maya Ultra-Luxo",
      preco: "R$ 52.000",
      precoOriginal: "R$ 89.000",
      desconto: "42% OFF",
      duracao: "6 dias / 5 noites",
      pessoas: "2 pessoas",
      inclui: [
        "Jato privado para Cancún",
        "Resort all-inclusive ultra-luxo",
        "Butler service 24h",
        "Mergulho nos cenotes sagrados",
        "Jantar em restaurante subaquático",
        "Spa maya com tratamentos ancestrais"
      ],
      imagem: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F44] via-[#1a2f5a] to-black text-white">
      {/* Header com countdown */}
      <div className="bg-[#C1A36F] text-black py-4 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg font-bold font-montserrat">
            🎉 BEM-VINDO AO NIALY INSIDERS! Redirecionando para o grupo em {countdown} segundos...
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Mensagem de boas-vindas */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 text-black" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
            PARABÉNS!
            <br />
            <span className="text-[#C1A36F]">VOCÊ ESTÁ DENTRO</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-montserrat">
            Você agora faz parte do grupo mais exclusivo de viajantes do Brasil. 
            Aqui estão algumas das ofertas incríveis que nossos membros têm acesso:
          </p>
        </div>

        {/* Ofertas exclusivas com imagens deslumbrantes */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {ofertas.map((oferta, index) => (
            <div key={index} className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
              {/* Imagem deslumbrante */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={oferta.imagem}
                  alt={oferta.destino}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {oferta.desconto}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold font-playfair">{oferta.destino}</div>
                </div>
              </div>
              
              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#C1A36F] font-playfair">
                  {oferta.titulo}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-white font-playfair">{oferta.preco}</div>
                    <div className="text-gray-400 line-through text-sm font-montserrat">{oferta.precoOriginal}</div>
                  </div>
                  <div className="text-right text-sm text-gray-300 font-montserrat">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="w-4 h-4" />
                      {oferta.duracao}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {oferta.pessoas}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {oferta.inclui.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-[#C1A36F] flex-shrink-0 mt-0.5" />
                      <span className="font-montserrat">{item}</span>
                    </div>
                  ))}
                  {oferta.inclui.length > 4 && (
                    <div className="text-sm text-[#C1A36F] font-semibold font-montserrat">
                      + {oferta.inclui.length - 4} outros benefícios exclusivos
                    </div>
                  )}
                </div>
                
                <div className="bg-[#C1A36F] text-black text-center py-3 rounded-lg font-bold font-montserrat">
                  EXCLUSIVO PARA INSIDERS
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informações sobre o grupo */}
        <div className="glass-effect rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#C1A36F] font-playfair">
            O QUE VOCÊ ENCONTRARÁ NO GRUPO
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Star className="w-8 h-8 text-[#C1A36F]" />,
                title: "Ofertas Flash",
                description: "Descontos de até 70% em destinos premium"
              },
              {
                icon: <Users className="w-8 h-8 text-[#C1A36F]" />,
                title: "Networking",
                description: "Conecte-se com outros executivos viajantes"
              },
              {
                icon: <MapPin className="w-8 h-8 text-[#C1A36F]" />,
                title: "Dicas Exclusivas",
                description: "Informações privilegiadas de destinos"
              },
              {
                icon: <Calendar className="w-8 h-8 text-[#C1A36F]" />,
                title: "Eventos VIP",
                description: "Convites para experiências únicas"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white font-playfair">{item.title}</h3>
                <p className="text-gray-300 text-sm font-montserrat">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#C1A36F] to-[#D4AF37] text-black rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4 font-playfair">
              REDIRECIONAMENTO AUTOMÁTICO EM {countdown}s
            </h3>
            <p className="text-lg mb-6 font-montserrat">
              Ou clique no botão abaixo para acessar imediatamente
            </p>
            <a 
              href="https://wa.me/5511999999999?text=Olá! Acabei de me inscrever no NIALY Insiders e gostaria de fazer parte do grupo VIP!"
              className="bg-black text-[#C1A36F] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 font-montserrat"
            >
              ACESSAR GRUPO AGORA
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mensagem de boas-vindas final */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 italic max-w-3xl mx-auto leading-relaxed font-montserrat">
            "Bem-vindo à família NIALY Insiders. Prepare-se para descobrir um mundo de 
            possibilidades que poucos têm o privilégio de conhecer."
          </p>
          <div className="mt-4 text-[#C1A36F] font-bold text-lg font-playfair">
            — Equipe NIALY
          </div>
        </div>
      </div>
    </div>
  );
}