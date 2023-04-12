import { useState, useEffect } from 'react';
import MovieList from 'components/Movie/MovieList/MovieList';
import Container from 'components/Container/Container';
import { Title } from './Home.styled';

import { api } from 'service/api';

 const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    try {
      api.fetchFilms().then(({ data }) => {
        setFilms(data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main>
      <Container>
        <Title>Trending today</Title>

        {films.length > 0 && <MovieList films={films} />}
      </Container>
    </main>
  );
};

export default Home;
