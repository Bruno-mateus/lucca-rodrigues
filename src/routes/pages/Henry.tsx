import { Header } from "../../components/Header";
import MarshalField from "../../images/Henry Hobson Richardson/MarshallField.png"
import HenryHobson from "../../images/Henry Hobson Richardson/HenryHobson.png"
import ScrollTop from "../../components/ScrollTop";
import { Footer } from "../../components/Footer";
import { Bounce, Zoom } from "react-awesome-reveal";


export default function Henry() {
  return (
    <>
      <Header />
      <div className="container dark:bg-zinc-900">
        <div className="content">
          <Bounce>
            <h1>Henry Hobson Richardson</h1>
          </Bounce>
          <Zoom>
           <img src={HenryHobson} alt="Henry Hobson Richardson" />
          </Zoom>
          
          <p>H.H. Richardson, (nascido em 29 de setembro de 1838, Priestley Plantation, Louisiana, EUA - falecido em 27 de abril de 1886, Brookline, Massachusetts), arquiteto americano, o iniciador do renascimento românico nos Estados Unidos e um pioneiro figura no desenvolvimento de um estilo de arquitetura americano moderno e indígena.</p>
          <p>Sua inquietude e seu próprio instinto fizeram com que sua mudança do Sul para a Universidade de Harvard em 1855 fosse tão fácil quanto recompensadora. Harvard então oferecia mais contatos pessoais do que estímulo intelectual, círculos sociais nos quais ele entrava com facilidade. Isso fez com que conquistasse inúmeros clientes logo nos primeiros anos da faculdade.</p>
          <p>Em algum momento durante seus dias em Harvard, Richardson decidiu se tornar um arquiteto. Em Boston, ele foi cercado por prédios de granito simples que afetaram o melhor de seu trabalho posterior, mas para treinamento formal ele teve de ir para o exterior, pois não havia escolas de arquitetura nos Estados Unidos antes da Guerra Civil. Fluente em francês desde sua infância na Louisiana, ele estudou na École des Beaux-Arts em Paris de 1860 a 1862, quando a Guerra Civil em casa cortou sua renda. Em seguida, trabalhou no escritório do arquiteto francês Théodore Labrouste até retornar aos Estados Unidos em outubro de 1865. Em Paris, dominou o planejamento arquitetónico analítico que caracteriza grande parte de sua obra madura e que foi formulado por seu amigo, o arquiteto e professor Julien Guadet.</p>
          <p>
            Com sua volta aos EUA, Richardson produziu os edifícios sobre os quais sua reputação repousa principalmente. Ele projetou casas, bibliotecas comunitárias, estações ferroviárias suburbanas, edifícios educacionais e estruturas comerciais e cívicas. Em vez da massa fragmentada, proporções verticais estreitas e características góticas díspares usadas por seus contemporâneos, ele favoreceu linhas horizontais, silhuetas simples e detalhes uniformes em grande escala de inspiração românica ou bizantina. Uma vez que sua melhor estrutura comercial, a Marshall Field Wholesale Store em Chicago (1885-1887), e a maioria de suas estações ferroviárias no nordeste dos Estados Unidos foram demolidas há muito tempo, o desenvolvimento do trabalho de Richardson nos últimos anos de sua vida pode agora ser melhor ser estudado nos salões Sever (1878–80) e Austin (1880–84) na Universidade de Harvard, no Allegheny County Courthouse and Jail (1884–87) em Pittsburgh, na Glessner House em Chicago (1885–87), ou em a série de bibliotecas nas pequenas cidades ao redor de Boston, de Woburn e North Easton a Quincy e Malden. A Crane Memorial Library em Quincy, Massachusetts (1880-1882), com suas camadas tripartidas de uma base de granito de face áspera sob janelas contínuas de clerestório encimadas por um telhado de duas águas e seu arco de entrada cavernoso, destaca-se com as melhores e mais características obras de sua maturidade. O estilo românico de Richardson tinha uma integridade raramente alcançada por seus muitos imitadores na última parte do século XIX. Além disso, o funcionalismo de seus projetos e seu uso expressivo de materiais pressagiaram o trabalho revolucionário de Louis Sullivan.
          </p>
          <h1>Marshall & Field</h1>
          <img src={MarshalField} alt="Marshal & Field" />
          <p>A loja de atacado de Marshall Field, Chicago, Illinois, às vezes chamada de Armazém de Marshall Field, foi um edifício histórico de sete andares projetado por Henry Hobson Richardson. Destinado ao comércio atacadista da loja de departamentos de mesmo nome, foi inaugurado em 20 de junho de 1887, abrangendo o quarteirão delimitado pelas ruas Quincy, Franklin, Adams e Wells, perto da localização do Chicago Board of Trade Building.
            O edifício foi encomendado em 1885 pelo lendário comerciante Marshall Field. H. H. Richardson demonstra a sua capacidade de adaptar seu estilo a um moderno
            estabelecimento comercial. O edifício foi suportado por uma moldura interior de madeira e ferro, e foi revestido por um exterior rústico de cantaria dando a aparência de um palácio românico italiano. O desenho exterior, em que as janelas eram contidas por maciços arcos românicos, dava a impressão de ter quatro níveis, mas na verdade eram sete pisos e uma cave rebaixada. Os grandes arcos permitiam membros estruturais mais finos entre eles e maior espaço de janela do que se as janelas fossem colocadas na alvenaria sólida.</p>
          <p>
            A Marshall Field and Company fechou o prédio em 1930 após a abertura do Merchandise Mart, então o maior prédio do mundo, que consolidou todos os negócios de atacado da empresa sob um único teto. A loja de atacado foi demolida mais tarde naquele mesmo ano.
          </p>
        </div>
        <ScrollTop />

      </div>
      <Footer />
    </>
  )
}