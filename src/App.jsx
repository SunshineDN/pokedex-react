import { useState } from "react"
import { Routes, Route, HashRouter } from "react-router-dom" //BrowserRouter removido e HashRouter adicionado

import Login from "./pages/Login"
import Register from "./pages/Register"
import Forgot from "./pages/Forgot"
import Validation from "./pages/Validation"
import Home from "./pages/Home"
import PokemonDetails from "./pages/PokemonDetails"

function App() {

  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem('loggedUser')) || {}
  );
  const [isLogged, setIsLogged] = useState(
    Object.keys(loggedUser).length === 0 ? false : true
  );

  function handleLogin(user) {
    setLoggedUser(user)
    setIsLogged(true)
    localStorage.setItem('loggedUser', JSON.stringify(user))
  }

  function handleAddUser(user) {
    setUsers([...users, user])
  }

  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Validation isLogged={isLogged} />} />
          <Route path="register" element={<Register users={users} handleAddUser={handleAddUser} />} />
          <Route path="login" element={<Login />} users={users} handleLogin={handleLogin} />
          <Route path="forgot" element={<Forgot />} users={users} />
          <Route path="home" element={<Home /> } />
          <Route path="home/:id" element={<Home /> } />
          <Route path="pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </HashRouter>
  )
}

export default App
