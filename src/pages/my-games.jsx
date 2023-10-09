import React from "react"
import { Link } from "react-router-dom"

const MyGames = ({ myGames }) => {
  return (
        <div className="home">
            {myGames
              ? myGames.map((game) => (
                <div className="game-container" key={game.id}>
                  <Link to={`/game/${game.id}`}>
                    <img className="game-img-home" key={game.id} src={game.background_image} />
                  </Link>
                  <div className="game-info">
                    <Link to={`/game/${game.id}`} className="game-name">{game.name}</Link>
                    <ul className="game-tags">
                      {game.tags.slice(0, 2).map((tag) => (
                        <li className="tags" key={tag.id}>{tag.name}</li>
                      ))}
                    </ul>
                    <div className="buttons-container">
                    <a href={game.metacritic_url} target="_blank" className={
                  game.metacritic
                    ? game.metacritic >= 70
                      ? "metacritic-green"
                      : game.metacritic < 50
                        ? "metacritic-red"
                        : "metacritic-yellow"
                    : "metacritic-tbd"
                } rel="noreferrer">{game.metacritic ? game.metacritic : "TBD"}</a>
                    <button className="buy-btn">Buy</button>
                    </div>
                </div>
                </div>
              )) : <p>Loading, please wait</p>}
        </div>
  )
}

export default MyGames
