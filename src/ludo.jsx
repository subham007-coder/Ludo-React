import { useState } from "react";

export default function Ludo() {

    let [moves, setMoves] = useState({ red: 0, blue: 0, green: 0, yellow: 0 });

    let blueMoves = () => {
        setMoves((pervVal) => {
            return { ...pervVal, blue: moves.blue + 1 }
        })
    }
    let redMoves = () => {
        setMoves((pervVal) => {
            return { ...pervVal, red: moves.red + 1 }
        })
    }
    let yellowMoves = () => {
        setMoves((pervVal) => {
            return { ...pervVal, yellow: moves.yellow + 1 }
        })
    }
    let greenMoves = () => {
        setMoves((pervVal) => {
            return { ...pervVal, green: moves.green + 1 }
        })
    }

    return (
        <>
            <h1>Game Start</h1>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{ backgroundColor: "blue" }} onClick={blueMoves}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{ backgroundColor: "yellow", color: "black" }} onClick={yellowMoves}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{ backgroundColor: "green" }} onClick={greenMoves}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{ backgroundColor: "red" }} onClick={redMoves}>+1</button>
            </div>
        </>
    )
}