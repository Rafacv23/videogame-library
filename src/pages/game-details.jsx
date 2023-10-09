import React from "react"
import GameContainer from "../containers/game-container"

const GameDetails = ({ buyGame }) => {
  return (
        <div>
            <GameContainer buyGame={buyGame}></GameContainer>
        </div>
  )
}

export default GameDetails
