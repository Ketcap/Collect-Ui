import css from './components.scss';
import MovieCard from './movie-card';

export default ({ source = [] }) => (
  <div className={css.movieGrid}>
    {source.map((item, index) => (
      <MovieCard key={index} {...item} />
    ))}
  </div>
)