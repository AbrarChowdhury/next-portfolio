import React, { useState } from "react"
import ProjectItem from "./ProjectItem"

const ExperienceItem = ({
  date,
  company,
  role,
  responsibilities,
  projects,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div
      style={{
        position: "relative",
        borderBottom: "5px solid #abdcec",
        borderLeft: "5px solid #abdcec",
      }}
    >
      <img
        src='clock.svg'
        width='60px'
        style={{ position: "absolute", left: "-32.5px" }}
      />
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: 1,
            marginTop: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span style={{ marginLeft: "55px", fontSize: "2em" }}>{date}</span>
            <img
              style={{ display: "inline", width: "100px" }}
              src='arrow.svg'
            ></img>
          </div>
          <div
            onClick={toggleCollapse}
            style={{
              textAlign: "center",
              borderTop: "5px solid #abdcec",
              borderRight: "5px solid #abdcec",
              borderBottom: "5px solid #abdcec",
            }}
          >
            {isCollapsed ? "Show Projects" : "Hide Projects"}
          </div>
        </div>

        <div
          style={{
            flex: 1,
            marginTop: "10px",
            borderBottom: "5px solid #abdcec",
          }}
        >
          <h3 style={{ marginBottom: "5px", textTransform: "uppercase" }}>
            {company}
          </h3>
          <h2 style={{ marginTop: "0px" }}>{role}</h2>
          <p>{responsibilities}</p>
        </div>
      </div>
      <div style={{ padding: "0px 55px" }}>
        {!isCollapsed && (
          <div>
            {projects.map((project, index) => (
              <ProjectItem
                style={{ borderBottom: "5px solid #abdcec" }}
                key={index}
                {...project}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ExperienceItem
