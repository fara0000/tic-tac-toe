import React, {useCallback, useState} from 'react'
import Board from '../board'
import { win } from './logic/logic'
import './index.css'

const Game = () => {
    const x = 'X';
    const o = 'O';
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)
    const winner = win(board)
    const currentMoveState = useCallback(() => winner ? `Winner: ${winner}` : `Now: ${isXNext ? x : o}`, [winner, isXNext]);

    const handleClick = useCallback((index) => {
        const copy = [...board];

        if (winner || copy[index]) return;

        copy[index] = isXNext ? x : o;

        setBoard(copy);
        setIsXNext(!isXNext);
    }, [board, winner, isXNext]);

    const restartGame = () => {
        return (
            <button className="restart__btn" onClick={() => setBoard(Array(9).fill(null))}> Restart </button>
        )
    }

    return (
        <div className="game-wrapper">
            {restartGame()}
            <Board
                squares={board}
                handleClick={handleClick}
            />
            <p className="game-wrapper__info">
                {currentMoveState()}
            </p>
        </div>
    )
}

export default Game;