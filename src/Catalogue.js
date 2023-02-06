import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Catalogue () {
  // set up movies state
  const [movies, setMovies] = useState([]);

  // set up our input
  const [input, setInput] = useState("");
  const [year, setYear] = useState(2023);
  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // put user input book title into the database, then clear input
    setYear(Number(input));
    setInput("");
  }

  useEffect(() => {

    axios({
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "460ad8448635789cb7af9acdaa3d45f2",
        language: "en-US",
        sort_by: "popularity.desc",
        include_adult: "false",
        include_video: "false",
        page: 1,
        primary_release_year: year,
      }
    }).then((res) => {
      setMovies(res.data.results);
    })

  }, [year]);

  return (
    <>
      <form action="submit">
        <label htmlFor="movieYear">What year do you wanna check out? </label>
        <input
          onChange={handleInput}
          type="text"
          id="movieYear"
          value={input}
        />
        <button disabled={!input} onClick={handleSubmit}>See Movies</button>
      </form>

      {/* display movies */}
      <ul className="catalogue">
        {movies.map((movie) =>
          <li key={movie.id}>
            <Link to={`./movie/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster for ${movie.original_title}`} />
            </Link>
          </li>
        )}
      </ul>
    </>
  )
}

export default Catalogue;