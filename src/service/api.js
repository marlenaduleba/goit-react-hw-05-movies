import axios from "axios";

const API_KEY = '96b1936b39533cd9542a6bf2c841f4c7';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchFilms = async () => {
    try {
        const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
        const data = await axios.get(url);

        return data;
        
    } catch (error) {
        console.error(error);
    }
}

export const api = {
    fetchFilms,
}
