import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { api } from 'service/api';

import { ImagePlaceholder } from 'components/ImagePlaceholder/ImagePlaceholder';
import { List, Item, Info } from './Cast.styled';


const Cast = () => {
  const [cast, setCast] = useState({});

  const { id } = useParams();

  useEffect(() => {
    try {
      api.fetchFilmCast(id).then(({ data }) => {
        setCast(data.cast);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  if (Object.keys(cast).length === 0) {
    return <p>We don't have any information about cast for this movie.</p>;
  }
  return (
    <List>
    {cast.map(person => (
      <Item key={person.id}>
        <img
          width="154"
          height="154"
          src={ImagePlaceholder(person.profile_path, 154)}
          alt={person.original_name}
        />
        <Info>
          <h3>{person.original_name ? person.original_name : 'No Info'}</h3>
          <p>
            <b>Character: </b>{' '}
            {person.character ? person.character : 'No Info'}
          </p>
        </Info>
      </Item>
    ))}
  </List>
  );
};



export default Cast;