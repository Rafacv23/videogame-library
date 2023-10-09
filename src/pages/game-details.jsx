import React from "react"
import GameContainer from "../containers/game-container"

const GameDetails = ({ buyGame, myGames }) => {
  return (
        <div>
            <GameContainer myGames={myGames} buyGame={buyGame}></GameContainer>
        </div>
  )
}

export default GameDetails
