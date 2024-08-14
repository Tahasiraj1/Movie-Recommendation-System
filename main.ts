import axios from 'axios';

const API_Key = 'Your API key';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchPopularMovies() {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
            params: {
                api_key: API_Key,
            },
        });
        
        return response.data.results;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return [];
    }
}

async function fetchMovieRecommendations(moviesId: number) {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${moviesId}/recommendations`, {
            params: {
                api_key: API_Key,
            },
        });

        return response.data.results;
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        return [];
    }
}

async function searchMovies(query: string): Promise<any> {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: API_Key,
                query: query,
                language: 'en-US',
                page: 1
            }
        });
        
        return response.data.results;
    } catch (error) {
        console.error("Error searching movies:", error);
        return [];
    }
}

async function getMoviesByGenre(genreId: number): Promise<any> {
    try {
        const response = await axios.get(`${BASE_URL}/discover/movie`, {
            params: {
                api_key: API_Key,
                with_genre: genreId,
                language: 'en-US',
                page: 1
            }
        });
        
        return response.data.results;
    } catch (error) {
        console.error("Error getting movies by genre:", error);
        return [];
    }
}

// Example usage

fetchPopularMovies().then(movies => {
    console.log('Popular Movies:', movies[0]);
})

fetchMovieRecommendations(533535).then(movie => {
    console.log('Recomended Movies:', movie[0]);
})

searchMovies("Inception").then(movies => {
    console.log("Search Results:", movies[0]);    
})

getMoviesByGenre(28).then(movies => {
    console.log("Movies by genre:", movies[0]);    
})
