import React from "react"

const Explorations = () => {
  return (
    <section id='explorations'>
      <h1 className='title'>Explorations</h1>
      <p className='subTile'>
        Online certifations programs I underwent in order to build a solid
        foundation in full-stack web development before joining workforce
      </p>
      <div className='explorationContainer'>
        <Exploration title="" link="" desc="" />
        <Exploration title="" link="" desc="" />
        <Exploration title="" link="" desc="" />
      </div>
    </section>
  )
}

export default Explorations

function Exploration({ title, link, desc }) {
  return (
    <a
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
      href={link}
    >
      <h2>{title}</h2>
      <p>{desc}</p>
    </a>
  )
}
