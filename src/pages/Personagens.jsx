import Header from "../components/Header";
import Messi from "../assets/messi.webp";
import Beckham from "../assets/beckham.webp"


export default function Personagens() {
  return (
    <div>
        <Header />
        <h2 className="font-shoulders text-8xl mb-9  text-center ">Personagens</h2>
        <img className="mb-10 w-96 ms-auto me-auto " src={Messi} alt="Lionel" />
        <p className="font-lexend mb-20 font-lexend mb-20 text-4xl  text-center " >Lionel Messi</p>
        <p className="font-lexend mb-20 text-xl ">Lionel Messi (1987) é um jogador de futebol argentino e um dos melhores atacantes do mundo. Com habilidade técnica e uma velocidade excepcional foi eleito sete vezes o melhor jogador de futebol do mundo, conquistando o troféu Bola de Ouro em 2009, 2010, 2011, 2012, 2015, 2019 e 2021.</p>
        <img className="mb-10 w-96 ms-auto me-auto" src={Beckham} alt="David Beckham" />
        <p className="font-lexend mb-20 font-lexend mb-20 text-4xl  text-center">David Beckham</p>
        <p className="font-lexend mb-20 text-xl ">David Beckham é reconhecido por sua excelência em passes, habilidade em cruzamentos e cobranças de falta curvadas como ponta direita.

Ele é aclamado como um dos maiores e mais reconhecíveis meio-campistas de sua geração, além de ser um dos maiores especialistas em bolas paradas da história.

Suas conquistas notáveis em clubes e na seleção renderam a David Beckham o status de um dos maiores jogadores do Manchester United e um dos melhores jogadores ingleses de todos os tempos.</p>

    </div>
  )
}
