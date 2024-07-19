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
  const desginationRef = useRef(null)
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
              style={{ display: "inline", width: "100px", marginLeft: "10px"}}
              src='arrow.svg'
            />
          </div>
          <div
            onClick={toggleCollapse}
            style={{
              textAlign: "center",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            <h3 style={{ margin: 0 }}>
              {isCollapsed ? "View Projects" : "Hide Projects"}
            </h3>
            <img
              src='arrow_single_down.svg'
              width='30px'
              style={{
                marginLeft: "10px",
                transform: isCollapsed ? "rotate(0deg)" : "rotate(180deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        </div>

        <div
          style={{
            flex: 1,
            marginTop: "10px",
            padding: "0 50px",
            background: "url(rect_back.svg)",
            backgroundSize: "90% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
          ref={desginationRef}
        >
          <div style={{}}>
            <div>
              <h3 style={{ marginBottom: "5px", textTransform: "uppercase" }}>
                {company}
              </h3>
              <h2 style={{ marginTop: "0px" }}>{role}</h2>
              <p>{responsibilities}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={contentRef}
        style={{
          height: height,
          overflow: "hidden",
          padding: "0px 55px",
          background: "url(sub_proj.svg)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transition: "height 0.4s ease",
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