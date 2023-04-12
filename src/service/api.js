import axios from "axios";

const API_KEY = '96b1936b39533cd9542a6bf2c841f4c7';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchFilms = async () => {
    try {
        const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
        const data = await axios.get(url);

        return data;
        
    } catch (error) {
        console.error(error);
    }
}

export const fetchFilmById = async id => {
  try {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    console.error(error);
  }
};


export const fetchFilmByName = async filmName => {
  try {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${filmName}`;
    const { data } = await axios.get(url);

    return data.results;
  } catch (error) {
    console.error(error);
  }
};
  
  export const fetchFilmCast = async id => {
    try {
      const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
      const { data } = await axios.get(url);
  
      return data.cast.splice(0, 15);
    } catch (error) {
      console.error(error);
    }
  };
  
  export const fetchFilmReviews = async id => {
    try {
      const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;
      const { data } = await axios.get(url);
  
      return data.results;
    } catch (error) {
      console.error(error);
    }
  };
  
  export const api = {
    fetchFilms,
    fetchFilmByName,
    fetchFilmById,
    fetchFilmCast,
    fetchFilmReviews,
  };
