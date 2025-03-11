import React from 'react'

export const AnimeDetails = ({ animeDetails, setAnimeDetails }) => {
    const { title, images: { jpg: { large_image_url } }, source, rank, score, 
           popularity, members, status, rating, duration } = animeDetails;
  return (
    <div className="anime-content">
      <span className="close-btn" onClick={() => setAnimeDetails(null)}>
        &times;
      </span>
      <h2>{title}</h2>
      <img src={large_image_url} alt={title} />
      <div className="info">
        <h3>#Rank: {rank}</h3>
        <h3>#Score: {score}</h3>
        <h3>#Popularity: {popularity}</h3>
        <hr/>
        <h4>Members: {members}</h4>
        <h4>Source: {source}</h4>
        <h4>Duration: {duration}</h4>
        <h4>Status: {status}</h4>
        <h4>Rating: {rating}</h4>
      </div>
    </div>
  )
}