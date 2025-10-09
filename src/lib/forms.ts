// Tipos para os formulários
export interface CotacaoFormData {
  nome: string
  email: string
  telefone: string
  destino: string
  dataViagem?: string
  duracao?: string
  pessoas?: string
  orcamento: string
  tipoViagem?: string
  hospedagem?: string
  mensagem?: string
}

export interface InsidersFormData {
  nome: string
  email: string
  telefone: string
}

// Função para salvar dados de cotação
export const salvarCotacao = async (dados: CotacaoFormData) => {
  try {
    // Aqui você implementaria a integração com seu banco de dados
    // Por exemplo: Supabase, Firebase, ou uma API própria
    console.log('Salvando cotação:', dados)
    
    // Simulação de salvamento
    const response = await fetch('/api/cotacao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    })
    
    if (!response.ok) {
      throw new Error('Erro ao salvar cotação')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Erro ao salvar cotação:', error)
    // Por enquanto, apenas logamos o erro
    // Em produção, você trataria o erro adequadamente
  }
}

// Função para salvar dados de insider
export const salvarInsider = async (dados: InsidersFormData) => {
  try {
    console.log('Salvando insider:', dados)
    
    const response = await fetch('/api/insiders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    })
    
    if (!response.ok) {
      throw new Error('Erro ao salvar insider')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Erro ao salvar insider:', error)
  }
}

// Função para enviar email de boas-vindas
export const enviarEmailBoasVindas = async (email: string, nome: string, tipo: 'cotacao' | 'insider') => {
  try {
    const response = await fetch('/api/email-boas-vindas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, nome, tipo }),
    })
    
    if (!response.ok) {
      throw new Error('Erro ao enviar email')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Erro ao enviar email:', error)
  }
}

// Utilitários de validação
export const validarEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export const validarTelefone = (telefone: string): boolean => {
  const regex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/
  return regex.test(telefone)
}

export const formatarTelefone = (telefone: string): string => {
  const numbers = telefone.replace(/\D/g, '')
  if (numbers.length === 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
  } else if (numbers.length === 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
  }
  return telefone
}