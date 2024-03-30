import { Link } from "react-router-dom";
import * as React from "react";

// styles
import "./styles/projects.css";

//imports
import projectsData from "./data/projectsData.json";

// icons
import { BsArrowUpShort } from "react-icons/bs";

const Projects = () => {
  document.title = "@felipesoarws | projetos";

  projectsData.sort((a, b) => {
    if (a.year < b.year) {
      return 1;
    }
    if (a.year > b.year) {
      return -1;
    }
    return 0;
  });

  return (
    <div className="projects-style">
      <div className="projects-container">
        <div className="detail projects"></div>

        <div className="title">
          <Link to={"/"}>
            <div className="back-menu">
              <BsArrowUpShort />
              <h2>Felipe Soares</h2>
            </div>
          </Link>
          <h1>Todos os projetos</h1>
        </div>
        <div className="projects"></div>
      </div>
    </div>
  );
};

export default Projects;
