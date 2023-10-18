import Card from "./Card/Card";
import "./BoardColumn.css";

const BoardColumn = ({ title, tasks }) => {
  return (
    <div className="BoardColumn">
      <div className="board_top">
        <p className="board_top_title">
          {title}
          <span>2</span>
        </p>
        <span className="material-symbols-outlined">add</span>
        <span className="material-symbols-outlined">more_vert</span>
      </div>
      <div className="card-container">
        {tasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default BoardColumn;
