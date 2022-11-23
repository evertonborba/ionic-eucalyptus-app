import { Injectable } from '@angular/core'

import { Item } from '../../models/item'

@Injectable()
export class Items {
  items: Item[] = []

  defaultItem: any = {
    name:
      'Avaliação dos Aspectos Ambientais do Cultivo do Eucalipto, Relato de Caso em Goioerê-Paraná: uma Perspectiva para a Educação Ambiental',
    profilePic: 'assets/img/wiki/Eucalyptus_sp.jpg',
    author: 'De Vechi, Anderson; Júnior, Carlos Alberto De Oliveira Magalhães',
    note:
      'O eucalipto, planta exótica originária da Austrália, chegou ao Brasil e se adaptou ao clima e ao solo, circunstâncias que auxiliaram seu pleno desenvolvimento...',
    abstract:
      'O eucalipto, planta exótica originária da Austrália, chegou ao Brasil e se adaptou ao clima e ao solo, circunstâncias que auxiliaram seu pleno desenvolvimento. Como consequência, o eucalipto se alastrou em vários estados brasileiros, sua madeira passou a ser industrializada, o que lhe agregou valor econômico. O presente artigo aborda indagações relativas sobre o eucalipto e a educação ambiental critica quanto a cultura dessa espécie, explorando os aspectos da sua utilização e os questionamentos ambientais em relação aos recursos naturais do ecossistema.Na abordagem metodológica investigou-se, por meio de visitas in loco, cinco propriedades de Goioerê, PR, especialmente em um bairro cujo nome fictício é “São Miguel”, visando conhecer como o manejo do eucalipto ocorre nessa região paranaense. Elaborou-se um almanaque digital com o software Scratch e um jogo digital por meio do software motor gráfico Unity, nos quais constam aspectos do eucalipto e da educação ambiental.O jogo digital expõe, práticas direcionadas para a educação ambiental e temas acerca dessa espécime exótica, denotando a percepção e importância das árvores nativas bem como o processo de preservação e conservação, fortalecendo a concepção a respeito do município de Goioerê e o seu ecossistema. Após os resultados advindos com a produção do jogo e almanaque, e estes foram disponibilizados aos professores de Ciências e Biologia para serem utilizados em suas práticas pedagógicas, e para os produtores rurais como informativo. Esperou-se que os saberes ali dispostos transmitam uma percepção crítica relativa à produção do eucalipto, integrando os conceitos relacionados a essa espécie de planta no âmbito das Ciências Ambientais.',
    creativeCommons:
      'https://commons.wikimedia.org/wiki/File:Eucalyptus_sp.jpg',
  }

