import React from "react"
import LiveView from "./LiveView"
import CardCarousel from "./CardCarousel"

const Achievements = () => {
  const cards = [
    <Achievement
      key='1'
      award='MIT SOLVE'
      date='2020'
      position='Winner'
      url='https://solve.mit.edu/events/solve-challenge-finals-2020'
      role='I was an integral part of the team that designed and developed the neonatal incubator for which we won the challenge in the Maternal & Newborn Health Innovators sector. My role encompassed. Ideation, converting ideas to detailed illustrations, making the 3D model in autocad fusion 360 referencing the illustrations, building prototypes and finally 3D printing and assembling.'
    />,
    <Achievement
      key='2'
      award='Uni Rover Challenge'
      date='2017'
      position='Ranked, 10th in the World'
      url='https://www.dhakatribune.com/feature/tech/22449/iub-secures-10th-spot-in-university-rover'
      role='I was a volunteer for this project, my role was to assist with 3D modelling in Solidworks, working on specific parts instructed by senior members. Simultaneously, working with the mechanical team, mainly in the construction of the specially designed light weight wheels. This project was one of first oportunity I got to work with so many brilliant minds. Brilliant opportunity to just observe and absorb and grow'
    />,
    <Achievement
      key='3'
      award='Inter Uni Film Contest'
      date='2017'
      position='Runner Up'
      url='https://www.youtube.com/watch?v=6R1BwF9i_4g&t=2s&ab_channel=RezwanulAhmedShakib'
      role='Never tried anything remotely similar to film making until then. Very casually took part in it because we were trying to explore new things. We were asked to submit a script and an execution plan, which I wrote with couple of hours before deadline. Suddenly, we were representing our university in this competition. Somehow, learned to make 2D animations, and managed to submit a film on the importance of convserving biodiversity.'
    />,
  ]
  return (
    <section id='achievements'>
      <h1 className='title'>Achievements</h1>
      <p className='subTile'>
        Few notable things I spent my earlier days on, building valuable
        soft-skills like teamwork, self-believe, project management, and
        leadership.
      </p>
      <div className='achievementContainer'>
        <CardCarousel cards={cards} />
      </div>
    </section>
  )
}

export default Achievements

function Achievement({ award, date, position, url, role }) {
  return (
    <div
      style={{
        display: "block",
        padding: "15px",
        background: "url(feelgoodboxes/rect_back_yellow.svg)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "170px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr max-content ",
          gridGap: "",
          alignItems: "baseline",
        }}
      >
        <h2 style={{ marginBottom: 0 }}>{award}</h2>
        <h2 style={{ marginBottom: 0 }}>-{date}</h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "max-content max-content ",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <p style={{ margin: 0, textTransform: "uppercase" }}>
          <i>{position}</i>
        </p>
        <LiveView link={url} />
      </div>
      <p style={{ marginTop: 0, textAlign: "justify" }}>{role}</p>
    </div>
  )
}
