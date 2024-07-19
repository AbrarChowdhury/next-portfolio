import React, { useState } from "react"
import projectsData from "../projectsData"

const Projects = () => {
  return (
    <section id="portfolio">
      <h1 className="title">Projects</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
        {projectsData.map((project, i) => (
          <Cards key={i} project={project} />
        ))}
      </div>
    </section>
  )
}

function Cards({ project }) {
  const [hovering, setHovering] = useState(false)
  const { title, link, desc } = project
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
      }}
      href={link}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <h2>{title}</h2>
      <p>{desc}</p>
    </a>
  )
}

export default Projects
