import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);

  const getMovieDetails = async () => {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?i=${movieId}&apikey=152fcc9e`
    );
    setMovieData(() => data);
  };

  useEffect(() => {
    try {
      getMovieDetails();
    } catch (error) {
      console.error(error);
    }
  }, []);
    
  console.log(movieData);
  return (
    <div>
      <p>Actors: {movieData.Actors}</p>
      <p>Plot: {movieData.Plot}</p>
    </div>
  );
};

export default MovieDetail;

// Actors: "Daniel Radcliffe, Rupert Grint, Emma Watson"
// Awards: "Won 1 BAFTA Award13 wins & 46 nominations total"
// BoxOffice: "$262,641,637"
// Country: "United Kingdom, United States"
// DVD: "11 Apr 2003"
// Director: "Chris Columbus"
// Genre: "Adventure, Family, Fantasy"
// Language: "English, Latin"
// Metascore: "63"
// Plot: "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed."
// Poster: "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg"
// Production: "N/A"
// Rated: "PG"
// Ratings: (3) [{…}, {…}, {…}]
// Released: "15 Nov 2002"
// Response: "True"
// Runtime: "161 min"
// Title: "Harry Potter and the Chamber of Secrets"
// Type: "movie"
// Website: "N/A"
// Writer: "J.K. Rowling, Steve Kloves"
// Year: "2002"
// imdbID: "tt0295297"
// imdbRating: "7.4"
// imdbVotes: "613,275"
