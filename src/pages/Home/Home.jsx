import { useState, useEffect } from 'react';
import MovieList from 'components/Movie/MovieList/MovieList';
import Container from 'components/Container/Container';

import { api } from 'service/api';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    api.fetchFilms().then(({ data }) => {
      setFilms(data.results);
    });
  }, []);

  return (
    <main>
      <Container>
        <h2>Trending today</h2>

        {films.length > 0 && <MovieList films={films} />}
      </Container>
    </main>
  );
};

export default Home;
