import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item, Link } from '../Movie.styled';
import { ImagePlaceholder } from 'components/ImagePlaceholder/ImagePlaceholder';

const MovieItem = ({ id, poster_path, title }) => {
  const location = useLocation();

  return (
    <Item key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img width="250" src={ImagePlaceholder(poster_path)} alt={title} />

        <p>{title}</p>
      </Link>
    </Item>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
};
export default MovieItem;
