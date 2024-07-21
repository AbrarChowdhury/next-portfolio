import React, { useState } from "react"

const SubProject = ({ imageSrc, imageAlt, ...rest }) => {
  const [modal, setModal] = useState(false)
  return (
    <div>
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
            height: "50vh",
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
            <h1>{modal.imageAlt}</h1>
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
        onClick={() => setModal(rest)}
      >
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
          <img src={imageSrc} alt={imageAlt} width='100' />
          <div>
            <img src={imageSrc} alt={imageAlt} width='100' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubProject
