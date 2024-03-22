import { useState } from 'react';
import Movies from './Movies';
import './Moviesearch.css'; 

function Moviesearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=1bdfaf56`);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await res.json();
      if (data.Response === 'True') {
        setMoviesList(data.Search);
        setError(null);
      } else {
        setMoviesList([]);
        setError('Movie not found.');
      }
    } catch (error) {
      setError('An error occurred while fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div class="container">
      <div class="input-container">
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for a movie..." />
        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p class="error">{error}</p>}
      {!isLoading && !error && moviesList.length === 0 }
      <div class="movies-container">
        {!isLoading && !error && moviesList.length > 0 && <Movies moviesList={moviesList} />}
      </div>
    </div>
  );
}

export default Moviesearch;
