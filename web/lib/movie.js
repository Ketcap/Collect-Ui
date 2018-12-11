import fetch from 'isomorphic-unfetch'

const KEY = "6960b557a12d8e6dbee6840893d6af67";

export const Genres = async () => await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=en-US`).then(r => r.json());
export const GetMovies = async (page = 1) => await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${KEY}&language=en-US&append_to_response=runtime`).then(r => r.json());
export const Poster = (path, size = 500) => `https://image.tmdb.org/t/p/w${size}${path}`;

export const date_format = (p) => {
  const d = new Date(p);
  const date = d.getDate();
  const month = d.getMonth() + 1;
  return `${date < 10 ? '0' + date : date} - ${month < 10 ? '0' + month : month} - ${d.getFullYear()}`;
}