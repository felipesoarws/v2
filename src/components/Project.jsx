import {BsArrowUpShort} from 'react-icons/bs'

export const Project = ({name, desc}) => {
  return (
    <div className="project">
      <a href="#">
        <div className="title">
          <h1>{name}</h1>
          <BsArrowUpShort/>
        </div>
        <div className="content">
          <p>{desc}</p>
        </div>
      </a>
    </div>
  );
}
