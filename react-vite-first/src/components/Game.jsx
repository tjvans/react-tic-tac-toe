import { useState } from "react";
import Board from "./Board.jsx";

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const currentSquares = history[history.length-1]

    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares])
        setXIsNext(!xIsNext)
    }

    function jumptTo() {
        // TODO
    }

    const moves = history.map((squares, move) => {
        let description
        if (move > 0) {
            description = "Go to move #" + move
        } else {
            description = "Go to game start"
        }

        return (
            <li>
                <button onClick={() => jumptTo(move)}>{description}</button>
            </li>
        )
    })

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}