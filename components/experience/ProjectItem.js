import { useState } from "react"
import TechIcons from "../TechIcons"
import SubProject from "./SubProject"
import LiveView from "../LiveView"
import ImageWithBackground from "../imageBackground/ImageBackground"

const ProjectItem = ({
  imageSrc,
  imageAlt,
  title,
  description,
  role,
  subProjects,
  iconList,
  url,
}) => {
  return (
    <div
      style={{
        background: "url(sub_proj_dark.svg)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "2%",
        marginBottom:"20px"
      }}
    >
      <div className='projectsContainer'>
        <div className='projectMain'>
          <h2 style={{ marginTop: "0px" }}>
            {title}
            <LiveView href={url} />
          </h2>
          {/* <ImageWithBackground src={imageSrc}/> */}
          <img width='100%' src={imageSrc} alt={imageAlt} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "0 5%",
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
        </div>
      </div>
      {subProjects && (
        <div
          className={`subProjectContainer col-${subProjects?.length}`}

        >
          {subProjects?.map((subProject, i) => (
            <SubProject key={i} {...subProject} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectItem
