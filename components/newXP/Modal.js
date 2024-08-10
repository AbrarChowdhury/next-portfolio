import React, { useState } from "react"
import TechIcons from "../TechIcons"
import LiveView from "../LiveView"
import ImageWithBackground from "../imageBackground/ImageBackground"
function Modal({ setModal, modal }) {
    const { imageSrc, imageAlt, title, description, role, iconList,logoSrc,logoAlt, companyURL} = modal
    return (
      <div
        style={{
          position: "fixed",
          left: "0",
          top: "0",
          height: "100vh",
          width: "100vw",
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
    )
  }

  export default Modal