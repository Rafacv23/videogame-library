import React from "react"
import "./styles/App.css"
import Error from "./pages/error"
import Home from "./pages/home.jsx"
import { Routes, Route } from "react-router-dom"
import GameDetails from "./pages/game-details"
import MyGames from "./pages/my-games"
import Header from "./containers/header"
import ScrollToUp from "./components/scroll-to-up"

function App () {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route index path="/store/1" element={<Home/>}/>
        <Route path="/store/:page" element={<Home/>}/>
        <Route path="/game/:gameId" element={<GameDetails/>}/>
        <Route path="/library" element={<MyGames/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <ScrollToUp></ScrollToUp>
    </>
  )
}

export default App
