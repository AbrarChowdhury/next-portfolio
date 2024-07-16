import Image from "next/image"
import React from "react"
import styles from "./About.module.scss"
const About = () => {
  return (
    <div className={styles.about}>
      <h1>About Me</h1>
      <div style={{ display: "flex" }}>
        {/* <Image src="/jack.jpg" alt="none" width={1000} height={900} /> */}
        <div
          style={{
            minWidth: "50px",
            borderTop: "2px solid black",
            translate: "0 40px",
          }}
        ></div>
        <p style={{ fontSize: "1.5em", textAlign: "center" }}>
        I see my work as an art form, with programming as my tool. My inspiration comes from all areas of my life, like using soccer strategies to tackle coding challenges. This creative mindset, combined with my diverse background, enables me to deliver solutions that are both <strong>innovative</strong> and <strong>effective</strong>. With a strong growth mentality and disciplined approach, I constantly seek to improve my skills and knowledge, ensuring that my work not only meets but <strong>exceeds expectations</strong>.
        </p>
      </div>
    </div>
  )
}

export default About