  constructor() {
    let items = [
      {
        name:
          'Avaliação dos Aspectos Ambientais do Cultivo do Eucalipto, Relato de Caso em Goioerê-Paraná: uma Perspectiva para a Educação Ambiental',
        profilePic: 'assets/img/wiki/Eucalyptus_sp.jpg',
        author:
          'De Vechi, Anderson; Júnior, Carlos Alberto De Oliveira Magalhães',
        note:
          'O eucalipto, planta exótica originária da Austrália, chegou ao Brasil e se adaptou ao clima e ao solo, circunstâncias que auxiliaram seu pleno desenvolvimento...',
        abstract:
          'O eucalipto, planta exótica originária da Austrália, chegou ao Brasil e se adaptou ao clima e ao solo, circunstâncias que auxiliaram seu pleno desenvolvimento. Como consequência, o eucalipto se alastrou em vários estados brasileiros, sua madeira passou a ser industrializada, o que lhe agregou valor econômico. O presente artigo aborda indagações relativas sobre o eucalipto e a educação ambiental critica quanto a cultura dessa espécie, explorando os aspectos da sua utilização e os questionamentos ambientais em relação aos recursos naturais do ecossistema.Na abordagem metodológica investigou-se, por meio de visitas in loco, cinco propriedades de Goioerê, PR, especialmente em um bairro cujo nome fictício é “São Miguel”, visando conhecer como o manejo do eucalipto ocorre nessa região paranaense. Elaborou-se um almanaque digital com o software Scratch e um jogo digital por meio do software motor gráfico Unity, nos quais constam aspectos do eucalipto e da educação ambiental.O jogo digital expõe, práticas direcionadas para a educação ambiental e temas acerca dessa espécime exótica, denotando a percepção e importância das árvores nativas bem como o processo de preservação e conservação, fortalecendo a concepção a respeito do município de Goioerê e o seu ecossistema. Após os resultados advindos com a produção do jogo e almanaque, e estes foram disponibilizados aos professores de Ciências e Biologia para serem utilizados em suas práticas pedagógicas, e para os produtores rurais como informativo. Esperou-se que os saberes ali dispostos transmitam uma percepção crítica relativa à produção do eucalipto, integrando os conceitos relacionados a essa espécie de planta no âmbito das Ciências Ambientais.',
        creativeCommons:
          'https://commons.wikimedia.org/wiki/File:Eucalyptus_sp.jpg',
      },
      {
        name:
          'A eucaliptização da capital catarinense da agroecologia: uma análise da expansão dos monocultivos de eucaliptos em Santa Rosa de Lima no sul do Brasil',
        profilePic:
          'assets/img/wiki/Reflorestamento_eucalipto_Espírito_Santo_Fábio_Pozzebom24mar2007.jpg',
        author: 'Andrade, Natália Gonçalves',
        note:
          'A manutenção da biodiversidade, das funções e dos serviços dos ecossistemas é fator fundamental para resiliência dos biomas globais, e consequentemente para viabilidade e qualidade de vida no planeta...',
        abstract:
          'A manutenção da biodiversidade, das funções e dos serviços dos ecossistemas é fator fundamental para resiliência dos biomas globais, e consequentemente para viabilidade e qualidade de vida no planeta. No entanto, perdas significativas de florestas naturais pelos monocultivos agrícolas têm comprometido esta resiliência, e a provisão dos serviços ecossistêmicos relacionados. A avaliação do uso e cobertura da terra pode monitorar e auxiliar na gestão sustentável dos biomas, e na manutenção das condições de vida nos ecossistemas. Considerada a capital catarinense da agroecologia, o município de Santa Rosa de Lima aparentemente vem presenciando um crescente aumento das áreas ocupadas por plantações de eucalipto, mesmo no contexto da agricultura familiar. Esta nova paisagem das Encostas da Serra Catarinense traz uma série de questionamentos que bradam por avaliações focais. Este estudo avaliou a dinâmica dos monocultivos de eucalipto entre 2000 e 2017 no município de Santa Rosa de Lima, Santa Catarina. Para tanto, foi feita análise das mudanças do uso e ocupação do solo no município através de mapas da Plataforma Mapbiomas em 2000, 2008 e 2017. A parametrização dos algoritmos e a organização das etapas de processamento foi realizada com as 556 cartas de 1 x 1,50 (lat./long.) do IBGE. Os mapas extraídos da plataforma Mapbiomas dos referidos anos foram convertidos para o formato Shapfile no programa QGis 3.4.14, no qual as áreas de uso e cobertura do solo foram extraídas e calculadas em hectares. As classes de uso e cobertura do solo avaliadas foram: culturas anuais e perenes; pastagem; formação florestal (floresta nativa), floresta plantada (monocultura arbórea), mosaico de agricultura e infraestrutura urbana. Conforme os resultados houve franco aumento da área ocupada pelos monocultivos de eucalipto, paralelo a uma marcada diminuição dos remanescentes florestais, e também redução das áreas ocupadas por pastagem e mosaicos agrícolas. A mudança na paisagem rural pelo monocultivo arbóreo tem impactado o ecossistema local com prováveis perdas de biodiversidade e dos serviços ecossistêmicos de provisão, regulação, suportee culturais, inclusive aqueles serviços essenciais para a produção agrícola e a qualidade de vida na região. A eucaliptização1 do município pode comprometer o turismo rural, a produção agroecológica e convencional, e a resiliência dos agroecossistemas e ecossistemas relacionados. O status de Capital Catarinense da Agroecologia pode ser ameaçado pela franca expansão dos monocultivos arbóreos, inclusive nas áreas riparias mais íngremes da paisagem das Encostas da Serra Catarinense.',
        creativeCommons:
          'https://commons.wikimedia.org/wiki/File:Reflorestamento_eucalipto_Esp%C3%ADrito_Santo_(F%C3%A1bio_Pozzebom)24mar2007.jpg',
      },
      {
        name:
          'Os Impactos Socioeconômicos Do Cultivo De Eucalipto: O Caso Do Município De Aratiba-RS',
        profilePic: 'assets/img/wiki/Eucalipto_Vermelho.jpg',
        author: 'Marques Da Silva, J. O.; Marin, M. Z.',
        note:
          'O processo de desenvolvimento de monocultivos arbóreos, entre eles o eucalipto, acelerou-se no Brasil, mais especificamente a partir da década de 1960...',
        abstract:
          'O processo de desenvolvimento de monocultivos arbóreos, entre eles o eucalipto, acelerou-se no Brasil, mais especificamente a partir da década de 1960. Tinha-se o objetivo de suprir a necessidade de madeira para diversos fins. No município de Aratiba-RS não foi diferente, pois houve um significativo aumento no cultivo nos últimos anos, sobretudo devido ao estímulo da Prefeitura Municipal e da Cooperativa Tritícola Erechim Ltda (COTREL). Esta pesquisa teve por finalidade analisar os impactos sociais e econômicos do cultivo de eucalipto em unidades de produção familiar em Aratiba-RS, através de revisão da literatura e entrevistas realizadas por meio de pesquisa de campo. A pesquisa buscou avaliar os impactos junto a três grupos de agricultores familiares: unidades de produção familiar contendo até 25 hectares; entre 25 e 50 hectares; e com mais de 50 hectares. Trinta e quatro por cento (34%) das unidades de produção do município cultivam eucalipto, em um total de 1.500 hectares. Considerou-se que o cultivo de eucalipto é uma importante alternativa de renda e emprego aos sujeitos envolvidos na cadeia produtiva. Entretanto, percebeu-se a substituição por eucalipto de algumas culturas agrícolas, como o milho. Observaram-se, também, alguns conflitos de vizinhança entre agricultores que cultivam e outros que não cultivam o eucalipto. Foi possível, ainda, constatar que o cultivo de eucalipto já é utilizado como uma alternativa de produção comercial, servindo como fonte de renda e acúmulo de capital de empresários urbanos, sobretudo madeireiros e profissionais autônomos. Entende-se que a diversidade na produção familiar deva ser mantida e não ser resumida a monocultivos arbóreos, a exemplo do eucalipto.',
        creativeCommons:
          'https://commons.wikimedia.org/wiki/File:Eucalipto_Vermelho.jpg',
      },
      {
        name:
          'Mapeamento Das Áreas Plantadas Com Eucalyptus spp. No Estado Do Paraná',
        profilePic: 'assets/img/wiki/Plantio_de_eucalipto.jpg',
        author:
          'Coutinho, V. M., Dalla Corte, A. P., Sanquetta, C. R., Hentz, Â. M. K., Eisfeld, R. L., & Do Nascimento, F. A. F.',
        note:
          'O objetivo deste trabalho foi mapear e quantificar as áreas com plantações de Eucalyptus spp. no estado do Paraná. Para tal, fo­ram utilizados dados de áreas geoespacializadas de povoamentos florestais com classificação visual de imagens de satélite e validados com base em 988 pontos observados em campo...',
        abstract:
          'O objetivo deste trabalho foi mapear e quantificar as áreas com plantações de Eucalyptus spp. no estado do Paraná. Para tal, fo­ram utilizados dados de áreas geoespacializadas de povoamentos florestais com classificação visual de imagens de satélite e validados com base em 988 pontos observados em campo. A área total plantada com Eucalyptus no estado totalizou 340.315 ha, o que representa 1,71% da superfície do estado. A região Centro-Sul possui 61,91% do total plantado com Eucalyptus no estado, a qual concentra a maior parte do parque industrial flo­restal. Vinte e cinco municípios do estado possuem mais da meta­de da área plantada com Eucalyptus, esses municípios encontram-se na região Centro-Sul, com destaque para o núcleo de Ponta Grossa, com mais de 42,27% da área plantada no estado, segui­do pelos núcleos de Curitiba, Guarapuava, União da Vitória, Irati, Laranjeiras do Sul e Pato Branco. O Paraná é o estado com a quin­ta maior área plantada com Eucalyptus, em que o município de Telêmaco Borba, núcleo regional de Ponta Grossa, possui a maior área plantada no estado, com cerca de 45 mil hectares.',
        creativeCommons:
          'https://commons.wikimedia.org/wiki/File:Plantio_de_eucalipto.jpg',
      },
      {
        name:
          'Aspectos positivos e negativos da cultura do eucalipto e os efeitos ambientais do seu cultivo',
        profilePic: 'assets/img/wiki/JBRJ_Eucalipto-comum.jpg',
        author: 'De Vechi, A., & Júnior, C. A. D. O. M.',
        note:
          'O eucalipto, planta originária da Austrália, chegou ao Brasil, adaptou-se as condições climáticas e o solo, fatores estes altamente favoráveis para o seu desenvolvimento...',
        abstract:
          'O eucalipto, planta originária da Austrália, chegou ao Brasil, adaptou-se as condições climáticas e o solo, fatores estes altamente favoráveis para o seu desenvolvimento. Desta maneira, ao longo do tempo o eucalipto se propagou aos diversos estados brasileiros e a sua utilização passou a ser comercializada devido à rápida produção de sua madeira, o que agrega alto valor econômico.  O presente artigo apresenta questões relativas aos impactos ambientais gerados pela utilização do eucalipto: busca esclarecer através de uma análise crítica desta cultura, os pontos negativos e positivos da sua utilização, questões ambientais acerca do eucalipto quanto à água, o solo, a biodiversidade e a educação ambiental. As discussões são norteadas sobre o impacto ambiental no que se refere à utilização de plantas exóticas do gênero Eucaliptus, que causa um desequilíbrio ambiental significativo para uma determinada região. O eucalipto contém algumas substâncias nocivas ao meio ambiente, o qual pode sofrer algumas consequências nada confortáveis e quase imperceptíveis. Procurou-se mencionar alguns possíveis impactos, ambientais e socioeconômicos, provocados pelo cultivo da cultura do eucalipto, averiguando a análise do ponto de vista ambiental a respeito do plantio e os mais diversos usos do eucalipto.',
        creativeCommons:
          'https://commons.wikimedia.org/wiki/File:JBRJ_Eucalipto-comum.jpg',
      },
      {
        name:
          'Expansão da silvicultura do eucalipto e transformações no uso da terra em municípios do oeste maranhense',
        profilePic:
          'assets/img/wiki/Eucalipto_Árvore_de_interesse_público_-_Matas_Nacionais_de_São_Pedro_de_Muel_-_Portugal_10687153836.jpg',
        author: 'Oliveira, A. B., Paz, D. A. S., & da Silveira, K. C.',
        note:
          'O presente trabalho tem por objetivo compreender transformações recentes no uso da terra frente o avanço da silvicultura do eucalipto em quatro municípios do oeste maranhense: Imperatriz, Cidelândia, São Pedro d’Água Branca e Vila Nova dos Martírios...',
        abstract:
          'O presente trabalho tem por objetivo compreender transformações recentes no uso da terra frente o avanço da silvicultura do eucalipto em quatro municípios do oeste maranhense: Imperatriz, Cidelândia, São Pedro d’Água Branca e Vila Nova dos Martírios. E como tal, discute o processo de inserção desta cultura no estado e algumas das transformações decorrentes deste avanço. o trabalho utiliza dados primários, fruto de pesquisas de campo que objetivaram a construção de acervo fotográfico, e realização de entrevistas não estruturadas com representantes de moradores, funcionários de fazendas e produtores rurais das áreas sob avanço do eucalipto nos municípios em destaque. Os dados secundários, sistematizados em mapas, gráficos e tabelas, são resultantes de informações colhidas no Instituto Nacional de Colonização e Reforma Agrária (INCRA), Instituto Maranhense de Estudos Socioeconômicos e Cartográficos (IMESC), o Instituto Brasileiro de Geografia e Estatística (IBGE) e os relatórios de produção da própria Suzano Papel e Celulose.',
        creativeCommons:
          'https://commons.wikimedia.org/wiki/File:Eucalipto_(%C3%81rvore_de_interesse_p%C3%BAblico)_-_Matas_Nacionais_de_S%C3%A3o_Pedro_de_Muel_-_Portugal_(10687153836).jpg',
      },
      {
        name:
          "Principais solos da região semiárida do brasil favoráveis ao cultivo do Eucalyptus L'Heritier",
        profilePic:
          'assets/img/wiki/Plantação_de_Eucalipto,_Parque_do_Itaim_-_Taubaté.jpg',
        author: 'Gama, D. C., & de Jesus, J. B.',
        note:
          'Fatores climáticos tem sido um grande empecilho para as atividades agropecuárias na região semiárida do Brasil...',
        abstract:
          'Fatores climáticos tem sido um grande empecilho para as atividades agropecuárias na região semiárida do Brasil. Pesquisas silviculturais realizadas com diferentes materiais genéticos para a produção de madeira na região têm produzido resultados satisfatórios, principalmente com o eucalipto. Entretanto, informação edáfica específica para a cultura do eucalipto no semiárido é escasso. Nesse sentido, o presente trabalho objetivou identificar os principais tipos de solos recomendados para o eucalipto na região semiárida do Brasil. Utilizou-se de revisão de literatura especializada. Dados obtidos de plataformas oficiais foram processados com uso de planilha Windows Excel 10. Mapas temáticos foram confeccionados em software Quantum GIS (3.6.0). Seis Classes de solos (Argissolos, Neossolos, Latossolos, Luvissolos, Planossolos e Cambissolos), ocupam 98% da região semiárida do Brasil. Destes, Cambissolos, Neossolos Quartzarênicos, Latossolos e Argissolos, embora com baixa fertilidade natural, podem ser mais recomendáveis à eucaliptocultura por apresentar dentre outros atributos, relevo relativamente plano, profundidade e drenagem adequada; inexistência de camadas de impedimento e boa capacidade de armazenamento de água.',
        creativeCommons:
          'https://commons.wikimedia.org/wiki/File:Planta%C3%A7%C3%A3o_de_Eucalipto,_Parque_do_Itaim_-_Taubat%C3%A9.jpg',
      },
    ]

    for (let item of items) {
      this.items.push(new Item(item))
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key]
        if (
          typeof field == 'string' &&
          field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0
        ) {
          return item
        } else if (field == params[key]) {
          return item
        }
      }
      return null
    })
  }

  add(item: Item) {
    this.items.push(item)
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1)
  }
}
