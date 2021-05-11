import './App.css'
import Card from './components/Card/Card'
import pokemons from './data.json'

export default function App() {
  const renderCards = pokemons.map(el => (
    <Card
      key={el.id}
      name={el.name}
      frontImage={el.images.front}
      types={el.types}
    />
  ))

  return <div className="App">{renderCards}</div>
}
