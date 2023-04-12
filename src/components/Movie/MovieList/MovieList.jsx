import MovieItem from 'components/Movie/MovieItem/MovieItem';

import { List } from 'components/Movie/Movie.styled';

export const MovieList = ({ films }) => {
  return (
    <List>
      {films.map(({ id, title, poster_path }) => (
        <MovieItem key={id} id={id} title={title} poster_path={poster_path} />
      ))}
    </List>
  );
};

export default MovieList;