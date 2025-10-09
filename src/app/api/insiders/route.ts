import { NextRequest, NextResponse } from 'next/server'
import { processLead, LeadData } from '@/lib/email-automation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nome, email, telefone } = body

    // Validação básica
    if (!nome || !email || !telefone) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Preparar dados do lead
    const leadData: LeadData = {
      nome,
      email,
      telefone,
      tipo: 'insiders'
    }

    // Processar lead (salvar no banco + enviar email)
    const result = await processLead(leadData)

    if (!result.success) {
      return NextResponse.json(
        { error: result.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: result.message,
        data: { nome, email }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erro ao processar inscrição Insiders:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'API Insiders funcionando' },
    { status: 200 }
  )
}