import { Link } from 'react-router-dom'
import { docs } from './docs'

type Etapa = {
  id: string
  titulo: string
  entrega: string
}

const etapas: Etapa[] = [
  { id: 'contexto', titulo: 'Entender o contexto', entrega: 'Mapa de quem participa e decide, e a descrição do problema' },
  { id: 'escopo', titulo: 'Definir o escopo no plano de trabalho', entrega: 'Metas verificáveis e o registro do que ficou fora' },
  { id: 'requisitos', titulo: 'Escrever os requisitos', entrega: 'Especificação com critérios de aceite' },
  { id: 'combinado', titulo: 'Registrar o que foi combinado', entrega: 'Versão de referência da especificação' },
  { id: 'rastreabilidade', titulo: 'Ligar entregas às metas', entrega: 'Rastreabilidade da meta até a evidência' },
  { id: 'time', titulo: 'Trabalhar junto com o time técnico', entrega: 'Histórias e aceites ligados aos requisitos' },
  { id: 'decisoes', titulo: 'Registrar decisões, riscos e premissas', entrega: 'Histórico de decisões do projeto' },
  { id: 'alinhamento', titulo: 'Manter documento e sistema alinhados', entrega: 'Especificação fiel ao que foi construído' },
  { id: 'mudancas', titulo: 'Tratar mudanças de escopo', entrega: 'Registro de cada mudança e do que foi decidido' },
  { id: 'entrega', titulo: 'Entrega e transferência de tecnologia', entrega: 'O pacote final, consolidado' },
]

function Cabecalho({ i }: { i: number }) {
  const e = etapas[i]
  return (
    <>
      <p className="etapa">Etapa {i + 1}</p>
      <h2>{e.titulo}</h2>
    </>
  )
}

function Rodape({ i, onde }: { i: number; onde: string }) {
  return (
    <dl className="rodape">
      <div><dt>Onde fica</dt><dd>{onde}</dd></div>
      <div><dt>O que deixa pronto para a entrega</dt><dd>{etapas[i].entrega}</dd></div>
    </dl>
  )
}

function Perguntas({ itens }: { itens: string[] }) {
  return (
    <>
      <h3>Perguntas-guia</h3>
      <ul className="qlist">{itens.map(q => <li key={q}>{q}</li>)}</ul>
    </>
  )
}

const mapa: [string, string[]][] = [
  ['1. Entender o contexto', ['01']],
  ['2. Definir o escopo no plano de trabalho', ['02']],
  ['3. Escrever os requisitos', ['03']],
  ['4. Registrar o que foi combinado', ['03']],
  ['5. Ligar entregas às metas', ['04']],
  ['6 e 7. Time técnico; decisões, riscos e premissas', ['05']],
  ['9. Tratar mudanças de escopo', ['06', '07', '08']],
]

