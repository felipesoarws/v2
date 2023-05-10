import { useRef, useEffect } from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import { BsArrowUpShort } from "react-icons/bs";

// components
import { Project } from "../components/Project";

// images
import vlrHub from "../assets/vlrhub_screen.png";
import gowRagnarok from "../assets/gow_screen.png";
import googleKeepClone from "../assets/google_keep_screen.png";

const Home = () => {
  const aboutNavItem = useRef(null);
  const projectsNavItem = useRef(null);
  const skillsNavItem = useRef(null);
  const contactNavItem = useRef(null);

  const toggleNavClass = (text) => {
    if (text == "about") {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    switch (text) {
      case "projects":
        projectsNavItem.current.classList.add("actived");
        aboutNavItem.current.classList.remove("actived");
        skillsNavItem.current.classList.remove("actived");
        contactNavItem.current.classList.remove("actived");
        break;
      case "about":
        projectsNavItem.current.classList.remove("actived");
        aboutNavItem.current.classList.add("actived");
        skillsNavItem.current.classList.remove("actived");
        contactNavItem.current.classList.remove("actived");

        break;
      case "skills":
        projectsNavItem.current.classList.remove("actived");
        aboutNavItem.current.classList.remove("actived");
        skillsNavItem.current.classList.add("actived");
        contactNavItem.current.classList.remove("actived");

        break;
      case "contact":
        projectsNavItem.current.classList.remove("actived");
        aboutNavItem.current.classList.remove("actived");
        skillsNavItem.current.classList.remove("actived");
        contactNavItem.current.classList.add("actived");
        break;

      default:
        break;
    }
  };

  return (
    <div className="homepage-style">
      <div className="cursor"></div>
      <div className="container">
        <div className="container-first-sec">
          <div className="resume">
            <h1>Felipe Soares</h1>
            <h3>Desenvolvedor Front-end</h3>
            <p>
              Eu construo projetos estruturados e acessiveis, entregando ótimas
              experiências para a web.{" "}
            </p>
          </div>
          <div className="navegation">
            <div className="navegation-item actived" ref={aboutNavItem}>
              <a href="#" onClick={() => toggleNavClass("about")}>
                <h1>Sobre</h1>
                <span></span>
              </a>
            </div>
            <div className="navegation-item" ref={projectsNavItem}>
              <a href="#projects" onClick={() => toggleNavClass("projects")}>
                <h1>Projetos</h1>
                <span></span>
              </a>
            </div>
            <div className="navegation-item" ref={skillsNavItem}>
              <a href="#skills" onClick={() => toggleNavClass("skills")}>
                <h1>Skills</h1>
                <span></span>
              </a>
            </div>
            <div className="navegation-item" ref={contactNavItem}>
              <a href="#contact" onClick={() => toggleNavClass("contact")}>
                <h1>Contato</h1>
                <span></span>
              </a>
            </div>
          </div>
          <div className="social-medias">
            <a href="https://github.com/felipesoarws" target="_blank">
              <AiOutlineGithub />
            </a>
            <a href="https://www.instagram.com/felipesoarws/" target="_blank">
              <AiOutlineInstagram />
            </a>
            <a href="https://www.linkedin.com/in/felipesoarws/" target="_blank">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
        <div className="container-second-sec">
          <div className="about">
            <div className="title">
              <h1>Sobre</h1>
            </div>
            <div className="content">
              <p>
                Me chamo Felipe, tenho 20 anos e sou um estudante de programação
                apaixonado por tecnologia e inovação.
              </p>

              <p>
                Desde 2021 venho me dedicando aos estudos na área e atualmente
                estou cursando Análise e Desenvolvimento de Sistemas.
              </p>
              <p>
                Tenho interesse em aprender novas tecnologias e soluções que
                possam melhorar a vida das pessoas e agregar valor ao mercado de
                tecnologia.
              </p>
              <p>
                Contenho conhecimento em <span>HTML</span>, <span>CSS</span>,{" "}
                <span>JavaScript</span> e <span>Node</span>. Atualmente estou
                estudando
                <span> React</span> e <span>TypeScript</span>.
              </p>
            </div>
          </div>
          <div className="projects">
            <div className="title">
              <h1>Projetos</h1>
            </div>
            <div className="list" id="projects">
              <Project
                name={"Valorant Hub"}
                desc={
                  "Um website do jogo Valorant, onde pode consultar os agentes do jogo e suas caracteristicas, como também ranks e mapas do jogo, além de suas armas e suas skins."
                }
                link={"https://vlrgg.vercel.app/"}
                image={vlrHub}
                stacks={["React", "SCSS", "JavaScript"]}
              />
              <Project
                name={"God of War: Ragnarök"}
                desc={
                  "Landing Page criada baseada no novo God of War: Ragnarök, com elaboração de carrossel de galeria e com descrições sobre alguns dos principais personagens da saga atual."
                }
                link={"https://god-of-war-ragnarok-landing-page.vercel.app/"}
                image={gowRagnarok}
                stacks={["HTML", "SCSS", "JavaScript"]}
              />
              <Project
                name={"Google Keep - Clone"}
                desc={
                  "Clone criado do site Google Keep, onde é possivel a criação de notas e listas, podendo personalizar, priorizar e finalizar tarefas feitas"
                }
                link={"https://google-keep-clone-rho-eight.vercel.app/"}
                image={googleKeepClone}
                stacks={["React", "SCSS", "JavaScript"]}
              />
              <div className="all-projects">
                <p>Confira todos os projetos</p>
                <BsArrowUpShort />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
