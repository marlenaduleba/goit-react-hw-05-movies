import Container from 'components/Container/Container';
import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';

import { api } from 'service/api';


import { ImagePlaceholder } from 'components/ImagePlaceholder/ImagePlaceholder';

import {
  Box,
  LinkIcon,
  Icon,
  InfoBox,
  Title,
  Text,
  TitleText,
  MoreInfoBox,
  MoreInfoTitle,
  MoreButtonList,
  LinkButton,
} from './Movies.styled';

const MovieDetails = () => {
  const [film, setFilm] = useState({});

  const { id } = useParams();

  const location = useLocation();
  const backLocation = location.state?.from ?? '/';

  useEffect(() => {
    api.fetchFilmById(id).then(({ data }) => {
      setFilm(data);
    });
  }, [id]);

  if (Object.keys(film).length === 0) {
    return;
  }
  return (
    <main>
      <Container>
        <LinkIcon to={backLocation}>
          <Icon />
        </LinkIcon>
        <Box>
          <img
            width="300"
            src={ImagePlaceholder(film.poster_path)}
            alt={film.title}
          />
            <InfoBox>
            <Title>{film.title ? film.title : 'No Info'}</Title>
            <Text>
              <TitleText>User Score: </TitleText>{' '}
              {film.popularity ? film.popularity : 0}
            </Text>
            <Text>
              <TitleText>Overview: </TitleText>
              {film.overview ? film.overview : 'No Info'}
            </Text>
            <Text>
              <TitleText>Genres: </TitleText>
              {film.genres.length > 0
                ? film.genres.map(value => value.name).join(', ')
                : 'No Info'}
            </Text>
          </InfoBox>
        </Box>
        <MoreInfoBox>
          <MoreInfoTitle>Additional information</MoreInfoTitle>
          <MoreButtonList>
            <li>
            <LinkButton to="cast" state={{ from: backLocation }}>
                Cast
              </LinkButton>
            </li>
            <li>
            <LinkButton to="reviews" state={{ from: backLocation }}>
                Reviews
              </LinkButton>
            </li>
          </MoreButtonList>
        </MoreInfoBox>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDetails;