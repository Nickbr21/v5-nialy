// Utilitários para automação de email e funcionalidades back-end

export interface LeadData {
  nome: string
  email: string
  telefone: string
  destino?: string
  orcamento?: string
  mensagem?: string
  tipo: 'cotacao' | 'insiders'
}

export interface EmailTemplate {
  subject: string
  html: string
  text: string
}

// Template de email de boas-vindas para cotação
export function createWelcomeEmailTemplate(nome: string): EmailTemplate {
  const subject = `${nome}, o primeiro capítulo da sua jornada começou`
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Montserrat', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #0A1F44 0%, #1a3a6b 100%); color: white; padding: 40px 20px; text-align: center; }
        .logo { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: bold; color: #C1A36F; margin-bottom: 10px; }
        .content { padding: 30px 20px; background: white; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #C1A36F 0%, #D4B87A 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">NIALY</div>
          <h1>Bem-vindo à Experiência NIALY</h1>
        </div>
        
        <div class="content">
          <h2>Olá, ${nome}!</h2>
          
          <p>Seja bem-vindo à NIALY. Estamos honrados em recebê-lo.</p>
          
          <p>Nossa equipe de arquitetos de viagem já está analisando seu briefing. Em breve, um de nossos especialistas entrará em contato para apresentar um planejamento que irá redefinir suas expectativas.</p>
          
          <p><strong>O que acontece agora:</strong></p>
          <ul>
            <li>Análise detalhada do seu perfil de viagem</li>
            <li>Curadoria personalizada de experiências</li>
            <li>Proposta exclusiva em até 24 horas</li>
            <li>Contato direto via WhatsApp</li>
          </ul>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://wa.me/5511999999999" class="cta-button">Falar no WhatsApp</a>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #C1A36F;">🎯 Convite Especial: NIALY Insiders</h3>
            <p>Quer acesso a ofertas exclusivas com descontos de até 70%? Junte-se ao nosso grupo VIP!</p>
            <a href="/insiders" style="color: #C1A36F; font-weight: bold;">Clique aqui para ser um Insider</a>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>NIALY</strong> - A arquitetura da jornada executiva</p>
          <p>📞 (11) 99999-9999 | ✉️ contato@nialy.com.br</p>
          <p>&copy; 2025 NIALY. Todos os direitos reservados.</p>
        </div>
      </div>
    </body>
    </html>
  `
  
  const text = `
    ${nome}, o primeiro capítulo da sua jornada começou
    
    Olá, ${nome}!
    
    Seja bem-vindo à NIALY. Estamos honrados em recebê-lo.
    
    Nossa equipe de arquitetos de viagem já está analisando seu briefing. Em breve, um de nossos especialistas entrará em contato para apresentar um planejamento que irá redefinir suas expectativas.
    
    O que acontece agora:
    - Análise detalhada do seu perfil de viagem
    - Curadoria personalizada de experiências
    - Proposta exclusiva em até 24 horas
    - Contato direto via WhatsApp
    
    WhatsApp: https://wa.me/5511999999999
    
    Convite Especial: NIALY Insiders
    Quer acesso a ofertas exclusivas com descontos de até 70%? 
    Acesse: /insiders
    
    NIALY - A arquitetura da jornada executiva
    📞 (11) 99999-9999 | ✉️ contato@nialy.com.br
    © 2025 NIALY. Todos os direitos reservados.
  `
  
  return { subject, html, text }
}

// Template de email para Insiders
export function createInsidersWelcomeTemplate(nome: string): EmailTemplate {
  const subject = `${nome}, bem-vindo ao NIALY Insiders!`
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Montserrat', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #C1A36F 0%, #D4B87A 100%); color: white; padding: 40px 20px; text-align: center; }
        .logo { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: bold; margin-bottom: 10px; }
        .content { padding: 30px 20px; background: white; }
        .offer-card { background: #f8f9fa; border-left: 4px solid #C1A36F; padding: 20px; margin: 15px 0; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #C1A36F 0%, #D4B87A 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
        .footer { background: #0A1F44; color: white; padding: 20px; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">NIALY INSIDERS</div>
          <h1>🎉 Bem-vindo ao Clube Exclusivo!</h1>
        </div>
        
        <div class="content">
          <h2>Parabéns, ${nome}!</h2>
          
          <p>Você agora faz parte de um grupo seleto de viajantes com acesso a:</p>
          
          <ul>
            <li>✨ Ofertas exclusivas com até 70% de desconto</li>
            <li>🎯 Primeiro acesso a promoções relâmpago</li>
            <li>👑 Upgrades gratuitos automáticos</li>
            <li>🌟 Experiências VIP não disponíveis ao público</li>
          </ul>
          
          <h3 style="color: #C1A36F;">Ofertas Disponíveis Agora:</h3>
          
          <div class="offer-card">
            <strong>MIAMI, EUA</strong><br>
            Passagens Aéreas (Round Trip)<br>
            Economy: R$ 2.590 | Executiva: R$ 10.999
          </div>
          
          <div class="offer-card">
            <strong>LISBOA, PORTUGAL</strong><br>
            Pacote 5 Noites (Aéreo + Hotel 4★)<br>
            A partir de R$ 4.850 por pessoa
          </div>
          
          <div class="offer-card">
            <strong>CANCÚN, MÉXICO</strong><br>
            Resort All-Inclusive (Diária Casal)<br>
            A partir de R$ 1.200 com até 40% OFF
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://wa.me/5511999999999?text=Olá! Sou Insider e gostaria de saber mais sobre as ofertas exclusivas." class="cta-button">
              Acessar Grupo WhatsApp VIP
            </a>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>NIALY INSIDERS</strong> - Acesso Exclusivo</p>
          <p>📞 (11) 99999-9999 | ✉️ contato@nialy.com.br</p>
        </div>
      </div>
    </body>
    </html>
  `
  
  const text = `
    ${nome}, bem-vindo ao NIALY Insiders!
    
    Parabéns, ${nome}!
    
    Você agora faz parte de um grupo seleto de viajantes com acesso a:
    - Ofertas exclusivas com até 70% de desconto
    - Primeiro acesso a promoções relâmpago
    - Upgrades gratuitos automáticos
    - Experiências VIP não disponíveis ao público
    
    Ofertas Disponíveis Agora:
    
    MIAMI, EUA - Passagens Aéreas (Round Trip)
    Economy: R$ 2.590 | Executiva: R$ 10.999
    
    LISBOA, PORTUGAL - Pacote 5 Noites (Aéreo + Hotel 4★)
    A partir de R$ 4.850 por pessoa
    
    CANCÚN, MÉXICO - Resort All-Inclusive (Diária Casal)
    A partir de R$ 1.200 com até 40% OFF
    
    Acesse o Grupo WhatsApp VIP:
    https://wa.me/5511999999999?text=Olá! Sou Insider e gostaria de saber mais sobre as ofertas exclusivas.
    
    NIALY INSIDERS - Acesso Exclusivo
    📞 (11) 99999-9999 | ✉️ contato@nialy.com.br
  `
  
  return { subject, html, text }
}

// Função para simular envio de email (implementar com serviço real)
export async function sendEmail(to: string, template: EmailTemplate): Promise<boolean> {
  try {
    // Aqui você implementaria a integração com um serviço de email
    // Como SendGrid, Mailgun, AWS SES, etc.
    
    console.log('📧 Email enviado para:', to)
    console.log('📧 Assunto:', template.subject)
    console.log('📧 Conteúdo HTML:', template.html.substring(0, 100) + '...')
    
    // Simular sucesso
    return true
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return false
  }
}

// Função para salvar lead no banco de dados (implementar com banco real)
export async function saveLeadToDatabase(lead: LeadData): Promise<boolean> {
  try {
    // Aqui você implementaria a integração com banco de dados
    // Como PostgreSQL, MongoDB, Supabase, etc.
    
    console.log('💾 Lead salvo no banco:', {
      ...lead,
      timestamp: new Date().toISOString(),
      id: Math.random().toString(36).substr(2, 9)
    })
    
    // Simular sucesso
    return true
  } catch (error) {
    console.error('Erro ao salvar lead:', error)
    return false
  }
}

// Função principal para processar lead
export async function processLead(lead: LeadData): Promise<{ success: boolean; message: string }> {
  try {
    // Salvar no banco de dados
    const savedToDb = await saveLeadToDatabase(lead)
    if (!savedToDb) {
      throw new Error('Falha ao salvar no banco de dados')
    }
    
    // Enviar email de boas-vindas
    const template = lead.tipo === 'insiders' 
      ? createInsidersWelcomeTemplate(lead.nome)
      : createWelcomeEmailTemplate(lead.nome)
    
    const emailSent = await sendEmail(lead.email, template)
    if (!emailSent) {
      console.warn('Falha ao enviar email, mas lead foi salvo')
    }
    
    return {
      success: true,
      message: lead.tipo === 'insiders' 
        ? 'Inscrição no Insiders realizada com sucesso!'
        : 'Cotação solicitada com sucesso!'
    }
    
  } catch (error) {
    console.error('Erro ao processar lead:', error)
    return {
      success: false,
      message: 'Erro interno. Tente novamente.'
    }
  }
}