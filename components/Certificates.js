import React from "react"
import ImageWithBackground from "./imageBackground/ImageBackground"
import CardCarousel from "./CardCarousel"

const Certificates = () => {
  const cards = [
    <Certificate key='1' src='certificates/js_dsa.webp' />,
    <Certificate key='2' src='certificates/Web_Dev_Bootcamp.webp' />,
    <Certificate key='3' src='certificates/game-dev.webp' />,
    <Certificate key='4' src='certificates/responsive-web.webp' />,
  ]
  return (
    <section id='certificates'>
      <h1 className='title'>Certificates</h1>
      <p className='subTile'>
        I went through many online courses and tutorials in order to build a
        solid foundation in full-stack web development before joining workforce,
        here are a few that provided certificates.
      </p>
      <div className='certificateContainer'>
        <CardCarousel cards={cards} />
      </div>
    </section>
  )
}

export default Certificates

function Certificate({ src }) {
  return (
    <div
      style={{
        display: "block",
        padding: "10px",
        position: "relative",
        background: "url(rect_back.svg)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "170px",
      }}
    >
      <ImageWithBackground src={src} />
    </div>
  )
}
