import React from 'react'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const NO_POSTER = '/No-Poster.png';

function MovieCard({ movie }) {
  if (!movie) return null;

  const {
    title,
    vote_average,
    poster_path,
    release_date,
    original_language,
  } = movie;
  
  return (
    <div className='movie-card'>
      <img src={poster_path ? `${IMAGE_BASE_URL}${poster_path}` : NO_POSTER} alt={title || 'Movie Poster'} />

        <div className='mt-4'>
          <h3>{title}</h3>
          <div className='content'>
            <div className='rating'>
              <img src='star.svg' alt="Star Icon"/>
              <p>{vote_average ? vote_average.toFixed(1): 'N/A'}</p>
            </div>

            <span>•</span>
            <p className='lang'>{original_language}</p>
            <span>•</span>
            <p className='year'>{release_date? release_date.split('-')[0]: 'N/A'}</p>
          </div>
        </div>
    </div>

  )
}

export default MovieCard
