import { useState, useEffect } from 'react';
import Form from '../component/Form';
// const axios = require("axios"); <-- node way
import axios from 'axios';
import { Link } from 'react-router-dom';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [moviesToSearch, setMoviesToSearch] = useState('Superman');

  const resultFromApi = async () => {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?s=${moviesToSearch}&apikey=152fcc9e`
    );
    setMovies(() => data);
  };

  useEffect(() => {
    try {
      resultFromApi();
    } catch (error) {
      console.error(error);
    }
  }, [moviesToSearch]);

  return (
    <div>
      <h2>Movies</h2>
      <Form setMoviesToSearch={setMoviesToSearch} />
      {/* movies.Serach && movies.Serach.map  --->  movies.Search?.map */}
      {movies.Search?.map((movie) => {
        return (
          <Link to={`${movie.imdbID}`}>
            <p>
              {' '}
              {movie.Title} - {movie.Year}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
export default Movies;

// Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// Title: "Batman v Superman: Dawn of Justice"
// Type: "movie"
// Year: "2016"
// imdbID: "tt2975590"
