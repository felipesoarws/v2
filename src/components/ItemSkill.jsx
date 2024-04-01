import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const ItemSkill = ({ stack, skills, skillProgress }) => {
  let list = String(skills).split(",");

  return (
    <div
      className="item"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >
      <h2>{stack}</h2>
      <div className="item-list" data-aos="fade-up">
        {list.map((item) => (
          <p key={item} className={skillProgress}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
