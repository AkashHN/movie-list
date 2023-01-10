import { Link } from "react-router-dom";

function Movieslist({ movies, title }) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <div className="movie-list">
        {movies.map((movie) => {
          return (
            <>
              <Link to={`/moviedetails${movie.id}`}>
                <div className="movie">
                  <img src={movie.poster} alt="" />
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Movieslist;
