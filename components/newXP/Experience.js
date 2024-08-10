import React, { useState } from "react";
import Button from "../button/Button";
import LiveView from "../LiveView";

export const Experience = ({ xp }) => {
  const {
    date,
    role,
    company,
    companyURL,
    responsibilities,
    during,
    background,
  } = xp;

  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

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
        <h2>{date}</h2>
      </div>
      <h2>{role}</h2>
      <div
        style={{
          marginTop: "-10px",
          marginBottom: "5px",
          textTransform: "uppercase",
          display: "flex",
        }}
      >
        <h3>{company}</h3>
        <LiveView link={companyURL} />
      </div>
      <Button text={"view projects"} handleClick={() => handleViewProjects(during)} />

      {/* View More Button */}
      <Button
        handleClick={handleToggle}
        text={showMore ? "View Less" : "View More"}
      >
      </Button>

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
  );
};
