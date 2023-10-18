import "./Board.css";
import BoardColumn from "./BoardColumn/BoardColumn.js";

const Board = ({ data, groupBy, sortOrder }) => {
  const { tickets, users } = data;
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
    return groupTasks(tasks, "status");
  };
  const sortTasks = (tasks, sortingOption) => {
    return tasks.sort((a, b) => {
      if (sortingOption === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortingOption === "priority") {
        return b.priority - a.priority;
      }
      return a.title.localeCompare(b.title);
    });
  };
  const groupedTasks = groupTasks(tickets, groupBy);

  return (
    <div className="board">
      <div className="board_cards">
        {Object.keys(groupedTasks).map((group, index) => (
          <BoardColumn
            key={index}
            title={group}
            userdata={data.users}
            groupBy={groupBy}
            tasks={sortTasks(groupedTasks[group], sortOrder)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
