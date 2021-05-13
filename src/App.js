import { useEffect, useState } from 'react'
import './App.css'
import logo from './image/logo.webp'

export default function App() {
  const [pokemonsRaw, setPokemonsRaw] = useState([])

  let url = 'https://pokeapi.co/api/v2/pokemon?limit=10'
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setPokemonsRaw(data.results))
  }, [url])

  const [pokemons, setPokemons] = useState([])

  useEffect(
    () =>
      pokemonsRaw.forEach(({ url }) => {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            setPokemons([...pokemons, data])
            console.log(data)
            console.log(pokemons)
          })
      }),
    []
  )

  return (
    <div className="App">
      <img src={logo} alt="" />
      <div className="App__card-container"></div>
    </div>
  )
}
