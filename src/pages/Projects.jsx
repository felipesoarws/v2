import { Link } from 'react-router-dom';
import * as React from 'react';

// styles
import './styles/projects.css';

//imports
import projectsData from './data/projectsData.json';

// icons
import { BsArrowUpShort } from 'react-icons/bs';

const Projects = () => {
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
      <div className="title">
        <Link to={'/'}>
          <div className="back-menu">
            <BsArrowUpShort />
            <h2>Felipe Soares</h2>
          </div>
        </Link>
        <h1>Todos os projetos</h1>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="year">Ano</th>
              <th className="project">Nome do Projeto</th>
              <th className="stacks">Feito com</th>
              <th className="links">Link</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((data, index) => (
              <tr key={index}>
                <td className="year">
                  <p>{data.year}</p>
                </td>
                <td className="project">
                  <a target="_blank" href={data.link}>
                    <p>{data.project}</p>
                    <BsArrowUpShort />
                  </a>
                </td>
                <td className="stacks">
                  <div className="item">
                    {data.builtWith.map((stack, idx) => (
                      <p key={idx}>{stack}</p>
                    ))}
                  </div>
                </td>
                <td className="links">
                  <a target="_blank" href={`https://${data.link}`}>
                    <p>{data.link}</p>
                    <BsArrowUpShort />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
