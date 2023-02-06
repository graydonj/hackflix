import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MovieDetails () {
  // grab parameter from URL
  const { movieID } = useParams();

  // state of our movie details
  const [movie, setMovie] = useState({});

  useEffect(()=>{
    // API call
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieID}`,
      params: {
        api_key: "460ad8448635789cb7af9acdaa3d45f2",
      }
    }).then((res) => {
      setMovie(res.data);
    })
  }, [])

  const {original_title, tagline, overview, poster_path} = movie;

  return (
    <>
    <div className="poster">
      <div className="description">
        <h2>{original_title}</h2>
        <h3>{tagline}</h3>
        <p>{overview}</p>
      </div>
      <div className="poster-image">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`Poster for ${original_title}`} />
      </div>
    </div>
    <Link to={"/"}><h2>Back...to the Movies!</h2></Link>
    </>
  )
}

export default MovieDetails;