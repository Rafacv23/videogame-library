import React, { useState, useEffect } from "react"
import { getGames } from "../data"
import { Link, useParams } from "react-router-dom"
import "../styles/game-container.css"
import "../styles/home.css"
import ControllBtns from "../containers/controll-btns"

const Home = () => {
  const [games, setGames] = useState(null)
  const { page } = useParams()

  async function fetchGames () {
    try {
      const data = await getGames(page)
      const game = data ? data.results : []
      setGames(game)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchGames()
  }, [page])

  return (
    <>
        <div className="home">
            {games
              ? games.map((game) => (
                <div className="game-container" key={game.id}>
                  <Link to={`/game/${game.id}`}>
                    <img className="game-img-home" key={game.id} src={game.background_image} />
                  </Link>
                  <div className="game-info">
                    <Link to={`/game/${game.id}`} className="game-name">{game.name}</Link>
                </div>
                </div>
              )) : <p>Loading, please wait</p>}
        </div>
        <div className="control-btns">
                <ControllBtns></ControllBtns>
                </div>
                </>
  )
}

export default Home
