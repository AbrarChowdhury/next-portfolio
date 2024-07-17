import React, { useState, useRef, useEffect } from "react"
import ProjectItem from "./ProjectItem"

const ExperienceItem = ({
  date,
  company,
  role,
  responsibilities,
  projects,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [height, setHeight] = useState("0px")
  const contentRef = useRef(null)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  useEffect(() => {
    setHeight(isCollapsed ? "0px" : `${contentRef.current.scrollHeight}px`)
  }, [isCollapsed])

  return (
    <div
      style={{
        position: "relative",
        borderBottom: "5px solid #abdcec",
        borderLeft: "5px solid #abdcec",
      }}
    >
      <img
        src={date == "Now" ? "clock_start.svg" : "clock.svg"}
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
            />
          </div>
          <div
            onClick={toggleCollapse}
            style={{
              textAlign: "center",
              borderTop: "5px solid #abdcec",
              borderRight: "5px solid #abdcec",
              borderBottom: "5px solid #abdcec",
              cursor: "pointer",
            }}
          >
            <h3>{isCollapsed ? "View Projects" : "Hide Projects"}</h3>
            <img src="arrow_single_down.svg" />
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
      <div
        ref={contentRef}
        style={{
          height: height,
          overflow: "hidden",
          transition: "height 0.3s ease",
          background: "white",
          padding: "0px 55px",
        }}
      >
        {projects.map((project, index) => (
          <ProjectItem
            style={{ borderBottom: "5px solid #abdcec" }}
            key={index}
            {...project}
          />
        ))}
      </div>
    </div>
  )
}

export default ExperienceItem
