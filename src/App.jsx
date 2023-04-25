import { Routes, Route, HashRouter } from "react-router-dom" //BrowserRouter removido e HashRouter adicionado
import Login from "./pages/Login"
import Register from "./pages/Register"
import Pokedex from "./pages/Pokedex"
import Forgot from "./pages/Forgot"

function App() {

  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot" element={<Forgot />} />
        </Routes>
      </HashRouter>
  )
}

export default App
