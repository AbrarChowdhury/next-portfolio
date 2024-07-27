import React from "react"
import ImageWithBackground from "./imageBackground/ImageBackground"

const Certificates = () => {
  return (
    <section id='certificates'>
      <h1 className='title'>Certificates</h1>
      <p className="subTile">Online certifations programs I underwent in order to build a solid foundation in full-stack web development before joining workforce</p>
      <div className='certificateContainer'>
        <Certificate src=""/>
        <Certificate src=""/>
        <Certificate src=""/>
      </div>
    </section>
  )
}

export default Certificates

function Certificate({ src }) {
  <div
    style={{
      display: "block",
      padding: "10px",
      position: "relative",
      background: "url(rect_back.svg)",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "170px",
    }}
  >
    <ImageWithBackground src={src} />
  </div>
}
