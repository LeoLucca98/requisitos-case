import { Link } from 'react-router-dom'
import { docs } from './docs'

const etapas = [
  ['contexto', 'Entender o contexto'],
  ['escopo', 'Delimitar o escopo'],
  ['requisitos', 'Escrever os requisitos'],
  ['linha-de-base', 'Validar e aprovar'],
  ['rastreabilidade', 'Rastrear'],
  ['time-tecnico', 'Passar para o time técnico'],
  ['acompanhamento', 'Acompanhar a execução'],
  ['mudancas', 'Tratar mudanças'],
]

function Doc({ n }: { n: string }) {
  const d = docs.find(x => x.num === n)!
  return <Link className="docref" to={`/documentos/${d.slug}`}>Documento {d.num} · {d.title}</Link>
}

function Perguntas({ grupos }: { grupos: [string, string[]][] }) {
  return (
    <div className="perguntas">
      {grupos.map(([quem, qs]) => (
        <div key={quem}>
          <h4>{quem}</h4>
          <ul>{qs.map(q => <li key={q}>{q}</li>)}</ul>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="page">
      <aside className="toc">
        <p className="toc-title">Etapas</p>
        <ol>{etapas.map(([id, t]) => <li key={id}><a href={`#${id}`}>{t}</a></li>)}</ol>
        <p className="toc-title">Material</p>
        <ul><li><a href="#documentos">Documentos do projeto</a></li></ul>
      </aside>

      <main className="content">
        <header className="intro">
          <h1>Como trabalho com requisitos e produto em projetos de P&amp;D</h1>
          <p>
            Este material mostra, etapa por etapa, o que faz uma pessoa de requisitos e produto ao longo de um projeto:
            que perguntas são feitas, como os requisitos são escritos, como chegam ao time técnico e o que acontece quando
            o escopo muda.
          </p>
          <p>
            Para não ficar no abstrato, cada etapa usa como exemplo um projeto completo, o <b>SENTINELA</b>: uma plataforma de
            monitoramento de eficiência (OEE) e manutenção preditiva para células robotizadas de solda, desenvolvida por um
            laboratório universitário para uma fabricante de equipamentos industriais, em convênio de P&amp;D via Lei de
            Informática. Todos os documentos citados estão disponíveis no fim da página.
          </p>
          <dl className="ficha">
            <div><dt>Financiadora</dt><dd>MetalPrime, fabricante de gateways industriais (MP-Edge)</dd></div>
            <div><dt>Planta piloto</dt><dd>Autopeças Ferraz, célula de solda CEL-04</dd></div>
            <div><dt>Problema</dt><dd>OEE de 61%, 14,5 h/mês de paradas não planejadas, indicadores apurados à mão</dd></div>
            <div><dt>Projeto</dt><dd>12 meses, 4 metas, equipe de 8 pessoas</dd></div>
          </dl>
        </header>

        <section id="contexto">
          <p className="etapa">Etapa 1</p>
          <h2>Entender o contexto antes de escrever qualquer requisito</h2>
          <p>
            O erro mais comum é começar pela solução. Antes de falar em telas ou tecnologia, eu preciso entender quem
            participa do projeto, o que cada um espera dele, quem decide e qual é o problema real, de preferência com números.
          </p>
          <p>No SENTINELA, isso significou:</p>
          <ul>
            <li>Mapear os dez grupos de interessados (laboratório, empresa, fundação, planta piloto, cliente final) com o interesse e a influência de cada um.</li>
            <li>Ir à fábrica levantar o diagnóstico da célula: OEE, horas de parada, causas e custo de cada hora parada.</li>
            <li>Registrar quem aprova o quê e por qual canal cada grupo é envolvido.</li>
          </ul>
          <h3>Perguntas que fiz nessa etapa</h3>
          <Perguntas grupos={[
            ['À empresa financiadora', [
              'O que vocês querem vender depois deste projeto que não vendem hoje?',
              'Quem na empresa vai receber e manter o que for desenvolvido?',
              'Quem aprova as entregas e quem aprova mudanças de escopo?',
              'Como esse investimento será declarado como P&D no relatório ao MCTI?',
            ]],
            ['À fábrica (usuários)', [
              'Quais paradas mais custam hoje e com que frequência acontecem?',
              'Como vocês medem o desempenho da célula hoje, e quanto tempo leva?',
              'Que equipamentos existem na célula e que protocolos eles usam?',
              'O que um líder de turno faria diferente se soubesse de uma falha 4 horas antes?',
            ]],
            ['À equipe técnica', [
              'O que é incerto aqui, ou seja, o que ainda não sabemos se dá para fazer?',
              'Quais limites do gateway (CPU, memória, conectividade) podem inviabilizar uma ideia?',
              'Que dados históricos precisamos ter antes de começar os modelos?',
            ]],
          ]} />
          <p className="nota">
            Uma pergunta feita aqui teve consequência meses depois: ao mapear o cliente final da fábrica, a montadora
            Veltra Motors foi registrada como possível origem de mudanças. Foi exatamente o que aconteceu no mês 5.
          </p>
          <Doc n="01" />
        </section>

        <section id="escopo">
          <p className="etapa">Etapa 2</p>
          <h2>Delimitar o escopo, incluindo o que não será feito</h2>
          <p>
            Com o contexto entendido, ajudo a escrever o plano de trabalho (PTA) que vai para a fundação. Meu foco é deixar
            cada meta verificável e o escopo com fronteira clara. A parte que mais protege o projeto é a seção de
            <b> fora de escopo</b>: tudo o que alguém poderia supor que está incluído, mas não está.
          </p>
          <h3>Perguntas que uso para delimitar</h3>
          <ul className="qlist">
            <li>Como vamos saber que esta meta foi cumprida? Que evidência a comprova?</li>
            <li>O que alguém poderia achar que está incluído, mas não está?</li>
            <li>O que precisa ser verdade para o plano funcionar? (premissas)</li>
            <li>O que não podemos mudar? Prazo, orçamento, hardware, regras da fundação? (restrições)</li>
          </ul>
          <h3>Exemplo: fora de escopo do SENTINELA</h3>
          <table>
            <thead><tr><th>ID</th><th>Fora de escopo</th><th>Por que foi escrito</th></tr></thead>
            <tbody>
              <tr><td>FE-01</td><td>Rastreabilidade individual de peças</td><td>"Monitoramento" poderia ser lido como acompanhar cada peça</td></tr>
              <tr><td>FE-02</td><td>Integração com MES/ERP de terceiros</td><td>Clientes da fábrica costumam pedir envio de dados aos seus sistemas</td></tr>
              <tr><td>FE-03</td><td>Protocolos além de OPC UA</td><td>Nem todo equipamento da célula havia sido inventariado</td></tr>
              <tr><td>FE-04</td><td>Leitura de códigos nas peças</td><td>Comum em linhas automotivas, mas fora do objetivo</td></tr>
              <tr><td>FE-05</td><td>Operação 24x7 com suporte</td><td>O piloto é experimental, não um serviço em produção</td></tr>
            </tbody>
          </table>
          <p>Junto com isso foram registradas as premissas. Por exemplo, a <b>PREM-01</b>: "todos os equipamentos da célula falam OPC UA". Ela ficou marcada como "em verificação" até a visita técnica, e acompanhada como risco.</p>
          <Doc n="02" />
        </section>

        <section id="requisitos">
          <p className="etapa">Etapa 3</p>
          <h2>Escrever os requisitos</h2>
          <p>
            Cada requisito precisa poder ser construído, testado e rastreado até um objetivo do projeto. Por isso todo
            requisito tem identificador, origem (quem pediu), vínculo com a meta e critérios de aceite mensuráveis, escritos
            no formato <i>Dado / Quando / Então</i>.
          </p>
          <h3>Anatomia de um requisito funcional</h3>
          <div className="anatomia">
            <div className="req">
              <p className="req-id">RF-011 · Cálculo de OEE por célula, turno e equipamento</p>
              <p>O sistema deve calcular Disponibilidade, Performance, Qualidade e OEE por célula, por turno e por equipamento conforme RN-01, a partir de contadores agregados de produção e refugo da célula.</p>
              <p className="req-meta">Prioridade: Must · Origem: MetalPrime, Ferraz / OBJ-02 · Vínculo: META-2, ENT-2.2 e ENT-2.4</p>
              <p className="req-ca"><b>CA-RF011-1</b> Dado um conjunto de teste com valores conhecidos, quando processado, então os resultados devem coincidir com o cálculo de referência com erro ≤ 0,1 p.p.</p>
              <p className="req-ca"><b>CA-RF011-2</b> Dado 4 semanas de operação da CEL-04, quando comparado à apuração de referência, então o desvio médio do OEE por turno deve ser ≤ 5 p.p.</p>
            </div>
            <ol className="leitura">
              <li><b>O que</b> o sistema faz, sem dizer como. A tecnologia fica com o time técnico.</li>
              <li><b>A regra</b> (RN-01) fica separada, porque é uma decisão de negócio que a empresa precisa aprovar.</li>
              <li><b>De onde veio</b> e <b>para que serve</b>: se ninguém pediu e não atende a um objetivo, não entra.</li>
              <li><b>Como saber que está pronto</b>: dois critérios, um testável em bancada e outro em campo.</li>
            </ol>
          </div>
          <h3>Requisitos não funcionais também têm número</h3>
          <p>"O sistema deve ser rápido" não é requisito. No SENTINELA, desempenho virou o <b>RNF-001</b>: evento do equipamento até o servidor em até 5 s (percentil 95) e OEE exibido em até 1 minuto, medido em teste.</p>
          <h3>Perguntas que faço a cada requisito antes de aceitá-lo</h3>
          <ul className="qlist">
            <li>Quem pediu e qual objetivo do projeto ele atende?</li>
            <li>Um testador conseguiria dizer, sem me perguntar, se ele foi cumprido?</li>
            <li>Ele descreve uma necessidade ou já impõe uma solução?</li>
            <li>Tem alguma palavra vaga: rápido, fácil, intuitivo, robusto?</li>
            <li>Se for cortado, o que deixa de funcionar?</li>
          </ul>
          <p>Resultado na linha de base: 28 requisitos funcionais, 14 não funcionais e 10 regras de negócio, todos com critério de aceite.</p>
          <Doc n="03" />
        </section>

        <section id="linha-de-base">
          <p className="etapa">Etapa 4</p>
          <h2>Validar com quem entende e aprovar com quem decide</h2>
          <p>Requisito escrito só pelo PO é suposição. Antes de virar compromisso, ele passa por duas rodadas:</p>
          <table>
            <thead><tr><th>Versão</th><th>Data</th><th>O que aconteceu</th></tr></thead>
            <tbody>
              <tr><td>0.1</td><td>27/03/2026</td><td>Rascunho a partir das entrevistas na fábrica e na empresa</td></tr>
              <tr><td>0.9</td><td>14/04/2026</td><td>Revisão técnica: engenharia de software, automação e ciência de dados ajustam limites de hardware e regras do OEE</td></tr>
              <tr><td>1.0</td><td>24/04/2026</td><td>Aprovação em reunião com a empresa, registrada em ata. Vira a <b>linha de base</b></td></tr>
            </tbody>
          </table>
          <p>A partir da versão 1.0, nenhum requisito muda sem passar pelo processo de mudança (etapa 8). Isso não engessa o projeto: só garante que toda mudança é visível, avaliada e decidida por quem pode decidir.</p>
        </section>

        <section id="rastreabilidade">
          <p className="etapa">Etapa 5</p>
          <h2>Ligar cada requisito ao que foi contratado</h2>
          <p>A matriz de rastreabilidade liga o objetivo à meta do plano de trabalho, ao entregável, ao requisito, ao critério de aceite e à evidência. Ela responde, a qualquer momento, duas perguntas: "por que estamos construindo isso?" e "isso estava combinado?".</p>
          <div className="tabwrap">
            <table>
              <thead><tr><th>Objetivo</th><th>Meta</th><th>Entregável</th><th>Requisito</th><th>Critério</th><th>Evidência</th></tr></thead>
              <tbody>
                <tr><td>OBJ-02 Calcular OEE</td><td>META-2</td><td>ENT-2.2 Backend de OEE</td><td>RF-011</td><td>CA-RF011-1</td><td>Relatório de testes</td></tr>
                <tr><td>OBJ-02 Calcular OEE</td><td>META-2</td><td>ENT-2.4 Verificação do OEE</td><td>RF-011</td><td>CA-RF011-2</td><td>Comparativo de 4 semanas</td></tr>
              </tbody>
            </table>
          </div>
          <p>Ela também serve à empresa: para declarar o investimento como P&amp;D, é preciso mostrar que cada esforço corresponde a uma meta do projeto.</p>
          <Doc n="04" />
        </section>

        <section id="time-tecnico">
          <p className="etapa">Etapa 6</p>
          <h2>Passar para o time técnico</h2>
          <p>O documento de requisitos não é o que o desenvolvedor lê no dia a dia. Os requisitos são quebrados em épicos (um por meta) e histórias de usuário, que entram no backlog e são discutidas com a equipe antes de cada sprint.</p>
          <h3>Do requisito à história</h3>
          <div className="fluxo">
            <div><span>Requisito</span><b>RF-011</b> Cálculo de OEE por célula, turno e equipamento</div>
            <div><span>Épico</span><b>EP-02</b> Plataforma de monitoramento de OEE (META-2)</div>
            <div><span>História</span><b>US-013</b> Como <i>gestor de produção</i>, quero OEE por célula, turno e equipamento, para comparar turnos com base confiável.</div>
          </div>
          <h3>O que a equipe recebe em cada história</h3>
          <ul>
            <li>Quem é o usuário e por que ele precisa disso, em uma frase.</li>
            <li>Os critérios de aceite herdados do requisito, que viram os testes.</li>
            <li>As regras de negócio que se aplicam (no exemplo, RN-01, RN-04 e RN-07).</li>
            <li>O que está fora da história, para evitar que ela cresça durante o desenvolvimento.</li>
            <li>Estimativa feita pela própria equipe no refinamento (US-013: 13 pontos, sprint 9).</li>
          </ul>
          <p>Uma história só é considerada pronta quando os critérios de aceite são demonstrados na review. É ali que a empresa vê o incremento funcionando.</p>
          <h3>Ritos que sustentam essa passagem</h3>
          <table>
            <thead><tr><th>Rito</th><th>Frequência</th><th>Meu papel</th></tr></thead>
            <tbody>
              <tr><td>Refinamento do backlog</td><td>Semanal</td><td>Trago histórias com critérios; a equipe questiona, quebra e estima</td></tr>
              <tr><td>Planejamento, review e retrospectiva</td><td>Quinzenal</td><td>Priorizo; conduzo a demonstração e registro o aceite</td></tr>
              <tr><td>Daily</td><td>Diária</td><td>Facilito e removo bloqueios que dependem da empresa ou da fábrica</td></tr>
              <tr><td>Visita à planta piloto</td><td>Mensal</td><td>Valido com usuários reais e abro janelas de teste</td></tr>
              <tr><td>Acompanhamento com a empresa</td><td>Mensal</td><td>Preparo o status de metas, entregas, riscos e mudanças</td></tr>
            </tbody>
          </table>
          <Doc n="05" />
        </section>

        <section id="acompanhamento">
          <p className="etapa">Etapa 7</p>
          <h2>Acompanhar a execução</h2>
          <p>Durante o projeto, mantenho três registros vivos. Eles evitam que informação importante fique só na memória ou em e-mails:</p>
          <table>
            <thead><tr><th>Registro</th><th>Exemplo no SENTINELA</th></tr></thead>
            <tbody>
              <tr><td>Premissas</td><td><b>PREM-01</b>: todos os equipamentos falam OPC UA. Status: em verificação; a estação de inspeção ainda não foi mapeada.</td></tr>
              <tr><td>Riscos</td><td><b>RSK-01</b>: equipamento com outro protocolo. Resposta: mapear na visita de julho e, se confirmado, tratar como mudança, conforme o plano de trabalho.</td></tr>
              <tr><td>Decisões</td><td><b>DEC-04</b>: a qualidade do OEE é calculada por contadores agregados, sem identificar peças. Decidida na aprovação da linha de base.</td></tr>
            </tbody>
          </table>
          <p>Em 08/07/2026 (mês 5), o projeto estava com a primeira meta entregue e aceita, 43% do backlog concluído e execução financeira alinhada ao planejado.</p>
        </section>

        <section id="mudancas">
          <p className="etapa">Etapa 8</p>
          <h2>Tratar mudanças com processo, não com improviso</h2>
          <p>
            No mês 5, a montadora cliente da fábrica passou a exigir rastreabilidade de cada peça soldada, enviada ao seu
            sistema em até 5 minutos. Para a equipe técnica, isso significava ler códigos nas peças, integrar com o sistema
            da montadora e coletar dados de um equipamento que não falava OPC UA.
          </p>
          <p>O que foi feito, na ordem:</p>
          <ol className="passos">
            <li><b>Registrar</b> (2 dias úteis): solicitação de mudança SM-01, com origem, descrição e itens da linha de base afetados.</li>
            <li><b>Comparar com a linha de base</b>: a exigência caía em quatro itens do fora de escopo (FE-01 a FE-04) e invalidava a PREM-01. Não havia dúvida de que era escopo novo.</li>
            <li><b>Analisar o impacto</b> (5 dias úteis): 10 requisitos funcionais e 5 não funcionais novos, cerca de 2.150 horas de trabalho, impacto em cronograma e riscos.</li>
            <li><b>Levar alternativas, não só um problema</b>: recusar, absorver com a equipe atual, pedir só mais prazo, ou incluir uma nova meta com recurso e prazo.</li>
            <li><b>Formalizar a decisão</b>: a empresa escolheu a nova meta, e a justificativa técnica foi submetida à fundação.</li>
          </ol>
          <p>O resultado foi um termo aditivo incluindo a META-5, com novo cronograma e equipe dimensionada. Mas o ponto principal é outro: a decisão foi tomada pelas pessoas certas, com informação completa, e a equipe técnica não absorveu em silêncio um trabalho que não cabia no plano.</p>
          <div className="docrefs"><Doc n="06" /><Doc n="07" /><Doc n="08" /></div>
        </section>

        <section className="resumo">
          <h2>Em resumo, o que esse papel faz</h2>
          <ul>
            <li>Transforma conversas com a empresa e com os usuários em requisitos que a equipe consegue construir e testar.</li>
            <li>Deixa claro, desde o plano de trabalho, o que está e o que não está combinado.</li>
            <li>Traduz cada requisito em histórias que o time técnico entende e estima.</li>
            <li>Mantém visível o que pode dar errado e o que já foi decidido.</li>
            <li>Quando algo muda, organiza a informação para que a decisão seja tomada por quem deve tomá-la.</li>
          </ul>
        </section>

        <section id="documentos">
          <h2>Documentos do projeto</h2>
          <p>Todos os documentos produzidos ao longo do SENTINELA, na ordem em que aparecem no projeto.</p>
          <table className="doclist">
            <thead><tr><th>Nº</th><th>Documento</th><th>Fase</th></tr></thead>
            <tbody>
              {docs.map(d => (
                <tr key={d.slug}>
                  <td>{d.num}</td>
                  <td><Link to={`/documentos/${d.slug}`}>{d.title}</Link></td>
                  <td>{d.phase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}
