'use client';

import { useEffect, useState } from 'react';
import { Crown, CheckCircle, ArrowRight, Star, Plane, Hotel, MapPin, Phone, Mail, Instagram } from 'lucide-react';



export default function BemVindoVipPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    setIsVisible(true);
    
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          // Redirect to WhatsApp group
          window.location.href = 'https://wa.me/5511921731022'; // Replace with actual WhatsApp group link
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const exclusiveOffers = [
    {
      destination: "MIAMI, EUA",
      title: "Passagens Aéreas (Round Trip)",
      prices: "Economy a partir de R$ 2.590 | Executiva a partir de R$ 10.999",
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/247575d1-d247-4108-8dce-848cde35ad91.jpg",
      features: ["Remarcação gratuita", "Seleção de assento", "Bagagem incluída", "Suporte 24/7"]
    },
    {
      destination: "LISBOA, PORTUGAL",
      title: "Pacote 5 Noites (Aéreo + Hotel 4 Estrelas)",
      prices: "A partir de R$ 4.850 por pessoa",
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/0c50f4f5-91c0-49dd-b6a6-0b291b2c1045.png",
      features: ["Voo direto incluído", "Hotel centro histórico", "Café da manhã", "City tour gratuito"]
    },
    {
      destination: "CANCÚN, MÉXICO",
      title: "Resort All-Inclusive (Diária para Casal)",
      prices: "A partir de R$ 1.200 com até 40% OFF",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      features: ["All inclusive premium", "Resort 5 estrelas", "Spa incluído", "Atividades aquáticas"]
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* VÍDEO CINEMATOGRÁFICO DE FUNDO */}
      <div className="fixed inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
          {/* Fallback para vídeo cinematográfico */}
          <source src="https://cdn.pixabay.com/vimeo/459761340/luxury-59879.mp4?width=1920&hash=b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0" type="video/mp4" />
        </video>
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTEÚDO DA PÁGINA */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* CAIXA COM EFEITO VIDRO FOSCO */}
              <div className="glass-effect rounded-3xl p-12 backdrop-blur-lg bg-white/10 border border-white/20 text-white">
                <div className="flex items-center justify-center mb-6">
                  <Crown className="w-16 h-16 text-[#C1A36F] mr-4" />
                  <h1 className="text-4xl md:text-6xl font-bold font-serif">
                    SEJA BEM-VINDO AO
                    <span className="block text-[#C1A36F]">NIALY INSIDERS</span>
                  </h1>
                </div>
                
                <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Seu acesso está garantido. Enquanto você aguarda, confira algumas 
                  oportunidades disponíveis esta semana para membros Insiders:
                </p>

                {/* Success Confirmation */}
                <div className="bg-green-500/20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md mx-auto border border-green-500/30">
                  <div className="flex items-center justify-center mb-3">
                    <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                    <span className="text-green-400 font-bold text-lg">ACESSO CONFIRMADO</span>
                  </div>
                  <p className="text-sm opacity-90">
                    Você agora faz parte do círculo exclusivo NIALY Insiders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Offers Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            {/* CAIXA COM EFEITO VIDRO FOSCO */}
            <div className="glass-effect rounded-3xl p-8 backdrop-blur-lg bg-white/10 border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                  Enquanto você aguarda, confira algumas oportunidades disponíveis esta semana para membros Insiders:
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Estas ofertas exclusivas estão disponíveis apenas para membros do nosso grupo VIP. 
                  Aproveite enquanto ainda há vagas!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {exclusiveOffers.map((offer, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-white/20">
                    {/* Image */}
                    <div className="relative">
                      <img 
                        src={offer.image}
                        alt={offer.destination}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-[#C1A36F] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Crown className="w-3 h-3 mr-1" />
                        INSIDER ONLY
                      </div>
                      {offer.destination === "CANCÚN, MÉXICO" && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          40% OFF
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-[#C1A36F] mb-2">{offer.destination}</h3>
                        <h4 className="text-lg font-semibold text-white mb-3">{offer.title}</h4>
                        <div className="text-xl font-bold text-white mb-4">
                          {offer.prices}
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {offer.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-[#C1A36F] mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-[#C1A36F] hover:bg-[#B8956A] text-white py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                        Quero Esta Oferta VIP
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Group CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* CAIXA COM EFEITO VIDRO FOSCO */}
            <div className="glass-effect rounded-3xl p-8 md:p-12 backdrop-blur-lg bg-white/10 border border-white/20">
              <Crown className="w-16 h-16 text-[#C1A36F] mx-auto mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                Acesse o Grupo VIP Agora
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Junte-se aos outros membros exclusivos e tenha acesso a ofertas que não estão 
                disponíveis em nenhum outro lugar. Sua jornada VIP começa agora!
              </p>

              {/* Benefits List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#C1A36F] mr-3 flex-shrink-0" />
                  Ofertas diárias exclusivas
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#C1A36F] mr-3 flex-shrink-0" />
                  Atendimento prioritário 24/7
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#C1A36F] mr-3 flex-shrink-0" />
                  Consultor pessoal dedicado
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#C1A36F] mr-3 flex-shrink-0" />
                  Descontos de até 40%
                </div>
              </div>

              {/* Main CTA Button */}
              <a 
                href="https://wa.me/5511921731022" // Replace with actual WhatsApp group link
                className="inline-flex items-center bg-[#25D366] hover:bg-[#20BA5A] text-white px-10 py-5 rounded-xl text-xl font-medium transition-all duration-300 hover:scale-105 shadow-2xl mb-6"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                CLIQUE AQUI PARA ENTRAR NO GRUPO WHATSAPP
              </a>

              {/* Auto Redirect Message */}
              <div className="bg-[#C1A36F]/20 rounded-xl p-4 border border-[#C1A36F]/30">
                <p className="text-[#C1A36F] font-medium">
                  Você será redirecionado em {countdown} segundos...
                </p>
                <div className="w-full bg-[#C1A36F]/20 rounded-full h-2 mt-2">
                  <div 
                    className="bg-[#C1A36F] h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${((10 - countdown) / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            {/* CAIXA COM EFEITO VIDRO FOSCO */}
            <div className="glass-effect rounded-3xl p-8 backdrop-blur-lg bg-white/10 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <h3 className="text-4xl font-bold text-[#C1A36F] mb-6 font-serif">NIALY</h3>
                  <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
                    Transformando sonhos de viagem em realidade através de experiências 
                    personalizadas e atendimento excepcional. Sua jornada dos sonhos começa aqui.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-[#C1A36F] rounded-full flex items-center justify-center hover:bg-[#B8956A] transition-colors">
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a href="https://wa.me/5511921731022" className="w-12 h-12 bg-[#C1A36F] rounded-full flex items-center justify-center hover:bg-[#B8956A] transition-colors">
                      <Phone className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-6 text-lg text-white">Contato VIP</h4>
                  <div className="space-y-3 text-gray-300">
                    <p className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-[#C1A36F]" />
                      <a 
                        href="https://wa.me/5511921731022" 
                        className="hover:text-[#C1A36F] transition-colors"
                      >
                        +55 11 92173-1022
                      </a>
                    </p>
                    <p className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-[#C1A36F]" />
                      <a 
                        href="mailto:atendimentonialy@gmail.com" 
                        className="hover:text-[#C1A36F] transition-colors"
                      >
                        atendimentonialy@gmail.com
                      </a>
                    </p>
                    <p className="flex items-center">
                      <Instagram className="w-4 h-4 mr-2 text-[#C1A36F]" />
                      @nialy.viagens
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-6 text-lg text-white">Benefícios VIP</h4>
                  <div className="space-y-3 text-gray-300">
                    <p>Descontos Exclusivos</p>
                    <p>Atendimento Prioritário</p>
                    <p>Experiências Únicas</p>
                    <p>Consultoria Personalizada</p>
                    <p>Acesso Antecipado</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                <p>&copy; 2025 NIALY. Todos os direitos reservados. CNPJ/Cadastur aqui.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}