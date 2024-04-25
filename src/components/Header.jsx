import NeymarJr from "../assets/neyfoto.jpg"
export default function Header() {
  return (
    <div>
         <header className="pt-40 ">  
        
        <h2 className="font-shoulders text-8xl mb-9  text-center ">Neymar: O Caos Perfeito</h2>
        <img src={NeymarJr} alt="Logo da Serie do Ney " className="mb-10 w-96 ms-auto me-auto " />
        </header>
    </div>
  )
}
