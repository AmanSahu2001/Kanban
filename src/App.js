import Navbar from "./Components/Navbar/Navbar.js";
import Board from "./Components/Board/Board.js";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tickets, setTickets] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => {
        setTickets(res.data.tickets);
        setUsers(res.data.users);
        console.log("ran");
      })
      .catch((err) => {
        console.log(`Cannot fetch data: ${err.message}`);
      });
  }, []);

  console.log(tickets, users);
  return (
    <div className="App">
      <Navbar />
      <div className="outer_board">
        <div className="boards">
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
