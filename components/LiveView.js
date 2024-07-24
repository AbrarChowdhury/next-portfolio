import React from "react"

const LiveView = ({ link, size }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" >
      <img
        src='link.svg'
        width={size || "15px"}
        style={{
          marginLeft: "10px",
        }}
      />
    </a>
  )
}

export default LiveView
