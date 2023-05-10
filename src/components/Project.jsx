import { AiFillCheckSquare } from "react-icons/ai";
import { BsArrowUpShort } from "react-icons/bs";

export const Project = ({ name, desc, link, image, stacks }) => {
  let list = String(stacks).split(",");

  return (
    <div className="project">
      <a href={link} target="_blank" className="link">
        <div className="project-image">
          <img src={image} alt={`${name} banner`} />
        </div>
        <div className="project-content">
          <div className="title">
            <a href={link} target="_blank"></a>
            <h1>{name}</h1>
            <BsArrowUpShort />
          </div>
          <div className="desc">
            <p>{desc}</p>
          </div>
          <div className="stacks">
            <div className="stacks-item">
              {list.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
