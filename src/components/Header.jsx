import { Link } from "react-router-dom"
import NeymarJr from "../assets/neyfoto.jpg"
export default function Header() {
  return (
    <div>
         <header className="bg-blue1 p-3  ">  
        
        <h2 className="font-shoulders text-8xl mb-9  text-center text-blue2">Neymar: O Caos Perfeito</h2>

        <nav>
          <ul className="flex justify-center gap-8">
            <li className="text-blue3">
              <Link to="/">Home</Link>
            </li>
            <li className="text-blue3">
              <Link to="/personagens">Personagens</Link>
            </li>
          </ul>
        </nav>
        </header>
    </div>
  )
}
