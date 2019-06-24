import React from 'react';

import Head from '../components/ui-3/head';
import Navigation from '../components/ui-3/navigation';
import HeroImage from '../components/ui-3/hero-image';
import GridList from '../components/ui-3/grid-list';

import { Genres, GetMovies, Poster } from '../lib/movie';

const Index = (props) => (
  <React.Fragment>
    <Head title={'Day 3'} />
    <Navigation />
    <main>
      <HeroImage {...props.movies[0]} />
      <GridList source={props.movies.slice(1)} />
    </main>
  </React.Fragment>
)

Index.getInitialProps = async () => {
  const { results } = await GetMovies();
  let { genres } = await Genres();
  genres = genres.reduce((prev, cur) => ({
    
    ...prev,
    [cur.id]: cur.name
  }), {});
  const movies = results.map(({ poster_path, backdrop_path, genre_ids, ...rest }) => ({
    poster_path: Poster(poster_path),
    
    backdrop_path: Poster(backdrop_path, 780),
    genres: genre_ids.map(e => genres[e]),
    ...rest
  }))
  console.log(movies)
  return {
    
    movies: movies.slice(1)
  }
}
export default Index;
