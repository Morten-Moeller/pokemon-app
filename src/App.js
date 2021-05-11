import './App.css'
import Card from './components/Card/Card'
import pokemons from './data.json'

export default function App() {
  const pokemonsArray = pokemons
  return (
    <div className="App">
      {pokemonsArray.map(el => (
        <Card name={el.name} frontImage={el.images.front} types={el.types} />
      ))}
    </div>
  )
}
