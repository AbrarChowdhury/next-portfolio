import { useState } from "react"
import TechIcons from "../TechIcons"
import SubProject from "./SubProject"
import LiveView from "../LiveView"

const ProjectItem = ({
  imageSrc,
  imageAlt,
  title,
  description,
  role,
  coreFeatures,
  subProjects,
  iconList,
  url,
}) => {
  return (
    <div className='projectsContainer'>
      <div
        className='projectMain'
        style={{
          background: "url(rect_back.svg)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h2>
          {title}
          <LiveView href={url} />
        </h2>
        <img width='100%' src={imageSrc} alt={imageAlt} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "10%",
          margin: "0 auto",
        }}
      >
        <h3 style={{ margin: 0 }}>What is the project?</h3>
        <p style={{ marginTop: "5px" }}>{description}</p>
        <h3 style={{ margin: 0 }}>How did I contribute?</h3>
        <p style={{ marginTop: "5px" }}>{role.text}</p>
        {role.bullets && (
          <ul style={{ marginTop: 0 }}>
            {role.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
        <h3 style={{ marginTop: 0 }}>Technologies Used</h3>
        <TechIcons iconList={iconList} />
        <br />
        {subProjects && (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {subProjects?.map((subProject, i) => (
              <SubProject key={i} {...subProject} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectItem
