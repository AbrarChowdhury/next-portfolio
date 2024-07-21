import React from "react"

const TechIcons = ({ iconList }) => {
  return (
    <div class='tech' style={{ display: "flex", maxWidth: "100%" }}>
      {iconList?.map(({ href, src, alt, name }) => (
        <div
          class='tech-item'
          style={{ position: "relative", margin: "0 5px", textAlign: "center" }}
        >
          <a href={href} target='_blank'>
            <img
              src={src}
              alt={alt}
              class='tech-icon'
              style={{
                width: "auto",
                height: "50px",
              }}
            />
          </a>
          <span
            class='tech-name'
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              marginTop: "0px",
              fontSize: "14px",
              color: "#333",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TechIcons

// TODO:
