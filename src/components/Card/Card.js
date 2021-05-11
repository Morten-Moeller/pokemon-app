import './Card.css'

export default function Card({ name, frontImage, types }) {
  return (
    <section className="Card">
      <h2 className="Card__heading">{name}</h2>
      <img className="Card__image" src={frontImage} alt="" />
      <ul className="Card__typeList">
        {types.map(type => (
          <li>{type}</li>
        ))}
      </ul>
    </section>
  )
}
