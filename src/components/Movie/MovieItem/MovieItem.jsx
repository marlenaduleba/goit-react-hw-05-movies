import { useLocation } from 'react-router-dom';

import { Item, Link } from '../Movie.styled';
import { ImagePlaceholder } from 'components/ImagePlaceholder/ImagePlaceholder';

export const MovieItem = ({ id, poster_path, title }) => {
  const location = useLocation();

  return (
    <Item key={id}>
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        style={{ display: 'flex' }}
      >
        <img
          width="250"
          src={ImagePlaceholder(poster_path)}
          alt={title}
        />

        <p>{title}</p>
      </Link>
    </Item>
  );
};

export default MovieItem;