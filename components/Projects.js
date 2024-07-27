import React from "react"
import projectsData from "../projectsData"
import CardCarousel from "./CardCarousel"

const Projects = () => {
  const cards = projectsData.map((project, i) => (
    <Card key={i} project={project} />
  ));

  return (
    <section id="portfolio">
      <h1 className="title">Projects</h1>
      <div className="petProjectContainer">
        <CardCarousel cards={cards} />
      </div>
    </section>
  );
}

const Card = ({ project }) => {
  const { title, link, desc } = project;

  return (
    <a
      style={{
        display: "block",
        padding: "10px",
        position: "relative",
        background: "url(rect_back.svg)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight:"170px"
      }}
      href={link}
    >
      <h2>{title}</h2>
      <p>{desc}</p>
    </a>
  );
}

export default Projects;
