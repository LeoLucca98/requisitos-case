const raw = import.meta.glob('../docs/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

export type Doc = { slug: string; num: string; title: string; phase: string; role: string; body: string }

const meta: Record<string, { title: string; phase: string; role: string }> = {
  '01': { title: 'Visão do produto e stakeholders', phase: 'Concepção', role: 'Quem participa do projeto, o que cada um espera, quem decide e qual é o problema a resolver.' },
  '02': { title: 'Plano de Trabalho (PTA)', phase: 'Concepção', role: 'Objetivos, metas verificáveis, premissas, restrições e o que fica fora do escopo.' },
  '03': { title: 'Especificação de requisitos', phase: 'Requisitos', role: 'Requisitos funcionais, não funcionais e regras de negócio, cada um com origem e critério de aceite.' },
  '04': { title: 'Matriz de rastreabilidade', phase: 'Requisitos', role: 'Liga cada objetivo e meta aos entregáveis, requisitos, critérios e evidências.' },
  '05': { title: 'Backlog, roadmap e riscos', phase: 'Execução', role: 'Épicos, histórias de usuário, ritos, riscos, premissas e decisões registradas durante a execução.' },
  '06': { title: 'Solicitação de mudança SM-01', phase: 'Mudança', role: 'Registro formal da mudança pedida no mês 5, com origem e itens da linha de base afetados.' },
  '07': { title: 'Análise de impacto', phase: 'Mudança', role: 'Requisitos novos, esforço, prazo, riscos e alternativas avaliadas para a mudança.' },
  '08': { title: 'Justificativa do termo aditivo', phase: 'Mudança', role: 'Documento que formaliza a decisão sobre a mudança junto à fundação.' },
  '09': { title: 'Efeito do método no cenário', phase: 'Fechamento', role: 'Como o mesmo cenário tenderia a evoluir com e sem o método.' },
}

export const docs: Doc[] = Object.entries(raw)
  .map(([path, body]) => {
    const file = path.split('/').pop()!.replace('.md', '')
    const num = file.slice(0, 2)
    return { slug: file, num, ...meta[num], body }
  })
  .sort((a, b) => a.num.localeCompare(b.num))
