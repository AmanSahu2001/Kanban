import Card from "./BoardColumn/Card/Card.js";
import "./Board.css";
import BoardColumn from "./BoardColumn/BoardColumn.js";

const Board = ({ data, groupBy, sortOrder }) => {
  const { tickets, users } = data;

  // Group tasks based on the selected grouping option
  const groupTasks = (tasks, groupingOption) => {
    if (groupingOption === "status") {
      return tasks.reduce((grouped, task) => {
        const status = task.status;
        if (!grouped[status]) {
          grouped[status] = [];
        }
        grouped[status].push(task);
        return grouped;
      }, {});
    } else if (groupingOption === "user") {
      return tasks.reduce((grouped, task) => {
        const userId = task.userId;
        const user = users.find((user) => user.id === userId);
        const userName = user ? user.name : "Unassigned";
        if (!grouped[userName]) {
          grouped[userName] = [];
        }
        grouped[userName].push(task);
        return grouped;
      }, {});
    } else if (groupingOption === "priority") {
      return tasks.reduce((grouped, task) => {
        const priority = task.priority;
        if (!grouped[priority]) {
          grouped[priority] = [];
        }
        grouped[priority].push(task);
        return grouped;
      }, {});
    }

    // Default: Group by status if no valid grouping option is provided
    return groupTasks(tasks, "status");
  };

  // Sort tasks based on the selected sorting option
  const sortTasks = (tasks, sortingOption) => {
    return tasks.sort((a, b) => {
      if (sortingOption === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortingOption === "priority") {
        return b.priority - a.priority;
      }
      // Default: Sort by title if no valid sorting option is provided
      return a.title.localeCompare(b.title);
    });
  };

  // Group and sort tasks based on user selections
  const groupedTasks = groupTasks(tickets, groupBy);
  const sortedTasks = sortTasks(tickets, sortOrder);

  return (
    <div className="board">
      {/* <div className="board_top">
        <p className="board_top_title">
          to do<span>2</span>
        </p>
        <span className="material-symbols-outlined">add</span>
        <span className="material-symbols-outlined">more_vert</span>
      </div> */}
      <div className="board_cards">
        {Object.keys(groupedTasks).map((group, index) => (
          <BoardColumn key={index} title={group} tasks={groupedTasks[group]} />
        ))}
      </div>
    </div>
  );
};

export default Board;
