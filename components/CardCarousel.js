import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CardCarousel = ({ cards }) => {
  const [cols, setCols] = useState(3)
  useEffect(() => {
    window.matchMedia("(max-width: 600px)").addEventListener("change", (e) => {
      if (e.matches) setCols(1)
    })
    window.matchMedia("(max-width: 900px)").addEventListener("change", (e) => {
      if (e.matches) {
        setCols(2)
      } else {
        setCols(3)
      }
    })
  }, [])
  const settings = {
    dots: cols==cards.length?false:true,
    infinite: false,
    speed: 500,
    slidesToShow: cols,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index}>{card}</div>
      ))}
    </Slider>
  )
}

export default CardCarousel