export default function Home() {
  const doc = (n: string) => docs.find(d => d.num === n)!
  return (
    <div className="page">
      <aside className="toc">
        <p className="toc-title">Visão geral</p>
        <ul>
          <li><a href="#pd">O que muda em P&amp;D</a></li>
          <li><a href="#etapas">As etapas</a></li>
        </ul>
        <p className="toc-title">Etapas</p>
        <ol>{etapas.map(e => <li key={e.id}><a href={`#${e.id}`}>{e.titulo}</a></li>)}</ol>
        <p className="toc-title">Mais</p>
        <ul>
          <li><a href="#papel">Trabalhando junto com o time</a></li>
          <li><a href="#demonstracao">Demonstração</a></li>
        </ul>
      </aside>

      <main className="content">
        <header className="intro">
          <h1>Requisitos em projetos de P&amp;D</h1>
          <p className="proposta">Este é o jeito como organizo requisitos em projetos de P&amp;D. A ideia não é criar etapas novas, e sim aproveitar melhor o que o projeto já produz.</p>
          <p>
            Quase tudo acontece em lugares que já existem: o plano de trabalho, a wiki do time, os cards, os marcos e as
            reuniões de acompanhamento. O parceiro continua com as mesmas reuniões e as mesmas entregas; o que muda é que a
            informação fica mais organizada. E, no fim do projeto, a transferência de tecnologia dá bem menos trabalho,
            porque boa parte do material foi sendo montada pelo caminho.
          </p>
        </header>

        <section id="pd">
          <h2>O que muda num projeto de P&amp;D</h2>
          <p>Projetos de P&amp;D têm algumas particularidades, e o método foi montado pensando nelas.</p>
          <ul>
            <li>Nem tudo está claro no começo. Muita coisa só se define depois que a pesquisa anda.</li>
            <li>As metas precisam ser comprovadas. A fundação e o parceiro acompanham os marcos, e geralmente há relatório anual.</li>
            <li>O parceiro costuma ser, ao mesmo tempo, especialista no assunto e quem vai usar ou manter o que for entregue.</li>
            <li>Os pedidos de ajuste chegam aos poucos, quase sempre nas reuniões de acompanhamento.</li>
            <li>O time é pequeno e as pessoas acumulam funções. Por isso, o que se registra tem que ser fácil de manter.</li>
          </ul>
        </section>

        <section id="etapas">
          <h2>As etapas</h2>
          <p>São dez etapas em sequência. Ao lado de cada uma, a parte do pacote final que ela deixa pronta.</p>
          <table>
            <thead><tr><th>Etapa</th><th>Deixa pronto para a entrega</th></tr></thead>
            <tbody>
              {etapas.map((e, i) => (
                <tr key={e.id}><td><a href={`#${e.id}`}>{i + 1}. {e.titulo}</a></td><td>{e.entrega}</td></tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="contexto">
          <Cabecalho i={0} />
          <p>
            O método começa pelo contexto. Antes de falar em telas ou tecnologia, vale entender quem participa do projeto,
            o que cada um espera dele, quem aprova o quê e qual é o problema, de preferência com números.
          </p>
          <h3>Perguntas-guia, por grupo</h3>
          <div className="perguntas">
            <div>
              <h4>Ao parceiro</h4>
              <ul>
                <li>O que vocês querem conseguir fazer depois deste projeto que não fazem hoje?</li>
                <li>Quem vai receber e manter o que for desenvolvido?</li>
                <li>Quem aprova as entregas, e quem aprova mudanças de escopo?</li>
                <li>Como o resultado será comprovado nos relatórios do projeto?</li>
              </ul>
            </div>
            <div>
              <h4>Aos usuários</h4>
              <ul>
                <li>Como essa atividade é feita hoje, e quanto tempo leva?</li>
                <li>O que mais atrapalha, e com que frequência acontece?</li>
                <li>O que vocês fariam diferente se tivessem essa informação antes?</li>
              </ul>
            </div>
            <div>
              <h4>Ao time técnico</h4>
              <ul>
                <li>O que ainda não sabemos se dá para fazer?</li>
                <li>Quais limites de infraestrutura ou de dados podem inviabilizar uma ideia?</li>
                <li>Do que precisamos ter em mãos antes de começar?</li>
              </ul>
            </div>
          </div>
          <p className="nota">Esta etapa ajuda a perceber cedo quem pode pedir mudanças mais adiante, como um cliente do parceiro que não participa das reuniões, mas depende do resultado.</p>
          <Rodape i={0} onde="Um documento curto de visão, ou a primeira página da wiki do projeto" />
        </section>

        <section id="escopo">
          <Cabecalho i={1} />
          <p>
            O plano de trabalho já é obrigatório. Esta etapa ajuda a escrevê-lo de forma que cada meta possa ser verificada
            e que o escopo tenha uma fronteira clara. Para isso, além do que será feito, o próprio plano registra o que ficou
            de fora: aquilo que alguém poderia supor que está incluído.
          </p>
          <Perguntas itens={[
            'Como vamos saber que esta meta foi cumprida? Que evidência a comprova?',
            'O que alguém poderia achar que está incluído, mas não está?',
            'O que precisa ser verdade para o plano funcionar? (premissas)',
            'O que não pode mudar: prazo, orçamento, infraestrutura, regras da fundação? (restrições)',
          ]} />
          <h3>Exemplo</h3>
          <table>
            <thead><tr><th>Descrição geral</th><th>Descrição verificável</th></tr></thead>
            <tbody>
              <tr><td>Desenvolver um painel de indicadores</td><td>Painel com os indicadores X, Y e Z por unidade, atualizado em até 1 minuto, validado com os usuários do parceiro</td></tr>
              <tr><td>(fronteira implícita)</td><td>Fora de escopo: integração com sistemas de terceiros e operação em produção com suporte</td></tr>
            </tbody>
          </table>
          <Rodape i={1} onde="No próprio plano de trabalho" />
        </section>

        <section id="requisitos">
          <Cabecalho i={2} />
          <p>
            Cada requisito tem um identificador, a origem (quem pediu), a meta a que atende e critérios de aceite mensuráveis,
            escritos como <i>Dado / Quando / Então</i>. As regras de negócio ficam separadas, porque são decisões que o
            parceiro precisa validar.
          </p>
          <h3>Exemplo</h3>
          <div className="req">
            <p className="req-id">RF-012 · Relatório mensal de indicadores</p>
            <p>O sistema deve gerar o relatório mensal de indicadores por unidade, em PDF, a partir dos dados consolidados do período, conforme a regra RN-03.</p>
            <p className="req-meta">Origem: gestão do parceiro · Meta 2 · Prioridade: obrigatório</p>
            <p className="req-ca"><b>Critério 1.</b> Dado um mês encerrado, quando o relatório for solicitado, então ele deve ser gerado em até 30 segundos.</p>
            <p className="req-ca"><b>Critério 2.</b> Dado o relatório gerado, quando comparado ao painel do mesmo período, então os valores devem ser idênticos.</p>
          </div>
          <Perguntas itens={[
            'Quem pediu, e a qual meta isso atende?',
            'Alguém do time consegue dizer, sem perguntar, se o requisito foi cumprido?',
            'Ele descreve uma necessidade ou já impõe uma solução?',
            'Tem alguma palavra vaga, como rápido, fácil ou intuitivo, que precise virar número?',
          ]} />
          <Rodape i={2} onde="Na wiki ou na ferramenta que o time já usa" />
        </section>

        <section id="combinado">
          <Cabecalho i={3} />
          <p>
            Os requisitos são revisados primeiro com o time técnico, que ajusta o que é viável, e depois apresentados ao
            parceiro numa reunião de acompanhamento que já está na agenda. O que for combinado é registrado ali mesmo, num
            resumo curto, e aquela versão da especificação passa a ser a referência.
          </p>
          <p>Daqui em diante, mudanças continuam bem-vindas. Elas apenas passam a ser registradas, para que todos saibam qual é a versão atual.</p>
          <Perguntas itens={[
            'O time técnico concorda que isso pode ser feito no prazo e com os recursos do plano?',
            'O parceiro reconhece nessa lista o que pediu?',
            'Quem precisa saber que esta versão foi combinada?',
          ]} />
          <Rodape i={3} onde="Na pauta e no resumo da reunião de acompanhamento" />
        </section>

        <section id="rastreabilidade">
          <Cabecalho i={4} />
          <p>
            A rastreabilidade liga cada meta do plano aos requisitos, às entregas e às evidências de que foram cumpridas.
            Ela aproveita os cards e os marcos que o time já mantém: basta que cada card cite o requisito e cada requisito
            cite a meta.
          </p>
          <div className="tabwrap">
            <table>
              <thead><tr><th>Meta</th><th>Entrega</th><th>Requisito</th><th>Card</th><th>Evidência</th></tr></thead>
              <tbody>
                <tr><td>Meta 2</td><td>Módulo de relatórios</td><td>RF-012</td><td>#48</td><td>Relatório de testes do marco 2</td></tr>
              </tbody>
            </table>
          </div>
          <p>Com isso, perguntas como "por que estamos construindo isso?" e "isso estava no plano?" têm resposta rápida, e o relatório de cada marco se monta a partir do que já está registrado.</p>
          <Rodape i={4} onde="Nos cards e marcos que o time já usa" />
        </section>

        <section id="time">
          <Cabecalho i={5} />
          <p>
            No dia a dia, os requisitos chegam ao time como histórias de usuário: uma frase sobre quem precisa de quê e por
            quê, os critérios de aceite herdados do requisito e as regras que se aplicam. O detalhamento é feito junto com o
            tech lead, que conhece as dependências técnicas.
          </p>
          <div className="fluxo">
            <div><span>Requisito</span><b>RF-012</b> Relatório mensal de indicadores</div>
            <div><span>História</span>Como <i>gestor do parceiro</i>, quero o relatório mensal em PDF, para apresentar os resultados à diretoria.</div>
            <div><span>Critérios</span>Os mesmos do requisito, que viram os testes da história</div>
          </div>
          <h3>Participação nos ritos que o time já tem</h3>
          <table>
            <thead><tr><th>Rito existente</th><th>Como a pessoa de requisitos participa</th></tr></thead>
            <tbody>
              <tr><td>Planejamento</td><td>Prepara junto com o tech lead as histórias com critérios claros</td></tr>
              <tr><td>Reunião de status</td><td>Apoia com dúvidas de regra de negócio e leva ao parceiro o que depende dele</td></tr>
              <tr><td>Revisão das entregas</td><td>Ajuda a conferir os critérios de aceite e registra o que foi aceito</td></tr>
            </tbody>
          </table>
          <Rodape i={5} onde="Nos cards e nos ritos atuais do time" />
        </section>

        <section id="decisoes">
          <Cabecalho i={6} />
          <p>
            Três listas curtas acompanham o projeto: premissas (o que estamos supondo), riscos (o que pode dar errado e o
            que fazer) e decisões (o que foi resolvido, quando e por quê).
          </p>
          <div className="req">
            <p className="req-id">Exemplo de registro de decisão</p>
            <p>DEC-04 · 24/04 · O indicador mensal considera apenas dias úteis. Decidido na reunião de acompanhamento com a gestão do parceiro. Afeta RN-03 e RF-012.</p>
          </div>
          <p>Uma anotação como essa leva um minuto e evita voltar, meses depois, a uma discussão já resolvida. Também ajuda quem entra no projeto no meio do caminho.</p>
          <Rodape i={6} onde="Uma página da wiki, atualizada nas reuniões" />
        </section>

        <section id="alinhamento">
          <Cabecalho i={7} />
          <p>
            Ao longo do projeto, o sistema evolui mais rápido que qualquer documento. Esta etapa mantém os dois coerentes, e é
            onde programar faz parte do método: ler o repositório junto com a especificação permite conferir se o que foi
            implementado corresponde ao que foi descrito e conversar com o time no mesmo nível.
          </p>
          <ul>
            <li>Ler o código das entregas recentes e atualizar a especificação quando algo foi resolvido de outra forma.</li>
            <li>Manter o registro do dia a dia coerente com os relatórios de marco.</li>
            <li>Usar protótipos para fechar decisões de tela antes da implementação.</li>
            <li>Revisar periodicamente as próprias pendências: requisitos em aberto, critérios sem teste, dúvidas sem resposta.</li>
          </ul>
          <Rodape i={7} onde="Repositório, wiki e relatórios de marco" />
        </section>

        <section id="mudancas">
          <Cabecalho i={8} />
          <p>Quando o parceiro pede algo novo, o caminho depende do tamanho do pedido.</p>
          <ul>
            <li><b>Mudanças pequenas</b>, que cabem no plano, são registradas no histórico de decisões e seguem para o time.</li>
            <li><b>Mudanças que afetam metas, prazo ou orçamento</b> seguem um caminho mais completo:</li>
          </ul>
          <ol className="passos">
            <li><b>Registrar</b> o pedido logo após a reunião (por exemplo, em até dois dias úteis), com origem e o que ele afeta.</li>
            <li><b>Comparar com o plano</b>: o pedido estava previsto, ou cai no que ficou fora de escopo?</li>
            <li><b>Analisar o impacto</b> com o time (por exemplo, em até cinco dias úteis): requisitos novos, esforço, prazo e riscos.</li>
            <li><b>Apresentar alternativas</b> na reunião de acompanhamento: não fazer, encaixar no plano atual, ajustar prazo ou incluir uma nova meta.</li>
            <li><b>Registrar a decisão</b> e, se for o caso, preparar com a gestão a documentação para a fundação.</li>
          </ol>
          <Perguntas itens={[
            'Isso estava no plano, ou no que ficou de fora?',
            'O que deixa de ser feito, ou atrasa, se aceitarmos?',
            'Quem precisa decidir?',
          ]} />
          <Rodape i={8} onde="No histórico de decisões e na reunião de acompanhamento" />
        </section>

        <section id="entrega">
          <Cabecalho i={9} />
          <p>
            Na entrega final, surgem perguntas como: o que exatamente foi construído, por que cada decisão foi tomada, o que
            corresponde a cada meta, o que ficou de fora e como o parceiro vai manter o sistema dali em diante. Quando as
            etapas anteriores foram mantidas ao longo do projeto, essas respostas já existem.
          </p>
          <h3>O pacote que o parceiro recebe</h3>
          <ul>
            <li>O sistema e o código, com instruções de instalação e operação.</li>
            <li>A especificação atualizada, fiel ao que foi construído.</li>
            <li>O histórico de decisões, com o porquê de cada escolha.</li>
            <li>A rastreabilidade de cada meta até as entregas e evidências.</li>
            <li>O que ficou registrado como evolução futura.</li>
          </ul>
          <p>Assim, a transferência é a consolidação do que já foi produzido, mesmo que parte do time já tenha saído do projeto.</p>
          <Rodape i={9} onde="Reunião de encerramento e relatório final" />
        </section>

        <section id="papel">
          <h2>Trabalhando junto com o time</h2>
          <p>
            A pessoa de requisitos trabalha junto com a gestão do projeto e com o tech lead, apoiando o que eles já fazem.
            A gestão segue responsável pela relação com o parceiro e com a fundação; o tech lead, pelas decisões técnicas. O
            papel de requisitos organiza a informação entre esses lados: prepara, registra e mantém coerente.
          </p>
          <p>
            Programar também faz parte do trabalho. É o que permite ler o código, discutir soluções com o time sem
            intermediários e manter o documento fiel ao sistema.
          </p>
        </section>

        <section id="demonstracao">
          <h2>Demonstração: o método aplicado a um cenário</h2>
          <p>
            Para mostrar como o trabalho fica na prática, os documentos abaixo foram produzidos para um <b>cenário
            fictício</b>, o projeto SENTINELA. O domínio foi escolhido apenas como ilustração.
          </p>
          <dl className="ficha">
            <div><dt>Parceiro</dt><dd>Empresa de tecnologia industrial</dd></div>
            <div><dt>Projeto</dt><dd>Monitoramento de eficiência e manutenção preditiva em células robotizadas de solda</dd></div>
            <div><dt>Duração</dt><dd>12 meses, 4 metas</dd></div>
            <div><dt>Situação simulada</dt><dd>No mês 5, um cliente do parceiro pede uma funcionalidade nova</dd></div>
          </dl>
          <h3>Qual documento corresponde a cada etapa</h3>
          <table>
            <thead><tr><th>Etapa</th><th>Documento</th></tr></thead>
            <tbody>
              {mapa.map(([etapa, nums]) => (
                <tr key={etapa}>
                  <td>{etapa}</td>
                  <td>{nums.map(n => <div key={n}><Link to={`/documentos/${doc(n).slug}`}>{n} · {doc(n).title}</Link></div>)}</td>
                </tr>
              ))}
              <tr><td>Efeito do método no cenário</td><td><Link to={`/documentos/${doc('09').slug}`}>09 · {doc('09').title}</Link></td></tr>
            </tbody>
          </table>
          <p className="nota">O método se ajusta ao tamanho de cada projeto: em projetos menores, várias dessas etapas cabem numa única página.</p>
        </section>
      </main>
    </div>
  )
}
