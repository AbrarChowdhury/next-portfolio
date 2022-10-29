import React, { useState } from "react"
import projectsData from "../projectsData"

const Projects = () => {
  return (
    <section id="portfolio">
      <h1 className="title">Projects</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
        {projectsData.map((project) => (
          <Cards project={project} />
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
        border: "2px solid #abdcec",
        display: "block",
        padding: "10px",
        position: "relative",
      }}
      href={link}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      key={title}
    >
      <h2>{title}</h2>
      <p>{desc}</p>
    </a>
  )
}

export default Projects
