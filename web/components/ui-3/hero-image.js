import { date_format } from '../../lib/movie';
import css from './components.scss';

export default (movie) => (
  <div className={css.heroImage}
    style={{ backgroundImage: `url(${movie.backdrop_path})` }}
  >
    <div className={css.header}>
      <h3>{movie.title}</h3>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <div className={css.rating}>
        TMDB : {movie.vote_average} / 10
      </div>
    </div>
    <div className={css.extraInfo}>
      Release Date : {date_format(movie.release_date)}
    </div>
  </div>
)