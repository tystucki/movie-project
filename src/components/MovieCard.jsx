import React from "react";
import './MovieCard.css'


const MovieCard = ({movie, addMovie, removeMovie, list}) =>{
    const inWatchlist = list.filter((mov) => {
        return mov.id === movie.id;
      });

  const button =
  inWatchlist.length === 0 ? (
    <button onClick={() => addMovie(movie)}>Add to List</button>
  ) : (
    <button onClick={() => removeMovie(movie)}>Remove</button>
  );


return(
    <div className="movie-card">
        <div>
        <img className="cover-image" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        <h3>{movie.original_title}</h3>
        </div>
        {button}
    </div>
)
}
export default MovieCard; 