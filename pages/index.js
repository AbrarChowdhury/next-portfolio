import Head from "next/head"
import styles from "../styles/Home.module.css"

import MyAvatar from "../components/MyAvatar"
import { useEffect, useRef, useState } from "react"
import About from "../components/About"
import Projects from "../components/Projects"
import ExperienceSection from "../components/experience/ExperienceSection"
import ContactForm from "../components/Contact"
import Socials from "../components/Socials"
import Footer from "../components/Footer"
import Certificates from "../components/Certificates"
import Blogs from "../components/Blogs"
import Achievements from "../components/Achievements"
import Explorations from "../components/Explorations"
import XpSection from "../components/newXP/XpSection"
export default function Home() {
  const ref = useRef()
  const scrollRef = useRef()
  const [xCord, setXCord] = useState(0)
  const [yCord, setYCord] = useState(0)
  const [scrollPostion, setScrollPosition] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
    // window.addEventListener("scroll", (e)=>{
    //   setScrollPosition(window.scrollY)
    //   if(window.scrollY>100){
    //     // scrollRef?.current?.className=styles?.fadeOut
    //     window.removeEventListener("scroll",()=>console.log("remove listener"))
    //   }
    //   }
    // )
  }, [])

  const handleMouseMove = ({ clientX, clientY }) => {
    const x = (clientX / ref.current.clientWidth) * 100 - 50 // varries from -50 to 50
    const y = (clientY / ref.current.clientHeight) * 100 - 50 // varries from -50 to 50
    setXCord(x)
    setYCord(y)
  }

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className={styles.container}>
      <Head>
        <title>ABRU</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;500;700&display=swap');
        </style>
      </Head>
      <section
        ref={ref}
        onMouseMove={(e) => handleMouseMove(e)}
        style={{ position: "relative" }}
      >
        <div id={styles.hero}>
          <MyAvatar
            x={xCord}
            y={yCord}
            style={{ translate: `0 ${-scrollPostion * 0.2}px`, zIndex: -1 }}
          />
          <div style={{ height: "max-content" }}>
            <h1>
              Hi, my <br className={styles.lineBreak} />
              name is <b>Abrar</b>
              <span>.</span>
            </h1>
            <p>
              I'm a <b>creative developer</b> from Dhaka, Bangladesh
            </p>
          </div>
        </div>
        <p className={styles.scroll} ref={scrollRef}>
          <span>S</span>
          <span>C</span>
          <span>R</span>
          <span>O</span>
          <span>L</span>
          <span>L</span>
        </p>
      </section>

      <main className='main'>
        <About />
        <XpSection/>
        <ExperienceSection />
        {/* <Explorations /> */}
        {/* <Blogs /> */} 
        {/* replace explorations with blogs later on */}
        <Achievements />
        <Certificates />
        <Projects />
        <section id='contact'>
          <h1 className='title'>Get In Touch</h1>
        </section>
      </main>
      <ContactForm />
      <Footer />
      {/* <footer className={styles.footer}>
        <Socials />
      </footer> */}
    </div>
  )
}
