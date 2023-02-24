import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimeType } from 'renderer/types/AnimeType';
import './cardAnime.scss';

type CardAnimeType = {
  anime: AnimeType;
};

const CardAnime = (props: CardAnimeType) => {
  const { anime } = props;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/anime/${anime.mal_id}`);
  };
  return (
    <div
      className="CardAnime"
      onClick={handleNavigate}
      onKeyDown={handleNavigate}
      tabIndex={-1}
      role="button"
    >
      <img src={anime.images?.jpg.image_url} alt="" />
      <h3>{anime.title}</h3>
    </div>
  );
};

export default CardAnime;
