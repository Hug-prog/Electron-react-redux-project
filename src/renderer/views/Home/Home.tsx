import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'renderer/hooks';
import selectAnimes from 'renderer/store/selectors/anime/AnimeSelector';
import { action } from '../../store/slices/anime/AnimeSlice';
// import api from 'renderer/services/fetchApi';
import './home.scss';

const Home = () => {
  const Anime = useAppSelector(selectAnimes);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(action.fetchAnimeLoad());
  }, [dispatch]);

  console.log(Anime);
  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
