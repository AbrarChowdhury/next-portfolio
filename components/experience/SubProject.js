import React, { useState } from "react"
import LiveView from "../LiveView"
import TechIcons from "../TechIcons"

const SubProject = ({
  imageSrc,
  imageAlt,
  logoSrc,
  logoAlt,
  companyURL,
  title,
  shortDesc,
  description,
  iconList
}) => {
  const [modal, setModal] = useState(false)
  return (
    <div className='pointer' style={{ maxWidth: "50%" }}>
      <div
        style={{
          position: "fixed",
          left: "0",
          top: "0",
          height: "100%",
          width: "100%",
          zIndex: "5",
          display: modal ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(255,255,255,0.9)",
          }}
          onClick={() => setModal(false)}
        ></div>
        <div
          style={{
            width: "50vw",
            background: "url(rect_modal.svg)",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <img
            src='cross.svg'
            width='20px'
            style={{ position: "absolute", right: "25px", top: "25px" }}
            onClick={() => setModal(false)}
          />
          <div style={{ padding: "25px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridGap: "10px",
              }}
            >
              <img src={imageSrc} alt={imageAlt} width='100%' />
              <div>
                <div style={{display:"flex", alignItems:"center"}}>
                {logoSrc && <img src={logoSrc} alt={logoAlt} width='200' />}
                {companyURL&&<LiveView link={companyURL} size="30"/>}
                </div>
                {!logoSrc && <h2>{title}</h2>}
                <p style={{ margin: 0, fontSize: "smaller" }}>{description}</p>
                <br />
                <TechIcons iconList={iconList}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "20px",
          background: "url(rect_back.svg)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        onClick={() => setModal(true)}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <img src={imageSrc} alt={imageAlt} width='100' />
          <div>
            {logoSrc && <img src={logoSrc} alt={logoAlt} width='100%' />}
            <p style={{ margin: 0, paddingLeft: "5px", fontSize: "smaller" }}>
              {title}
            </p>
          </div>
        </div>
        <p style={{ margin: 0, fontSize: "smaller" }}>{shortDesc}</p>
      </div>
    </div>
  )
}

export default SubProject
