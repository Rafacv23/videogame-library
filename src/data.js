import axios from "axios"

const API_KEY = "11953bc921184a5d858d043921d8b37f"
const BASE_URL = "https://api.rawg.io/api"

export const getGames = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/games`, {
      params: {
        key: API_KEY,
        page
      }
    })
    const games = response.data
    return games
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getGameById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/games/${id}`, {
      params: { key: API_KEY }
    })
    const game = response.data
    return game
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getGameByDeveloper = async (devId) => {
  try {
    const response = await axios.get(`${BASE_URL}/games/${devId}`, {
      params: { key: API_KEY }
    })
    const game = response.data
    console.log(game)
    return game
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getGameAchievements = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/games/${id}/achievements`, {
      params: { key: API_KEY }
    })
    const game = response.data
    return game
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getGameVersions = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/games/${id}/additions`, {
      params: { key: API_KEY }
    })
    const game = response.data
    return game
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getGamesBySaga = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/games/${id}/game-series`, {
      params: { key: API_KEY }
    })
    const game = response.data
    return game
  } catch (error) {
    console.error(error)
    throw error
  }
}
