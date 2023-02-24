/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */

import React, { useEffect } from 'react';
import Card from 'renderer/components/Card/anime/CardAnime';
import { useAppDispatch, useAppSelector } from 'renderer/hooks';
import fetchAnime from 'renderer/Middleware/AnimeMiddleware';
import selectAnimes from 'renderer/store/selectors/anime/AnimeSelector';
import { useNavigate } from 'react-router-dom';
// import { animeActions } from '../../store/slices/anime/AnimeSlice';
import './home.scss';

const Home = () => {
  const navigate = useNavigate();
  const animes = useAppSelector(selectAnimes);

  const dispatch = useAppDispatch();

  const handleNavigate = () => {
    navigate(`/anime/top-characters`);
  };

  useEffect(() => {
    dispatch(fetchAnime({ url: 'https://api.jikan.moe/v4/anime' }));
    // dispatch(animeActions.fetchAnimeStart());
    // dispatch(animeActions.fetchAnimeSuccess(12));
  }, [dispatch]);

  // console.log(animes);

  return (
    <div className="home">
      <h1>Home</h1>
      <div className="home_container">
        {animes.list.map((anime, i) => (
          <Card anime={anime} key={i} />
        ))}
      </div>
      <div>
        <h2>Top Characters</h2>
        <button onClick={handleNavigate}>view More</button>
      </div>
    </div>
  );
};

export default Home;
