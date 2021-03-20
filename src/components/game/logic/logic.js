export function win(squares) {
    const winnerLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let item = 0; item < winnerLines.length; item++) {
        const [a, b, c] = winnerLines[item]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[item];
        }
    }
    return false;
}