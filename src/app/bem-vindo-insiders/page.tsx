'use client';

import { useEffect, useState } from 'react';
import { Check, MapPin, Calendar, Users, Star, ExternalLink } from 'lucide-react';

export default function IntermediariaInsidersPage() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Garantir que o código só execute no cliente (navegador)
    if (typeof window === 'undefined') return;

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          // Verificar se window.top existe antes de tentar acessar
          if (window.top && window.top.location) {
            window.top.location.href = 'https://bit.ly/NialyVIP';
          } else if (window.location) {
            // Fallback para window.location se window.top não estiver disponível
            window.location.href = 'https://bit.ly/NialyVIP';
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Função de limpeza para evitar vazamentos de memória
    return () => clearInterval(timer);
  }, []);

  const ofertas = [
    {
      destino: "MIAMI, EUA",
      titulo: "Passagens Aéreas (Ida e Volta)",
      preco: "Economy a partir de R$ 2.397",
      precoExecutiva: "Executiva a partir de R$ 10.998",
      desconto: "42% OFF",
      duracao: "Voos diretos disponíveis",
      pessoas: "Por pessoa",
      inclui: [
        "Voos executivos com as melhores companhias",
        "Seleção antecipada de assentos",
        "Bagagem extra incluída",
        "Lounge access nos aeroportos",
        "Remarcação facilitada",
        "Suporte 24h durante a viagem"
      ],
      imagem: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
      destino: "EUROPA (Ex: Lisboa ou Madri)",
      titulo: "Passagens Aéreas (Ida e Volta)",
      preco: "Economy a partir de R$ 3.300",
      precoExecutiva: "Executiva a partir de R$ 12.000",
      desconto: "38% OFF",
      duracao: "Conexões otimizadas",
      pessoas: "Por pessoa",
      inclui: [
        "Voos com as melhores companhias europeias",
        "Conexões inteligentes e confortáveis",
        "Seguro viagem premium incluído",
        "Fast track nos aeroportos",
        "Assistência em português",
        "Upgrade automático quando disponível"
      ],
      imagem: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop"
    },
    {
      destino: "CANCÚN, MÉXICO",
      titulo: "Pacote 5 Noites (Aéreo + Resort All-Inclusive)",
      preco: "A partir de R$ 4.500 por pessoa",
      precoExecutiva: "",
      desconto: "45% OFF",
      duracao: "5 dias / 4 noites",
      pessoas: "Pacote completo",
      inclui: [
        "Voos diretos para Cancún",
        "Resort 5 estrelas all-inclusive",
        "Transfer aeroporto-hotel-aeroporto",
        "Todas as refeições e bebidas",
        "Acesso a atividades aquáticas",
        "Concierge personalizado no resort"
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
            SEJA BEM-VINDO AO
            <br />
            <span className="text-[#C1A36F]">NIALY INSIDERS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-montserrat">
            Você agora faz parte do grupo mais exclusivo de viajantes do Brasil. 
            Aqui estão algumas das ofertas incríveis que nossos membros têm acesso:
          </p>
        </div>

        {/* Ofertas exclusivas com valores atualizados */}
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
                  <div className="text-lg font-bold font-playfair">{oferta.destino}</div>
                </div>
              </div>
              
              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#C1A36F] font-playfair">
                  {oferta.titulo}
                </h3>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-white font-playfair mb-1">{oferta.preco}</div>
                  {oferta.precoExecutiva && (
                    <div className="text-lg text-[#C1A36F] font-playfair">{oferta.precoExecutiva}</div>
                  )}
                </div>
                
                <div className="text-right text-sm text-gray-300 font-montserrat mb-4">
                  <div className="flex items-center gap-1 mb-1">
                    <Calendar className="w-4 h-4" />
                    {oferta.duracao}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {oferta.pessoas}
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
              href="https://chat.whatsapp.com/LV2UX0U4wCzKMekkjI8599"
              className="bg-black text-[#C1A36F] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 font-montserrat"
            >
              CLIQUE AQUI PARA ENTRAR NO GRUPO WHATSAPP
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