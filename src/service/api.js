import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '96b1936b39533cd9542a6bf2c841f4c7',
  },
})
const fetchFilms =  () =>  instance.get(`/trending/movie/day`);

const fetchFilmsByName = async query =>
   instance.get(`/search/movie`, { params: { query } });

const fetchFilmById = async id =>  instance.get(`/movie/${id}`);

const fetchFilmCast = async id =>  instance.get(`/movie/${id}/credits`);

const fetchFilmReviews = async id =>  instance.get(`/movie/${id}/reviews`);

export const api = {
  fetchFilms,
  fetchFilmsByName,
  fetchFilmById,
  fetchFilmCast,
  fetchFilmReviews,
};
