import React from "react"

const LiveView = ({ link, size }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" style={{position:"relative"}} >
      <img
        src='link.svg'
        height={size || "20px"}
        style={{
          position:"absolute",
          marginLeft: "1px",
          top: "50%",
          transform: "translateY(-50%)"
        }}
      />
    </a>
  )
}

export default LiveView
