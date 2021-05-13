export default function fetchPokemon(queryString) {
  const url = 'https://pokeapi.co/api/v2/'

  fetch(url + queryString)
    .then(res => res.json())
    .then(data => {
      return data
    })
}
