import React from "react"

const Blogs = () => {
  return (
    <section id='blogs'>
      <h1 className='title'>Blogs</h1>
      <p className='subTile'>
        Online certifations programs I underwent in order to build a solid
        foundation in full-stack web development before joining workforce
      </p>
      <div className='blogContainer'>
        <Blog title="" link="" desc="" />
        <Blog title="" link="" desc="" />
        <Blog title="" link="" desc="" />
      </div>
    </section>
  )
}

export default Blogs

function Blog({ title, link, desc }) {
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
