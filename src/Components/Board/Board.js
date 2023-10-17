import Card from "../Card/Card.js";
import "./Board.css";

const Board = () => {
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          to do<span>2</span>
        </p>
        <span className="material-symbols-outlined">add</span>
        <span className="material-symbols-outlined">more_vert</span>
      </div>
      <div className="board_cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Board;
