import css from './components.scss';

export default ({ poster_path, title, genres = [], vote_average }) => (
  <div className={css.movieCard}>
    <img src={poster_path} className={css.posterImage} />
    <div className={css.details}>
      <h3 className={css.title}>{title}</h3>
      <ul className={css.genreList}>
        {genres.map((e, index) => (<li key={index}>{e}</li>))}
      </ul>
      <div className={css.rating}>
        <span>TMDB :&nbsp;</span><span className={css.strong}> {vote_average} / 10</span>
      </div>
    </div>
  </div>
)