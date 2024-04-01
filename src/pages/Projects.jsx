import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

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

  const [sliderContainer, setSliderContainer] = useState();
  const [slideRight, setSlideRight] = useState();
  const [slideLeft, setSlideLeft] = useState();

  const sliderContainerRef = useRef(null);
  const slideRightRef = useRef(null);
  const slideLeftRef = useRef(null);
  const slidesLenght = projectsData.length;

  useLayoutEffect(() => {
    setSliderContainer(sliderContainerRef.current);
    setSlideLeft(slideLeftRef.current);
    setSlideRight(slideRightRef.current);
  });

  let activeSlideIndex = 0;

  const changeSlide = (direction) => {
    slideLeft.style.top = `-${slidesLenght - 1 * 100}vh`;

    const sliderHeight = sliderContainer.clientHeight;

    if (direction == "up") {
      activeSlideIndex++;
      if (activeSlideIndex > slidesLenght - 1) {
        activeSlideIndex = 0;
      }
    } else if (direction == "down") {
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesLenght - 1;
      }
    }

    slideRight.style.transform = `translateY(-${
      activeSlideIndex * sliderHeight
    }px)`;

    slideLeft.style.transform = `translateY(-${
      activeSlideIndex * sliderHeight
    }px)`;
  };

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

        <div className="projects">
          <div className="slider-container" ref={sliderContainerRef}>
            <div className="left-slide" ref={slideLeftRef}>
              {projectsData.map((p, i) => (
                <div className="slide" key={i}>
                  <div className="slide-title">
                    <h1>{i + 1}.</h1>
                    <h2>{p.project}</h2>
                  </div>
                  <div className="slide-content">
                    <p>{p.desc}</p>

                    <div className="slide-stacks">
                      <div className="stacks">
                        <p>Feito com:</p>
                        <span>{p.builtWith.join(", ")}.</span>
                      </div>

                      <p>
                        <span className="link">
                          <a href={p.link} target="_blank">
                            {" "}
                            <BsArrowUpShort />
                            Acesse aqui
                          </a>
                          .
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="right-slide" ref={slideRightRef}>
              {projectsData.map((p, i) => (
                <div
                  className="project-bg mobile"
                  key={i}
                  style={{ backgroundImage: `url(${p.background})` }}
                ></div>
              ))}
              {projectsData.map((p, i) => (
                <div
                  className="project-bg desktop"
                  key={i}
                  style={{ backgroundImage: `url(${p.background})` }}
                ></div>
              ))}
            </div>

            <div className="action-buttons">
              <button className="down-button" onClick={() => changeSlide("up")}>
                <FaAngleDown />
              </button>
              <button className="up-button" onClick={() => changeSlide("down")}>
                <FaAngleUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
