import React from "react"
import TechIcons from "../TechIcons"


const Projects = ({ project, setModal }) => {
  const imageMap = {
    techdojo: `url(feelgoodboxes/rect_back_blue.svg)`,
    "bioforge-2": `url(/feelgoodboxes/rect_back_pink.svg)`,
    "bioforge-1": `url(/feelgoodboxes/rect_back_green.svg)`,
  }
  
  return (
    <div
      style={{
        display: "block",
        padding: "15px",
        background: imageMap[project.during],
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        cursor: "pointer",
      }}
      onClick={() => setModal(project)}
    >
      <h2>{project.title}</h2>
      <p>{project.shortDesc}</p>
      <TechIcons iconList={project.iconList} height='30px' />
      
    </div>
  )
}

export default Projects



