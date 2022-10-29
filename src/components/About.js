import Image from 'next/image'
import React from 'react'
import styles from './About.module.scss'
const About = () => {
  return (
    <div className={styles.about}>
      <h1>About Me</h1>
      <div style={{display:"flex"}}>
        {/* <Image src="/jack.jpg" alt="none" width={1000} height={900} /> */}
        <div style={{minWidth:"50px", borderTop:"2px solid black", translate:"0 40px"}}>

        </div>
        <p style={{ fontSize: "1.5em", textAlign:"center" }}>
          My name is <strong>Abrar Shams Chowdhury</strong>, currently working as a software engineer at Bioforge Health Systems LTD. I am an engineer by heart,
          the thrill of inventing, designing, analyzing, and building keeps my heart ticking. I have experienced wearing <strong>many different hats</strong>{" "}
          before finally deciding to <strong>master software engineering</strong>. Software Engineering allows me to solve everyday problems more efficiently and I love it!. I look forward to every
          new opportunity with an open mind, with the goal of learning new things and improving each day.
        </p>
      </div>
    </div>
  )
}

export default About