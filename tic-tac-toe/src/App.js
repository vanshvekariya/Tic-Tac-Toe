import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleReset = () => {
    setValue([null, null, null, null, null, null, null, null, null]);
    setTurn(0);
    setWinner(null);
  };

  const handleClick = (e) => {
    const current_index = e.target.value;
    if (value[current_index] === null && !winner) {
      const newValue = [...value];
      newValue[current_index] = turn % 2 === 0 ? "X" : "O";
      setValue(newValue);
      const newWinner = calculateWinner(newValue);
      if (newWinner) {
        setWinner(newWinner);
      }
      setTurn(turn + 1);
    }
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [x, y, z] = lines[i];
      if (board[x] && board[x] === board[y] && board[x] === board[z]) {
        return board[x];
      }
    }
    if (board.every((cell) => cell !== null) && !winner) {
      return "Draw";
    }
    return null;
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      {winner ? (
        <h2>{winner === "Draw" ? "Draw" : "Winner: " + winner}</h2>
      ) : (
        <h3>{turn % 2 === 0 ? "X" : "O"} Turn</h3>
      )}
      
{/* 
      <div className="container">
        {[0, 1, 2].map((row) => (
          <div key={`row${row}`} className={`row${row + 1}`}>
            {[0, 1, 2].map((col) => (
              <button
                key={col}
                value={row * 3 + col}
                onClick={handleClick}
                className="square"
              >
                {value[row * 3 + col]}
              </button>
            ))}
          </div>
        ))}
      </div> */}

      <div className="container">
        <div className="row1">
          <button value={0} onClick={handleClick} className="square">
            {value[0]}
          </button>
          <button value={1} onClick={handleClick} className="square">
            {value[1]}
          </button>
          <button value={2} onClick={handleClick} className="square">
            {value[2]}
          </button>
        </div>
        <div className="row2">
          <button value={3} onClick={handleClick} className="square">
            {value[3]}
          </button>
          <button value={4} onClick={handleClick} className="square">
            {value[4]}
          </button>
          <button value={5} onClick={handleClick} className="square">
            {value[5]}
          </button>
        </div>
        <div className="row3">
          <button value={6} onClick={handleClick} className="square">
            {value[6]}
          </button>
          <button value={7} onClick={handleClick} className="square">
            {value[7]}
          </button>
          <button value={8} onClick={handleClick} className="square">
            {value[8]}
          </button>
        </div>
      </div>
      <button className="rstbtn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
