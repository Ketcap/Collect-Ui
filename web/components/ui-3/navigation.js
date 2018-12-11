import css from './components.scss';

export default () => (
  <nav className={css.navigation}>
    <ul className={css.leftNav}>
      <li className={css.logo}>
        <img src={'/static/images/popcorn.svg'} />
      </li>
      <li>
        <input type={'text'} className={css.searchBar} placeholder={'Search Movies'} />
      </li>
    </ul>
    <ul className={css.rightNav}>
      <li><a>Movies & Schedules</a></li>
      <li><a>Tickets</a></li>
      <li><a>Gift Voucher</a></li>
      <li><a>News</a></li>
      <li><a>Events</a></li>
    </ul>
  </nav>
)