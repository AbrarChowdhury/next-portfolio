import React from "react"
import { experience, projects } from "./xpData"
import CardCarousel from "../CardCarousel"
const XpSection = () => {
  const cards = experience.map((xp) => (
    <div>
      <h1>{xp.date}</h1>
    </div>
  ))

  console.log(cards)
  return (
    <div>
      <h1>Experience</h1>
      <CardCarousel cards={cards} />
    </div>
  )
}

export default XpSection
