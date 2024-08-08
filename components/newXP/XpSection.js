import React, { useState } from "react"
import { experience, projects } from "./xpData"
import CardCarousel from "../CardCarousel"
import LiveView from "../LiveView"
import Button from "../button/Button"
import Projects from "./Projects"
const XpSection = () => {
  const [displayProjects, setProjects] = useState(projects)

  const filterProjects = (during) => {
    // techdojo
    // bioforge-2
    // bioforge-1
    // all
    if (during == "all") {
      setProjects(projects)
      return
    }
    setProjects(projects.filter((project) => project.during == during))
  }
  const experienceCards = experience.map(
    ({ date, role, company, companyURL, responsibilities, during }) => (
      <div
        style={{
          display: "block",
          padding: "15px",
          background: "url(rect_back.svg)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "170px",
        }}
      >
        <div>
          <h2>{date}</h2>
          <Button
            text={"view projects"}
            handleClick={() => filterProjects(during)}
          />
        </div>
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
    )
  )

  const projectCards = displayProjects.map((project, i) => (
    <Projects project={project} key={i} />
  ))
  return (
    <div>
      <h1>Experience</h1>
      <CardCarousel cards={experienceCards} />
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline"}}>
        <h1>Professional Projects</h1>
        <div style={{display:"flex"}}>
          <img src='/images/filter.svg' alt='filter icon' width={"30px"} />
          {/* <div
            className='filter-container'
            onClick={() => filterProjects("all")}
          >
            <div>all</div>
          </div> */}
          <div
            className='filter-container'
            onClick={() => filterProjects("techdojo")}
          >
            <div className='title'>techdojo</div>
            <div className='sub'>Software Engineer</div>
          </div>
          <div
            className='filter-container'
            onClick={() => filterProjects("bioforge-2")}
          >
            <div className='title'>bioforge</div>
            <div className='sub'>Software Engineer</div>
          </div>
          <div
            className='filter-container'
            onClick={() => filterProjects("bioforge-1")}
          >
            <div className='title'>bioforge</div>
            <div className='sub'>Product Designer</div>
          </div>
        </div>
      </div>
      <CardCarousel cards={projectCards} />
    </div>
  )
}

export default XpSection
