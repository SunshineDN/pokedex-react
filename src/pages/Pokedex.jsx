import { useEffect } from "react"
import Loader from "../components/Loader/Loader"
import { Container } from "../components/PokedexStyles"
import { useNavigate } from "react-router-dom"

const Pokedex = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token')
    const timer = setTimeout(() => {
      if (!token) {
        navigate('/login')
      } else {
        navigate('/')
      }
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Container>
      <Loader position={'absolute'} />
    </Container>
  )
}

export default Pokedex