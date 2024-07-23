import React from "react"

const Socials = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        minWidth:"250px"
      }}
    >
      <Social src='socials/github.svg' href='www.hoglu.com' />
      <Social src='socials/linkedin.svg' href='www.hoglu.com' />
      <Social src='socials/leetcode.svg' href='www.hoglu.com' />
      <Social src='socials/youtube.svg' href='www.hoglu.com' />
      <Social src='socials/codepen.svg' href='www.hoglu.com' />
    </div>
  )
}

function Social({ src, href }) {
  return (
    <a href={href} target='_blank'>
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
