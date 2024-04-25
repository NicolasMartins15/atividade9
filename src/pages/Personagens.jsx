import Header from "../components/Header";
import Messi from "../assets/messi.webp";
import Beckham from "../assets/beckham.webp"


export default function Personagens() {
  return (
    <div>
        <Header />
        <h2 className="font-shoulders text-8xl mb-9  text-center ">Personagens</h2>
        <img src={Messi} alt="Lionel" />
        <p className="font-lexend mb-20 text-xl" >Lionel Messi</p>
        <img src={Beckham} alt="David Beckham" />
        <p className="font-lexend mb-20 text-xl">David Beckham</p>
    </div>
  )
}
