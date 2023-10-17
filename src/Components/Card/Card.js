import "./Card.css";
import Tag from "./Tag/Tag.js";

const Card = () => {
  return (
    <div className="card">
      <div className="card_top">
        <div className="card_id">CAM-11</div>
        <span className="material-symbols-outlined">account_circle</span>
      </div>
      <div className="card_title">Conduct a feature test</div>
      <div className="tag">
        <span className="material-symbols-outlined">more_horiz</span>
        <Tag text="feature request" />
      </div>
    </div>
  );
};

export default Card;
