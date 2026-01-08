const questions = [
{
    "enunciado": "A prestação de contas consiste em ato administrativo discricionário, que tem início a partir do ato da autoridade administrativa competente do tribunal de contas, que decide auditar determinada operação.",
    "correta": "E",
    "tema": "Abrangência do Controle",
    "justificativa": "A prestação de contas é um dever constitucional vinculado (obrigatório), e não discricionário. Ela independe da vontade do auditor ou do gestor; decorre automaticamente da utilização de recursos públicos. **Conceito:** Princípio da Universalidade da Prestação de Contas (Art. 70, parágrafo único, CF). **Analogia:** Assim como um inquilino tem o dever obrigatório de pagar o aluguel independentemente de o dono cobrar naquele dia específico, o gestor público deve prestar contas sempre."
  },
  {
    "enunciado": "A prestação de contas constitui obrigação de natureza jurídico-contratual resultante do vínculo entre o agente público e a administração.",
    "correta": "E",
    "tema": "Abrangência do Controle",
    "justificativa": "A natureza é constitucional e republicana, não meramente contratual. Atinge até mesmo particulares sem vínculo de emprego (contrato de trabalho) que gerenciem verbas públicas (ex: ONGs). **Conceito:** É um dever inerente à gestão da res publica (coisa pública). **Analogia:** A obrigação de não poluir o rio não nasce de um contrato assinado com o governo, mas de um dever legal de todos; a prestação de contas segue a mesma lógica pública."
  },
  {
    "enunciado": "A prestação de contas é um procedimento sancionador, sendo exigida apenas quando há indícios de irregularidade na aplicação dos recursos ou quando há inadimplemento contumaz de uma obrigação financeira.",
    "correta": "E",
    "tema": "Abrangência do Controle",
    "justificativa": "A prestação de contas é um processo ordinário (rotineiro) de demonstração da gestão, e não uma punição (sancionador). Ela deve ocorrer periodicamente, havendo ou não suspeita de erro. **Conceito:** *Accountability* (transparência e responsabilização). **Analogia:** É como o check-out em um hotel; você deve passar por ele para fechar a conta e mostrar os gastos, independentemente de ter quebrado algo no quarto ou não."
  },
  {
    "enunciado": "A prestação de contas tem natureza político-jurídica, vinculada exclusivamente ao juízo discricionário do Poder Legislativo e do agente político responsável.",
    "correta": "E",
    "tema": "Abrangência do Controle",
    "justificativa": "A prestação de contas possui caráter técnico, jurídico e financeiro, submetida ao crivo técnico dos Tribunais de Contas, e não apenas ao juízo político do Legislativo (embora este julgue as contas de Governo do Chefe do Executivo). **Conceito:** Controle Técnico-Legislativo."
  },
  {
    "enunciado": "A prestação de contas é um dever jurídico constitucionalmente previsto, que recai sobre todo aquele que administre, arrecade, guarde ou utilize bens ou valores públicos.",
    "correta": "C",
    "tema": "Abrangência do Controle",
    "justificativa": "Reproduz a literalidade do Art. 70, parágrafo único, da CF/88. **Conceito:** O dever abrange qualquer pessoa física ou jurídica, pública ou privada, que guarde ou gerencie bens públicos. **Analogia:** Se você pega emprestado o cartão de crédito da empresa para uma viagem, você é obrigado a apresentar as notas fiscais (prestar contas), não importa seu cargo."
  },
  {
    "enunciado": "A auditoria de demonstrações contábeis realizada por órgãos de controle externo tem como foco exclusivo a verificação da correta aplicação dos princípios contábeis geralmente aceitos no setor público, sendo vedada a emissão de opinião sobre a fidedignidade das demonstrações contábeis.",
    "correta": "E",
    "tema": "Auditoria Governamental",
    "justificativa": "O objetivo principal da auditoria financeira (contábil) é justamente emitir uma opinião (parecer) sobre se as demonstrações refletem adequadamente a posição patrimonial e financeira (fidedignidade). A vedação citada invalida a questão. **Conceito:** Asseguração da integridade das informações. **Analogia:** Um crítico gastronômico vai ao restaurante justamente para opinar se a comida é boa e segue o menu, não sendo vedado a ele dar essa opinião."
  },
  {
    "enunciado": "O controle externo da atividade financeira de órgãos e entidades da administração direta da União tem por objeto exclusivo a matéria orçamentária.",
    "correta": "E",
    "tema": "Abrangência do Controle",
    "justificativa": "O controle externo é amplo e abrange a fiscalização contábil, financeira, orçamentária, operacional e patrimonial (COFOP), verificando legalidade, legitimidade, economicidade, etc. (Art. 70, CF). **Analogia:** Uma inspeção veicular verifica não apenas o motor (orçamento), mas também freios, luzes, pneus e emissão de gases (patrimonial, operacional, legalidade)."
  },
  {
    "enunciado": "A fiscalização exercida pelos tribunais de contas deve acompanhar a aplicação de recursos públicos por pessoa privada que a executar, apontando irregularidades e indicando à sociedade os desvios que vierem a ocorrer.",
    "correta": "C",
    "tema": "Abrangência do Controle",
    "justificativa": "O dinheiro público mantém sua natureza pública mesmo quando gerido por privados (ex: via convênios). O controle segue o recurso. **Conceito:** Rastreabilidade do recurso público. **Analogia:** O dinheiro público tem um rastreador GPS; onde ele for, o Tribunal de Contas vai atrás."
  },
  {
    "enunciado": "O controle da atividade financeira do Estado abrange a fiscalização da arrecadação de receitas, da execução de despesas, da gestão do patrimônio público e da dívida pública.",
    "correta": "C",
    "tema": "Atividade Financeira do Estado",
    "justificativa": "A atividade financeira do Estado engloba obter (receita), gerir (patrimônio/dívida) e gastar (despesa) recursos. O controle incide sobre todas essas etapas."
  },
  {
    "enunciado": "A anulação de um ato administrativo pela própria administração pública, quando constatada alguma ilegalidade, configura forma de controle interno cuja realização independe de provocação.",
    "correta": "C",
    "tema": "Autotutela Administrativa",
    "justificativa": "Decorre do poder-dever de autotutela (Súmula 473 STF). A administração deve agir de ofício para corrigir ilegalidades. **Conceito:** Controle administrativo interno. **Analogia:** É como um sistema de correção automática de texto; ele corrige o erro ortográfico assim que o detecta, sem precisar que o leitor reclame."
  },
  {
    "enunciado": "A fiscalização contábil, financeira, orçamentária, operacional e patrimonial da União e das entidades da administração direta e indireta, quanto à legalidade, legitimidade, economicidade, aplicação das subvenções e renúncia de receitas, será exercida somente pelo Congresso Nacional, com o auxílio do Tribunal de Contas da União, e pelo Poder Judiciário.",
    "correta": "E",
    "tema": "Sistema de Controle",
    "justificativa": "A questão exclui o **Sistema de Controle Interno** de cada Poder, que também exerce essa fiscalização conforme o Art. 70 da CF. Além disso, a referência ao Judiciário no texto constitucional desse artigo foca no sistema de controle interno do próprio Judiciário, e não na função jurisdicional."
  },
  {
    "enunciado": "O controle administrativo, inerente à própria administração pública, pode ser exercido de ofício ou mediante provocação de terceiros e abrange tanto a análise de legalidade quanto a de mérito do ato ou da conduta administrativa.",
    "correta": "C",
    "tema": "Controle Administrativo",
    "justificativa": "A administração tem o poder amplo de rever seus atos: anular os ilegais e revogar os inoportunos (mérito). **Conceito:** Autotutela ampla. **Analogia:** O próprio cozinheiro pode decidir jogar fora uma sopa porque está salgada (ilegal/imprópria) ou porque decidiu mudar o cardápio do dia (mérito/conveniência)."
  },
  {
    "enunciado": "Dado o princípio da autotutela, que embasa o controle administrativo, a administração pública tem o poder-dever de anular seus próprios atos eivados de ilegalidade, mas não de revogá-los por motivo de conveniência ou oportunidade.",
    "correta": "E",
    "tema": "Autotutela",
    "justificativa": "A Súmula 473 do STF estabelece expressamente que a administração pode anular os atos ilegais E **revogar** os legais por motivo de conveniência ou oportunidade. Negar o poder de revogação torna o item errado."
  },
  {
    "enunciado": "Os sistemas de controle interno de cada Poder da União (Executivo, Legislativo e Judiciário) são uniformes e seguem as mesmas diretrizes estabelecidas por um órgão centralizador para garantir a padronização dos procedimentos de fiscalização.",
    "correta": "E",
    "tema": "Controle Interno",
    "justificativa": "A Constituição prevê que os Poderes manterão sistemas de controle interno de forma **integrada**, mas eles são autônomos administrativamente. Não há subordinação do Legislativo ou Judiciário à CGU (Executivo) no controle interno."
  },
  {
    "enunciado": "A impetração de mandado de segurança configura controle administrativo.",
    "correta": "E",
    "tema": "Controle Jurisdicional",
    "justificativa": "O Mandado de Segurança é uma ação judicial. Portanto, trata-se de **Controle Judicial** (ou Jurisdicional) provocado para corrigir ilegalidade ou abuso de poder. **Analogia:** Reclamar no SAC da empresa é controle administrativo; processar a empresa na justiça é controle judicial."
  },
  {
    "enunciado": "Os atos administrativos discricionários, em razão de sua natureza, não são passíveis de controle pelo Poder Judiciário, na medida em que envolvem juízo de conveniência e oportunidade da administração pública.",
    "correta": "E",
    "tema": "Controle Judicial",
    "justificativa": "Atos discricionários **são** passíveis de controle judicial quanto aos seus limites legais (competência, forma, finalidade) e princípios (razoabilidade, proporcionalidade). O juiz não controla a escolha política (mérito), mas controla a legalidade da escolha. **Conceito:** Inafastabilidade da jurisdição."
  },
  {
    "enunciado": "No contencioso administrativo brasileiro, os litígios estão sujeitos à apreciação do Poder Judiciário, devido à adoção do sistema inglês no ordenamento jurídico pátrio.",
    "correta": "C",
    "tema": "Sistemas de Controle",
    "justificativa": "O Brasil adota o Sistema de Jurisdição Una (Sistema Inglês), onde o Judiciário tem a palavra final. Difere do Sistema Francês, que possui tribunais administrativos com poder de coisa julgada. **Conceito:** Monopólio da jurisdição definitiva."
  },
  {
    "enunciado": "No Brasil, é adotado o sistema administrativo inglês, no qual todos os atos administrativos podem ser resolvidos pelo Poder Judiciário, cujas decisões gozam de definitividade.",
    "correta": "C",
    "tema": "Sistemas de Controle",
    "justificativa": "Reafirmação do sistema de Jurisdição Una. Apenas o Judiciário produz coisa julgada material (definitividade)."
  },
  {
    "enunciado": "Admite-se o controle jurisdicional a fim de interpretar o sentido e o alcance de normas meramente regimentais das casas legislativas quando ficar caracterizado desrespeito às normas constitucionais pertinentes ao processo legislativo.",
    "correta": "C",
    "tema": "Controle de Atos Interna Corporis",
    "justificativa": "Em regra, o Judiciário não interfere em atos *interna corporis*. Porém, se o ato violar a Constituição (ex: processo legislativo constitucional), o Judiciário deve intervir. **Analogia:** O juiz não decide a cor do carpete do Senado, mas decide se a votação de uma lei seguiu as regras da Constituição."
  },
  {
    "enunciado": "O controle jurisdicional, quando referente ao controle da atuação da administração pública, visa ao exame de legalidade da decisão administrativa, cabendo, portanto, a apreciação do mérito administrativo.",
    "correta": "E",
    "tema": "Limites do Controle Judicial",
    "justificativa": "O Judiciário examina a legalidade, mas **não** pode apreciar o **mérito administrativo** (conveniência e oportunidade), sob pena de violar a Separação de Poderes."
  },
{
    "enunciado": "O sistema de controle adotado no Brasil baseia-se na unidade de jurisdição, sendo atribuída apenas aos órgãos do Judiciário a prerrogativa de proferir decisões de caráter definitivo.",
    "correta": "C",
    "tema": "Controle Jurisdicional",
    "justificativa": "No Brasil, vigora o sistema de jurisdição una (sistema inglês), onde nenhuma lesão ou ameaça a direito pode ser excluída da apreciação do Poder Judiciário (Art. 5º, XXXV, CF). Decisões administrativas não fazem coisa julgada material. **Conceito:** Inafastabilidade da Jurisdição. **Analogia:** O Tribunal de Contas é como um árbitro de futebol que apita a falta (decisão administrativa), mas o Judiciário é o VAR (árbitro de vídeo) que tem a palavra final e definitiva sobre a validade do lance se houver contestação judicial."
  },
  {
    "enunciado": "A criação de um tribunal administrativo com poder de julgamento definitivo, cuja decisão impedisse a revisão judicial sobre o mérito do ato, seria compatível com o sistema brasileiro de controle da administração pública, desde que a Constituição Federal fosse alterada para prever expressamente essa competência excepcional.",
    "correta": "E",
    "tema": "Controle Jurisdicional",
    "justificativa": "O princípio da inafastabilidade da jurisdição é cláusula pétrea (Art. 60, § 4º, IV, CF - direitos e garantias individuais). Nem mesmo emenda constitucional pode abolir o direito de acesso ao Judiciário para rever lesão a direito. O sistema do contencioso administrativo (francês) é incompatível com a CF/88."
  },
  {
    "enunciado": "No sistema brasileiro de jurisdição una, a existência de um processo administrativo prévio e exauriente, com trânsito em julgado na esfera administrativa, impede a posterior apreciação da matéria pelo Poder Judiciário, ressalvadas as hipóteses de vícios insanáveis de legalidade.",
    "correta": "E",
    "tema": "Controle Jurisdicional",
    "justificativa": "A coisa julgada administrativa (decisão irrecorrível na via administrativa) impede apenas que a própria Administração reveja o ato, mas não impede a revisão judicial. O cidadão sempre pode recorrer ao Judiciário."
  },
  {
    "enunciado": "Todo cidadão tem o direito de buscar a revisão judicial de qualquer decisão, se entender que seu direito foi lesado ou ameaçado.",
    "correta": "C",
    "tema": "Controle Jurisdicional",
    "justificativa": "Reforça o princípio da inafastabilidade da tutela jurisdicional. Qualquer lesão ou ameaça a direito pode ser levada ao Judiciário."
  },
  {
    "enunciado": "Constitui ato de improbidade administrativa que atenta contra os princípios da administração pública a dispensa indevida de processo licitatório com consequente perda patrimonial efetiva.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Havendo **perda patrimonial efetiva** (dano ao erário), a conduta tipifica-se como **Lesão ao Erário** (Art. 10, VIII da Lei 8.429/92), e não apenas atentado a princípios. A classificação correta altera as sanções (ex: prazo de suspensão de direitos políticos). **Conceito:** Princípio da especialidade do tipo (dano financeiro prevalece sobre princípio genérico)."
  },
  {
    "enunciado": "A conduta de frustrar, em ofensa à imparcialidade, o caráter concorrencial de procedimento licitatório, com vistas à obtenção de benefício de terceiros, constitui ato de improbidade administrativa que atenta contra os princípios da administração pública.",
    "correta": "C",
    "tema": "Improbidade Administrativa",
    "justificativa": "Se a fraude na licitação visa benefício indevido e fere a imparcialidade, mas não há menção explícita a sobrepreço ou dano financeiro direto (perda patrimonial), a conduta se enquadra no Art. 11, V (Princípios). **Nota:** Com a nova lei, exige-se dolo específico de obter benefício."
  },
  {
    "enunciado": "A mera indicação política realizada por detentor de mandato eletivo configura ato de improbidade administrativa, independentemente da aferição de dolo com finalidade ilícita na conduta do agente.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "A nomeação para cargos de confiança é legítima. A improbidade só ocorre se houver dolo de violar a lei (ex: nepotismo cruzado ou nomeação de funcionário fantasma). Não existe responsabilidade objetiva; o dolo deve ser comprovado."
  },
  {
    "enunciado": "A mera perda patrimonial decorrente da atividade econômica configura ato de improbidade administrativa, independentemente da comprovação de ato doloso praticado com essa finalidade.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "A Lei 14.230/21 protege o gestor contra o risco do negócio. Prejuízos causados por má sorte, crise econômica ou incompetência (sem dolo/má-fé) não são improbidade."
  },
  {
    "enunciado": "Incorrerá em ato de improbidade administrativa que importa enriquecimento ilícito o servidor público federal que utilizar, para atender necessidades pessoais, trabalho de terceirizado contratado pelo órgão.",
    "correta": "C",
    "tema": "Improbidade Administrativa",
    "justificativa": "Tipificado no Art. 9º, IV. Usar recursos públicos (mão de obra paga pelo Estado) para fins particulares gera enriquecimento ilícito do agente (que deixou de gastar do próprio bolso). **Analogia:** Pedir ao jardineiro da prefeitura para cortar a grama da sua casa durante o expediente."
  },
  {
    "enunciado": "A configuração de ato de improbidade administrativa que atenta contra os princípios da administração pública depende necessariamente da comprovação de que o agente público agiu, no exercício da sua função, com a finalidade de obter proveito ou benefício indevido para si ou para outra pessoa ou entidade.",
    "correta": "C",
    "tema": "Improbidade Administrativa",
    "justificativa": "A nova LIA (Art. 11, § 1º) exige o dolo específico. Não basta violar o princípio; o agente deve querer obter alguma vantagem (para si ou outrem). Isso evita punir meras irregularidades formais como improbidade."
  },
  {
    "enunciado": "Considera-se ato de improbidade administrativa causar lesão ao erário em decorrência de qualquer ação ou omissão, dolosa ou culposa, que enseje perda patrimonial.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "A modalidade **culposa** foi revogada pela Lei 14.230/21. Hoje, só existe improbidade por ato **doloso**."
  },
  {
    "enunciado": "Considera-se ato de improbidade administrativa receber vantagem patrimonial indevida em razão do exercício de cargo, independentemente de culpa ou dolo.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Exige-se **dolo**. A expressão independentemente de culpa ou dolo sugere responsabilidade objetiva, o que não existe na LIA."
  },
  {
    "enunciado": "Considera-se ato de improbidade administrativa perceber vantagem econômica para intermediar a liberação ou aplicação de verba pública de qualquer natureza, salvo mediante a prática de ato culposo.",
    "correta": "C",
    "tema": "Improbidade Administrativa",
    "justificativa": "A afirmação está correta na lógica da lei atual: perceber vantagem é improbidade (Art. 9º), *exceto* se fosse ato culposo (que não é punível pela LIA). Ou seja, só é punível se doloso."
  },
  {
    "enunciado": "Considera-se ato de improbidade administrativa negar publicidade aos atos oficiais em razão de sua prescindibilidade para a segurança da sociedade e do Estado.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Negar publicidade só é improbidade (Art. 11, IV) se o ato for de publicidade **obrigatória** (imprescindível). Se a lei permite o sigilo ou torna a publicidade dispensável (prescindível), não há ilicitude."
  },
  {
    "enunciado": "Ana, servidora que recebe propina (percentual) para favorecer empresa em licitação, comete ato de improbidade que importa enriquecimento ilícito.",
    "correta": "C",
    "tema": "Improbidade Administrativa",
    "justificativa": "Receber vantagem patrimonial indevida (dinheiro) em razão do cargo é a definição clássica de Enriquecimento Ilícito (Art. 9º)."
  },
  {
    "enunciado": "Ana, servidora que recebe propina em licitação onde a empresa ofereceu o menor preço, comete ato de improbidade por lesão ao erário, visto que sua conduta evidentemente causou dano financeiro.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Se a empresa ofereceu o menor preço e foi contratada, não houve prova de sobrepreço ou dano direto ao cofre público (Lesão ao Erário), mas houve o enriquecimento ilícito da agente. A tipificação correta é Art. 9º."
  },
  {
    "enunciado": "A revelação, antes da divulgação oficial, de uma medida econômica capaz de afetar o preço de um serviço é considerada ato de improbidade administrativa que atenta contra os princípios da administração pública.",
    "correta": "C",
    "tema": "Improbidade Administrativa",
    "justificativa": "Art. 11, III. Quebra de sigilo de informação privilegiada (*Insider Trading* público). Viola a moralidade e a impessoalidade."
  },
  {
    "enunciado": "A conduta de servidor que omite dolosamente irregularidades graves em relatório técnico para favorecer terceiro caracteriza ato de improbidade administrativa que atenta contra os princípios da administração pública.",
    "correta": "C",
    "tema": "Improbidade Administrativa",
    "justificativa": "Viola os deveres de honestidade e lealdade (Art. 11). Como não houve prova de vantagem financeira para o servidor (enriquecimento) ou dano financeiro quantificado (erário), a conduta dolosa contra o dever funcional se enquadra nos princípios."
  },
  {
    "enunciado": "Os atos de improbidade administrativa necessariamente importam no enriquecimento ilícito do agente público.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Não necessariamente. Pode haver Lesão ao Erário (sem o agente ganhar nada) ou Atentado a Princípios."
  },
  {
    "enunciado": "O agente público que recebe vantagem econômica para tolerar a prática de contrabando comete ato de improbidade administrativa que causa prejuízo ao erário.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Comete **Enriquecimento Ilícito** (Art. 9º, IX), pois recebeu vantagem para se omitir. Embora o contrabando prejudique o fisco, a conduta nuclear do agente foi vender sua função."
  },
  {
    "enunciado": "Permitir dolosamente que pessoa física utilize bens do acervo patrimonial do Estado, sem observância das formalidades legais, constitui ato de improbidade administrativa que causa prejuízo ao erário.",
    "correta": "C",
    "tema": "Improbidade Administrativa",
    "justificativa": "Art. 10, II. O uso privado de bens públicos gera custos para o Estado (desgaste, manutenção), caracterizando lesão ao erário."
  },
  {
    "enunciado": "Para a configuração de ato de improbidade administrativa que atenta contra os princípios da administração pública, é indispensável que o agente tenha a finalidade de obtenção de proveito indevido para si ou para outrem.",
    "correta": "C",
    "tema": "Improbidade Administrativa",
    "justificativa": "Reitera a necessidade do dolo específico de benefício na violação de princípios, conforme Lei 14.230/21."
  },
  {
    "enunciado": "A caracterização do ato de improbidade administrativa que atenta contra os princípios da administração pública depende da existência de dano ao erário ou de enriquecimento ilícito do agente público.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Art. 21, I. Os atos contra princípios são autônomos; não precisam gerar dano financeiro ou enriquecimento para serem punidos."
  },
  {
    "enunciado": "Configura ato de improbidade administrativa a mera nomeação ou indicação política por detentores de mandatos eletivos, independentemente da aferição de dolo com finalidade ilícita do agente.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Indicação política sem dolo de ilicitude (ex: nepotismo) é ato lícito de governo/gestão."
  },
  {
    "enunciado": "O agente público que percebe vantagem econômica para intermediar a liberação ou aplicação de verba pública de qualquer natureza pratica ato de improbidade administrativa que causa lesão ao erário.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Pratica ato de **Enriquecimento Ilícito** (Art. 9º, IX). Recebeu para intermediar."
  },
{
    "enunciado": "A configuração de ato de improbidade administrativa que atente contra os princípios da administração pública exige a caracterização de lesividade relevante que ocasione dano ao erário.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Exige lesividade relevante ao bem jurídico (moralidade, legalidade), mas **não** exige dano ao erário (financeiro)."
  },
  {
    "enunciado": "A conduta de servidor público permitir, de forma dolosa, a locação de bem patrimonial do Estado por preço inferior ao de mercado consiste em ato de improbidade administrativa que importa enriquecimento ilícito.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Consiste em **Lesão ao Erário** (Art. 10, V). O Estado perde dinheiro alugando barato. Se o servidor não embolsou nada, não é enriquecimento ilícito dele."
  },
  {
    "enunciado": "Permitir ou facilitar a aquisição de bem ou serviço por preço superior ao de mercado constitui ato de improbidade administrativa que atenta contra os princípios da administração pública.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Constitui **Lesão ao Erário** (Art. 10, V). Comprar caro causa prejuízo direto."
  },
  {
    "enunciado": "Constitui ato de improbidade administrativa que causa lesão ao erário a conduta de auferir, mediante a prática de ato doloso ou culposo, qualquer tipo de vantagem patrimonial indevida em razão do exercício de cargo, mandato, função ou emprego em entidade pública.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Definição de **Enriquecimento Ilícito** (Art. 9º). Além disso, a referência a culposo torna o item errado."
  },
  {
    "enunciado": "A mera perda patrimonial decorrente da atividade econômica, independentemente da comprovação de ato doloso praticado com essa finalidade, basta para a configuração de ato de improbidade administrativa.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Perda patrimonial sem dolo (risco econômico) não é improbidade."
  },
  {
    "enunciado": "A conduta de agente público que conceda benefício administrativo ou fiscal sem a observância das formalidades legais ou regulamentares aplicáveis à espécie constitui ato de improbidade administrativa que causa lesão ao erário.",
    "correta": "C",
    "tema": "Improbidade Administrativa",
    "justificativa": "Tipificado no Art. 10, VII. Concessão irregular de isenção fiscal reduz a receita pública, causando lesão ao erário. **Analogia:** O gerente da loja dá desconto não autorizado para o cliente; a loja perde dinheiro."
  },
  {
    "enunciado": "A ação ou omissão dolosa de agente público que deixe de prestar contas quando esteja obrigado a fazê-lo, com vistas a ocultar irregularidades, constitui ato de improbidade administrativa que causa lesão ao erário.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Deixar de prestar contas é tipificado no **Art. 11, VI** (Atentado contra Princípios), salvo se comprovado desvio de dinheiro (aí seria lesão/enriquecimento). O tipo específico da omissão na prestação de contas está nos Princípios."
  },
  {
    "enunciado": "Constitui ato de improbidade administrativa que atenta contra os princípios da administração pública frustrar a licitude de processo licitatório ou dispensá-lo indevidamente, acarretando perda patrimonial efetiva.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Se há **perda patrimonial efetiva**, é **Lesão ao Erário** (Art. 10, VIII)."
  },
  {
    "enunciado": "É considerado ato de improbidade administrativa auferir, mediante a prática de ato doloso ou culposo, qualquer tipo de vantagem patrimonial indevida em razão do exercício de cargo público.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Erro: ou culposo. Enriquecimento ilícito exige dolo."
  },
  {
    "enunciado": "O agente de atos de improbidade administrativa se sujeitará às sanções administrativas de perda dos direitos políticos e da função pública, indisponibilidade dos bens e ressarcimento ao erário.",
    "correta": "E",
    "tema": "Sanções Constitucionais",
    "justificativa": "A CF/88 prevê **suspensão** dos direitos políticos, não perda. Perda é definitiva, suspensão é temporária."
  },
  {
    "enunciado": "A sanção de proibição de contratação com o poder público, conforme previsão da Lei de Improbidade Administrativa, não pode extrapolar o ente público lesado pelo ato de improbidade.",
    "correta": "E",
    "tema": "Sanções de Improbidade",
    "justificativa": "A proibição de contratar tem efeitos amplos, geralmente atingindo toda a administração pública (cadastro nacional), não apenas o ente lesado, devido à inidoneidade demonstrada pelo contratado."
  },
  {
    "enunciado": "A execução das sanções aplicáveis aos agentes de atos de improbidade administrativa é permitida apenas após o trânsito em julgado da sentença condenatória.",
    "correta": "C",
    "tema": "Sanções de Improbidade",
    "justificativa": "Art. 20 da LIA. A perda da função e a suspensão dos direitos só ocorrem após o trânsito em julgado. **Conceito:** Garantia do devido processo legal e presunção de inocência."
  },
  {
    "enunciado": "De acordo com a Lei n.º 8.429/1992, o prazo prescricional para o ajuizamento de ação para a aplicação de sanções ao responsável pela prática de atos de improbidade administrativa é de 8 anos.",
    "correta": "C",
    "tema": "Prescrição",
    "justificativa": "A Lei 14.230/21 unificou o prazo em 8 anos."
  },
  {
    "enunciado": "Não é cabível alegar a ocorrência de prescrição intercorrente na pendência de ações de improbidade administrativa.",
    "correta": "E",
    "tema": "Prescrição",
    "justificativa": "A nova LIA prevê expressamente a prescrição intercorrente (4 anos)."
  },
  {
    "enunciado": "A ação para a aplicação das sanções cabíveis em virtude da prática de atos de improbidade administrativa prescreve em cinco anos.",
    "correta": "E",
    "tema": "Prescrição",
    "justificativa": "O prazo correto é de 8 anos."
  },
  {
    "enunciado": "Ao tomarem conhecimento de qualquer irregularidade ou ilegalidade, os responsáveis pelo controle interno devem informá-la aos seus superiores hierárquicos, para a adoção das providências cabíveis, sem a necessidade de remessa ao respectivo tribunal de contas.",
    "correta": "E",
    "tema": "Controle Interno",
    "justificativa": "O controle interno tem o dever constitucional (Art. 74, § 1º) de comunicar ao Tribunal de Contas (controle externo) qualquer irregularidade, sob pena de responsabilidade solidária. Não basta informar o chefe."
  },
  {
    "enunciado": "O tribunal de contas tem competência para sustar atos administrativos, na hipótese de não ser atendido; quando se tratar de contrato, entretanto, o ato de sustação será adotado diretamente pelo Congresso Nacional.",
    "correta": "C",
    "tema": "Competências do TCU",
    "justificativa": "TCU susta atos. Congresso susta contratos (com auxílio do TCU). Se o Congresso não agir em 90 dias, o TCU pode decidir."
  },
  {
    "enunciado": "A obrigatoriedade de prestação de contas restringe-se às pessoas físicas ou jurídicas públicas que utilizem, arrecadem, guardem, gerenciem ou administrem dinheiros, bens ou valores públicos.",
    "correta": "E",
    "tema": "Abrangência do Controle",
    "justificativa": "Atinge também pessoas **privadas** (físicas ou jurídicas) que utilizem recursos públicos (Art. 70, parágrafo único, CF)."
  },
  {
    "enunciado": "Considera-se controle externo o realizado pela controladoria-geral do estado.",
    "correta": "E",
    "tema": "Tipos de Controle",
    "justificativa": "A Controladoria-Geral (CGE/CGU) é órgão de **Controle Interno** do Poder Executivo."
  },
  {
    "enunciado": "O controle exercido pelo tribunal de contas é definitivo em razão da sua jurisdição.",
    "correta": "E",
    "tema": "Controle Jurisdicional",
    "justificativa": "As decisões do TC não têm definitividade jurisdicional (coisa julgada material); podem ser revistas pelo Judiciário."
  },
  {
    "enunciado": "As decisões do Tribunal de Contas da União no controle externo da administração pública que resultem em imputação de débito ou multa têm eficácia de título executivo.",
    "correta": "C",
    "tema": "Eficácia das Decisões do TCU",
    "justificativa": "Art. 71, § 3º, CF. Elas podem ser executadas judicialmente sem necessidade de novo processo de conhecimento."
  },
  {
    "enunciado": "O controle legislativo sobre os atos da administração pública federal é exercido pelo Congresso Nacional com o auxílio do Tribunal de Contas da União (TCU), competindo a este último fiscalizar as contas nacionais das empresas supranacionais de cujo capital social a União participe.",
    "correta": "C",
    "tema": "Competência do TCU",
    "justificativa": "Art. 71, V, CF. Ex: Itaipu Binacional."
  },
  {
    "enunciado": "O controle realizado pelos tribunais de contas é classificado quanto ao poder, órgão ou autoridade que o exerce como controle externo, podendo ser associado às funções judicial ou administrativa.",
    "correta": "E",
    "tema": "Natureza do Controle",
    "justificativa": "O TC é órgão de controle externo (auxiliar ao Legislativo) e exerce função **administrativa**. Não exerce função judicial."
  },
  {
    "enunciado": "Os dirigentes das agências reguladoras federais devem prestar contas ao TCU, a quem cabe realizar a apreciação técnica, remetendo, em seguida, as referidas contas ao Congresso Nacional para julgamento.",
    "correta": "E",
    "tema": "Julgamento de Contas",
    "justificativa": "O TCU **julga** as contas dos administradores de agências. Só remete ao Congresso as contas do Presidente da República (Contas de Governo)."
  },
  {
    "enunciado": "Em relação às concessões, permissões e autorizações de serviços públicos federais, o Tribunal de Contas da União (TCU) exerce dois tipos de controle: o acompanhamento da outorga e o da execução do contrato.",
    "correta": "C",
    "tema": "Fiscalização de Desestatização",
    "justificativa": "O TCU fiscaliza todas as fases: desde o edital (outorga) até o cumprimento do contrato."
  },
{
    "enunciado": "O objetivo principal da fiscalização operacional das agências reguladoras federais, realizada pelo TCU, é o controle da legalidade dos atos de gestão dessas entidades.",
    "correta": "E",
    "tema": "Auditoria Operacional",
    "justificativa": "A auditoria operacional (auditoria de desempenho) foca nos 4 Es: Eficiência, Eficácia, Economicidade e Efetividade. O controle estrito da legalidade é foco da auditoria de conformidade. **Analogia:** É como avaliar um jogador de futebol: a auditoria de conformidade verifica se ele segue as regras do jogo (não faz falta, não põe a mão na bola); a operacional verifica se ele faz gols e joga bem."
  },
  {
    "enunciado": "Os tribunais de contas podem realizar auditorias e inspeções nos órgãos públicos para verificar a legalidade e a economicidade da gestão dos recursos públicos.",
    "correta": "C",
    "tema": "Instrumentos de Fiscalização",
    "justificativa": "As auditorias e inspeções são os instrumentos primários de fiscalização *in loco* previstos na Constituição (Art. 71, IV) para verificar tanto a conformidade (legalidade) quanto o desempenho (economicidade)."
  },
  {
    "enunciado": "Uma das funções do controle parlamentar é acompanhar a execução orçamentária e financeira do governo.",
    "correta": "C",
    "tema": "Controle Parlamentar",
    "justificativa": "Ocorre através da Comissão Mista de Planos, Orçamentos Públicos e Fiscalização (CMO), que acompanha a execução do orçamento e a gestão fiscal."
  },
  {
    "enunciado": "O controle financeiro que o Poder Legislativo exerce contempla atos editados pelos Poderes Executivo e Judiciário no que se refere à receita, à despesa e à gestão dos recursos públicos.",
    "correta": "C",
    "tema": "Alcance do Controle Externo",
    "justificativa": "O Controle Externo é titularizado pelo Legislativo e alcança a função administrativa de todos os poderes (Executivo, Legislativo e Judiciário) quando estes gerem dinheiro público."
  },
  {
    "enunciado": "O controle dos atos normativos do Poder Executivo que exorbitarem do poder regulamentar é competência exclusiva do Poder Judiciário.",
    "correta": "E",
    "tema": "Controle Legislativo",
    "justificativa": "A Constituição (Art. 49, V) atribui ao **Congresso Nacional** a competência exclusiva para sustar os atos normativos do Executivo que exorbitem do poder regulamentar. O Judiciário também controla (via ADI), mas a competência de sustação política direta é do Legislativo."
  },
  {
    "enunciado": "A sustação, pelo Congresso Nacional, de atos normativos do Poder Executivo que exorbitem do seu poder regulamentar é instrumento idôneo do controle legislativo da administração pública.",
    "correta": "C",
    "tema": "Controle Legislativo",
    "justificativa": "Correto. É o mecanismo de freios e contrapesos (*checks and balances*) para impedir que o Executivo legisule via decreto."
  },
  {
    "enunciado": "A instalação de comissão parlamentar de inquérito (CPI) no âmbito do Congresso Nacional exige a aprovação da maioria absoluta dos membros de cada uma das casas (Câmara dos Deputados e Senado Federal), além da indicação de fato determinado e prazo certo de duração.",
    "correta": "E",
    "tema": "CPI",
    "justificativa": "A criação de CPI é direito das minorias parlamentares. Exige-se apenas a assinatura de **um terço** dos membros da casa (Art. 58, § 3º, CF), e não maioria absoluta. **Conceito:** Proteção da oposição."
  },
  {
    "enunciado": "Uma das prerrogativas do Congresso Nacional, no exercício do controle externo, é a possibilidade de sustar atos normativos do Poder Executivo que exorbitem do poder regulamentar ou dos limites de delegação legislativa.",
    "correta": "C",
    "tema": "Controle Legislativo",
    "justificativa": "Reitera a competência do Art. 49, V da CF."
  },
  {
    "enunciado": "Ao apreciar e votar o projeto de lei orçamentária anual da União, o Congresso Nacional exerce o controle concomitante da atividade financeira do Poder Executivo.",
    "correta": "E",
    "tema": "Momentos do Controle",
    "justificativa": "A votação da LOA (Lei Orçamentária Anual) ocorre antes do início do exercício financeiro. Trata-se de controle **prévio** (ou *a priori*), pois autoriza o gasto. O controle concomitante ocorre durante a execução. **Analogia:** Aprovou a lista de compras antes de ir ao mercado (prévio); checar o carrinho enquanto põe os produtos é concomitante."
  },
  {
    "enunciado": "O controle político tem caráter vinculante sobre o Poder Executivo, podendo obrigá-lo a adotar providências específicas sob pena de sanções legais.",
    "correta": "E",
    "tema": "Controle Político",
    "justificativa": "O controle político (convocações, pedidos de informação) visa fiscalizar e gerar responsabilidade política ( *accountability*), mas o Legislativo não tem poder hierárquico para dar ordens de gestão (faça a obra X) ao Executivo, sob pena de violação da separação dos poderes."
  },
  {
    "enunciado": "Consideram-se atos de improbidade administrativa as condutas dos agentes públicos eivadas de erros grosseiros.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Erro grosseiro pode gerar responsabilidade civil (Art. 28 LINDB), mas para configurar improbidade administrativa exige-se **dolo** (má-fé/intenção). A Lei 14.230/21 eliminou a improbidade culposa e por erro."
  },
  {
    "enunciado": "A prática de ato de improbidade administrativa, por ação ou omissão, requer a demonstração de culpa ou dolo por parte do agente público.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "A demonstração de **culpa** não é mais suficiente. Exige-se exclusivamente o **dolo**."
  },
  {
    "enunciado": "Aquele que, não sendo agente público, concorrer dolosamente para a prática de ato de improbidade não estará sujeito às disposições da Lei de Improbidade Administrativa e deverá responder por seus atos de acordo com a legislação penal comum.",
    "correta": "E",
    "tema": "Sujeito Ativo (Terceiro)",
    "justificativa": "O terceiro (particular) que induz ou concorre dolosamente para o ato responde sim pela Lei de Improbidade (Art. 3º LIA), além de responder penalmente se houver crime."
  },
  {
    "enunciado": "A transitoriedade do exercício de função no setor público afasta o enquadramento de quem a ocupa no conceito de agente público, para fins de aplicação da Lei de Improbidade.",
    "correta": "E",
    "tema": "Conceito de Agente Público",
    "justificativa": "O conceito de agente público é amplo (Art. 2º LIA): abrange quem exerce função, ainda que **transitoriamente** ou sem remuneração (ex: mesário eleitoral, jurado)."
  },
  {
    "enunciado": "A prática de ato com base em divergência interpretativa de lei pendente de pacificação nos tribunais é, por si só, insuficiente para a caracterização da improbidade.",
    "correta": "C",
    "tema": "Divergência Interpretativa",
    "justificativa": "Proteção à inovação e à segurança jurídica (Art. 1º, § 8º LIA). Se a lei é confusa e o gestor adota uma interpretação razoável (ainda que não a majoritária), não há dolo de improbidade."
  },
  {
    "enunciado": "Atos culposos são passíveis de enquadramento em alguma das hipóteses legais de ato de improbidade administrativa.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Atos culposos deixaram de ser puníveis como improbidade."
  },
  {
    "enunciado": "Aquele que concorrer dolosamente para a prática de ato de improbidade administrativa, mesmo sem ser servidor público, deverá responder pelo ato.",
    "correta": "C",
    "tema": "Sujeito Ativo (Terceiro)",
    "justificativa": "Correto. O particular responde se agir em concurso com o agente público e com dolo."
  },
  {
    "enunciado": "As disposições da Lei de Improbidade Administrativa são aplicáveis, no que couber, àquele que, mesmo não sendo agente público, induza ou concorra, culposa ou dolosamente, para a prática de ato de improbidade.",
    "correta": "E",
    "tema": "Elemento Subjetivo",
    "justificativa": "O erro está na palavra culposa. O terceiro só responde se agir com **dolo**."
  },
  {
    "enunciado": "Para aplicação de penalidade em virtude da prática de atos de improbidade administrativa, a Lei de Improbidade Administrativa exige que o sujeito ativo da conduta seja agente público.",
    "correta": "E",
    "tema": "Sujeito Ativo",
    "justificativa": "A questão afirma que a lei exige que o sujeito ativo *seja* agente público, o que poderia excluir o terceiro particular. Embora a presença de um agente público seja necessária para a configuração do ato (não há improbidade só entre particulares), o particular *também* pode ser sujeito ativo (réu) da ação."
  },
  {
    "enunciado": "Os princípios constitucionais do direito administrativo sancionador devem ser observados na aplicação de sanções em virtude da prática de atos de improbidade administrativa.",
    "correta": "C",
    "tema": "Direito Administrativo Sancionador",
    "justificativa": "A LIA aproxima-se do direito penal, exigindo garantias como presunção de inocência, legalidade estrita e devido processo legal."
  },
  {
    "enunciado": "O mero exercício de função pública, sem comprovação de ato doloso com fim ilícito, afasta a responsabilidade por ato de improbidade administrativa.",
    "correta": "C",
    "tema": "Responsabilidade Subjetiva",
    "justificativa": "Não há responsabilidade objetiva na improbidade. O cargo não gera presunção de culpa; é preciso provar a conduta dolosa."
  },
  {
    "enunciado": "O sucessor ou o herdeiro daquele que tenha causado dano ao erário está sujeito à obrigação de repará-lo integralmente.",
    "correta": "E",
    "tema": "Responsabilidade Sucessória",
    "justificativa": "A responsabilidade é limitada ao **valor do patrimônio transferido** (herança). O herdeiro não paga a dívida do falecido com seu próprio patrimônio."
  },
  {
    "enunciado": "Aquele que, mesmo não sendo agente público, induza ou concorra dolosamente para a prática de ato de improbidade administrativa submete-se, no que couber, às disposições legais sobre as sanções aplicáveis em decorrência de tais condutas.",
    "correta": "C",
    "tema": "Sujeito Ativo (Terceiro)",
    "justificativa": "Literalidade do Art. 3º da LIA."
  },
  {
    "enunciado": "Para fins de aplicação da Lei de Improbidade Administrativa, é considerado agente público todo aquele que exerce, ainda que transitoriamente ou sem remuneração, por nomeação, designação ou qualquer outra forma de investidura ou vínculo, função na administração pública.",
    "correta": "C",
    "tema": "Conceito de Agente Público",
    "justificativa": "Definição ampla do Art. 2º da LIA."
  },
  {
    "enunciado": "Os princípios constitucionais do direito administrativo sancionador se aplicam ao sistema de responsabilização pela prática de atos de improbidade administrativa.",
    "correta": "C",
    "tema": "Princípios Sancionadores",
    "justificativa": "A improbidade faz parte do microssistema de tutela sancionadora, aplicando-se princípios garantistas."
  },
{
    "enunciado": "A condição de servidor público é indispensável para a incidência das regras da Lei de Improbidade Administrativa.",
    "correta": "E",
    "tema": "Conceito de Agente Público",
    "justificativa": "Não é preciso ser 'servidor' (estatutário). Agentes políticos, empregados públicos, temporários e particulares em colaboração (mesários) também respondem."
  },
  {
    "enunciado": "O dolo exigido para a configuração de um ato de improbidade é caracterizado pela vontade livre e consciente do agente de alcançar o resultado ilícito tipificado na Lei de Improbidade Administrativa, não bastando a sua voluntariedade.",
    "correta": "C",
    "tema": "Elemento Subjetivo (Dolo)",
    "justificativa": "Definição de dolo específico (Art. 1º, § 2º LIA). Não basta agir voluntariamente (querer fazer a ação); é preciso querer o resultado ilícito."
  },
  {
    "enunciado": "A Lei de Improbidade Administrativa não é aplicável aos agentes políticos.",
    "correta": "E",
    "tema": "Sujeitos da LIA",
    "justificativa": "Aplica-se sim a prefeitos, governadores e ministros. A exceção (jurisprudência STF) é para o Presidente da República, que responde por crime de responsabilidade."
  },
  {
    "enunciado": "A vontade livre e consciente na prática de um ato que possa gerar prejuízo ao erário é suficiente para a caracterização de ato de improbidade administrativa.",
    "correta": "E",
    "tema": "Elemento Subjetivo (Dolo)",
    "justificativa": "Falta o elemento do 'fim ilícito'. A vontade de praticar o ato que *acabou* gerando prejuízo (ex: uma obra que falhou) não é improbidade se não houver a intenção ilícita."
  },
  {
    "enunciado": "Aquele que praticar ato de improbidade administrativa contra o patrimônio de entidade privada que recebe subvenção pública se sujeitará às sanções da Lei de Improbidade Administrativa.",
    "correta": "C",
    "tema": "Sujeito Passivo",
    "justificativa": "Entidades privadas que recebem dinheiro público (ONGs, hospitais filantrópicos) são sujeitos passivos da LIA no limite do recurso público repassado."
  },
  {
    "enunciado": "Aplicam-se também as sanções previstas na Lei de Improbidade Administrativa em casos de prática de ato de improbidade administrativa por pessoa jurídica sancionado como ato lesivo à administração pública no contexto da Lei Anticorrupção.",
    "correta": "E",
    "tema": "Bis in Idem",
    "justificativa": "A LIA (Art. 3º § 2º) veda a aplicação das sanções da LIA à pessoa jurídica se o ato já for punido pela Lei Anticorrupção (Lei 12.846), para evitar dupla punição (*bis in idem*), salvo quanto ao ressarcimento."
  },
  {
    "enunciado": "A voluntariedade do agente público não é condição suficiente para que se tenham caracterizadas as tipificações previstas na Lei de Improbidade Administrativa, quando verificados o prejuízo ao erário ou o enriquecimento ilícito.",
    "correta": "C",
    "tema": "Elemento Subjetivo",
    "justificativa": "Correto. Exige-se o dolo específico, além da mera voluntariedade da conduta."
  },
  {
    "enunciado": "Para fins de configuração de ato de improbidade administrativa, o dolo é caracterizado como a vontade livre e consciente de se alcançar resultado ilícito tipificado na Lei de Improbidade Administrativa.",
    "correta": "C",
    "tema": "Elemento Subjetivo",
    "justificativa": "Definição legal de dolo na nova LIA."
  },
  {
    "enunciado": "A responsabilidade do sucessor daquele que se enriqueceu ilicitamente está limitada à reparação do valor do patrimônio transferido.",
    "correta": "C",
    "tema": "Responsabilidade Sucessória",
    "justificativa": "Reitera a limitação constitucional e legal da responsabilidade dos herdeiros."
  },
  {
    "enunciado": "As regras da Lei de Improbidade Administrativa são inaplicáveis às condutas do agente político.",
    "correta": "E",
    "tema": "Sujeitos da LIA",
    "justificativa": "Agentes políticos (exceto Presidente) respondem por improbidade."
  },
  {
    "enunciado": "A ação negligente do agente público que resultar em lesão patrimonial ao erário é suficiente para a caracterização da improbidade administrativa.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Negligência é culpa. Improbidade exige dolo."
  },
  {
    "enunciado": "Todo aquele que exerce, por qualquer forma de vínculo, ainda que transitoriamente ou sem remuneração, função em órgão da administração pública pode ser sujeito ativo tanto de ato de improbidade administrativa quanto do crime de abuso de autoridade.",
    "correta": "C",
    "tema": "Conceito de Agente Público",
    "justificativa": "O conceito de agente público é similar e amplo em ambas as leis."
  },
  {
    "enunciado": "Havendo indícios de ato de improbidade, a autoridade que conhecer dos fatos deve representar diretamente ao Poder Judiciário.",
    "correta": "E",
    "tema": "Legitimidade",
    "justificativa": "A autoridade deve representar ao **Ministério Público** (que detém a legitimidade exclusiva para propor a ação) ou instaurar processo administrativo interno. A autoridade não propõe a ação judicial diretamente."
  },
  {
    "enunciado": "A voluntariedade do agente na prática de um ato de improbidade administrativa é condição insuficiente para caracterizar o dolo para fins de responsabilização nos termos da Lei de Improbidade Administrativa.",
    "correta": "C",
    "tema": "Elemento Subjetivo",
    "justificativa": "Dolo = Voluntariedade + Consciência da Ilicitude + Finalidade."
  },
  {
    "enunciado": "Desde a edição da Lei n.o 14.230/2021, só se admite a responsabilização por atos de improbidade administrativa praticados na modalidade dolosa.",
    "correta": "C",
    "tema": "Improbidade Administrativa",
    "justificativa": "Abolição da modalidade culposa."
  },
  {
    "enunciado": "O dolo é elemento necessário para a configuração de um ato de improbidade administrativa, logo, o mero exercício da função por um agente público, sem que haja a comprovação da prática de um ato doloso com um fim ilícito, afasta a responsabilidade do agente pela prática de determinado ato de improbidade administrativa.",
    "correta": "C",
    "tema": "Responsabilidade Subjetiva",
    "justificativa": "O cargo não presume culpa."
  },
  {
    "enunciado": "As disposições legais sobre as sanções cabíveis em virtude do cometimento de atos de improbidade administrativa são aplicáveis, no que couber, àquele que, mesmo não sendo agente público, induza ou concorra dolosamente para a prática da conduta.",
    "correta": "C",
    "tema": "Sujeito Ativo (Terceiro)",
    "justificativa": "Aplicação da LIA a terceiros."
  },
  {
    "enunciado": "O herdeiro daquele que tenha causado dano ao erário se sujeita somente à obrigação de repará-lo até o limite do valor da herança.",
    "correta": "C",
    "tema": "Responsabilidade Sucessória",
    "justificativa": "Correto. Limite da herança."
  },
  {
    "enunciado": "As disposições legais acerca da improbidade administrativa são inaplicáveis a particulares, ainda que estes induzam ou concorram para a prática de atos de improbidade, pois a lei se rege exclusivamente a atuação de agentes públicos.",
    "correta": "E",
    "tema": "Sujeito Ativo (Terceiro)",
    "justificativa": "A lei aplica-se expressamente a particulares que concorrem para o ato."
  },
  {
    "enunciado": "Se um gestor público deixar de aplicar penalidade a uma empresa contratada com base em jurisprudência recente, mas os órgãos de controle posteriormente discordaram, em face de interpretação jurisprudencial divergente, então, nesse caso, a ação do servidor não configura improbidade, pois decorreu de divergência interpretativa fundamentada em jurisprudência.",
    "correta": "C",
    "tema": "Divergência Interpretativa",
    "justificativa": "A divergência interpretativa afasta o dolo (Art. 1º, § 8º LIA)."
  },
  {
    "enunciado": "Especialista da ANM que praticar ato culposo que ocasione dano ao erário deverá ser sujeito passivo de ação de improbidade administrativa, que poderá ser proposta pelo Ministério Público Federal.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Ato **culposo** não é improbidade. O servidor pode responder por ressarcimento civil comum ou PAD, mas não LIA."
  },
  {
    "enunciado": "A ação por improbidade administrativa é preventiva e repressiva, de caráter sancionatório, sendo cabível seu ajuizamento para o controle de legalidade de políticas públicas e para a proteção do patrimônio público e social.",
    "correta": "E",
    "tema": "Natureza da Ação",
    "justificativa": "A ação de improbidade é repressiva/sancionatória de ilícitos, **não** servindo para controle de legalidade de políticas públicas (função da Ação Civil Pública comum) ou proteção abstrata do patrimônio sem imputação de ato ímprobo doloso. A lei veda o uso da LIA para controle de políticas públicas."
  },
  {
    "enunciado": "A celebração de acordo de não persecução civil pelo parquet é incompatível com o ordenamento jurídico brasileiro no que tange à responsabilização pela prática de atos de improbidade administrativa.",
    "correta": "E",
    "tema": "Acordo de Não Persecução Civil (ANPC)",
    "justificativa": "A Lei 14.230/21 introduziu expressamente a possibilidade de ANPC na improbidade (Art. 17-B). É compatível e estimulado."
  },
  {
    "enunciado": "A ordem de indisponibilidade de bens deve recair, prioritariamente, sobre as contas bancárias do acusado, por se tratar de bem de maior liquidez.",
    "correta": "E",
    "tema": "Indisponibilidade de Bens",
    "justificativa": "A lei estabelece que a indisponibilidade deve recair preferencialmente sobre bens de menor liquidez (imóveis, veículos) para não prejudicar a subsistência do réu (bloqueio de contas salário/poupança). A prioridade de contas bancárias (Bacenjud/Sisbajud) é regra processual civil geral, mas na LIA há proteções específicas."
  },
  {
    "enunciado": "A conduta de, com ciência da inocência do denunciado, representar contra determinado agente público por ato de improbidade administrativa é penalmente tipificada como crime, punível com detenção.",
    "correta": "C",
    "tema": "Denunciação Caluniosa",
    "justificativa": "Crime de representação injusta (Art. 19 LIA). Quem denuncia sabendo que o outro é inocente comete crime."
  },
{
    "enunciado": "Acerca do controle da administração pública e do controle externo no Brasil, a Constituição Federal de 1988 autoriza a criação de tribunais de contas municipais mediante alteração na lei orgânica do respectivo município.",
    "correta": "E",
    "tema": "Tribunais de Contas Municipais",
    "justificativa": "A CF/88 (Art. 31, § 4º) **vedou** a criação de novos Tribunais de Contas Municipais. Apenas os que já existiam em 1988 (Rio de Janeiro e São Paulo) puderam ser mantidos."
  },
  {
    "enunciado": "É constitucional norma estadual que atribui aos órgãos de controle interno o dever de atuar por determinação do tribunal de contas.",
    "correta": "E",
    "tema": "Controle Interno vs Externo",
    "justificativa": "Viola a autonomia e a separação dos poderes. O controle interno (do Executivo) não é subordinado hierarquicamente ao Tribunal de Contas (Legislativo/Externo), embora deva apoiar suas ações."
  },
  {
    "enunciado": "A Constituição Federal de 1988 prevê expressamente o cabimento de recurso ao Tribunal de Contas da União (TCU) contra decisões proferidas pelos tribunais de contas dos estados (TCEs).",
    "correta": "E",
    "tema": "Hierarquia dos TCs",
    "justificativa": "Não há hierarquia entre o TCU e os TCEs. O TCU não é instância recursal dos tribunais estaduais. Cada um tem sua jurisdição própria."
  },
  {
    "enunciado": "Quanto ao momento de sua realização, o controle da administração pública pode ser prévio, concomitante ou posterior.",
    "correta": "C",
    "tema": "Classificação do Controle",
    "justificativa": "Classificação clássica quanto ao momento (*tempus*)."
  },
  {
    "enunciado": "O controle interno da administração pública pode ser exercido por um órgão sobre os próprios atos ou pelo respectivo tribunal de contas, ficando o controle externo a cargo do Poder Judiciário.",
    "correta": "E",
    "tema": "Tipos de Controle",
    "justificativa": "Confusão de conceitos. O controle pelo Tribunal de Contas é **Externo**. O controle interno é exercido pelo próprio poder. O Judiciário exerce controle externo jurisdicional, mas a definição da questão está bagunçada."
  },
  {
    "enunciado": "Se Caio promover ação judicial de obrigação de fazer em face da autarquia federal com o objetivo de ser providenciada a resposta ao requerimento apresentado na esfera administrativa, essa medida, caso julgada procedente, resultará em controle administrativo.",
    "correta": "E",
    "tema": "Tipos de Controle",
    "justificativa": "Ação judicial resulta em **Controle Judicial** (Jurisdicional), não administrativo."
  },
  {
    "enunciado": "O controle administrativo restringe-se à conformação dos atos internos de cada Poder, sob a perspectiva exclusiva da conveniência para a administração.",
    "correta": "E",
    "tema": "Controle Administrativo",
    "justificativa": "O controle administrativo abrange tanto a **legalidade** (anulação) quanto a conveniência (revogação), e não é exclusivo de conveniência."
  },
  {
    "enunciado": "O controle classificado como de ofício, exercido pelo órgão controlador, quando este entender conveniente, é o controle que se aplica quanto ao tempo, podendo ser prévio, concomitante ou subsequente, conforme o momento em que o gestor decide agir.",
    "correta": "E",
    "tema": "Classificação do Controle",
    "justificativa": "Controle de ofício refere-se à **iniciativa** (quem começa), não ao tempo. A descrição mistura classificações."
  },
  {
    "enunciado": "O controle concomitante ocorre durante a execução de um ato ou processo administrativo, tendo como principal vantagem a possibilidade de correção de rumos antes da sua finalização, o que minimiza danos e irregularidades.",
    "correta": "C",
    "tema": "Controle Concomitante",
    "justificativa": "Correto. Permite agir enquanto a ação acontece (ex: fiscalizar a obra enquanto o muro está sendo levantado)."
  },
  {
    "enunciado": "O controle de mérito, também conhecido como controle de conveniência e oportunidade, é diretamente exercido tanto pelo controle interno quanto pelo controle externo, sendo-lhe pertinente a revisão de atos discricionários da administração pública.",
    "correta": "E",
    "tema": "Controle de Mérito",
    "justificativa": "O controle externo (TCU/Legislativo) **não** substitui o mérito administrativo do gestor (não decide onde construir a escola), salvo em análises de economicidade/legitimidade. A revogação por mérito puro é típica do controle interno (autotutela)."
  },
  {
    "enunciado": "O controle interno da administração pública é exercido por órgãos externos e independentes, como os tribunais de contas, com o objetivo de assegurar a probidade na gestão dos recursos públicos.",
    "correta": "E",
    "tema": "Controle Interno vs Externo",
    "justificativa": "Tribunais de Contas exercem Controle **Externo**. Controle Interno é exercido por órgãos de dentro da própria estrutura (Controladorias)."
  },
  {
    "enunciado": "O controle da administração pública, em sua essência, visa garantir a conformidade dos atos administrativos com os princípios da legalidade, moralidade, impessoalidade, publicidade e eficiência, para a proteção do interesse público e dos direitos dos cidadãos.",
    "correta": "C",
    "tema": "Finalidade do Controle",
    "justificativa": "Definição correta dos objetivos do controle (Art. 37 CF)."
  },
  {
    "enunciado": "O sistema de controle interno da União pode fiscalizar a utilização de verbas federais onde quer que elas estejam sendo aplicadas, ainda que esses recursos tenham sido destinados a outro ente federativo.",
    "correta": "C",
    "tema": "Competência Federal",
    "justificativa": "Onde há recurso federal (União), há competência dos órgãos de controle federal (CGU/TCU), mesmo que o dinheiro esteja na conta do estado/município (Súmula 208 STF)."
  },
  {
    "enunciado": "A apresentação da declaração de imposto de renda e proventos de qualquer natureza é exigida para a posse de agente público e para o seu exercício no cargo público.",
    "correta": "C",
    "tema": "Declaração de Bens",
    "justificativa": "Exigência da Lei 8.429/92 (Art. 13) para monitorar evolução patrimonial e evitar enriquecimento ilícito."
  },
  {
    "enunciado": "O servidor público somente poderá tomar posse em cargo efetivo se apresentar a declaração de imposto de renda e proventos de qualquer natureza enviada à Secretaria Especial da Receita Federal do Brasil, devendo atualizar essa declaração de bens anualmente e na data em que vir a deixar o exercício do cargo público.",
    "correta": "C",
    "tema": "Declaração de Bens",
    "justificativa": "Procedimento padrão de transparência patrimonial."
  },
  {
    "enunciado": "Se a condenação por improbidade houver apontado culpa gravíssima na responsabilidade subjetiva, o delegado de polícia continuará responsabilizado pelo ato de improbidade administrativa (considerando a Lei 14.230/21).",
    "correta": "E",
    "tema": "Retroatividade da Lei Benéfica",
    "justificativa": "A Lei 14.230/21 aboliu a modalidade culposa. Mesmo 'culpa gravíssima' não é dolo. Se não transitou em julgado, a lei nova (mais benéfica) retroage para absolver quem foi condenado por culpa (Tema 1199 STF)."
  },
  {
    "enunciado": "O delegado de polícia poderá ser beneficiado pela retroatividade da norma benéfica, prevista na Lei n.º 14.230/2021, uma vez que não houve o trânsito em julgado da decisão condenatória por ato culposo.",
    "correta": "C",
    "tema": "Retroatividade da Lei Benéfica",
    "justificativa": "Correto. Tema 1199 do STF: a lei retroage para casos não transitados em julgado."
  },
  {
    "enunciado": "Deverá ser aplicado ao processo o novo regime prescricional de 8 anos previsto na Lei n.º 14.230/2021, que deve ser observado imediatamente, conforme o princípio do tempus regit actum.",
    "correta": "E",
    "tema": "Prescrição e Retroatividade",
    "justificativa": "Segundo o Tema 1199 do STF, os novos prazos prescricionais **não** retroagem para ressuscitar prazos já iniciados ou consumados sob a lei antiga. Eles se aplicam daqui para frente (irretroatividade do novo regime prescricional), embora a atipicidade (fim da culpa) retroaja."
  },
  {
    "enunciado": "O novo regime prescricional da Lei de Improbidade Administrativa, incluída a novidade relativa à previsão intercorrente, retroage para alcançar os eventos ocorridos em momento anterior à publicação da lei que ensejou essas alterações naquele diploma legislativo.",
    "correta": "E",
    "tema": "Prescrição e Retroatividade",
    "justificativa": "O STF decidiu que o novo regime prescricional **não** é retroativo."
  },
  {
    "enunciado": "Aplicam-se disposições da Lei n.º 14.230/2021 aos processos em curso para regular o procedimento da tutela provisória de indisponibilidade de bens, de modo que as medidas já deferidas poderão ser reapreciadas para fins de adequação à atual redação da legislação.",
    "correta": "C",
    "tema": "Processo (Tempus Regit Actum)",
    "justificativa": "Normas de cunho processual (como tutela de bens) aplicam-se imediatamente aos processos em curso."
  },
  {
    "enunciado": "O exercício de função ou o desempenho de competências públicas não afasta a responsabilidade por ato de improbidade administrativa, ainda que não se comprove a prática de ato doloso com fim ilícito.",
    "correta": "E",
    "tema": "Improbidade Administrativa",
    "justificativa": "Sem comprovação de **dolo**, a responsabilidade é afastada."
  },
  {
    "enunciado": "Os sucessores e herdeiros daquele que causar dano ao erário ou que se enriquecer ilicitamente sujeitam-se à obrigação de reparar até o limite do valor da herança ou do patrimônio transferido.",
    "correta": "C",
    "tema": "Responsabilidade Sucessória",
    "justificativa": "Correto."
  },
  {
    "enunciado": "A vedação ao reexame necessário da sentença de improcedência ou de extinção do processo sem resolução do mérito não se aplicará aos processos em curso quando a sentença for anterior à vigência da Lei n.º 14.230/2021.",
    "correta": "C",
    "tema": "Reexame Necessário",
    "justificativa": "A nova lei acabou com o reexame necessário na improbidade. Segundo o STJ/STF, essa norma processual aplica-se imediatamente, mas respeita os atos já praticados (sentenças anteriores podem ter regras de transição, mas a regra geral é o fim do reexame)."
  },
  {
    "enunciado": "Atualmente, não mais se admite a presunção do periculum in mora para deferimento de pedido de indisponibilidade de bens, restando superada a jurisprudência do STJ sobre a matéria.",
    "correta": "C",
    "tema": "Indisponibilidade de Bens",
    "justificativa": "A Lei 14.230/21 exige a demonstração de perigo concreto de dilapidação do patrimônio (*periculum in mora* concreto), derrubando a jurisprudência antiga do STJ que presumia esse perigo."
  },
  {
    "enunciado": "No âmbito do controle judicial, não é possível aumentar vencimentos de servidores públicos com base no direito à igualdade, para fins de equiparação salarial.",
    "correta": "C",
    "tema": "Súmula Vinculante 37",
    "justificativa": "O Judiciário não tem função legislativa e não pode conceder aumentos sob pretexto de isonomia."
  },
 {
    "enunciado": "Os tribunais de contas têm competência privativa para propor ao Poder Legislativo normas referentes à própria organização e ao seu funcionamento, sendo vedado à casa legislativa formalizar emendas que sejam estranhas à proposta original ou que impliquem aumento de despesa.",
    "correta": "C",
    "tema": "Autonomia do TCU",
    "justificativa": "O TCU tem iniciativa de lei para sua organização. Emendas parlamentares não podem desfigurar o projeto ou aumentar despesas sem fonte (princípio da reserva de iniciativa)."
  },
  {
    "enunciado": "A pretensão punitiva do Tribunal de Contas da União prescreve em cinco anos, contudo essa prescrição será interrompida se os atos de investigação implicarem diretamente os responsáveis, que deverão ser cientificados de forma tempestiva.",
    "correta": "C",
    "tema": "Prescrição no TCU",
    "justificativa": "Regra da Lei 9.873/99 (aplicada pelo STF ao TCU). Prescrição de 5 anos, interrompida por atos inequívocos de apuração."
  },
  {
    "enunciado": "Verificada a existência de ilegalidade em contrato da administração pública, o Tribunal de Contas da União (TCU) fixará prazo para o órgão responsável adotar as providências necessárias ao cumprimento da lei e, se esse prazo não for cumprido, o TCU sustará a execução do contrato e comunicará sua decisão à Câmara dos Deputados e ao Senado Federal.",
    "correta": "E",
    "tema": "Sustação de Contratos",
    "justificativa": "O TCU **não** susta contratos diretamente. Ele solicita ao Congresso. Se o Congresso não agir em 90 dias, aí sim o TCU pode decidir (Art. 71 § 1º e § 2º)."
  },
  {
    "enunciado": "Consoante a Constituição Federal de 1988, apenas os chefes dos três poderes constitucionais prestam contas de governo.",
    "correta": "E",
    "tema": "Contas de Governo",
    "justificativa": "O Chefe do Poder Executivo (Presidente) presta contas de governo (políticas). Os demais administradores prestam contas de gestão. A afirmação 'apenas os chefes dos três poderes' está incorreta na sistemática usual."
  },
  {
    "enunciado": "Fiscalizar a aplicação de quaisquer recursos repassados pela União mediante convênio, acordo, ajuste ou outros instrumentos congêneres, a Estado, ao Distrito Federal ou a município é competência do TCU.",
    "correta": "C",
    "tema": "Competência do TCU",
    "justificativa": "Súmula 208 STF. Recurso federal atrai competência do TCU."
  },
  {
    "enunciado": "Realizar por iniciativa própria auditoria operacional nas unidades administrativas do Poder Judiciário é competência do TCU.",
    "correta": "C",
    "tema": "Competência do TCU",
    "justificativa": "O TCU fiscaliza todos os poderes (incluindo Judiciário) na função administrativa/financeira."
  },
  {
    "enunciado": "Julgar as contas prestadas anualmente pelo Presidente da República é competência do TCU.",
    "correta": "E",
    "tema": "Competência do TCU",
    "justificativa": "O TCU emite **Parecer Prévio**. Quem **julga** as contas do Presidente é o Congresso Nacional."
  },
  {
    "enunciado": "A atividade fiscalizatória realizada pelo Tribunal de Contas da União, no exercício da fiscalização contábil e financeira das entidades administrativas, não se confunde com aquela realizada pelo próprio órgão administrativo, uma vez que esta atribuição decorre do controle interno ínsito a cada Poder.",
    "correta": "C",
    "tema": "Controle Externo vs Interno",
    "justificativa": "Distinção correta entre o controle externo (TCU) e o controle interno (órgão administrativo)."
  },
  {
    "enunciado": "O descumprimento deliberado e desproporcional do prazo constitucional pelo tribunal de contas para emissão de parecer prévio representa violação ao princípio da separação dos Poderes.",
    "correta": "C",
    "tema": "Parecer Prévio",
    "justificativa": "A inércia do TC não pode travar o Legislativo. Se o TC não emite o parecer no prazo, o Legislativo pode julgar sem ele (jurisprudência STF)."
  },
  {
    "enunciado": "A função do tribunal de contas no julgamento das contas do chefe do Poder Executivo é meramente auxiliadora, não podendo sua inércia paralisar a competência do Poder Legislativo.",
    "correta": "C",
    "tema": "Natureza do Parecer",
    "justificativa": "O TC auxilia; o titular do julgamento é o Legislativo."
  },
  {
    "enunciado": "O parecer prévio do tribunal de contas constitui condição indispensável para que o Poder Legislativo possa exercer sua competência constitucional de julgar as contas do chefe do Poder Executivo.",
    "correta": "E",
    "tema": "Parecer Prévio",
    "justificativa": "Em regra é necessário, mas se o TC se omitir abusivamente, o Legislativo pode prosseguir para não ficar refém (vide item anterior)."
  },
  {
    "enunciado": "O controle interno de cada um dos Poderes (Legislativo, Executivo e Judiciário) tem, entre outras finalidades, a de apoiar o controle externo no exercício de sua missão institucional.",
    "correta": "C",
    "tema": "Finalidade do Controle Interno",
    "justificativa": "Art. 74, IV da CF."
  },
  {
    "enunciado": "Qualquer cidadão é parte legítima para, na forma da lei, denunciar irregularidades ou ilegalidades perante o Tribunal de Contas da União.",
    "correta": "C",
    "tema": "Denúncia",
    "justificativa": "Art. 74, § 2º da CF."
  },
  {
    "enunciado": "Lei estadual que preveja como atribuição do tribunal de contas do estado o exame prévio da validade de contratos administrativos celebrados pelo poder público é inconstitucional, independentemente do valor do contrato.",
    "correta": "C",
    "tema": "Ingerência Indevida",
    "justificativa": "O STF entende que o controle prévio de validade de contratos pelo TC viola a separação de poderes (administração ativa), salvo em editais/minutas de licitação."
  },
  {
    "enunciado": "É quinquenal o prazo para os tribunais de contas julgarem a legalidade de ato de concessão inicial de aposentaria, reforma ou pensão, iniciando-se a contagem do prazo a partir da chegada do processo à corte de contas competente.",
    "correta": "C",
    "tema": "Registro de Aposentadoria",
    "justificativa": "Tema 445 do STF. Após 5 anos da chegada, o registro torna-se tácito (ou exige contraditório, dependendo da tese, mas o prazo de 5 anos é o marco da segurança jurídica)."
  },
  {
    "enunciado": "Os fundos criados por medida provisória editada pelo Poder Executivo federal permanecem válidos e eficazes, pois os fundos são disciplinados na Lei n.º 4.320/1964, recepcionada pela CF como lei complementar, além de a medida provisória ter força de lei.",
    "correta": "C",
    "tema": "Fundos Públicos",
    "justificativa": "Interpretação sobre a validade dos fundos frente à exigência de LC."
  },
  {
    "enunciado": "Quanto à posição do órgão controlador em relação à estrutura do controlado, o controle pode ser interno e externo.",
    "correta": "C",
    "tema": "Classificação do Controle",
    "justificativa": "Classificação quanto à localização orgânica."
  },
  {
    "enunciado": "Cabe ao Poder Legislativo anular os atos administrativos ilegais e exercer poderes de hierarquia ou de tutela sobre as autoridades executivas.",
    "correta": "E",
    "tema": "Controle Legislativo",
    "justificativa": "O Legislativo não tem hierarquia sobre o Executivo (Separação de Poderes) nem anula atos administrativos (susta os normativos ou julga contas). Anulação é função da Administração (autotutela) ou do Judiciário."
  },
  {
    "enunciado": "A supervisão ministerial sobre as entidades descentralizadas é meio de controle administrativo.",
    "correta": "C",
    "tema": "Tutela Administrativa",
    "justificativa": "Também chamado de Controle Finalístico ou Tutela."
  },
  {
    "enunciado": "No sistema da jurisdição “una todas as causas”, mesmo as causas que envolvam interesse da administração pública são julgadas pelo Poder Judiciário.",
    "correta": "C",
    "tema": "Sistema Inglês",
    "justificativa": "Correto. Unidade de jurisdição."
  },
  {
    "enunciado": "O controle social constitui um modo de controle externo mediante o qual a sociedade civil organizada realiza a fiscalização da atividade estatal, em virtude do princípio da indisponibilidade do interesse público.",
    "correta": "C",
    "tema": "Controle Social",
    "justificativa": "Controle exercido diretamente pelo cidadão."
  },
  {
    "enunciado": "Os tribunais de contas são dotados de autonomia administrativa e financeira, sem qualquer relação de subordinação com os Poderes Executivo, Legislativo e Judiciário.",
    "correta": "C",
    "tema": "Autonomia do TC",
    "justificativa": "Embora auxiliem o Legislativo, não são subordinados a ele. Têm autonomia constitucional."
  },
  {
    "enunciado": "O presidente do TCU pode delegar algumas de suas atribuições administrativas, como, por exemplo, a assinatura de acordos de cooperação e a publicação do relatório de gestão fiscal exigido pela Lei de Responsabilidade Fiscal.",
    "correta": "E",
    "tema": "Competência Indelegável",
    "justificativa": "A publicação do RGF é responsabilidade primária do chefe do poder/órgão, geralmente indelegável em sua essência de responsabilidade fiscal (embora a assinatura possa ser delegada administrativamente em alguns contextos, a questão aponta como erro, sugerindo indelegabilidade de atos políticos de gestão fiscal)."
  },
  {
    "enunciado": "No caso de contas julgadas irregulares, a decisão definitiva publicada constituirá a obrigação do responsável de comprovar, no prazo de trinta dias, perante o TCU, o pagamento da quantia correspondente ao débito que lhe tiver sido imputado ou da multa cominada.",
    "correta": "E",
    "tema": "Prazo de Pagamento",
    "justificativa": "O prazo regimental para pagamento é de **15 dias**, não 30 (Art. 214 RITCU)."
  },
{
    "enunciado": "Cada câmara do TCU será composta por quatro ministros, indicados pelo presidente do tribunal, sendo possível a permuta ou remoção deles, a pedido dos próprios, para outra câmara, desde que haja a anuência do Plenário.",
    "correta": "C",
    "tema": "Câmaras do TCU",
    "justificativa": "Regra de composição das Câmaras (Art. 18 RITCU)."
  },
  {
    "enunciado": "No caso de omissão do Estado na prestação de contas ou de irregularidades na aplicação dos recursos públicos, cabe ao Poder Legislativo instaurar tomada de contas especial destinada a apurar os fatos, identificar os responsáveis e quantificar o dano.",
    "correta": "E",
    "tema": "Tomada de Contas Especial",
    "justificativa": "A instauração da TCE é dever da **autoridade administrativa** (gestor) competente, e não do Legislativo. O TC julga a TCE, mas quem instaura primariamente é a administração."
  },
  {
    "enunciado": "Todos os conselhos de fiscalização profissional devem prestar contas ao controle externo exercido pelo Tribunal de Contas da União.",
    "correta": "E",
    "tema": "Jurisdição TCU (Conselhos)",
    "justificativa": "A regra geral é que devem prestar contas (natureza autárquica), **exceto a OAB**, que o STF decidiu não estar sujeita ao controle do TCU."
  },
  {
    "enunciado": "Compete aos órgãos de controle interno do Poder Judiciário federal emitir relatório de auditoria das contas dos responsáveis sob seu controle e encaminhá-lo ao Tribunal de Contas da União, ao qual cabe a emissão do correspondente certificado de auditoria.",
    "correta": "E",
    "tema": "Certificado de Auditoria",
    "justificativa": "O **Certificado de Auditoria** é emitido pelo **Controle Interno**, não pelo TCU. O TCU faz o julgamento."
  },
  {
    "enunciado": "A auditoria é o instrumento destinado a subsidiar a apreciação dos atos sujeitos a registro, suprir omissões e lacunas de informações, esclarecer dúvidas e apurar denúncias ou representações.",
    "correta": "E",
    "tema": "Instrumentos de Fiscalização",
    "justificativa": "Essa é a definição de **Inspeção** (fiscalização pontual para suprir lacunas). Auditoria é mais abrangente e sistêmica."
  },
  {
    "enunciado": "Compete ao Plenário do TCU deliberar sobre o relatório de auditoria operacional, bem como sobre a prestação e tomada de contas especial.",
    "correta": "E",
    "tema": "Competência das Câmaras",
    "justificativa": "Tomadas de Contas Especiais (TCEs) são julgadas, em regra, pelas **Câmaras** (Primeira ou Segunda), e não pelo Plenário (salvo relevância)."
  },
  {
    "enunciado": "No uso de suas atribuições constitucionais, o Tribunal de Contas da União (TCU) tem competência para apreciar, para fins de registro, a legalidade dos atos de admissão de pessoal, a qualquer título, na administração pública indireta.",
    "correta": "C",
    "tema": "Atos de Admissão",
    "justificativa": "Competência do Art. 71, III da CF (exceto cargos de confiança)."
  },
  {
    "enunciado": "Os tribunais de contas, no exercício de sua função de controle da administração pública, podem apreciar a legitimidade, a legalidade e a economicidade dos atos administrativos, com foco na fiscalização das atividades financeiras do Estado.",
    "correta": "C",
    "tema": "Dimensões do Controle",
    "justificativa": "Correto. Legalidade, legitimidade e economicidade são os pilares do controle externo."
  },
  {
    "enunciado": "Embora a função jurisdicional seja atribuída ao Poder Judiciário, os tribunais de contas possuem competência constitucional para realizar o julgamento das contas de administradores e responsáveis por bens e dinheiros públicos; essa competência caracteriza-se como um julgamento técnico e administrativo.",
    "correta": "C",
    "tema": "Natureza do Julgamento",
    "justificativa": "O julgamento do TC é administrativo, não jurisdicional."
  },
  {
    "enunciado": "O(a) presidente(a) da Embrapa deve prestar contas anualmente ao Tribunal de Contas da União, órgão competente para julgá-las e que pode também, por iniciativa própria, realizar auditoria de natureza operacional sobre o funcionamento da empresa.",
    "correta": "C",
    "tema": "Jurisdição TCU (Estatais)",
    "justificativa": "Empresas públicas (Embrapa) prestam contas e sofrem auditorias do TCU."
  },
  {
    "enunciado": "A fiscalização do TCU abrange, além dos aspectos contábil, financeiro, orçamentário e patrimonial, a avaliação da legalidade, legitimidade, economicidade, eficiência e eficácia dos atos de gestão, podendo, inclusive, proceder à fiscalização de operações de natureza sigilosa.",
    "correta": "C",
    "tema": "Alcance do Controle",
    "justificativa": "O sigilo não é oponível ao TCU (salvo raríssimas exceções de segurança nacional extrema, mas a regra é o acesso amplo)."
  },
  {
    "enunciado": "A remessa das peças que compõem o processo de prestação de contas a ser julgado pelo TCU deve ser feita mediante o sistema e-Contas, acessível por meio da plataforma de serviços digitais e de acesso a processos Conecta-TCU.",
    "correta": "C",
    "tema": "Sistemas Informatizados",
    "justificativa": "Procedimento atual de envio de contas (e-Contas)."
  },
  {
    "enunciado": "O relatório de gestão da unidade prestadora de contas, na forma de relato integrado, deve abarcar o diagrama da cadeia de valor, evidenciando macroprocessos e valor público gerado por eles, e do modelo de negócio.",
    "correta": "C",
    "tema": "Relato Integrado",
    "justificativa": "Exigência moderna do TCU para prestação de contas (foco em valor público)."
  },
  {
    "enunciado": "A equipe de auditoria deve buscar identificar a causa do achado, para relatar a razão que ensejou a ocorrência da situação encontrada.",
    "correta": "C",
    "tema": "Matriz de Achados",
    "justificativa": "A **Causa** é elemento essencial do achado de auditoria (junto com Situação, Critério e Efeito)."
  },
  {
    "enunciado": "Por determinação constitucional, a máquina estatal está sujeita ao controle externo do Poder Legislativo, auxiliado pelo tribunal de contas, do Ministério Público, da sociedade e do Poder Judiciário.",
    "correta": "C",
    "tema": "Sistema de Controle",
    "justificativa": "Visão ampla do sistema de controle (Legislativo/TCU, Judicial, Social)."
  },
  {
    "enunciado": "O controle pode ser administrativo, legislativo ou judiciário, de acordo com o órgão que o exerça.",
    "correta": "C",
    "tema": "Classificação Orgânica",
    "justificativa": "Classificação correta quanto à origem."
  },
  {
    "enunciado": "O controle de legalidade, cuja finalidade é verificar a compatibilidade do ato com a legislação vigente, é competência exclusiva do Poder Judiciário.",
    "correta": "E",
    "tema": "Controle de Legalidade",
    "justificativa": "A Administração também exerce controle de legalidade (autotutela), assim como o Legislativo/TCU. Não é exclusivo do Judiciário."
  },
  {
    "enunciado": "A finalidade do controle é assegurar que a administração pública atue em consonância com os princípios que lhe são impostos pelo ordenamento jurídico, como os da legalidade, da moralidade, da finalidade pública, da publicidade, da motivação e da impessoalidade.",
    "correta": "C",
    "tema": "Finalidade do Controle",
    "justificativa": "Correto."
  },
  {
    "enunciado": "O controle interno se distingue do externo pelo fato de o primeiro ser um autocontrole, integrante da estrutura própria de cada um dos Poderes da República.",
    "correta": "C",
    "tema": "Controle Interno",
    "justificativa": "Definição correta."
  },
  {
    "enunciado": "O controle, um dos aspectos fundamentais da administração pública, alcança o Poder Judiciário, na forma disciplinada pelo legislador constitucional.",
    "correta": "C",
    "tema": "Alcance do Controle",
    "justificativa": "O Judiciário também é controlado (CNJ, controle interno, controle externo financeiro)."
  },
  {
    "enunciado": "O controle legislativo de atos da administração pública pode ter natureza de controle prévio.",
    "correta": "C",
    "tema": "Controle Prévio",
    "justificativa": "Ex: Aprovação de autoridades pelo Senado (sabatina) antes da nomeação."
  },
  {
    "enunciado": "A administração pública tem o poder-dever de controlar seus atos para assegurar, entre outros aspectos, a observância da legalidade, podendo, contudo, em situações excepcionais, renunciar ao exercício dessa prerrogativa.",
    "correta": "E",
    "tema": "Indisponibilidade",
    "justificativa": "O poder-dever de autotutela é irrenunciável. A administração não pode 'abrir mão' de controlar a legalidade."
  },
  {
    "enunciado": "Os fundamentos do controle interno governamental são de competência exclusiva do Poder Executivo.",
    "correta": "E",
    "tema": "Controle Interno",
    "justificativa": "Todos os poderes devem manter controle interno (Art. 74 CF)."
  },
  {
    "enunciado": "Os Poderes Executivo, Legislativo e Judiciário deverão instituir e manter sistemas de controle interno de forma separada com fito de aprimoramento e monitoramento da estrutura do Estado.",
    "correta": "E",
    "tema": "Sistema Integrado",
    "justificativa": "A Constituição manda manter sistemas de controle interno de forma **integrada** (Art. 74 caput), não 'separada' (embora tenham autonomia, o sistema deve dialogar)."
  },
  {
    "enunciado": "O processo de transição de governo deve observar os princípios da continuidade administrativa, exigindo-se a organização dos documentos necessários para a prestação de contas ao tribunal de contas estadual.",
    "correta": "C",
    "tema": "Transição de Governo",
    "justificativa": "Dever de transparência na transição."
  },
  {
    "enunciado": "O controle constitui poder-dever dos órgãos a que a lei atribui essa função, precisamente pela sua finalidade corretiva.",
    "correta": "C",
    "tema": "Poder-Dever",
    "justificativa": "Correto."
  },
  {
    "enunciado": "O Poder Judiciário deve manter controle administrativo interno, de forma integrada com os demais poderes, com o objetivo, entre outros, de comprovar a legalidade e avaliar os resultados, quanto à eficácia e à eficiência, da gestão orçamentária.",
    "correta": "C",
    "tema": "Controle Interno Judiciário",
    "justificativa": "Aplicação do Art. 74 CF ao Judiciário."
  },
  {
    "enunciado": "O recurso de Caio é ato administrativo que se caracteriza como controle judicial.",
    "correta": "E",
    "tema": "Recurso Administrativo",
    "justificativa": "Recurso ao ministério é **Controle Administrativo** (Recurso Hierárquico Impróprio), não judicial."
  },
  {
    "enunciado": "A revogação da modalidade culposa do ato de improbidade administrativa é irretroativa, não tendo incidência em relação à eficácia da coisa julgada, tampouco durante o processo de execução das penas e de seus incidentes.",
    "correta": "C",
    "tema": "Retroatividade LIA",
    "justificativa": "Tema 1199 STF: A nova lei retroage para casos não transitados em julgado, mas **não** atinge a coisa julgada (casos já encerrados)."
  },
  {
    "enunciado": "São elementos essenciais para a configuração do ato de improbidade administrativa: sujeito ativo, sujeito passivo, dolo, além de ato tipificado como ilícito do qual decorram dano ao erário, enriquecimento ilícito ou conduta que atente contra os princípios da administração.",
    "correta": "C",
    "tema": "Elementos da Improbidade",
    "justificativa": "Resumo correto dos requisitos da LIA."
  },
];