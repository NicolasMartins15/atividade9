import { Link } from "react-router-dom"
import NeymarJr from "../assets/neyfoto.jpg"
export default function Header() {
  return (
    <div>
         <header className="pt-40 ">  
        
        <h2 className="font-shoulders text-8xl mb-9  text-center ">Neymar: O Caos Perfeito</h2>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/personagens">Personagens</Link>
            </li>
          </ul>
        </nav>
        </header>
    </div>
  )
}
