import React, { useState, useEffect } from "react"
import "./styles/App.css"
import Error from "./pages/error"
import Home from "./pages/home.jsx"
import { Routes, Route } from "react-router-dom"
import GameDetails from "./pages/game-details"
import MyGames from "./pages/my-games"
import Header from "./containers/header"
import ScrollToUp from "./components/scroll-to-up"

function App () {
  const [myGames, setMyGames] = useState([])

  useEffect(() => {
    const myGamesFromLocalStorage = JSON.parse(localStorage.getItem("myGames")) || []
    setMyGames(myGamesFromLocalStorage)
  }, [])

  const buyGame = (gameDetails) => {
    const isGameAlreadyInMyGames = myGames.some((existingGame) => existingGame.id === gameDetails.id)

    if (isGameAlreadyInMyGames) {
      const updatedGames = myGames.filter((existingGame) => existingGame.id !== gameDetails.id)
      localStorage.setItem("myGames", JSON.stringify(updatedGames))
      setMyGames(updatedGames)
      console.log("Deleted game:", gameDetails)
    } else {
      const updatedGames = [...myGames, gameDetails]
      localStorage.setItem("myGames", JSON.stringify(updatedGames))
      setMyGames(updatedGames)
      console.log("Bought Game:", gameDetails)
    }
  }

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store/:page" element={<Home/>}/>
        <Route path="/game/:gameId" element={<GameDetails myGames={MyGames} buyGame={buyGame}/>}/>
        <Route path="/library" element={<MyGames myGames={myGames} />}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <ScrollToUp></ScrollToUp>
    </>
  )
}

export default App
