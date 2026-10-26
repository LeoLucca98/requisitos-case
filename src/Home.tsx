import { Link } from 'react-router-dom'
import { docs } from './docs'

const comPO = [
  ['30/06', 'Veltra Motors exige rastreabilidade por peça dos fornecedores'],
  ['08/07', 'MetalPrime leva a exigência à reunião mensal'],
  ['10/07', 'Solicitação de mudança SM-01 registrada (2 dias úteis)'],
  ['17/07', 'Análise de impacto pronta: ~2.150 h, 4 alternativas'],
  ['31/07', 'MetalPrime aprova a alternativa de aditivo completo'],
  ['05/08', 'Justificativa técnica submetida à Fundepes'],
  ['02/09', 'Termo aditivo nº 01 assinado: +R$ 180 mil, +4 meses'],
]
const semPO = [
  ['30/06', 'A mesma exigência chega à MetalPrime'],
  ['10/07', 'Começa uma troca de e-mails sobre "se isso já estava incluso"'],
  ['17/08', 'Sem como provar o contrário, o coordenador aceita encaixar a demanda'],
  ['28/08', 'Demonstração do dashboard sai incompleta; parcela atrasa'],
  ['nov/26', 'Horas extras acima de 10%; uma bolsista deixa o projeto'],
  ['jan/27', 'Pedido tardio de prorrogação só de prazo, sem recurso novo'],
]
const prova = [
  ['Vínculo de dados ao número de série da peça', 'FE-01', 'Rastreabilidade individual de peças'],
  ['Envio ao MES da montadora (VeltraTrace)', 'FE-02', 'Integração com MES/ERP de terceiros'],
  ['CLP da estação de inspeção só fala Modbus TCP', 'FE-03', 'Protocolos além de OPC UA'],
  ['Leitura do DataMatrix gravado na peça', 'FE-04', 'Leitura de códigos e identificação de peças'],
]

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Estudo de caso · P&D Lei de Informática · Fundepes</p>
          <h1>O aditivo de <em>R$ 180 mil</em> que dependia de uma frase no plano de trabalho.</h1>
          <p className="lede">
            Um projeto de monitoramento industrial recebe, no quinto mês, uma exigência nova do cliente final.
            Com uma pessoa de produto desde o início, a mudança vira um termo aditivo em 56 dias.
            Sem ela, vira trabalho não remunerado e atraso.
          </p>
          <div className="stats">
            <div><b>+R$ 180 mil</b><span>captados no aditivo</span></div>
            <div><b>+4 meses</b><span>de vigência</span></div>
            <div><b>~2.150 h</b><span>que seriam absorvidas de graça</span></div>
            <div><b>56 dias</b><span>da reunião à assinatura</span></div>
          </div>
        </div>
      </section>

      <section id="caso" className="wrap block">
        <h2><span className="num">01</span>O caso</h2>
        <p className="intro">Antes da mudança, é preciso entender quem são as empresas, que problema elas tinham na fábrica e o que o projeto se comprometeu a entregar.</p>

        <h3 className="sub">Quem está envolvido</h3>
        <div className="actors">
          <div className="card actor"><span className="tag">Financiadora</span><h3>MetalPrime Automação Industrial</h3><p>Fabricante mineira de gateways IoT industriais (linha MP-Edge) e controladores para células robotizadas de solda. Como fabricante de bens de informática habilitada na Lei de Informática, precisa investir parte do faturamento em P&amp;D e faz isso por convênio com o laboratório.</p><p className="need"><b>Necessidade:</b> deixar de vender o MP-Edge como simples concentrador de dados e oferecer inteligência embarcada (indicadores e previsão de falhas), diferenciando o produto no mercado automotivo.</p></div>
          <div className="card actor"><span className="tag">Planta piloto</span><h3>Autopeças Ferraz</h3><p>Fornecedora automotiva de primeiro nível em Betim/MG, cliente da MetalPrime. Opera a célula robotizada de solda CEL-04, onde a plataforma seria validada em produção real.</p><p className="need"><b>Necessidade:</b> parar de perder produção com quebras inesperadas de tocha, alimentador de arame e servos, e ter indicadores confiáveis do desempenho da célula.</p></div>
          <div className="card actor"><span className="tag">Cliente final</span><h3>Veltra Motors</h3><p>Montadora que compra as peças soldadas pela Ferraz. No início, não participa do projeto: aparece apenas como cliente da cadeia, e é ela quem depois dispara a mudança.</p><p className="need"><b>Necessidade (que surge no mês 5):</b> rastrear cada peça soldada por número de série, para auditorias de qualidade.</p></div>
          <div className="card actor"><span className="tag">Executor</span><h3>LASIN</h3><p>Laboratório universitário de sistemas inteligentes, com experiência em aprendizado de máquina e sistemas embarcados. Conduz a pesquisa e o desenvolvimento.</p></div>
          <div className="card actor"><span className="tag">Gestão do convênio</span><h3>Fundepes</h3><p>Fundação de apoio que administra os recursos: contrata a equipe, executa as compras, acompanha o plano de trabalho e analisa pedidos de aditivo.</p></div>
        </div>

        <h3 className="sub">O problema na fábrica</h3>
        <p className="intro">Diagnóstico da célula CEL-04 feito na concepção do projeto (set/2025 a jan/2026):</p>
        <div className="stats light">
          <div><b>61%</b><span>de OEE, contra 75–85% considerados bons no setor</span></div>
          <div><b>14,5 h/mês</b><span>de paradas não planejadas (~29 eventos)</span></div>
          <div><b>~R$ 4.200</b><span>de prejuízo por hora de célula parada</span></div>
          <div><b>2 a 5 dias</b><span>de atraso para ver o OEE, apurado à mão em planilha</span></div>
        </div>
        <p className="note">Causas das paradas: tocha de solda (41%), alimentador de arame (27%), servomotores (18%) e outras (14%). Quase todas dão sinais antes de falhar, mas ninguém estava olhando para esses sinais.</p>

        <h3 className="sub">O que o projeto SENTINELA propôs</h3>
        <div className="proposal">
          <div className="card"><p>Uma plataforma embarcada no próprio gateway MP-Edge que lê os dados dos robôs e CLPs da célula, calcula o OEE em tempo quase real e usa modelos de aprendizado de máquina para avisar, com horas de antecedência, que um componente vai falhar.</p>
          <ul className="goals">
            <li><b>Coletar</b> dados de processo e estado dos equipamentos via OPC UA, direto na borda</li>
            <li><b>Calcular</b> o OEE por célula e turno, atualizado em até 1 minuto</li>
            <li><b>Prever</b> falhas: detectar ao menos 70% delas com 4 h ou mais de antecedência</li>
            <li><b>Validar</b> na CEL-04 e transferir a tecnologia para a MetalPrime incorporar ao produto</li>
          </ul></div>
          <ol className="metas">
            <li><time>Meses 1–3</time><b>META-1</b> Arquitetura e coleta de dados no gateway</li>
            <li><time>Meses 3–7</time><b>META-2</b> Plataforma de OEE com dashboards</li>
            <li><time>Meses 6–11</time><b>META-3</b> Modelos de manutenção preditiva</li>
            <li><time>Meses 10–12</time><b>META-4</b> Piloto na fábrica e transferência</li>
          </ol>
        </div>
        <div className="facts">
          <span><b>12 meses</b> · mar/2026 a fev/2027</span>
          <span><b>R$ 600 mil</b></span>
          <span><b>8 pessoas</b> · PO, engenharia de software, automação, ciência de dados e bolsistas</span>
        </div>
        <p className="note">O que ficou expressamente de fora: rastreabilidade por peça, integração com sistemas de terceiros (MES/ERP), protocolos diferentes de OPC UA e leitura de códigos nas peças. É exatamente isso que a Veltra viria a pedir.</p>
      </section>

      <section id="cenarios" className="block band">
        <div className="wrap">
          <h2><span className="num">02</span>A mesma exigência, dois desfechos</h2>
          <div className="scenarios">
            <div className="scen bad">
              <h3>Sem pessoa de produto</h3>
              <ol className="tl">{semPO.map(([d, t]) => <li key={d + t}><time>{d}</time><p>{t}</p></li>)}</ol>
              <p className="result">Resultado: R$ 0 a mais, META-3 com ~4 meses de atraso e risco de glosa.</p>
            </div>
            <div className="scen good">
              <h3>Com pessoa de produto</h3>
              <ol className="tl">{comPO.map(([d, t]) => <li key={d + t}><time>{d}</time><p>{t}</p></li>)}</ol>
              <p className="result">Resultado: nova meta financiada, cronograma replanejado e equipe preservada.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="prova" className="wrap block">
        <h2><span className="num">03</span>A prova que sustentou o aditivo</h2>
        <p className="intro">Cada elemento da exigência nova corresponde a uma exclusão expressa da seção 7 do PTA, assinada antes do início do projeto. É isso que transforma "achamos que não estava incluso" em "está escrito que não estava".</p>
        <div className="tablewrap">
          <table className="proof">
            <thead><tr><th>O que a Veltra passou a exigir</th><th>Cláusula do PTA v1.0</th><th>Texto da exclusão</th></tr></thead>
            <tbody>{prova.map(([a, b, c]) => <tr key={b}><td>{a}</td><td><code>{b}</code></td><td>{c}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="note">Na matriz de rastreabilidade, nenhum dos 42 requisitos da linha de base cobre esses itens.</p>
      </section>

      <section id="documentos" className="block band">
        <div className="wrap">
          <h2><span className="num">04</span>Os documentos</h2>
          <p className="intro">O conjunto completo que uma pessoa de produto produz ao longo do projeto. Cada um decidiu um momento da história.</p>
          <div className="docgrid">
            {docs.map(d => (
              <Link key={d.slug} to={`/documentos/${d.slug}`} className="doccard">
                <span className="dn">{d.num}</span>
                <span className="phase">{d.phase}</span>
                <h3>{d.title}</h3>
                <p>{d.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="proposta" className="wrap block">
        <h2><span className="num">05</span>Como funciona</h2>
        <div className="cols3">
          <div className="card step"><span>Fase 1</span><h3>Pré-proposta</h3><p>PO participa da escrita do PTA: objetivos, metas verificáveis e, principalmente, uma seção de fora de escopo.</p></div>
          <div className="card step"><span>Fase 2</span><h3>Linha de base</h3><p>Requisitos com critérios de aceite aprovados em ata e matriz de rastreabilidade meta → requisito → entrega.</p></div>
          <div className="card step"><span>Fase 3</span><h3>Gestão de mudanças</h3><p>Toda demanda nova vira solicitação de mudança, com análise de impacto e, quando cabe, termo aditivo.</p></div>
        </div>
      </section>
    </main>
  )
}
