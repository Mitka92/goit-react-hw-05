import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGFjNjI0NTJjNzZjYjY1OTAyMWE0ZTM2MWE0ZDk3MCIsIm5iZiI6MTcyMzkyMzk3OS4zMjA5NzIsInN1YiI6IjY2YzBmYzE4ODNmNjY4ODhmODg5ODk5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n9uGvhTOECFEmLKbbHPMF4b5kW4zfjhMigQkvAwFA3E",
  },
};

export async function getPopularMovies(page = 1, timeWindow = "day") {
  const url = `https://api.themoviedb.org/3/trending/movie/${timeWindow}`;
  const { data } = await axios.get(url, {
    ...options,
    params: { page },
  });
  return data;
}
export async function getMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const { data } = await axios.get(url, {
    ...options,
  });
  return data;
}
export async function searchMovie(query, page) {
  const url = `https://api.themoviedb.org/3/search/movie`;
  const { data } = await axios.get(url, {
    ...options,
    params: { page, query },
  });
  return data;
}
export async function getReviews(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const { data } = await axios.get(url, {
    ...options,
  });
  return data;
}
export async function getCast(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const { data } = await axios.get(url, {
    ...options,
  });
  return data;
}
