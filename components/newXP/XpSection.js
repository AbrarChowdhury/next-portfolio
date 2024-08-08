import React, { useState, useEffect, useRef } from "react"
import { experience, projects } from "./xpData"
import CardCarousel from "../CardCarousel"
import LiveView from "../LiveView"
import Button from "../button/Button"
import Projects from "./Projects"
import styles from "./xp.module.css"

const XpSection = () => {
  const [displayProjects, setDisplayProjects] = useState(projects)
  const [animation, setAnimation] = useState("")
  const proProjectsRef = useRef(null)
  const [during, setDuring]=useState(displayProjects[0].during)


  const filterProjects = (during) => {
    setAnimation(styles.fadeOutScaleDown)
    setTimeout(() => {
      if (during === "all") {
        setDisplayProjects(projects)
      } else {
        setDisplayProjects(
          projects.filter((project) => project.during === during)
        )
        setDuring(displayProjects[0].during)
      }
      setAnimation(styles.fadeInScaleUp)
    }, 500)
  }
  const handleViewProjects=(during)=>{
    filterProjects(during)
    proProjectsRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const experienceCards = experience.map(
    ({
      date,
      role,
      company,
      companyURL,
      responsibilities,
      during,
      background,
    }) => (
      <div
        style={{
          display: "block",
          padding: "15px",
          background: `url(${background})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h2>{date}</h2>
          <Button
            text={"view projects"}
            handleClick={() => handleViewProjects(during)}
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
    <div className={animation} key={i}>
      <Projects project={project} />
    </div>
  ))

  useEffect(() => {
    if (animation === styles.fadeInScaleUp) {
      const timeout = setTimeout(() => setAnimation(""), 500)
      return () => clearTimeout(timeout)
    }
  }, [animation])

  return (
    <div>
      <h1>Experience</h1>
      <CardCarousel cards={experienceCards} />
      <div id='pro-projects' ref={proProjectsRef}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <h1>Professional Projects</h1>
          <div style={{ display: "flex" }}>
            <img src='/images/filter.svg' alt='filter icon' width={"30px"} />
            <div
              className='filter-container'
              onClick={() => filterProjects("techdojo")}
              style={{borderBottom:`5px solid rgba(0, 174, 193, ${displayProjects[0].during=="techdojo"?1:0.2})`, }}
            >
              <div className='title'>techdojo</div>
              <div className='sub'>Software Engineer</div>
            </div>
            <div
              className='filter-container'
              onClick={() => filterProjects("bioforge-2")}
              style={{borderBottom:`5px solid rgba(239, 125, 148, ${displayProjects[0].during=="bioforge-2"?1:0.2})`, }}
            >
              <div className='title'>bioforge</div>
              <div className='sub'>Software Engineer</div>
            </div>
            <div
              className='filter-container'
              onClick={() => filterProjects("bioforge-1")}
              style={{borderBottom:`5px solid rgba(50, 174, 114, ${displayProjects[0].during=="bioforge-1"?1:0.2})`, }}
            >
              <div className='title'>bioforge</div>
              <div className='sub'>Product Designer</div>
            </div>
          </div>
        </div>
        <CardCarousel cards={projectCards} />
      </div>
    </div>
  )
}

export default XpSection
