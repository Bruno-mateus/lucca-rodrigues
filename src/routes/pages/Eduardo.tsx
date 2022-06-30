import { Header } from "../../components/Header";
import eduardoReidy from "../../images/Eduardo Reidy/EduardoReidy.png"
import EdEduardoReidy from "../../images/Eduardo Reidy/EdEduardoReidy.png"
import EdEduardoReidyInside from "../../images/Eduardo Reidy/EdEduardoReidy-inside.png"
import EdEduardoReidyInsideTwo from "../../images/Eduardo Reidy/EdEduardoReidy.png"
import ScrollTop from "../../components/ScrollTop";
import { Footer } from "../../components/Footer";


export default function Eduardo() {
  return (
    <>
      <Header />

      <div className="container dark:bg-zinc-900">
        <div className="content">
          <h1>Eduardo Reidy</h1>
          <img src={eduardoReidy} alt="Eduardo Reidy" />
          <p>
            Filho de um inglês e de uma brasileira, Affonso Eduardo Reidy nasceu em Paris, em 26 de outubro de 1909. Entretanto, foi criado no Brasil, onde fez carreira.
            Ele estudou na Escola Nacional de Belas Artes do Rio de Janeiro e concluiu o curso de Arquitetura e Urbanismo em 1930.
            Foi estagiário de Alfredo Agache, urbanista responsável pelo plano diretor do Rio de Janeiro. Estavam previstos a remodelação, a expansão e o embelezamento da cidade. Durante esse projeto, Reidy foi concebido a três conceitos de Agache: a ideia de cidade; valorização das áreas públicas como espaços educativos para os cidadãos; o planejamento em larga escala.
          </p>
          <p>
            Assim, a então capital do país ganha uma imagem cosmopolita, seguindo outras grandes metrópoles do mundo. Isso sem deixar de lado um dos seus principais atributos: a paisagem natural.
          </p>
          <p>
            Dessa experiência, Reidy saiu com uma visão técnica da cidade. Portanto, metodologias se capaz de buscar e instrumentos para a resolução de problemas.
            O arquiteto foi casado com Cármen Portinho, terceira mulher a se formar engenheira no Brasil. Juntos, foram responsáveis por diferentes projetos no Departamento de Habitação Popular da Prefeitura do Distrito Federal, fundado por ela.

          </p>
          <p>
            Eles ainda provêm um projeto global de conjuntos residenciais que funcionam em pontos de forma da cidade e sempre em diversos. A iniciativa tinha um cunho social, em que a habitação era vista como um serviço público.
          </p>
          <p>
            No ano em que se formou, Affonso Eduardo Reidy foi indicado para ser assistente do arquiteto Gregori Warchavchik na Escola Nacional de Belas Artes.
          </p>
          <p>
            A recomendação para atuar ao lado do pioneiro do modernismo brasileiro veio de ninguém menos que o mestre Lúcio Costa. Em pouco tempo, o jovem arquiteto assumiu a carga do professor que antes era de Warchavchik. As disciplinas eram Desenho e Planejamento Urbano.
          </p>
          <p>
            Portanto, Reidy elaborados para a formação de diversos arquitetos da chamada Escola Carioca.
          </p>
          <p>
            Em 1931, ele ficou em primeiro lugar no concurso para construir um abrigo para moradores de rua, o Albergue da Boa Vontade. Uma obra racional da arquitetura modernista e uma das pioneiras de arquitetura modernista no Rio de Janeiro.
          </p>
          <p>
            Ainda no início da década de 1930, foi aprovado no concurso público como arquiteto-chefe da Secretária-geral de Viação, Trabalho e Obras da Prefeitura do Federal.
          </p>
          <p>
            Em 1936, Reidy integrou a equipe que projetou o prédio do Ministério da Educação e da Saúde, atualmente conhecido como Edifício Gustavo Capanema.
            Durante sua vida profissional, alternou entre as cargas do diretor do Departamento de Habitação Popular e do Departamento de Urbanismo.
            O arquiteto prestou serviço à prefeitura por 30 anos e se aposentou no início da década de 1960.
          </p>
          <h1>Edifício Eduardo Reidy</h1>
          <img src={EdEduardoReidy} alt="Edifício Eduardo Reidy" />
          <p>
            O edifício é sustentado por quatorze pórticos em concreto armado aparente posicionados a dez metros de distância entre si e formados por uma viga superior, dois pilares principais inclinados ao exterior e dois pilares menores inclinados ao interior que formam um V com os primeiros. Os pilares em V têm comprimento total de oito metros e meio. Em seção transversal, os pórticos apresentam um formato trapezoidal.
          </p>
          <p>
            Forma em planta um retângulo de cento e quarenta metros de extensão por vinte e oito metros e trinta centímetros de vão. Não há pilares no centro do edifício. Os pórticos possibilitam que o vão seja completamente livre de apoios internos. Os braços internos dos pilares em V sustentam o primeiro pavimento. A viga superior é responsável pelo apoio da cobertura e, a partir dela, os tirantes de cabos de aço estruturam os mezaninos.
          </p>
          <p>
            Uma escada curva em concreto aparente é destaque em meio à planta livre do pavilhão. Seu diâmetro mede nove metros e sessenta centímetros.
          </p>
          <img src={EdEduardoReidyInside} alt="Edifício Eduardo Reidy" />
          <p>
            A flexibilidade dos recintos é também assegurada verticalmente através da descontinuidade das lajes de cobertura, gerando três pés-direitos diferentes: oito metros, seis metros e quarenta centímetros, e três metros e sessenta centímetros. Essas alturas são variáveis para que o edifício possa abrigar obras de arte de tamanhos diversos.
            Os dois edifícios anexos ao pavilhão de exposição separam-se dele através de dois jardins diferentes. O primeiro é composto por dois retângulos que conformam um L. Nele estão o bar e o restaurante. O segundo possui contorno irregular e abriga o teatro.

          </p>
          <img src={EdEduardoReidyInsideTwo} alt="Edifício Eduardo Reidy teatro" />
        </div>
        <ScrollTop />

      </div>
      <Footer />
    </>
  )
}
