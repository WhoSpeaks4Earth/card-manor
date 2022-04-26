import "./gameTable.css"


export const GameTable = () => {

  return (
    <div className="game-table">
      <div className="side-panel">
        opponent hand
      </div>

      <div className="board-container">
        board
      </div>

      <div className="side-panel">
        player hand
      </div>
    </div>
  )
}