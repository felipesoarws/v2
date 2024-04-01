import { useEffect, useRef, useState } from "react";
import "../styles/index.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import { BsArrowUpShort } from "react-icons/bs";

// components
import { Project } from "../components/Project";
import { ItemSkill } from "../components/ItemSkill";

// images
import vlrHub from "../../src/assets/vlrhub_screen.png";
import gowRagnarok from "../../src/assets/gow_screen.png";
import v1Portifolio from "../../src/assets/v1_portifolio_screen.png";

const Home = () => {
  document.title = "@felipesoarws | frontend developer";

  const aboutNavItem = useRef(null);
  const projectsNavItem = useRef(null);
  const skillsNavItem = useRef(null);

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
        break;
      case "about":
        projectsNavItem.current.classList.remove("actived");
        aboutNavItem.current.classList.add("actived");
        skillsNavItem.current.classList.remove("actived");

        break;
      case "skills":
        projectsNavItem.current.classList.remove("actived");
        aboutNavItem.current.classList.remove("actived");
        skillsNavItem.current.classList.add("actived");

        break;
      case "contact":
        projectsNavItem.current.classList.remove("actived");
        aboutNavItem.current.classList.remove("actived");
        skillsNavItem.current.classList.remove("actived");
        break;

      default:
        break;
    }
  };

  return (
    <div className="homepage-style">
      <div className="container">
        <div className="detail container"></div>
        <div className="container-first-sec">
          <div
            className="resume"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <h1>Felipe Soares</h1>
            <h3>Desenvolvedor Front-end</h3>
            <p>
              Eu construo projetos estruturados e acessiveis, entregando ótimas
              experiências para a web.
            </p>
          </div>
          <div className="navegation">
            <div className="navegation-item actived" ref={aboutNavItem}>
              <a
                href="#"
                onClick={() => toggleNavClass("about")}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h1>Sobre</h1>
                <span></span>
              </a>
            </div>
            <div className="navegation-item" ref={projectsNavItem}>
              <a
                href="#projects"
                onClick={() => toggleNavClass("projects")}
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <h1>Projetos</h1>
                <span></span>
              </a>
            </div>
            <div className="navegation-item" ref={skillsNavItem}>
              <a
                href="#skills"
                onClick={() => toggleNavClass("skills")}
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <h1>Skills</h1>
                <span></span>
              </a>
            </div>
          </div>
          <div className="social-medias">
            <div className="icons">
              <a href="https://github.com/felipesoarws" target="_blank">
                <AiOutlineGithub />
              </a>
              <a href="https://www.instagram.com/codebyfelp/" target="_blank">
                <AiOutlineInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/felipesoarws/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </div>
            <a href="mailto:felipesoarwz@gmail.com">felipesoarwz@gmail.com</a>
          </div>
        </div>
        <div className="container-second-sec">
          <div className="about">
            <div className="title">
              <h1>Sobre</h1>
            </div>
            <div
              className="content"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <p>
                Me chamo Felipe, tenho 21 anos e sou um estudante de programação
                apaixonado por tecnologia e inovação.
              </p>

              <p>
                Desde 2021 venho me dedicando aos estudos na área e sou formado
                em Análise e Desenvolvimento de Sistemas.
              </p>
              <p>
                Tenho interesse em aprender novas tecnologias e soluções que
                possam melhorar a vida das pessoas e agregar valor ao mercado de
                tecnologia.
              </p>
              <p>
                Contenho conhecimento em <span>HTML</span>, <span>CSS</span>,{" "}
                <span>SCSS</span>, <span>JavaScript</span> e <span>React</span>.
                Atualmente estou estudando e aprimorando meus conhecimento em
                <span> React</span> e <span>React Native</span>.
              </p>
            </div>
          </div>
          <div className="projects">
            <div className="detail projects"></div>
            <div className="title">
              <h1>Projetos</h1>
            </div>
            <div className="list">
              <span id="projects" style={{ visibility: "hidden" }}></span>

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
                name={"Portifólio (v1)"}
                desc={
                  "Primeira versão do meu portifólio criado em 2022, baseando-se em uma interface de Mac."
                }
                link={"https://v1-felipesoares-dev.vercel.app/"}
                image={v1Portifolio}
                stacks={["React", "SCSS", "JavaScript"]}
              />

              <div className="all-projects">
                <nav>
                  <ul>
                    <Link to="/projects">
                      <li>
                        <p>Confira todos os projetos</p>
                        <BsArrowUpShort />
                      </li>
                    </Link>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="detail skills"></div>

            <div className="title">
              <h1>Skills</h1>
            </div>
            <div className="skills-list">
              <span id="skills" style={{ visibility: "hidden" }}></span>
              <ItemSkill
                stack={"Front-end"}
                skills={[
                  "HTML",
                  "CSS",
                  "SCSS",
                  "JavaScript",
                  "ReactJS",
                  "ViteJS",
                  "React Native",
                  "WordPress",
                ]}
                skillProgress={"competent"}
              />
              <ItemSkill
                stack={"Back-end"}
                skills={["NodeJS"]}
                skillProgress={"competent"}
              />
              <ItemSkill
                stack={"Marketing"}
                skills={[
                  "SEO",
                  "Google ADS",
                  "Meta ADS",
                  "TikTok ADS",
                  "Google Analytics",
                  "Google Tag Manager",
                  "SharpSpring",
                ]}
                skillProgress={"competent"}
              />
              <ItemSkill
                stack={"Linguagens"}
                skills={["Inglês Intermediário"]}
                skillProgress={"competent"}
              />
              <ItemSkill
                stack={"Estudando atualmente"}
                skills={["React Native", "ReactJS"]}
                skillProgress={"studying"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
