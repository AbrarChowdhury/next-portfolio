import Image from "next/image"
import React from "react"
import styles from "./About.module.scss"
const About = () => {
  return (
    <div className={styles.about}>
      <h1>About Me</h1>
      <div style={{ display: "flex" }}>
        <p className='aboutFont'>
          I see my work as an art form, with programming as my number one tool.
          Drawing inspiration from all sectors of my life, like using pro-artist
          techniques to solve challenging programming problems. The creative
          mindset, combined with my diverse background and disciplined approach, enables me to deliver
           <strong>innovative</strong> and{" "}
          <strong>effective</strong> solutions.<br /><br />
          My style is to think like an <strong>artist</strong> but to to work like an <strong>accountant</strong>.
          I don't believe in motivation or "feeling inspired", I only focus on building systems in order to get big things done.
          <br /><br />
          Despite the virtues, sometimes failure is just inevitable and I am
          lucky to have had many pretty early in life. Every time such an events occured, I asked
          myself "what did I learn in the process" and made sure to put that in
          my journal.
          <br /><br />
          These failures benefited me in two ways. One I am not afraid of making
          mistakes, which allows me to experiment and innovate. Two, I have
          developed an intuition for when things are not going to work or what
          needs to be done in order to make things work.
          <br /><br />
          Lastly, if theres one thing that makes me rare is my persistence. Where most
          people give up my I will keep searching for solutions. I don't like uttering  "I can't".
          Much like bob the builder. if you ask me "abrar can you fix/build it" my answer would be "yes I can".
        </p>
      </div>
    </div>
  )
}

export default About
