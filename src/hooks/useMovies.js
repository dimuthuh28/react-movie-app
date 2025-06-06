import { useState, useCallback } from 'react'
import { getTrendingMovies, updateSearchCount } from '../api/appwrite'

const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  }
}

export const useMovies = () => {
  const [movieList, setMovieList] = useState([])
  const [trendingMovies, setTrendingMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const fetchMovies = useCallback(async (query = '') => {
    setIsLoading(true)
    setErrorMessage('')

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`

      const response = await fetch(endpoint, API_OPTIONS)

      if (!response.ok) {
        throw new Error(`API Error ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()

      if (!data.results || data.results.length === 0) {
        setErrorMessage('No movies found')
        setMovieList([])
        return
      }

      setMovieList(data.results)

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0])
      }
    } catch (error) {
      console.error('Error fetching movies:', error)
      setErrorMessage('Something went wrong. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const loadTrendingMovies = useCallback(async () => {
    try {
      const movies = await getTrendingMovies()
      setTrendingMovies(movies)
    } catch (error) {
      console.error('Error fetching trending movies:', error)
    }
  }, [])

  return {
    movieList,
    trendingMovies,
    isLoading,
    errorMessage,
    fetchMovies,
    loadTrendingMovies
  }
}
