import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'service/api';
import { ImagePlaceholder } from 'components/ImagePlaceholder/ImagePlaceholder';
// import PropTypes from 'prop-types';

function Cast() {
  const [cast, setCast] = useState({});

  const { id } = useParams();

  useEffect(() => {
    api.fetchFilmCast(id).then(({data}) => {
      setCast(data.cast.splice(0, 20));
    });
  }, [id]);

  if (Object.keys(cast).length === 0) {
    return <p>We don't have any information about cast for this movie.</p>;
  }
  return (
    <div style={{ display: 'flex' }}>
      <ul>
        {cast.map(person => (
          <li key={person.id}>
            <img
              width="50"
              src={
                ImagePlaceholder(person.profile_path)
              }
              alt={person.original_name}
            />
            <p>{person.original_name}</p>
            <p>
              <b>Character: {person.character}</b>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Cast.propTypes = {};

export default Cast;