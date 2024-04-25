import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Neymar from "./pages/Neymar"
import Header from "./components/Header"
import Personagens from "./pages/Personagens"

const router = createBrowserRouter([
  {
    path: "/",
    element:<Neymar/>
  },
  {
    path: "/personagens",
    element: <Personagens/>
  },
])

export default function App() {

  return (
    <RouterProvider router={router} />
  )
}
