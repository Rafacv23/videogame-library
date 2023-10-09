import React, { useState, useEffect } from "react"
import { getGameById, getGameAchievements, getGameVersions, getGamesBySaga } from "../data"
import { Link, useParams } from "react-router-dom"
import "../styles/game-container.css"

const GameContainer = ({ buyGame, isGameAlreadyInMyGames }) => {
  const [gameDetails, setGameDetails] = useState(null)
  const [achievements, setAchievements] = useState(null)
  const [versions, setVersions] = useState(null)
  const [saga, setSaga] = useState(null)
  const [showAchievements, setShowAchievements] = useState(false)
  const { gameId } = useParams()

  async function fetchGameDetails () {
    try {
      const data = await getGameById(gameId)
      const game = data
      setGameDetails(game)
    } catch (error) {
      console.error(error)
    }
  }

  async function fetchGameAchievements () {
    try {
      const data = await getGameAchievements(gameId)
      const game = data
      setAchievements(game)
    } catch (error) {
      console.error(error)
    }
  }

  async function fetchGameVersions () {
    try {
      const data = await getGameVersions(gameId)
      const game = data
      setVersions(game)
    } catch (error) {
      console.error(error)
    }
  }

  async function fetchGameSaga () {
    try {
      const data = await getGamesBySaga(gameId)
      const game = data
      setSaga(game)
    } catch (error) {
      console.error(error)
    }
  }

  const handleAchievements = () => {
    setShowAchievements(!showAchievements)
  }

  useEffect(() => {
    fetchGameDetails()
    fetchGameAchievements()
    fetchGameVersions()
    fetchGameSaga()
  }, [gameId])

  return (
    <div>
    {gameDetails && achievements && versions && saga
      ? <div className="game-details-page">
          <img className="game-img" key={gameDetails.id} src={gameDetails.background_image} alt={gameDetails.slug}/>
          <div className="game-details-info">
            <h1 className="game-name">{gameDetails.name}</h1>
            <div className="released-developer">
            <p>Released {gameDetails.released}</p>
            <ul className="row">
                <p>Developers</p>
              {gameDetails.developers.map((developer) => (
                <>
                <a key={developer.id} href={gameDetails.website} target="_blank" rel="noreferrer"> {developer.name}</a>
                </>
              ))}
            </ul>
            </div>
            <h2 className="subtitle">Game tags</h2>
            <ul className="game-tags">
              {gameDetails.tags.slice(0, 3).map((tag) => (
                <li className="tags" key={tag.id}>{tag.name}</li>
              ))}
            </ul>
            <h2 className="subtitle">Genres</h2>
            <ul className="game-tags">
              {gameDetails.genres.slice(0, 3).map((genre) => (
                <li className="tags" key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <h2 className="subtitle">Platforms</h2>
            <ul className="game-tags">
              {gameDetails.platforms.map((platform) => (
                <li className="plataforma" key={platform.platform.id}>{platform.platform.name}</li>
              ))}
            </ul>
            {versions.results.length === 0 ? null
              : <>
            <h2 className="subtitle">Game Versions</h2>
            <ul className="game-saga-versions">
              {versions.results.map((version) => (
                <Link className="games" to={`/game/${version.id}`} key={version.id}>
                <img className="games-img" src={version.background_image}></img>
                <p>{version.name}</p>
                </Link>
              ))}
            </ul>
            </>
            }
            {saga.results.length === 0 ? null
              : <>
            <h2 className="subtitle">Game Saga</h2>
            <ul className="game-saga-versions">
              {saga.results.map((game) => (
                <Link className="games" to={`/game/${game.id}`} key={game.id}>
                <img className="games-img" src={game.background_image}></img>
                <p>{game.name}</p>
                </Link>
              ))}
            </ul>
            </>
            }
            <button onClick={handleAchievements}>{showAchievements ? `Hide ${gameDetails.achievements_count} achievements` : `Show ${gameDetails.achievements_count} achievements`}</button>
            {showAchievements ? <ul className="achievements-list">
              {achievements.results.map((achievement) => (
                <li className="achievement" key={achievement.id}>
                  <p>{achievement.name}</p>
                  <p>{achievement.description}</p>
                  <p>{achievement.percent}%</p>
                  <img className="games-img" src={achievement.image}></img>
                </li>
              ))}
            </ul> : null}
            <div className="buttons-container">
            <a href={gameDetails.metacritic_url} target="_blank" className={
                  gameDetails.metacritic
                    ? gameDetails.metacritic >= 70
                      ? "metacritic-green"
                      : gameDetails.metacritic < 50
                        ? "metacritic-red"
                        : "metacritic-yellow"
                    : "metacritic-tbd"
                } rel="noreferrer">{gameDetails.metacritic ? gameDetails.metacritic : "TBD"}</a>
              <button className="buy-btn" onClick={() => buyGame(gameDetails)}>{isGameAlreadyInMyGames === true ? "Delete from my library" : "Add to my Library"}</button>
            </div>
          </div>
      </div>
      : <p>Loading, please wait</p>}
    </div>
  )
}

export default GameContainer
