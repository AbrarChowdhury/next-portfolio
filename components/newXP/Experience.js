import React, { useState } from "react"
import Button from "../button/Button"
import LiveView from "../LiveView"

export const Experience = ({ xp, handleViewProjects }) => {
  const {
    date,
    role,
    company,
    companyURL,
    responsibilities,
    during,
    background,
  } = xp

  const [showMore, setShowMore] = useState(false)

  const handleToggle = () => {
    setShowMore(!showMore)
  }

  return (
    <div
      style={{
        display: "block",
        padding: "15px",
        background: `url(${background})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h3>{date}</h3>
      </div>
      <h2 style={{margin:"-10px 0 "}}>{role}</h2>
      <div
        style={{

          textTransform: "uppercase",
          display: "flex",
        }}
      >
        <p>{company}</p>
        <LiveView link={companyURL} />
      </div>
      {/* "View Projects" as a Text with Arrow */}
      <div
        onClick={handleToggle}
        style={{
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <span>More Details</span>
        <span style={{ marginLeft: "5px" }}>➔</span>
      </div>
      {/* View More Button */}
      <Button
        handleClick={() => handleViewProjects(during)}
        text={showMore ? "View Less" : "View More"}
      />

      {/* Responsibilities */}
      <div
        style={{
          maxHeight: showMore ? "1000px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-out",
          marginTop: "10px",
        }}
      >
        <p style={{ marginBottom: 20 }}>{responsibilities}</p>
      </div>
    </div>
  )
}
