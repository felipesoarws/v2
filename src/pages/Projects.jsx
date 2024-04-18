import { Link, useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// styles
import "./styles/projects.scss";
import "./styles/projectsDesktop.scss";

//imports
import projectsData from "./data/projectsData.json";

// icons
import { BsArrowUpShort, BsArrowRight } from "react-icons/bs";

const Projects = () => {
  document.title = "@felipesoarws | projetos";

  const navigate = useNavigate();

  const getData = (project) => {
    navigate(`/projects/${project.pathName}`, { state: project });
  };

  const onEnterHoverLink = (linkEvent) => {
    let hoverReveal = linkEvent.currentTarget.children[2];
    let image = linkEvent.currentTarget.children[2].children[0];

    hoverReveal.style.opacity = 1;
    hoverReveal.style.transform = `translate(-100%, -50% ) rotate(5deg)`;
    image.style.transform = "scale(1,1)";
    hoverReveal.style.left = `${linkEvent.clientX}px`;
  };

  const onLeaveHoverLink = (linkEvent) => {
    let hoverReveal = linkEvent.currentTarget.children[2];
    let image = linkEvent.currentTarget.children[2].children[0];

    hoverReveal.style.opacity = 0;
    hoverReveal.style.transform = `translate(-100%, -50% ) rotate(5deg)`;
    image.style.transform = "scale(0.8, 0.8)";
  };

  return (
    <div className="projects-style">
      <div className="projects-container">
        <div className="detail projects"></div>

        <div
          className="title"
          data-aos="fade-right"
          data-aos-anchor-placement="top-right"
          data-aos-duration="2000"
        >
          <Link to={"/"}>
            <div className="back-menu">
              <BsArrowUpShort />
              <h2>Felipe Soares</h2>
            </div>
          </Link>
          <h1>Todos os projetos</h1>
        </div>

        <div className="projects">
          <div className="mobile-projects-list">
            <div className="mobile-projects-list-item">
              {projectsData.map((p, i) => (
                <div className="item" key={i}>
                  <div className="i-background">
                    <div
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="2000"
                      className="i-bg-mobile"
                      style={{ backgroundImage: `url(${p.mobileBackground})` }}
                    ></div>
                  </div>
                  <div
                    className="i-content"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                    <div className="i-title">
                      <h2>{i + 1}</h2>
                      <h3>{p.project}</h3>
                    </div>
                    <div className="i-desc">
                      <p>{p.desc}</p>
                    </div>
                    <div className="i-stacks">
                      <p>Feito com:</p>
                      <div className="stacks-list">
                        {p.builtWith.map((item, id) => (
                          <span key={id}>{item}</span>
                        ))}
                      </div>
                    </div>
                    <div className="i-project-link">
                      <span className="link">
                        <a href={p.link} target="_blank">
                          {" "}
                          <BsArrowUpShort />
                          Acesse aqui
                        </a>
                        .
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="desktop-projects-list">
            <nav>
              <ul>
                {projectsData.map((p, i) => (
                  <li key={i} onClick={() => getData(p)}>
                    <div
                      className="link"
                      onMouseEnter={(e) => onEnterHoverLink(e)}
                      onMouseLeave={(e) => onLeaveHoverLink(e)}
                    >
                      <span>{p.project}</span>
                      <BsArrowRight />
                      <div className="hover-reveal image01">
                        <img
                          className="hidden-img"
                          src={p.previewBackground}
                          alt={`${p.project} image`}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
