import ExperienceItem from "./ExperienceItem"
import experienceData from "./experinceData"

const ExperienceSection = () => {
  return (
    <section id='experience'>
      <h1>Experience</h1>
      <div>
        {experienceData.map((experience, index) => (
          <ExperienceItem
            key={index}
            date={experience.date}
            company={experience.company}
            companyURL={experience.companyURL}
            role={experience.role}
            responsibilities={experience.responsibilities}
            projects={experience.projects}
          />
        ))}
        <div className='lastClockContainer'>
          <img src='clock_end.svg' width='60px' className='clockImage' />
          <div>
            <p className='dateText'>Jan 2020</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
