import "./Card.css";
import Tag from "./Tag/Tag.js";

const Card = ({ task, userdata, groupBy }) => {
  return (
    <div className="card">
      <div className="card_top">
        <div className="card_id">{task && task.id}</div>
        <span className="material-symbols-outlined">account_circle</span>
      </div>
      <div className="card_title">{task && task.title}</div>
      <div className="tag">
        <span className="material-symbols-outlined">more_horiz</span>
        <Tag text={task && task.tag} />
      </div>
    </div>
  );
};

export default Card;
