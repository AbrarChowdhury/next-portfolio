import React from "react"

const TechIcons = ({ iconList,className,height="50px" }) => {
  return (
    <div className='tech' style={{ display: "flex", flexWrap:"wrap", maxWidth: "100%",}}>
      {iconList?.map(({ href, src, alt, name },i) => (
        <div
          key={i}
          className={'tech-item '+className}
          style={{ position: "relative", margin: "0 5px", textAlign: "center" }}
        >
          <span
            className='tech-name'
            style={{
              position: "absolute",
              bottom: "100%",
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
          <a href={href} target='_blank' rel="noreferrer" >
            <img
              src={src}
              alt={alt}
              className='tech-icon'
              style={{
                width: "auto",
                height: height,
              }}
            />
          </a>
        </div>
      ))}
    </div>
  )
}

export default TechIcons

// TODO:
