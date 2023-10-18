import Navbar from "./Components/Navbar/Navbar.js";
import Board from "./Components/Board/Board.js";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({ tickets: [], users: [] });
  const [groupBy, setGroupBy] = useState("status");
  const [sortOrder, setSortOrder] = useState("title");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="App">
      <Navbar
        data={data}
        groupBy={groupBy}
        sortOrder={sortOrder}
        setGroupBy={setGroupBy}
        setSortOrder={setSortOrder}
      />
      <div className="outer_board">
        <div className="boards">
          <Board data={data} groupBy={groupBy} sortOrder={sortOrder} />
        </div>
      </div>
    </div>
  );
}

export default App;
