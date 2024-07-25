import React, { useState, useRef, useEffect } from "react"
import ProjectItem from "./ProjectItem"
import LiveView from "../LiveView"

const ExperienceItem = ({
  date,
  company,
  companyURL,
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
    <div className='experienceContainer'>
      <img
        src={date == "Now" ? "clock_start.svg" : "clock.svg"}
        width='60px'
        className='clockImage'
      />
      <div className='companyDetailContainer'>
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
            <span className='dateText'>{date}</span>
            <img
              className='jobArrow'
              style={{ display: "inline", width: "100px", marginLeft: "10px" }}
              src='arrow.svg'
            />
          </div>
          <div onClick={toggleCollapse} className='viewProject'>
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
          className='companyDetails'
          style={{
            background: "url(./rect_back.svg)",
          }}
          ref={desginationRef}
          onClick={toggleCollapse}
        >
          <div style={{}}>
            <div>
              <h2>{role}</h2>
              <h3
                style={{
                  marginTop: "-10px",
                  marginBottom: "5px",
                  textTransform: "uppercase",
                }}
              >
                {company}
                <LiveView link={companyURL} />
              </h3>
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
