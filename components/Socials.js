import React from "react"

const Socials = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "200px",
      }}
    >
      <Social src='socials/github.svg' href='https://github.com/AbrarChowdhury' />
      <Social src='socials/linkedin.svg' href='https://www.linkedin.com/in/abrar-shams-chowdhury-48a979114/' />
      <Social src='socials/whatsapp.svg' href='+8801836096182' />
      <Social src='socials/email.svg' href='chowdhury.abrar.shams@gmail.com' />
      {/* <Social src='socials/leetcode.svg' href='www.hoglu.com' /> */}
    </div>
  )
}

function Social({ src, href }) {
  return (
    <a href={href} target='_blank'  rel="noreferrer" >
      <img
        src={src}
        width={"25px"}
        style={{
          marginLeft: "10px",
        }}
      />
    </a>
  )
}

export default Socials
