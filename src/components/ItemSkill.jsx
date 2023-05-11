export const ItemSkill = ({ stack, skills, skillProgress }) => {
  let list = String(skills).split(",");

  return (
    <div className="item">
      <h2>{stack}</h2>
      <div className="item-list">
        {list.map((item) => (
          <p key={item} className={skillProgress}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
