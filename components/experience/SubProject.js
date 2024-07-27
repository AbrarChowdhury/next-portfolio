import React, { useState } from "react"
import LiveView from "../LiveView"
import TechIcons from "../TechIcons"
import ImageWithBackground from "../imageBackground/ImageBackground"

const SubProject = ({
  imageSrc,
  imageAlt,
  logoSrc,
  logoAlt,
  companyURL,
  title,
  shortDesc,
  description,
  role,
  iconList,
}) => {
  const [modal, setModal] = useState(false)
  return (
    <div className='pointer' style={{justifySelf:"center"}}>
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
          className='modal'
          style={{
            background: "url(rect_modal.svg)",
          }}
        >
          <img
            src='cross.svg'
            width='20px'
            style={{ position: "absolute", right: "25px", top: "25px" }}
            onClick={() => setModal(false)}
          />
          <div className='modal-content'>
            <ImageWithBackground src={imageSrc} className='notPhone' />
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  float: "right",
                  marginRight: "55px",
                }}
              >
                {logoSrc && <img src={logoSrc} alt={logoAlt} width='80' />}
                {companyURL && <LiveView link={companyURL} size='30' />}
              </div>
              <h3 style={{ margin: 0 }}>What is the project?</h3>
              <p style={{ marginTop: "5px" }}>{description}</p>
              <h3 style={{ margin: 0 }}>How did I contribute?</h3>
              <p style={{ marginTop: "5px" }}>{role.text}</p>
              {role.bullets && (
                <ul style={{ marginTop: 0 }}>
                  {role.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
              <div className='notPhone'>
                <h3 style={{ marginTop: 0 }}>Technologies Used</h3>
                <TechIcons iconList={iconList} />
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
        <div
          style={
            {
              // display: "grid", gridTemplateColumns: "1fr 1fr"
            }
          }
        >
          {/* <img src={imageSrc} alt={imageAlt} width='100' /> */}
          <ImageWithBackground src={imageSrc} alt={imageAlt} />
          <div>
            {/* {logoSrc && <img src={logoSrc} alt={logoAlt} width='100%' />} */}
            <p style={{ margin: 0, fontWeight: 600 }}>{title}</p>
          </div>
        </div>
        <p style={{ margin: 0, fontSize: "smaller" }}>{shortDesc}</p>
      </div>
    </div>
  )
}

export default SubProject
