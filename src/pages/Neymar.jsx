import Header from "../components/Header"
import NeymarJr from "../assets/neyfoto.jpg"
export default function Neymar() {
  return (
    <div>
        <Header/>
            <section className="">
            <img src={NeymarJr} alt="Logo da Serie do Ney " className="mb-10 w-96 ms-auto me-auto " />
             <p className="font-lexend mb-20 text-xl  text-center ">Na série documental Neymar: O Caos Perfeito, mergulhamos de cabeça na história de um dos atletas mais bem pagos do mundo. A produção de 3 episódios busca mostrar pontos pouco explorados da jornada de Neymar JR., um dos maiores jogadores de futebol da atualidade. Começando do início, com a ascensão dele à fama no Santos, até os dias de maior glória no Barcelona, além de participações conturbadas na seleção brasileira e Paris Saint Germain. Outro ponto fundamental dos bastidores são as polêmicas vividas pela estrela, momentos de maior tensão na vida do jogador que o documentário explora. Com isso, abre margem para conhecermos melhor o time de marketing e relações públicas por trás da personalidade mundialmente famosa, comandada pelo pai Neymar da Silva Santos. </p>
             <h2>Elenco</h2>
             <a className="font-lexend text-green5 text-2xl object-center hover:text-offwhitebg ms-auto me-auto " href="https://www.adorocinema.com/series/serie-30941/">Saiba Mais</a>    
         </section>
   
    </div>
  )
}
