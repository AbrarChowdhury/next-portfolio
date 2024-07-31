import Image from "next/image"
import React from "react"

const About = () => {
  return (
    <div id='aboutu'>
      <h1>About Me</h1>
      <div style={{ display: "flex" }}>
        {/* <p className='aboutFont'>
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
        </p> */}
        <p className='aboutFont'>
          I see my work as an art form, with programming as my number one tool.
          Drawing inspiration from all sectors of my life, I use pro-artist
          techniques to solve challenging programming problems. The creative
          mindset, combined with my diverse background and disciplined approach,
          enables me to deliver{" "}
          <strong>innovative and effective solutions</strong>.
          <br />
          My style is to{" "}
          <strong>think like an artist but work like an accountant</strong>. I
          don't believe in motivation or "feeling inspired;" I focus on{" "}
          <strong>building systems to get big things done</strong>.
          <br />
          Despite the virtues, sometimes failure is just inevitable, and I am
          lucky to have had many pretty early in life. Every time such an event
          occurred, I asked myself, "
          <strong>What did I learn in the process?</strong>" and made sure to
          put that in my journal.
          <br />
          These failures benefited me in two ways. First, I am not afraid of
          making mistakes, which allows me to experiment and innovate. Second, I
          have developed an intuition for when things are not going to work or
          what needs to be done to make things work.
          <br />
          Lastly, if there's one thing that makes me rare, it is my{" "}
          <strong>persistence</strong>. Where most people give up, I will keep
          searching for solutions. I don't like uttering "I can't." Much like
          Bob the Builder, if you ask me, "
          <strong>Abrar, can you fix/build it?</strong>" my answer would be, "
          <strong>Yes, I can</strong>."
        </p>
      </div>
    </div>
  )
}

export default About
