const ProjectItem = ({
  imageSrc,
  imageAlt,
  title,
  description,
  coreFeatures,
  clients,
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "10px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
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
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='tech-icons'></div>
        {coreFeatures && (
          <>
            <p>Core Features:</p>
            <ul>
              {coreFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}
        {clients && (
          <>
            <p>The clients we have worked with:</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {clients.map((client, index) => (
                <div
                  key={index}
                  style={{ border: "2px solid black", padding: "20px" }}
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
