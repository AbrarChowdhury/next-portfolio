import { useState } from "react"
import TechIcons from "../TechIcons"
import SubProject from "./SubProject"

const ProjectItem = ({
  imageSrc,
  imageAlt,
  title,
  description,
  coreFeatures,
  subProjects,
  iconList,
}) => {
  return (
    <div
      className="projectsContainer"
    >
      <div
       className="projectMain"
        style={{
          background: "url(rect_back.svg)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

        }}
      >
        <h2>{title}</h2>
        <img width='100%' src={imageSrc} alt={imageAlt} />
        <p style={{ marginTop: "0" }}>{description}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          overflow:"hidden",
          width:"90%",
          margin:"0 auto"
        }}
      >
        <TechIcons iconList={iconList} />
        {coreFeatures && (
          <div>
            <p>Core Features:</p>
            <ul>
              {coreFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        {subProjects && (
          <div style={{display:"flex", flexWrap:"wrap"}}>
            {subProjects?.map((subProject,i) => (
              <SubProject key={i} {...subProject} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectItem
