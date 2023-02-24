/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'renderer/hooks';
import fetchTopCharacters from 'renderer/Middleware/TopCharactersMiddleware';
import selectTopCharacters from 'renderer/store/selectors/Charactres/TopCharactersSelector';

const TopCharacters = () => {
  const topCharacters = useAppSelector(selectTopCharacters);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      fetchTopCharacters({ url: 'https://api.jikan.moe/v4/top/people' })
    );
  }, [dispatch]);
  console.log(topCharacters);
  return (
    <div>
      <ul>
        {topCharacters.list.map((ch, i) => {
          return <li key={i}>{ch.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default TopCharacters;
