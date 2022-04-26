import { useState } from "react"
import "./gameTable.css"

type cards = (number | string)[];

interface IState {
  opponentHand: cards,
  board: cards,
  playerHand: cards
}

const initialState: IState = {
  opponentHand: [1, 3, 5],
  board: Array(4).fill('_'),
  playerHand: [2, 4, 6]
}


export const GameTable = () => {

  const [state, setState] = useState(initialState);

  const onClick = (handType: 'opponentHand' | 'playerHand') => {
    const playableCardIndex = findPlayableCardIndex(state[handType]);
    const emptyBoardCellIndex = findEmptyBoardCellIndex(state.board);
    
    if (playableCardIndex < 0 || emptyBoardCellIndex < 0)
      return;

    const newHand = [...state[handType]];
    const newBoard = [...state.board];
    newHand[playableCardIndex] = 'X';
    newBoard[emptyBoardCellIndex] = state[handType][playableCardIndex];
    setState({...state, board: newBoard, [handType]: newHand})
  }

  const findPlayableCardIndex = (hand: cards): number => {
    return hand.findIndex(card => card !== 'X');
  }

  const findEmptyBoardCellIndex = (board: cards): number => {
    return board.findIndex(cell => cell === '_');
  }

  return (
    <div className="game-table">
      <div className="side-panel">
        {state.opponentHand}
        <button onClick={() => onClick('opponentHand')}>Play Card</button>
      </div>

      <div className="board-container">
        {state.board}
      </div>

      <div className="side-panel">
        {state.playerHand}
        <button onClick={() => onClick('playerHand')}>Play Card</button>
      </div>
    </div>
  )
}