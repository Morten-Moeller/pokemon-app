import { useEffect, useState } from 'react'
import './Card.css'

export default function Card({ url }) {
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [url])

  return <section className="Card"></section>
}
