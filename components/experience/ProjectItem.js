import { useState } from "react"

const ProjectItem = ({
  imageSrc,
  imageAlt,
  title,
  description,
  coreFeatures,
  clients,
}) => {
  const [modal, setModal] = useState(false)
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "10px",
        margin: "40px 0",
      }}
    >
      {/* M O D A L */}
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
            background: "rgba(0,0,0,0.2)",
          }}
          onClick={() => setModal(false)}
        ></div>
        <div
          style={{
            width: "50vw",
            height: "50vh",
            background: "white",
            position: "relative",
          }}
        >
          <img
            src='cross.svg'
            width='20px'
            style={{ position: "absolute", right: "10px", top: "10px" }}
            onClick={() => setModal(false)}
          />
          <div>
            <h1>{modal.imageAlt}</h1>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#abdcec",
          padding: "10px",
        }}
      >
        <img width='100%' src={imageSrc} alt={imageAlt} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3 style={{ margin: "0" }}>{title}</h3>
        <p style={{ marginTop: "0" }}>{description}</p>
        <div className='tech-icons'></div>
        {coreFeatures && (
          <div>
            <p>Core Features:</p>
            <ul>
              {coreFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        {clients && (
          <>
            <p>The clients we have worked with:</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {clients.map((client, index) => (
                <div
                  key={index}
                  style={{ border: "2px solid black", padding: "20px" }}
                  onClick={() => setModal(client)}
                >
                  <img
                    src={client.imageSrc}
                    alt={client.imageAlt}
                    width='100'
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectItem
