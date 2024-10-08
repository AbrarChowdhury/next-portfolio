import React from "react"
import projectsData from "../projectsData"
import CardCarousel from "./CardCarousel"

const Projects = () => {
  const cards = projectsData.map((project, i) => (
    <Card key={i} project={project} />
  ));

  return (
    <section id="projects">
      <h1 className="title">Projects</h1>
      <p className="subTile">Some projects built in order to get in some deliberate practice while mastering my craft. Definitely not the exhaustive list, mostly the ones simple/free to host.</p>
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
        background: "url(feelgoodboxes/rect_back_pink.svg)",
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
