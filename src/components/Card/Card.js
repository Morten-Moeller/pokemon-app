import { useState } from 'react'
import './Card.css'

export default function Card({ name, frontImage, types }) {
  const renderTypes = types.map(type => <li key={type}>{type}</li>)
  const [isActive, setIsActive] = useState(false)
  const [isClass, setIsClass] = useState(true)
  return (
    <section className={isClass ? 'Card' : 'Card Card__open'}>
      <h2 className="Card__heading">{name}</h2>
      <button
        className="Card__button"
        onClick={() => {
          setIsActive(!isActive)
          setIsClass(!isClass)
        }}
      >
        show {name}
      </button>
      {isActive && (
        <>
          <img className="Card__image" src={frontImage} alt="" />
          <ul className="Card__typeList">{renderTypes}</ul>
        </>
      )}
    </section>
  )
}
