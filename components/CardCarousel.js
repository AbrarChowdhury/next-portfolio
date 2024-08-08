import React, { useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CardCarousel = ({ cards }) => {
  const [cols, setCols] = useState(3)
  const sliderRef = useRef(null);
  useEffect(() => {
    if(cards.length<3){
      setCols(cards.length)
    }else{
      setCols(3)
    }
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
    console.log("cards update", cols)
    sliderRef.current?.slickGoTo(0)
  }, [cards])
  const settings = {
    dots: cols==cards.length?false:true,
    infinite: false,
    speed: 500,
    slidesToShow: cols,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings} ref={sliderRef}>
      {cards.map((card, index) => (
        <div key={index}>{card}</div>
      ))}
    </Slider>
  )
}

export default CardCarousel
