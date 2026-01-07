const questions = [
{
  enunciado: "O controle externo da Administração Pública é exercido pelo Poder Legislativo.",
  correta: "C",
  tema: "Controle Externo",
  justificativa: "A Constituição atribui ao Legislativo a função de fiscalizar, como um conselho que supervisiona a gestão."
},
{
  enunciado: "O controle externo é exercido exclusivamente pelos Tribunais de Contas.",
  correta: "E",
  tema: "Controle Externo",
  justificativa: "Os Tribunais de Contas auxiliam o Legislativo, que é o titular do controle."
},
{
  enunciado: "O controle externo tem fundamento na Constituição Federal.",
  correta: "C",
  tema: "Fundamento Constitucional",
  justificativa: "A CF define quem controla e como controla as contas públicas."
},
{
  enunciado: "O controle externo incide apenas sobre a legalidade dos atos administrativos.",
  correta: "E",
  tema: "Âmbito do Controle",
  justificativa: "Também alcança aspectos contábeis, financeiros, orçamentários, operacionais e patrimoniais."
},
{
  enunciado: "O controle externo visa assegurar a correta aplicação dos recursos públicos.",
  correta: "C",
  tema: "Finalidade do Controle",
  justificativa: "É conferir se o dinheiro público foi bem utilizado."
},
{
  enunciado: "O controle externo substitui a atuação administrativa do gestor.",
  correta: "E",
  tema: "Limites do Controle",
  justificativa: "Controlar não é administrar; são funções distintas."
},
{
  enunciado: "O controle externo pode avaliar a legitimidade dos atos administrativos.",
  correta: "C",
  tema: "Legitimidade",
  justificativa: "Não basta ser legal; deve atender ao interesse público."
},
{
  enunciado: "A economicidade pode ser objeto de controle externo.",
  correta: "C",
  tema: "Economicidade",
  justificativa: "É verificar se houve bom uso dos recursos, como comparar preço e benefício."
},
{
  enunciado: "O controle externo não alcança a Administração Indireta.",
  correta: "E",
  tema: "Abrangência",
  justificativa: "Alcança direta e indireta."
},
{
  enunciado: "O controle externo pode ser preventivo, concomitante ou posterior.",
  correta: "C",
  tema: "Momento do Controle",
  justificativa: "Pode ocorrer antes, durante ou após o ato."
},
{
  enunciado: "O controle preventivo busca corrigir atos já praticados.",
  correta: "E",
  tema: "Controle Preventivo",
  justificativa: "Ele atua antes do ato ocorrer."
},
{
  enunciado: "O controle concomitante ocorre durante a execução do ato.",
  correta: "C",
  tema: "Controle Concomitante",
  justificativa: "É acompanhar enquanto acontece."
},
{
  enunciado: "O controle posterior ocorre após a conclusão do ato.",
  correta: "C",
  tema: "Controle Posterior",
  justificativa: "É a fiscalização clássica após a execução."
},
{
  enunciado: "O controle externo possui natureza política e técnica.",
  correta: "C",
  tema: "Natureza do Controle",
  justificativa: "Política pelo Legislativo, técnica pelos Tribunais de Contas."
},
{
  enunciado: "O controle externo é incompatível com a autonomia administrativa.",
  correta: "E",
  tema: "Autonomia",
  justificativa: "Controle e autonomia coexistem."
},
{
  enunciado: "A fiscalização contábil é uma das modalidades do controle externo.",
  correta: "C",
  tema: "Modalidades",
  justificativa: "Analisa registros e demonstrações contábeis."
},
{
  enunciado: "A fiscalização operacional avalia resultados e desempenho.",
  correta: "C",
  tema: "Fiscalização Operacional",
  justificativa: "É medir se o programa público funcionou."
},
{
  enunciado: "A fiscalização patrimonial analisa apenas bens imóveis.",
  correta: "E",
  tema: "Fiscalização Patrimonial",
  justificativa: "Abrange todos os bens e valores."
},
{
  enunciado: "O controle externo contribui para a transparência pública.",
  correta: "C",
  tema: "Transparência",
  justificativa: "Quanto mais controle, mais visibilidade."
},
{
  enunciado: "O controle externo dispensa a atuação do controle interno.",
  correta: "E",
  tema: "Integração",
  justificativa: "Os controles são complementares."
},
{
  enunciado: "O controle externo pode gerar recomendações e determinações.",
  correta: "C",
  tema: "Resultados do Controle",
  justificativa: "Pode orientar e impor correções."
},
{
  enunciado: "O controle externo não pode impor sanções.",
  correta: "E",
  tema: "Sanções",
  justificativa: "Tribunais de Contas podem aplicar sanções."
},
{
  enunciado: "O controle externo fortalece a accountability.",
  correta: "C",
  tema: "Accountability",
  justificativa: "Exigir prestação de contas é essência do controle."
},
{
  enunciado: "A prestação de contas é dever de todo gestor público.",
  correta: "C",
  tema: "Prestação de Contas",
  justificativa: "Quem gere recursos públicos deve explicar seu uso."
},
{
  enunciado: "A ausência de dano ao erário afasta o controle externo.",
  correta: "E",
  tema: "Abrangência",
  justificativa: "Mesmo sem dano, o controle pode atuar."
},
{
  enunciado: "Os Tribunais de Contas auxiliam o Poder Legislativo no exercício do controle externo.",
  correta: "C",
  tema: "Tribunais de Contas",
  justificativa: "Funcionam como órgãos técnicos de apoio."
},
{
  enunciado: "Os Tribunais de Contas integram o Poder Judiciário.",
  correta: "E",
  tema: "Natureza Jurídica",
  justificativa: "Não integram nenhum Poder, mas auxiliam o Legislativo."
},
{
  enunciado: "O Tribunal de Contas da União possui competência prevista na Constituição.",
  correta: "C",
  tema: "TCU",
  justificativa: "A CF define expressamente suas atribuições."
},
{
  enunciado: "Os Tribunais de Contas exercem função jurisdicional.",
  correta: "E",
  tema: "Natureza da Atuação",
  justificativa: "Suas decisões não têm natureza jurisdicional."
},
{
  enunciado: "Compete aos Tribunais de Contas julgar as contas dos administradores públicos.",
  correta: "C",
  tema: "Julgamento de Contas",
  justificativa: "Avaliam regularidade da gestão."
},
{
  enunciado: "As decisões dos Tribunais de Contas são imunes ao controle judicial.",
  correta: "E",
  tema: "Controle Judicial",
  justificativa: "Podem ser revistas pelo Judiciário quanto à legalidade."
},
{
  enunciado: "O parecer prévio sobre as contas do chefe do Executivo é função do Tribunal de Contas.",
  correta: "C",
  tema: "Parecer Prévio",
  justificativa: "É uma análise técnica para subsidiar o Legislativo."
},
{
  enunciado: "O parecer prévio vincula o julgamento político das contas.",
  correta: "E",
  tema: "Parecer Prévio",
  justificativa: "O Legislativo pode divergir."
},
{
  enunciado: "Os Tribunais de Contas podem aplicar multas aos responsáveis.",
  correta: "C",
  tema: "Sanções",
  justificativa: "Multas são sanções típicas."
},
{
  enunciado: "Os Tribunais de Contas podem sustar atos administrativos ilegais.",
  correta: "C",
  tema: "Sustação",
  justificativa: "Podem determinar sustação nos limites constitucionais."
},
{
  enunciado: "A sustação de contratos é competência exclusiva do Tribunal de Contas.",
  correta: "E",
  tema: "Sustação",
  justificativa: "Depende do Legislativo."
},
{
  enunciado: "Os Tribunais de Contas podem realizar auditorias.",
  correta: "C",
  tema: "Auditorias",
  justificativa: "Auditorias são instrumentos essenciais."
},
{
  enunciado: "Auditorias avaliam apenas a legalidade dos atos.",
  correta: "E",
  tema: "Auditorias",
  justificativa: "Também avaliam desempenho e resultados."
},
{
  enunciado: "Os Tribunais de Contas têm competência para fiscalizar licitações.",
  correta: "C",
  tema: "Licitações",
  justificativa: "Fiscalizam legalidade e economicidade."
},
{
  enunciado: "A atuação do Tribunal de Contas substitui a do gestor.",
  correta: "E",
  tema: "Limites",
  justificativa: "O Tribunal não administra."
},
{
  enunciado: "O controle exercido pelos Tribunais de Contas é técnico.",
  correta: "C",
  tema: "Natureza Técnica",
  justificativa: "Baseia-se em critérios objetivos."
},
{
  enunciado: "Os Tribunais de Contas não fiscalizam recursos transferidos.",
  correta: "E",
  tema: "Transferências",
  justificativa: "Fiscalizam recursos federais transferidos."
},
{
  enunciado: "As decisões dos Tribunais de Contas podem impor débito.",
  correta: "C",
  tema: "Imputação de Débito",
  justificativa: "Exigem ressarcimento ao erário."
},
{
  enunciado: "O Tribunal de Contas pode determinar correções administrativas.",
  correta: "C",
  tema: "Determinações",
  justificativa: "Impõe ajustes para correção de irregularidades."
},
{
  enunciado: "Os Tribunais de Contas atuam apenas mediante provocação.",
  correta: "E",
  tema: "Atuação",
  justificativa: "Podem agir de ofício."
},
{
  enunciado: "O controle do Tribunal de Contas alcança particulares que gerem recursos públicos.",
  correta: "C",
  tema: "Abrangência",
  justificativa: "Quem lida com recursos públicos se submete ao controle."
},
{
  enunciado: "A fiscalização do Tribunal de Contas é meramente opinativa.",
  correta: "E",
  tema: "Natureza",
  justificativa: "Possui efeitos concretos."
},
{
  enunciado: "O Tribunal de Contas pode expedir recomendações.",
  correta: "C",
  tema: "Recomendações",
  justificativa: "Orienta boas práticas."
},
{
  enunciado: "Recomendações têm caráter obrigatório.",
  correta: "E",
  tema: "Recomendações",
  justificativa: "Não têm força coercitiva."
},
{
  enunciado: "O Tribunal de Contas contribui para a melhoria da gestão pública.",
  correta: "C",
  tema: "Finalidade",
  justificativa: "Controle também é aperfeiçoamento."
},
{
  enunciado: "A fiscalização contábil analisa registros e demonstrações financeiras.",
  correta: "C",
  tema: "Fiscalização Contábil",
  justificativa: "É conferir se os números fecham."
},
{
  enunciado: "A fiscalização financeira avalia arrecadação e gastos públicos.",
  correta: "C",
  tema: "Fiscalização Financeira",
  justificativa: "Verifica entradas e saídas de recursos."
},
{
  enunciado: "A fiscalização orçamentária verifica cumprimento do orçamento.",
  correta: "C",
  tema: "Fiscalização Orçamentária",
  justificativa: "Confere se o planejado foi executado."
},
{
  enunciado: "A fiscalização operacional analisa eficiência e eficácia.",
  correta: "C",
  tema: "Fiscalização Operacional",
  justificativa: "Avalia resultados alcançados."
},
{
  enunciado: "A fiscalização patrimonial verifica bens e valores públicos.",
  correta: "C",
  tema: "Fiscalização Patrimonial",
  justificativa: "Cuida do patrimônio público."
},
{
  enunciado: "A prestação de contas é obrigatória aos responsáveis por recursos públicos.",
  correta: "C",
  tema: "Prestação de Contas",
  justificativa: "É dever de transparência."
},
{
  enunciado: "A tomada de contas especial ocorre diante de irregularidades.",
  correta: "C",
  tema: "Tomada de Contas",
  justificativa: "É acionada quando há problema."
},
{
  enunciado: "A tomada de contas especial depende sempre de decisão judicial.",
  correta: "E",
  tema: "Tomada de Contas",
  justificativa: "É procedimento administrativo."
},
{
  enunciado: "Atos de admissão de pessoal estão sujeitos a registro no Tribunal de Contas.",
  correta: "C",
  tema: "Atos de Pessoal",
  justificativa: "Exige controle prévio."
},
{
  enunciado: "Aposentadorias estão sujeitas a registro pelo Tribunal de Contas.",
  correta: "C",
  tema: "Aposentadorias",
  justificativa: "Registro é condição de eficácia."
},
{
  enunciado: "O Tribunal de Contas analisa mérito administrativo.",
  correta: "E",
  tema: "Limites",
  justificativa: "Analisa legalidade e legitimidade."
},
{
  enunciado: "Convênios estão sujeitos à fiscalização do Tribunal de Contas.",
  correta: "C",
  tema: "Convênios",
  justificativa: "Envolvem recursos públicos."
},
{
  enunciado: "Contratos administrativos podem ser fiscalizados pelo controle externo.",
  correta: "C",
  tema: "Contratos",
  justificativa: "Para verificar legalidade e economicidade."
},
{
  enunciado: "A ausência de prestação de contas pode gerar sanções.",
  correta: "C",
  tema: "Sanções",
  justificativa: "Omissão é irregularidade."
},
{
  enunciado: "O controle externo alcança atos normativos.",
  correta: "C",
  tema: "Atos Normativos",
  justificativa: "Podem gerar impacto financeiro."
},
{
  enunciado: "O controle externo não alcança entidades privadas.",
  correta: "E",
  tema: "Abrangência",
  justificativa: "Alcança privadas que gerem recursos públicos."
},
{
  enunciado: "O Tribunal de Contas pode requisitar informações.",
  correta: "C",
  tema: "Poderes de Fiscalização",
  justificativa: "Informação é base do controle."
},
{
  enunciado: "A recusa em prestar informações é infração.",
  correta: "C",
  tema: "Infrações",
  justificativa: "Obstruir controle é irregular."
},
{
  enunciado: "O controle externo pode avaliar políticas públicas.",
  correta: "C",
  tema: "Políticas Públicas",
  justificativa: "Avalia impacto e resultados."
},
{
  enunciado: "A fiscalização externa é limitada ao aspecto formal.",
  correta: "E",
  tema: "Âmbito",
  justificativa: "Vai além da forma."
},
{
  enunciado: "O Tribunal de Contas pode fixar prazo para correções.",
  correta: "C",
  tema: "Determinações",
  justificativa: "Define tempo para ajuste."
},
{
  enunciado: "A regularidade das contas afasta qualquer controle futuro.",
  correta: "E",
  tema: "Controle",
  justificativa: "Novos fatos podem ser controlados."
},
{
  enunciado: "A fiscalização pode ser realizada de ofício.",
  correta: "C",
  tema: "Iniciativa",
  justificativa: "Não depende de provocação."
},
{
  enunciado: "O controle externo é instrumento de prevenção de irregularidades.",
  correta: "C",
  tema: "Prevenção",
  justificativa: "Evita erros futuros."
},
{
  enunciado: "A fiscalização externa compromete a gestão pública.",
  correta: "E",
  tema: "Gestão",
  justificativa: "Aperfeiçoa a gestão."
},
{
  enunciado: "Os Tribunais de Contas podem aplicar sanções aos responsáveis.",
  correta: "C",
  tema: "Sanções",
  justificativa: "Multas e débitos são exemplos."
},
{
  enunciado: "A aplicação de sanções depende de condenação judicial.",
  correta: "E",
  tema: "Sanções",
  justificativa: "Sanções administrativas independem do Judiciário."
},
{
  enunciado: "A sustação de atos pode ser determinada pelo Tribunal de Contas.",
  correta: "C",
  tema: "Sustação",
  justificativa: "Nos limites constitucionais."
},
{
  enunciado: "A sustação de contratos é competência do Poder Executivo.",
  correta: "E",
  tema: "Sustação",
  justificativa: "Cabe ao Legislativo."
},
{
  enunciado: "O controle social permite participação do cidadão.",
  correta: "C",
  tema: "Controle Social",
  justificativa: "Cidadão como fiscal."
},
{
  enunciado: "Denúncias podem ser apresentadas aos Tribunais de Contas.",
  correta: "C",
  tema: "Denúncias",
  justificativa: "Instrumento de controle social."
},
{
  enunciado: "O controle social é incompatível com o controle externo.",
  correta: "E",
  tema: "Integração",
  justificativa: "São complementares."
},
{
  enunciado: "O controle interno deve apoiar o controle externo.",
  correta: "C",
  tema: "Controle Interno",
  justificativa: "Trabalham em conjunto."
},
{
  enunciado: "A ausência de controle interno fragiliza o controle externo.",
  correta: "C",
  tema: "Integração",
  justificativa: "Um reforça o outro."
},
{
  enunciado: "O Tribunal de Contas pode comunicar irregularidades ao Ministério Público.",
  correta: "C",
  tema: "Comunicação",
  justificativa: "Para responsabilização."
},
{
  enunciado: "O Ministério Público integra os Tribunais de Contas.",
  correta: "E",
  tema: "MP",
  justificativa: "Atua junto, mas não integra."
},
{
  enunciado: "O controle externo contribui para prevenção da corrupção.",
  correta: "C",
  tema: "Prevenção",
  justificativa: "Fiscalizar reduz desvios."
},
{
  enunciado: "A transparência reduz a efetividade do controle externo.",
  correta: "E",
  tema: "Transparência",
  justificativa: "Aumenta a efetividade."
},
{
  enunciado: "O controle externo reforça a confiança social nas instituições.",
  correta: "C",
  tema: "Confiança",
  justificativa: "Fiscalização gera credibilidade."
},
{
  enunciado: "O controle externo é instrumento essencial do Estado Democrático de Direito.",
  correta: "C",
  tema: "Estado Democrático",
  justificativa: "Garante responsabilidade e legalidade."
},

];