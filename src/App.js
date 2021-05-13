import './App.css'
import Card from './components/Card/Card'
import pokemons from './data.json'
import logo from './image/logo.webp'

export default function App() {
  return (
    <div className="App">
      <img src={logo} alt="" />
      <div className="App__card-container">{renderCards()}</div>
      <img src={logo} alt="" />
    </div>
  )
}

function renderCards() {
  return pokemons.map(el => (
    <Card
      key={el.id}
      name={el.name}
      frontImage={el.images.front}
      types={el.types}
    />
  ))
}
