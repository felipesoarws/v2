import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// style
import "./styles/detailedProject.scss";

// icons
import { BsArrowUpShort, BsArrowRight } from "react-icons/bs";

const DetailedProject = () => {
  const location = useLocation();
  const project = location.state;
  document.title = `@felipesoarws | ${project.project.toLowerCase()}`;

  return (
    <div className="dp-container">
      <div
        className="title"
        data-aos="fade-right"
        data-aos-anchor-placement="top-right"
        data-aos-duration="2000"
      >
        <Link to={"/projects"}>
          <div className="back-menu">
            <BsArrowUpShort />
            <h2>Felipe Soares</h2>
          </div>
        </Link>
      </div>
      <div className="project">
        <div className="project-background">
          <div className="bg">
            <img src={project.desktopBackground} alt="" />
          </div>
          <span>{project.projectType}</span>
        </div>
        <div className="project-content">
          <h1>{project.project}</h1>
          <p>{project.desc}</p>
          <div className="stacks">
            <h2>Tecnologias</h2>
            <div className="stacks-list">
              {project.builtWith.map((item, id) => (
                <span key={id}>{item}</span>
              ))}
            </div>
          </div>
          <div className="links">
            <h2>Links</h2>
            <div className="links-list">
              <a target="_blank" href={project.link}>
                Veja o projeto
              </a>
              {project.repository && <span>//</span>}

              {project.repository && (
                <a target="_blank" href={project.repository}>
                  Repositório
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedProject;
