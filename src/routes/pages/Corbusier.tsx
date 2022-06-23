
import { Header } from "../../components/Header";
import corbusier from '../../images/Le Corbusier/corbusier.png'
import capelaRonchamp from '../../images/Le Corbusier/capela-ronchamp.png'
import capelaRonchampBack from '../../images/Le Corbusier/capela-ronchamp-back.png'
import capelaRonchampInside from '../../images/Le Corbusier/capela-ronchamp-inside.png'
import ScrollTop from "../../components/ScrollTop";
import { Footer } from "../../components/Footer";


export default function Corbusier() {
  return (
    <>
      <Header />


      <div className="container">

        <div className="content">
          <h1>Le Corbusier</h1>
          <img src={corbusier} alt="Le Corbusier" />
          <p>
            Charles Edouard Jeanneret, conhecido como Le Corbusier, nasceu em 6 de outubro de 1887 em Chaux-de-Fonds, Suíça. Aos 13 anos entrou para a escola de arte. Aos 15 anos, recebeu um prêmio da Escola de Artes Decorativas de Turim pelo desenho de um relógio. Em 1906 realizou seu primeiro projeto: a casa de um fabricante de relógios. Em 1907 viajou pela Europa com o objetivo de aprimorar seus conhecimentos e no ano seguinte passou a trabalhar no escritório de Auguste Perret, pioneiro do concreto-armado, onde recebeu importante influência em sua formação profissional. Posteriormente fundou o Atelier das Artes Reunidas. Em 1910 viajou à Alemanha, onde trabalhou como desenhista no estúdio de Behrens,
            outro pioneiro da construção moderna. No ano seguinte, percorreu a Europa Central e a Grécia, produzindo desenhos que seriam depois reunidos no livro Viagens no Oriente.
            Entre 1912 e 1914 participou, como professor, de uma nova seção da Escola de Chaux-de-Fonds, criada nos moldes da Bauhaus, projetando algumas casas para industriais da região. Em 1914 realizou o projeto de uma cidade-jardim para sua terra natal, assim como o de um sistema para a reconstrução das cidades francesas destruídas pela Primeira Guerra Mundial.
            Em 1917 instalou-se em Paris e começou a trabalhar na Sociedade de Aplicação do Concreto Armado. No ano seguinte, junto com o pintor Amédé Ozenfant publicou Après le Cubisme, em que faziam críticas ao movimento e propunham um retorno ao desenho rigoroso do objeto. Iniciou-se, então, na pintura, já sob o pseudônimo de Le Corbusier, e fez exposições regulares até 1924.
            De 1927 a meados da década de 1930, a atividade de seu pequeno escritório esteve em pleno desenvolvimento. Le Corbusier ministrava conferências e elaborava projetos revolucionários de urbanismo para países europeus, da África do Norte e da América Latina, incluindo o Brasil, que visitou pela primeira vez em 1929. Nesse mesmo ano participou da organização do I Congresso Internacional de Arquitetura Moderna (Ciam), cujas resoluções finais estabeleceram os princípios de atuação do movimento moderno na arquitetura.
            Em 1930 casou-se com a parisiense Yvonne Gallis, tornando-se cidadão francês. Em 1936, retornou ao Brasil para orientar o projeto do prédio do Ministério da Educação e Saúde. Como um dos fundadores do grupo Ciam influenciou decisivamente, com suas ideias, a arquitetura moderna no Brasil. Em 1940, quando Paris foi ocupada pelos alemães, fechou seu escritório e refugiou-se no sul da França. Nos anos seguintes intensificou seus contatos internacionais, firmando seu prestígio como pensador da nova arquitetura e tentando demonstrar a exequibilidade dos novos métodos de construir.
          </p>
          <p>
            De 1945 a 1949 atuou como consultor para a reconstrução de cidades destruídas, e viu dois de seus projetos serem realizados, entre os quais o da Unidade de Habitação de Marselha. Em 1946 e 1947, junto com Oscar Niemeyer, participou dos estudos para a edificação da sede da ONU, em Nova Iorque. Sua consagração como grande arquiteto internacional só aconteceu na fase final de sua carreira, entre 1950 e 1965. Em 1959, recebeu o título de doutor honoris-causa pela Universidade de Cambridge. Morreu em 1965.
          </p>
          <h1>Capela em Ronchamp</h1>
          <img src={capelaRonchamp} alt="Capela em Ronchamp" />
          <p>A Capela Notre-Dame du Haut (Nossa Senhora das Alturas), mais conhecida como Capela de Ronchamp, é um dos clássicos da arquitetura modernista e uma das obras mais significativas de Le Corbusier.</p>
          <p>O objetivo da construção da Capela de Ronchamp, projetada pelo arquiteto modernista, foi substituir a igreja anteriormente destruída durante a Segunda Guerra Mundial, por um bombardeio alemão ocorrido em 1944. O local onde se inseriu foi há muito tempo um local de peregrinação, jornada tradicional do catolicismo.</p>
          <p>A Capela de Ronchamp é conhecida por este nome justamente por estar localizada na cidade de Ronchamp. Cidadezinha no leste da França, bem próxima à divisa entre a Alemanha e a Suíça.</p>
          <p>Em 1950, Le Corbusier foi contratado com o seguinte briefing: projetar uma igreja católica possuindo uma nave principal, três pequenas capelas para cultos menores e mais reservados, uma sacristia, um pequeno escritório no segundo andar e um altar externo para cerimônias ao ar livre. Um detalhe também importante que se pedia para o projeto era um sistema de recolhimento de água da chuva.</p>
          <p>A cobertura também traz unidade ao conjunto de muros brancos e ao mesmo contraste com eles. As paredes são espessas, para sustentar a estrutura da cobertura e suas extremidades curvadas, adaptando-se à forma escultural dela. Ao mesmo tempo, uma fina abertura de luz que separa a cobertura dos muros, faz com que o concreto, um material que passa a sensação de solidez, pareça flutuar no edifício.</p>
          <img src={capelaRonchampBack} alt="capela ronchamp pare de trás" />
          <p>
            Le Corbusier também brinca com a luz dentro da capela, através de aberturas estratégicas onde a parte exterior da abertura é menor do que a parte interior, gerando uma iluminação lateral cênica para dentro do edifício. Elas possuem pequenos vitrais, referenciando as antigas igrejas, porém reinterpretados: com formas retas e geométricas.
          </p>
          <img src={capelaRonchampInside} alt="dentro da capela ronchamp" />
          <p>

          </p>
        </div>

        <ScrollTop />
      </div>
      <Footer/>
    </>

  )
}