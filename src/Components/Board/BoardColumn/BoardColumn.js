import Card from "./Card/Card";
import "./BoardColumn.css";
import { useEffect, useState } from "react";

const BoardColumn = ({ title, userdata, groupBy, tasks }) => {
  const [iconName, setIconName] = useState("Lists");
  const [newTitle, setNewTitle] = useState(null);
  useEffect(() => {
    if (groupBy === "status") setIconName("Lists");
    if (groupBy === "user") setIconName("account_circle");
    if (groupBy === "priority") setIconName("fiber_manual_record");
  }, [groupBy]);

  return (
    <div className="BoardColumn">
      <div className="board_top">
        <p className="board_top_title">
          <span className="material-symbols-outlined">{iconName}</span>
          {newTitle ? newTitle : title}
        </p>
        <span className="material-symbols-outlined">add</span>
        <span className="material-symbols-outlined">more_vert</span>
      </div>
      <div className="card-container">
        {tasks.map((task) => (
          <Card
            key={task.id}
            task={task}
            userdata={userdata}
            groupBy={groupBy}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardColumn;
