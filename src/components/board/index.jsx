import React,
{
    useMemo
} from 'react'
import './index.css'
import Square from '../square'

const Board = (props) => {
    const {
        squares,
        handleClick,
    } = props;

    const renderSquares = useMemo(() => squares.map((item, index) => (
        <Square
            key={index}
            value={item}
            onClick={() => handleClick(index)} />
    )), [squares, handleClick])


    return (
        <div className="tic-tac-board">
            {renderSquares}
        </div>
    );
}

export default Board;