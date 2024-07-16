import ProjectItem from "./ProjectItem"

const ExperienceItem = ({
  date,
  company,
  role,
  responsibilities,
  projects,
}) => {
  return (
    <div style={{ borderLeft: "5px solid #abdcec", position: "relative" }}>
      <img
        src='clock.svg'
        width='60px'
        style={{ position: "absolute", left: "-32.5px" }}
      />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginTop: "15px" }}>
          <span style={{ marginLeft: "55px", fontSize: "2em" }}>{date}</span>
          <img
            style={{ display: "inline", width: "100px" }}
            src='arrow.svg'
          ></img>
        </div>

        <div style={{ flex: 1 }}>
          <p>{company}</p>
          <p>{role}</p>
          <p>{responsibilities}</p>
        </div>
      </div>
      <div style={{ margin: "0px 55px" }}>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default ExperienceItem
