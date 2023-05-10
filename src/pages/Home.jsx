import { useRef, useEffect } from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

// components
import { Project } from "../components/Project";

// images
import vlrHub from "../assets/vlrhub_screen.png";
import gowRagnarok from "../assets/gow_screen.png";

const Home = () => {
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
          <div className="navegation"></div>
          <div className="social-medias">
            <a href="#" target="_blank">
              <AiOutlineGithub />
            </a>
            <a href="#" target="_blank">
              <AiOutlineInstagram />
            </a>
            <a href="#" target="_blank">
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
                Atualmente, tenho conhecimento em <span>HTML</span>,{" "}
                <span>CSS</span>, <span>JavaScript</span> e <span>Node</span>.
                Estou estudando atualmente <span>React</span> e{" "}
                <span>TypeScript</span>.
              </p>
            </div>
          </div>
          <div className="projects">
            <div className="title">
              <h1>Projetos</h1>
            </div>
            <div className="list">
              <Project
                name={"Valorant Hub"}
                desc={
                  "Um website do jogo Valorant, onde pode consultar os agentes do jogo e suas caracteristicas, como também ranks e mapas do jogo, além de suas armas e suas skins."
                }
                link={"https://vlrgg.vercel.app/"}
                image={vlrHub}
                stacks={["React", "JavaScript"]}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
